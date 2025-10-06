"use client";
import { useBreakpoints } from "@/app-hooks/use-breakpoints";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { MobileCard } from "./MobileCard";

export interface CardProps {
  title: string;
  description: string;
  src: string;
  link: string;
  timeline: string;
  stacks?: any;
  color?: string;
  i: number;
  progress?: any;
  range?: any;
  targetScale?: any;
}

const Card = ({
  title,
  timeline,
  stacks,
  description,
  src,
  link,
  color,
  i,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { lg } = useBreakpoints();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky h-[110vh] flex flex-col justify-center top-0 items-center"
    >
      {i == 0 && (
        <div className="absolute top-28 z-50 flex justify-between mx-auto w-full">
          <div className="text-white/75 flex justify-between items-center m-auto w-full">
            <div>Featured Works</div>
            <div>View all projects</div>
          </div>
        </div>
      )}
      {lg ? (
        <motion.div
          className="relative flex flex-col h-[600px] w-[1200px] rounded-2xl py-8 px-20 origin-top backdrop-blur-md"
          style={{
            backgroundColor: color ? color : "rgba(0, 0, 0, 0.4)",
            boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
            top: `calc(-5vh + ${i * 25}px)`,
            scale,
          }}
        >
          <div className="flex justify-between my-auto">
            <div className="w-1/2">
              <h2 className="font-black text-3xl">{title}</h2>
              <p className="text-white/60 mt-4 text-lg">{timeline}</p>
              <p className="text-white/60 my-20 text-lg max-w-96">
                {description}
              </p>
              <div className="flex gap-2">
                {stacks.map((s: any) => (
                  <StackIcon src={s} key={s} />
                ))}
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex flex-col h-full justify-center my-auto">
                <motion.div
                  style={{
                    scale: imageScale,
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    boxShadow:
                      "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
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
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="relative flex flex-col h-[510px] w-[340px] rounded-2xl p-6 origin-top backdrop-blur-md"
          style={{
            backgroundColor: color ? color : "rgba(0, 0, 0, 0.4)",
            boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
            backdropFilter: "blur(20px)",
            top: `calc(-5vh + ${i * 25}px)`,
            scale,
          }}
        >
          <MobileCard
            title={title}
            description={description}
            timeline={timeline}
            stacks={stacks}
            src={src}
            link={link}
            i={i}
            imageScale={imageScale}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Card;

export function StackIcon({ src }: { src: string }) {
  return (
    <div
      className="flex flex-col justify-center items-center rounded-full w-10 h-10 lg:w-16 lg:h-16"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Image
        src={`/images/logo/${src}.webp`}
        alt={src}
        width={30}
        height={30}
        className="object-cover"
      />
    </div>
  );
}
