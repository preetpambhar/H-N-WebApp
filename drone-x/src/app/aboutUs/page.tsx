"use client";

import { CometCard } from "@/components/ui/comet-card";
import { section } from "motion/react-client";
import React from "react";

const team = [
  {
    name: "Raymond Ross",
    role: "President",
    image: "/raymong.png",
    bio: "Expert in geriatric care and digital therapeutics with 20+ years of clinical experience.",
  },
  {
    name: "Jules Charette",
    role: "Senior Partner",
    image: "/jules.png",
    bio: "Data privacy evangelist and architect behind our on-device AI infrastructure.",
  },
  {
    name: "Megha Yadav",
    role: "Lead iOS Developer TechnicalProduct Coordinator",
    image: "/megha.png",
    bio: "Specialist with AI and edge computing for health applications.",
  },
  {
    name: "Preet Pambhar",
    role: "iOS Developer",
    image: "/preet.jpg",
    bio: "Advocate for inclusive design, accessibility, and seamless user experience.",
  },
  {
    name: "Jaimin Mesariya",
    role: "UX Designer",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    bio: "Specialist in conversational AI and edge computing for health applications.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="min-h-screen px-6 pt-32 pb-20 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="text-lg text-center text-neutral-300 mb-12 max-w-3xl mx-auto">
        H&N Research Inc is a digital health company building secure,
        voice-first mobile applications that help people manage chronic
        conditions with ease. Our iOS-based solutions integrate Apple Health
        data, real-world health metrics, and AI-powered assistants to deliver
        intelligent, personalized health insights through natural conversation.
        Focused on elderly care and patient empowerment, we combine
        privacy-first design, on-device intelligence, and seamless UX to create
        meaningful, human-centered health experiences.
      </p>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
        <p className="text-neutral-400 leading-relaxed">
          We specialize in developing conversational health interfaces using
          on-device intelligence. From remote monitoring to proactive nudges,
          our solutions bridge the gap between clinical care and everyday life.
          We partner with hospitals, caregivers, and patients to ensure every
          voice is heard — literally.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-8 text-center">Our Team</h2>
        {/* First Row - First 2 members */}
        <div className="grid grid-cols-2 gap-8 place-items-center mb-16 max-w-2xl mx-auto">
          {team.slice(0, 2).map((member, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-4 text-center shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-30 h-35 mx-auto rounded-xl object-cover mb-4 border-2 border-neutral-700"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-purple-400 mb-2">{member.role}</p>
              <p className="text-sm text-neutral-400">{member.bio}</p>
            </div>
          ))}
        </div>
        <div className="mb-8"></div>
        {/* Second Row - Remaining members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.slice(2).map((member, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-xl p-4 text-center shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-33 mx-auto rounded-xl object-cover mb-4 border-2 border-neutral-700"
              />
              <h3 className="text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-purple-400 mb-2">{member.role}</p>
              <p className="text-sm text-neutral-400">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
