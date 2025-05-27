"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const programmingSchoolTestimonials = [
  {
    quote:
      'Joining the programming school transformed my understanding of software development and helped me truly find my path in tech. The instructors are world-class!',
    name: "Alex Johnson",
    title: "Full-Stack Development Student",
  },
  {
    quote:
      "The community and support at this school are unmatched. I've grown not just as a developer, but also as a problem-solver, thanks to their hands-on approach.",
    name: "Samantha Lee",
    title: "Frontend Development Student",
  },
  {
    quote:
      "This school gave me the tools and confidence to take my coding skills to the next level. I'm endlessly grateful for the personalized mentorship.",
    name: "Michael Chen",
    title: "Backend Development Student",
  },
  {
    quote:
      "As someone interested in AI, finding the right guidance was tough—until I joined this school. My mentor truly understands my goals and pushes me forward.",
    name: "Emily Taylor",
    title: "AI & Machine Learning Student",
  },
  {
    quote:
      "The software engineering courses opened my eyes to the real-world practices used in the tech industry. Highly recommend for any aspiring engineer!",
    name: "Chris Morales",
    title: "Software Engineering Student",
  },
];

const TestimonialCards = () => {
  return (
    <div
      className="h-[40rem] w-full relative flex flex-col items-center justify-center overflow-hidden
        bg-white dark:bg-black
        before:absolute before:inset-0 before:pointer-events-none
        before:bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]
        dark:before:bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]
        before:bg-[length:40px_40px]"
    >
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear our Project: Code of success
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={programmingSchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
