"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const droneTestimonials = [
  {
    feedback:
      "I finally feel in control of my health, and it’s as easy as talking to a friend.",
    name: "Marie",
    title: "Patient, 68",
  },
  {
    feedback:
      "H&N’s assistant helps my dad stay on track with his medications without me constantly checking in.",
    name: "John",
    title: "Family Caregiver",
  },
  {
    feedback:
      "The hypertension module explained everything so clearly. I now feel confident managing my blood pressure.",
    name: "Ethan Brooks",
    title: "Hypertension Patient",
  },
  {
    feedback:
      "Perfect for my clinic! My patients are more engaged and follow their treatment plans better.",
    name: "Dr. Sneha Patel",
    title: "Primary Care Physician",
  },
  {
    feedback:
      "The diabetes education content gave me a solid understanding of insulin and diet management. It's better than most paid courses!",
    name: "Logan Bennett",
    title: "Medical Student",
  },
  {
    feedback:
      "Thanks to the lifestyle coaching tips, I’ve improved my diet and my energy levels are much better.",
    name: "Sophia Green",
    title: "Wellness Enthusiast",
  },
  {
    feedback:
      "Managing my first post-surgery recovery was a breeze with your step-by-step guidance. I feel supported every day.",
    name: "Akash Verma",
    title: "Patient, 45",
  },
  {
    feedback:
      "I integrated your patient education tutorials into my nursing class—my students love the practical approach.",
    name: "Madison Wright",
    title: "Nursing Educator",
  },
  {
    feedback:
      "Very professional content. The safety lessons on medication interactions are something every patient should know.",
    name: "Brandon Scott",
    title: "Pharmacist",
  },
  {
    feedback:
      "The modules are crisp, informative, and well-paced. I often recommend them to my readers.",
    name: "Emma Parker",
    title: "Health Blogger",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[30rem] w-full dark:bg-black dark:bg-grid-white[0.2] relative flex flex-col item-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Here Our Harmony: Voices of Pilots
      </h2>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={droneTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
