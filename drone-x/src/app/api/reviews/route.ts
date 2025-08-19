// app/api/reviews/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";
import { db, FieldValue } from "@/lib/firebaseAdmin";
import { checkRateLimit } from "@/lib/rateLimiter";

export const runtime = "nodejs"; // ensure Node runtime (not edge) for Admin SDK

const ReviewSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email().max(120),
  rating: z.number().int().min(1).max(5),
  message: z.string().min(10).max(2000),
});

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "0.0.0.0";

    const limited = checkRateLimit(ip);
    if (!limited.ok) {
      return NextResponse.json(
        { error: "Too many requests. Please slow down." },
        {
          status: 429,
          headers: {
            "Retry-After": String(limited.retryAfter ?? 60),
          },
        }
      );
    }

    const ua = req.headers.get("user-agent") || "unknown";
    const body = await req.json();

    // Coerce rating to number if needed
    const parsed = ReviewSchema.safeParse({
      ...body,
      rating:
        typeof body.rating === "string" ? Number(body.rating) : body.rating,
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    await db.collection("reviews").add({
      ...data,
      createdAt: FieldValue.serverTimestamp(),
      userAgent: ua,
      ipHash: await hashIP(ip), // store a hash, not raw IP
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("POST /api/reviews error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Hash IP so you can dedupe/abuse-detect without storing PII in plaintext.
async function hashIP(ip: string) {
  const enc = new TextEncoder();
  const keyMaterial = enc.encode(ip);
  const digest = await crypto.subtle.digest("SHA-256", keyMaterial);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}
