// app/contact/page.tsx
import React from "react";
import ContactForm from "@/components/ContactForm";
import { Meteors } from "@/components/ui/meteors";

export const metadata = {
  title: "Contact Us",
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Decorative meteors */}
      <Meteors number={20} />

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl pt-35 pb-16">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-3 text-gray-300">
            We’d love to hear from you. Reach out to us anytime.
          </p>
          <div className="mt-8 rounded-2xl bg-white/5 p-6 backdrop-blur border border-white/10 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
