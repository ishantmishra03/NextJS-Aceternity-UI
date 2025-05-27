"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const programmingSchoolContent = [
  {
    title: "Code Your Future with Us: A Personalized Path to Mastery",
    description:
      "Begin a coding journey tailored just for you. Our personalized instruction adapts to your learning style and goals, helping you grow from novice to professional with clarity and confidence. Your ambition, paired with our support, is the perfect formula for success.",
  },
  {
    title: "Hands-On, Project-Based Learning",
    description:
      "Build real-world projects from day one. Our immersive, practical approach ensures that every concept you learn is immediately applied, helping you gain valuable experience and a portfolio that stands out.",
  },
  {
    title: "Learn from Industry Experts",
    description:
      "Our instructors are seasoned developers who bring years of real-world experience into the virtual classroom. Learn best practices, modern tools, and insider tips that only professionals can provide.",
  },
  {
    title: "Live Feedback & Interactive Sessions",
    description:
      "Get real-time feedback on your code and engage in interactive sessions that mimic real-world development environments. This accelerates your understanding and boosts your confidence.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Stay ahead of the curve with a curriculum that evolves with the tech industry. We regularly update our content to include the latest frameworks, languages, and tools used in the job market.",
  },
  {
    title: "Endless Opportunities for Growth",
    description:
      "Whether you are exploring front-end, back-end, or full-stack development, our wide range of courses and resources ensures you always have something new to learn and build upon.",
  },
];

const WhyChooseUS = () => {
  return (
    <div>
      <StickyScroll content={programmingSchoolContent} />
    </div>
  );
};

export default WhyChooseUS;
