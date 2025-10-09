"use client";
import React from "react";
import { CardProps, StackIcon } from "./Card";
import Image from "next/image";
import { motion, MotionValue } from "motion/react";

interface MobileCardProps extends CardProps {
  imageScale: MotionValue<number>;
  handleClick: VoidFunction;
}

export const MobileCard = ({
  title,
  description,
  src,
  stacks,
  link,
  timeline,
  imageScale,
  handleClick,
}: MobileCardProps) => {
  return (
    <div
      className={`${link != "cursor-pointer" ? "" : ""} flex flex-col gap-4`}
      onClick={handleClick}
    >
      <h2 className="text-2xl font-black">{title}</h2>
      <p className="text-white/60 text-xs -mt-2">{timeline}</p>
      <div className="relative">
        <p className="text-gray-200 leading-relaxed max-h-[4.5em] overflow-hidden">
          {description}
        </p>
        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="flex flex-col h-full justify-center m-auto">
        <motion.div
          style={{
            scale: imageScale,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
          }}
          className="relative rounded-xl"
        >
          <Image
            width={1000}
            height={1000}
            className="object-cover opacity-80 rounded-xl"
            src={`/images/projects/${src}`}
            alt="image"
          />
        </motion.div>
      </div>
      <div className="flex h-full gap-2 overflow-x-scroll overflow-y-hidden whitespace-nowrap">
        {stacks.map((s: any) => (
          <div key={s} className="flex-shrink-0">
            <StackIcon src={s} key={s} />
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-6">
        <div className="cursor-pointer group relative min-w-[282px] w-full bg-slate-500 inline-flex overflow-hidden rounded-xl p-[0.5px]">
          <span className="absolute z-0 inset-[-1000%] animate-[spin_6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff5d_0%,#0000005b_25%,#9ca3af_50%,#d1d5db82_75%,#ffffff56_100%)]" />

          <div className="group-hover:border-none group-hover:bg-black/70 relative z-10 m-auto flex justify-between items-center w-full p-2 rounded-lg bg-black/80 backdrop-blur-2xl text-white font-medium">
            <p>View project</p>
            <div>
              <ExternalLinkButton />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
