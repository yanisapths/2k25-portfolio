"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { ScrollFadeIn } from "@/components/ScrollFadeIn";

const Saturn = dynamic(() => import("./Saturn"), { ssr: false });

const skillLists = [
  "3D DEVELOPMENT",
  "WEB DESIGN",
  "MOTION",
  "BACKEND",
  "FRONTEND",
  "CREATIVE CODING",
];
export const Overview = () => {
  const isMobile = useIsMobile();
  const showSaturn = isMobile === false;

  return (
    <ScrollFadeIn>
      <div className="absolute inset-0 m-auto flex flex-col justify-center">
        <div className="relative flex justify-between h-[80%] items-center">
          <p className="hidden md:block md:text-8xl text-9xl font-black">
            MY SPACE
          </p>
          <div className="absolute inset-0 z-10 m-auto pointer-events-none">
            <div className="flex flex-col m-auto justify-center items-center">
              <div className="flex flex-col gap-8 justify-center items-center text-center">
                {skillLists.slice(0, 3).map((skill) => (
                  <p key={skill} className="text-3xl font-black text-white/60">
                    {skill}
                  </p>
                ))}
              </div>
              {showSaturn ? (
                <div className="w-[100%] md:w-[55vw] h-[40vh] md:h-[50vh]">
                  <Saturn />
                </div>
              ) : (
                <div className="h-16" />
              )}
              <div className="flex flex-col gap-8 justify-center items-center text-center">
                {skillLists.slice(3, 6).map((skill) => (
                  <p key={skill} className="text-3xl font-black text-white/60">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="hidden md:block md:text-8xl text-9xl font-black">
            MY SPACE
          </p>
        </div>
      </div>
    </ScrollFadeIn>
  );
};
