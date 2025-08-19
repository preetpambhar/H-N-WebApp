"use client";

import { CometCard } from "@/components/ui/comet-card";
import { section } from "motion/react-client";
import React from "react";

const team = [
  {
    name: "Raymond Ross",
    role: "President",
    image: "/raymong.png",
    bio: "30 Years of Entrepreneurship · Volunteering at MUHC Glen Hospital, Montreal · 20+ Years Innovation in Health & Nutrition.",
  },
  {
    name: "Jules Charette",
    role: "Senior Partner",
    image: "/jules.png",
    bio: "Senior Partner at Norton Rose Fulbright Canada.",
  },
  {
    name: "Megha Yadav",
    role: "Lead iOS Developer TechnicalProduct Coordinator",
    image: "/megha.png",
    bio: "Specialist with iOS Apps and team managment for mobile applications.",
  },
  {
    name: "Preet Pambhar",
    role: "iOS Developer",
    image: "/preet.jpg",
    bio: "An ios developer for building and ship mobile apps & give user experience.",
  },
  {
    name: "Jaimin Mesariya",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    bio: "Specialist in conversational UI and edge designing for health applications.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto text-slate-900">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-center text-slate-800 mb-12 max-w-3xl mx-auto">
          H&N Research Inc is a digital health company building secure,
          voice-first mobile applications that help people manage chronic
          conditions with ease. Our iOS-based solutions integrate Apple Health
          data, real-world health metrics, and AI-powered assistants to deliver
          intelligent, personalized health insights through natural
          conversation. Focused on elderly care and patient empowerment, we
          combine privacy-first design, on-device intelligence, and seamless UX
          to create meaningful, human-centered health experiences.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center text-slate-900">
            Our Team
          </h2>

          {/* First Row — 2 members */}
          <div className="grid grid-cols-2 gap-8 items-stretch justify-items-center mb-16 max-w-2xl mx-auto">
            {team.slice(0, 2).map((member, index) => (
              <div
                key={index}
                className="w-full border border-neutral-200 bg-white rounded-2xl p-6 text-center shadow-sm
                 transition duration-300 transform-gpu hover:-translate-y-1 hover:shadow-xl hover:border-[#D40000]/70
                 min-h-[340px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-40 mx-auto rounded-xl object-cover mb-4 ring-1 ring-neutral-200 shadow"
                />
                <h3 className="text-lg font-medium text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm mb-2 font-medium text-[#D40000]">
                  {member.role}
                </p>
                <p className="text-sm text-slate-700">{member.bio}</p>
              </div>
            ))}
          </div>

          {/* Second Row — remaining members (now same style/size) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.slice(2).map((member, index) => (
              <div
                key={index}
                className="group relative w-full bg-white border border-neutral-200 rounded-2xl p-6 text-center shadow-sm
                   transition duration-300 transform-gpu hover:-translate-y-1 hover:shadow-xl hover:border-[#D40000]/70
                   min-h-[340px]"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-40 mx-auto rounded-xl object-cover mb-4 ring-1 ring-neutral-200 shadow"
                />
                <h3 className="text-lg font-medium text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm mb-2 font-medium text-[#D40000]">
                  {member.role}
                </p>
                <p className="text-sm text-slate-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
