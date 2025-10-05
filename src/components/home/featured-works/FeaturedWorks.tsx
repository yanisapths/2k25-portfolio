import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import React, { useRef } from "react";
import Card from "./Card";
import { useScroll } from "motion/react";
export const FeaturedWorks = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  return (
    <div className="relative flex flex-col justify-center h-full items-center">
      <div ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <Card
              key={`p_${i}`}
              {...project}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Olive Platform",
    timeline: "Nov 2023 - Sep 2023",
    description:
      "A platform that helps physical therapy clinics and their customers by making the appointment process easier and more efficient. Customers can use the app to find clinics, book appointments, and see pricing.",
    src: "1.png",
    link: "/",
    stacks: ["next", "express", "mongo"],
  },
  {
    title: "Lampang Guidebook",
    timeline: "July 2025 - Ongoing",
    description:
      "Showcase Lampang through local eyes—connecting visitors with authentic places to explore, eat, drink, and stay.",
    src: "2.png",
    link: "/",
    stacks: ["next", "google-cloud"],
  },
  {
    title: "Dinner Game",
    timeline: "Sep 2025 - Ongoing",
    description:
      "The trivia selection to help you decide where to go for food nearby based on preferences.",

    src: "3.png",
    link: "/",
    stacks: ["next", "aws", "google-place", "lovable", "xmcp"],
  },
];
