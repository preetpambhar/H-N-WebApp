"use client";

import React from "react";
import { Carousel, Card } from "../components/ui/apple-card-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <section className="w-full h-full bg-white">
      <div className="mx-auto max-w-7xl py-6 md:py-8">
        <h2 className="px-2 md:px-0 text-2xl md:text-5xl font-bold text-slate-900">
          How it works in few steps
        </h2>

        <div className="mt-0">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Step 1",
    title: "Install our iOS app and connect Apple Health.",
    src: "/appStoreGet.png",
    content: <DummyContent />,
  },
  {
    category: "Step 2",
    title:
      "Talk to your voice assistant — just like you would with a caregiver.",
    src: "/home.png",
    content: <DummyContent />,
  },
  {
    category: "Step 3",
    title: "Get personalized insights and manage your health with ease.",
    src: "/myHealth.png",
    content: <DummyContent />,
  },

  {
    category: "Step 4",
    title: "Check your personalized meals with benefits.",
    src: "/meals.png",
    content: <DummyContent />,
  },
];

export default AppleCardsCarouselDemo;
