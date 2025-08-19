"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const upcomingWebinars = [
    {
      title: "🧠 Smarter by Design",
      description:
        "Our AI lives on-device, learns from your habits, and speaks your language — literally. no delay, no nonsense.",
      slug: "getting-started-with-drone-mapping",
      isFeatured: true,
    },
    {
      title: "🔒 Privacy You Don’t Have to Beg For",
      description:
        "We don’t collect what we don’t need. All processing happens locally, ensuring your health data stays yours.",
      slug: "regulations-and-compliance-north-america",
      isFeatured: false,
    },
    {
      title: "🎙 Built for Conversation",
      description:
        "No buttons, no menus. Just speak. Our voice-first approach makes it effortless for seniors and less tech-savvy users to engage.",
      slug: "choosing-the-right-drone",
      isFeatured: true,
    },
    {
      title: "📊 Connected to What Matters",
      description:
        "Apple Health is your digital health brain — and we tap into it seamlessly to make sense of your body’s data in real time.",
      slug: "fpv-racing-demo-qna",
      isFeatured: false,
    },
    {
      title: "👩‍⚕️ Care Without the Clinic",
      description:
        "Stay supported between doctor visits. Our assistant is available every day, every hour, always listening to you — not your data.",
      slug: "drone-photography-editing",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gradient-to-br from-rose-100 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-rose-600 font-semibold tracking-wide uppercase">
            Why We're Different
          </h2>
          <p className="mt-2 text-3xl leading-tight font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Our Strengths
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={upcomingWebinars.map((webinars) => ({
              title: webinars.title,
              description: webinars.description,
              link: "/",
            }))}
          />
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
