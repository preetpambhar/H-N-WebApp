"use client";
import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-neutral-200 bg-white text-slate-600">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-rose-200/30 via-rose-100/10 to-transparent blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand + blurb */}
          <div>
            <div className="flex items-center gap-3">
              {/* Logo mark */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold">
                <img src="/logo.png" alt="H&N Logo" />
              </div>
              <span className="text-lg font-semibold text-slate-900">
                H&N Research
              </span>
            </div>

            {/* Contact quick pills */}
            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:info@h-nresearch.com"
                className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
              >
                <Mail className="h-4 w-4" /> info@h-nresearch.com
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                href="tel:+1-000-000-0000"
                className="group flex items-center gap-2 text-slate-600 hover:text-slate-900 transition"
              >
                <Phone className="h-4 w-4" /> +1 (000) 000-0000
                <ArrowRight className="ml-1 h-3 w-3 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
              </a>
              <a
                href="https://maps.google.com/?q=2001%20Boulevard%20Robert-Bourassa%2C%20Suite%201700%20Montreal%2C%20Quebec%20H3A%202A6"
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-2 text-slate-600 hover:text-slate-900 transition"
              >
                <MapPin className="mt-0.5 h-4 w-4" />
                <span>
                  2001 Boulevard Robert-Bourassa, Suite 1700
                  <br />
                  Montreal, Quebec H3A 2A6
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/h-n-research-inc/",
                },
                { Icon: Facebook, href: "https://facebook.com/" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white text-slate-600 hover:bg-neutral-50 hover:text-slate-900 transition shadow-sm"
                  aria-label={`Social link ${i + 1}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2">
            <FooterCol
              title="Company"
              links={[
                { label: "About us", href: "/aboutUs" },
                {
                  label: "Careers",
                  href: "https://www.linkedin.com/company/h-n-research-inc/jobs/",
                },
                { label: "Contact", href: "/contact" },
              ]}
            />
            <FooterCol
              title="Products"
              links={[
                { label: "Platform", href: "/platform" },
                { label: "Solutions", href: "/solutions" },
              ]}
            />
            <FooterCol
              title="Resources"
              links={[
                { label: "Blog", href: "/blogs" },
                { label: "Status", href: "/status" },
              ]}
            />

            {/* <div className="col-span-2 sm:col-span-3 lg:col-span-1 md:col-span-2">
              <Newsletter />
            </div> */}
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="order-2 md:order-1">
              © {year} H&N Research Inc. All rights reserved.
            </p>
            <div className="order-1 md:order-2 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                className="hover:text-slate-900"
                href="https://privacy-policy-2ektbywal-preets-projects-59f3b870.vercel.app/"
              >
                Privacy Policy
              </a>
              <a className="hover:text-slate-900" href="/terms">
                Terms of Use
              </a>
              <a className="hover:text-slate-900" href="/security">
                Security
              </a>
              {/* <LocaleSelect /> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-slate-600 hover:text-slate-900 transition"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Newsletter() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <h3 className="text-sm font-semibold text-slate-900">
        Subscribe to our newsletter
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Get product updates, research notes, and event invites.
      </p>
      <form
        className="mt-4 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: wire to your API/ESP
        }}
      >
        <label htmlFor="newsletter-email" className="sr-only">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-xl border border-neutral-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-rose-300 focus:border-rose-300"
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-rose-700"
        >
          Subscribe
        </button>
      </form>
      <p className="mt-2 text-xs text-slate-500">
        By subscribing, you agree to our{" "}
        <a className="underline hover:text-slate-700" href="/privacy">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

function LocaleSelect() {
  return (
    <div className="relative">
      <label htmlFor="locale" className="sr-only">
        Language
      </label>
      <select
        id="locale"
        className="rounded-lg border border-neutral-300 bg-white px-3 py-2 pr-8 text-xs text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-300"
        defaultValue="en"
        onChange={() => {}}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}
