// components/ContactForm.tsx
"use client";

import React from "react";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  rating: string; // keep as string for controlled input; convert on submit
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
        body: JSON.stringify({
          ...form,
          rating: Number(form.rating),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setResult({ ok: false, error: data?.error ?? "Submission failed" });
        return;
      }

      setResult({ ok: true });
      setForm({ name: "", email: "", rating: "5", message: "" });
    } catch (err) {
      setResult({ ok: false, error: "Network error" });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          required
          minLength={2}
          maxLength={80}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded border border-transparent bg-black/80 px-3 py-2 outline-none focus:ring-2 focus:ring-black"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          required
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded border border-transparent bg-black/80 px-3 py-2 outline-none focus:border-gray-300 focus:ring-2 focus:ring-black"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Rating</label>
        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          className="w-full rounded border border-transparent bg-black/80 px-3 py-2 outline-none focus:ring-2 focus:ring-black"
        >
          <option value="5">5 - Excellent</option>
          <option value="4">4 - Good</option>
          <option value="3">3 - Okay</option>
          <option value="2">2 - Poor</option>
          <option value="1">1 - Bad</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          required
          minLength={10}
          maxLength={2000}
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded border border-transparent bg-black/80 px-3 py-2 outline-none focus:ring-2 focus:ring-black"
          placeholder="Tell us about your experience..."
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition disabled:opacity-60"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>

      {result?.ok && (
        <p className="text-green-700 text-sm">Thanks! We got your review.</p>
      )}
      {result && !result.ok && (
        <p className="text-red-700 text-sm">{result.error}</p>
      )}
    </form>
  );
}
