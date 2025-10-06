"use client";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";
import { motion } from "framer-motion";
import React from "react";
import { Card } from "./Card";

export const Material = () => {
  return (
    <div className="relative flex flex-col m-auto w-full min-h-screen h-auto lg:h-screen overflow-hidden">
      <div className="relative flex flex-col justify-center h-full items-center">
        <p className="text-6xl md:text-8xl lg:text-9xl font-black uppercase mb-16">
          CRAFT
        </p>

        <div className="grid grid-cols-6 gap-6 w-full max-w-7xl px-8">
          {materials.slice(0, 3).map((material, i) => (
            <motion.div
              key={`mat_top_${i}`}
              className="col-span-6 sm:col-span-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <Card {...material} />
            </motion.div>
          ))}

          {materials.slice(3, 5).map((material, i) => (
            <motion.div
              key={`mat_bottom_${i}`}
              className={
                i === 0
                  ? "col-span-6 sm:col-span-4"
                  : "col-span-6 sm:col-span-2"
              }
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              viewport={{ once: false }}
            >
              <Card {...material} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const materials = [
  {
    title: "Hologram Business Card",
    src: "/video/materials/whale.mp4",
    link: "#",
  },
  {
    title: "3D Card with Custom Image",
    src: "/video/materials/card.mp4",
    link: "#",
  },
  {
    title: "GSAP Scroll with 3D Model",
    src: "/video/materials/whale.mp4",
    link: "#",
  },
  {
    title: "Infinite Zoom Space",
    src: "/video/materials/zoom-space.mp4",
    link: "#",
  },
  {
    title: "Clear Texture with Text",
    src: "/video/materials/clear.mp4",
    link: "#",
  },
];
