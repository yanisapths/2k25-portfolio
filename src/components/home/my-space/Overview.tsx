"use client";
import React from "react";
import Saturn from "./Saturn";

const skillLists = [
  "3D DEVELOPMENT",
  "WEB DESIGN",
  "MOTION",
  "BACKEND",
  "FRONTEND",
  "CREATIVE CODING",
];
export const Overview = () => {
  return (
    <div className="relative flex flex-col m-auto w-full h-screen overflow-hidden">
      <div className="absolute inset-0 m-auto flex flex-col justify-center">
        <div className="relative flex justify-between h-full items-center">
          <p className="text-9xl font-black">MY SPACE</p>
          <div className="absolute inset-0 z-10 m-auto">
            <div className="flex flex-col m-auto justify-center items-center">
              <div className="flex flex-col gap-8 justify-center items-center text-center">
                {skillLists.slice(0, 3).map((skill) => (
                  <p key={skill} className="text-3xl font-black text-white/60">
                    {skill}
                  </p>
                ))}
              </div>
              <div className="w-[50vw] h-[50vh]">
                <Saturn />
              </div>
              <div className="flex flex-col gap-8 justify-center items-center text-center">
                {skillLists.slice(3, 6).map((skill) => (
                  <p key={skill} className="text-3xl font-black text-white/60">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <p className="text-9xl font-black">MY SPACE</p>
        </div>
      </div>
    </div>
  );
};
