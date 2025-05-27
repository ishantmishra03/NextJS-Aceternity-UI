"use client"
import React from "react";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
  {
    title: "Understanding Programming Fundamentals",
    description:
      "Dive deep into the core concepts of programming and enhance your coding skills.",
    slug: "understanding-programming-fundamentals",
    isFeatured: true,
  },
  {
    title: "The Art of Clean Code",
    description:
      "Learn best practices and techniques for writing clean, maintainable code.",
    slug: "the-art-of-clean-code",
    isFeatured: true,
  },
  {
    title: "Mastering Your Development Tools",
    description:
      "Advanced tips and tricks to master your IDE, version control, and debugging tools.",
    slug: "mastering-your-development-tools",
    isFeatured: true,
  },
  {
    title: "Introduction to Software Architecture",
    description:
      "Get started with designing scalable and maintainable software systems.",
    slug: "introduction-to-software-architecture",
    isFeatured: true,
  },
  {
    title: "Effective Debugging Techniques",
    description:
      "Enhance your debugging skills with expert strategies to quickly find and fix bugs.",
    slug: "effective-debugging-techniques",
    isFeatured: true,
  },
  {
    title: "Digital Marketing for Developers",
    description:
      "Learn how to promote your projects and personal brand effectively in the tech world.",
    slug: "digital-marketing-for-developers",
    isFeatured: true,
  },
];

const UpComingWebinars = () => {
  return (
    <div>
      <div className="p-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED WEBINARS
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Enhance Your Coding Journey
            </p>
          </div>

          <div className="mt-10">
            <HoverEffect
              items={featuredWebinars.map((webinar) => ({
                title: webinar.title,
                description: webinar.description,
                link: "/",
              }))}
            />
          </div>

          <div className="mt-10 text-center">
            <Link
              href={"/"}
              className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
              View All webinars
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpComingWebinars;
