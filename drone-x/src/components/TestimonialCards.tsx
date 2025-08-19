"use client";
import { cn } from "@/lib/utils";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const droneTestimonials = [
  {
    feedback:
      "With H&N, I’ll keep my blood pressure in range—it will remind me to check readings, flag patterns, and prep questions for my next cardiology visit.",
    name: "Marie",
    title: "Hypertension Patient, 68",
  },
  {
    feedback:
      "The app will help my dad stick to his meds and diet for diabetes—weekly trends and gentle nudges mean fewer surprises at checkups.",
    name: "John",
    title: "Family Caregiver",
  },
  {
    feedback:
      "For asthma, H&N will track triggers, adjust my action plan with my clinician’s guidance, and warn me on high-risk days.",
    name: "Ethan Brooks",
    title: "Asthma Patient",
  },
  {
    feedback:
      "Post-surgery, it’ll guide patients through milestones, surface red-flag symptoms early, and share recovery progress with our team.",
    name: "Dr. Sneha Patel",
    title: "Primary Care Physician",
  },
  {
    feedback:
      "Managing Type 1 diabetes, I’ll use H&N to log insulin, meals, and activity—over time it will highlight patterns I can review with my endocrinologist.",
    name: "Logan Bennett",
    title: "Medical Student & T1D",
  },
  {
    feedback:
      "For heart failure, daily weights and symptom check-ins will alert me sooner—so I can adjust with my nurse before it becomes an ER visit.",
    name: "Sophia Green",
    title: "Heart Failure Patient",
  },
  {
    feedback:
      "Living with depression and anxiety, H&N will help me track mood, sleep, and routines—and it will summarize trends for therapy sessions.",
    name: "Akash Verma",
    title: "Behavioral Health Member",
  },
  {
    feedback:
      "In my nursing course, students will use H&N scenarios to practice COPD care planning—monitoring exacerbation risk and self-management skills.",
    name: "Madison Wright",
    title: "Nursing Educator",
  },
  {
    feedback:
      "For arthritis, it’ll capture pain, movement, and flare triggers—over time we’ll tailor exercise and meds based on real-world patterns.",
    name: "Brandon Scott",
    title: "Physiotherapy Clinician",
  },
  {
    feedback:
      "Expecting parents will use it to plan prenatal questions, track symptoms, and prepare for postpartum support—reducing last-minute stress.",
    name: "Emma Parker",
    title: "Perinatal Health Blogger",
  },
];
// ...unchanged imports

function TestimonialCards() {
  return (
    <div className="h-[30rem] w-full bg-white relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10 text-slate-900">
        How H&N Helps—Across Conditions
      </h2>

      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)]"
        )}
      />

      <div className="relative flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={droneTestimonials}
            direction="right"
            speed="slow"
            edgeFade={false}
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
