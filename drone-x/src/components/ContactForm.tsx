// components/ContactForm.tsx
"use client";

import React, { useState } from "react";

type FormState = {
  name: string;
  email: string;
  rating: string; // keep as string; convert on submit
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    rating: "5",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { ok: boolean; error?: string }>(
    null
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rating: Number(form.rating) }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setResult({ ok: false, error: data?.error ?? "Submission failed" });
        return;
      }

      setResult({ ok: true });
      setForm({ name: "", email: "", rating: "5", message: "" });
    } catch {
      setResult({ ok: false, error: "Network error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          required
          minLength={2}
          maxLength={80}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className="w-full rounded-xl border border-neutral-300 bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-sm px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#D40000] focus:ring-2 focus:ring-[#D40000]/30"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Email
        </label>
        <input
          id="email"
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-xl border border-neutral-300 bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-sm px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#D40000] focus:ring-2 focus:ring-[#D40000]/30"
        />
      </div>

      {/* Rating */}
      <div>
        <label
          htmlFor="rating"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Rating
        </label>
        <select
          id="rating"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          className="w-full rounded-xl border border-neutral-300 bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-sm px-3 py-2 text-slate-900 outline-none focus:border-[#D40000] focus:ring-2 focus:ring-[#D40000]/30"
        >
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Okay</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Bad</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-slate-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your experience..."
          className="w-full rounded-xl border border-neutral-300 bg-white/80 supports-[backdrop-filter]:bg-white/70 backdrop-blur-sm px-3 py-2 text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#D40000] focus:ring-2 focus:ring-[#D40000]/30"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2.5 rounded-xl font-semibold shadow-sm bg-[#D40000] text-white transition hover:bg-[#b30000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D40000]/40 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {/* Result */}
      {result?.ok && (
        <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-3 py-2">
          Thanks! We got your review.
        </p>
      )}
      {result && !result.ok && (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {result.error}
        </p>
      )}
    </form>
  );
}
