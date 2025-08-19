// app/contact/page.tsx
import React from "react";
import ContactForm from "@/components/ContactForm";
import { Meteors } from "@/components/ui/meteors";

export const metadata = { title: "Contact Us" };

export default function Page() {
  return (
    <div className="relative min-h-screen w-full bg-gradient-to-b from-rose-50 via-white to-rose-50 text-slate-800">
      {/* Meteors: black, subtle */}
      <Meteors
        number={12}
        className="bg-black/40 shadow-[0_0_0_1px_#00000010] before:from-black/60 before:to-transparent"
      />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl pt-28 pb-16 relative">
          <h1 className="text-4xl font-bold text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-600">
            We’d love to hear from you. Reach out to us anytime.
          </p>

          {/* Glassmorphic form wrapper */}
          <div className="mt-8 relative rounded-2xl border border-white/60 bg-white/50 supports-[backdrop-filter]:bg-white/40 backdrop-blur-xl shadow-lg ring-1 ring-black/5">
            {/* soft vertical sheen */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/60 via-transparent to-white/30" />
            {/* tasteful red accent glow (very light) */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl [mask-image:radial-gradient(1000px_300px_at_50%_-10%,white,transparent)] bg-gradient-to-r from-[#D40000]/10 via-transparent to-transparent" />
            <div className="relative p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <p className="mt-3 text-xs text-slate-500">
            We usually reply within 1–2 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
