"use client";

import React, {  useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

// ----------------------
// Types
// ----------------------

interface StickyScrollContentItem {
  title: string;
  description: string;
  content?: React.ReactNode;
}

interface StickyScrollProps {
  content: StickyScrollContentItem[];
  contentClassName?: string;
}

// ----------------------
// Component
// ----------------------

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end start"],
  });

  const linearGradients = useMemo(
    () => [
      "linear-gradient(to bottom right, #06b6d4, #10b981)",
      "linear-gradient(to bottom right, #ec4899, #6366f1)",
      "linear-gradient(to bottom right, #f97316, #eab308)",
    ],
    []
  );

  const backgroundColors = useMemo(
    () => ["#0f172a", "#000000", "#171717"],
    []
  );

  const backgroundGradient = linearGradients[activeCard % linearGradients.length];
  const backgroundColor = backgroundColors[activeCard % backgroundColors.length];

  // Update active card on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const closest = breakpoints.reduce((closestIdx, point, idx) => {
      return Math.abs(latest - point) < Math.abs(latest - breakpoints[closestIdx])
        ? idx
        : closestIdx;
    }, 0);
    setActiveCard(closest);
  });

  return (
    <motion.div
      ref={scrollContainerRef}
      animate={{ backgroundColor }}
      className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto hide-scrollbar rounded-md p-10"
    >
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={`${item.title}-${index}`} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="text-2xl font-bold text-slate-100 transition-opacity"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                className="mt-10 max-w-sm text-slate-300 transition-opacity"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white lg:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
