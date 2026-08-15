"use client";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { Noise } from "@/components/effect/Noise";
import { Background } from "@/components/home/background/Background";
import { GithubIcon } from "@/components/icons/github";
import { Instagram } from "@/components/icons/instagram";
import { Linkedin } from "@/components/icons/linkedin";
import { CopyrightFooter } from "@/components/navigation/footer";
import { Header } from "@/components/navigation/header";
import { Mail } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const StarField = dynamic(
  () => import("@/components/home/background/StarField"),
  { ssr: false }
);

const AboutPage = () => {
  const isMobile = useIsMobile();
  const enableHeavyFx = isMobile === false;

  return (
    <div className="scroll-smooth">
      <div className="lg:flex lg:flex-col lg:h-auto lg:w-screen lg:items-center lg:justify-center">
        <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
          {enableHeavyFx && <StarField />}
          <Background />
          {enableHeavyFx && <Noise />}
        </div>
        <Header />
        <div className="relative z-10 flex flex-col gap-8 md:text-2xl max-w-screen-md justify-center h-full lg:h-screen m-auto p-8 mt-16 lg:mt-0 text-xl">
          <div>
            Hi, I'm Yanisa ☺︎ <br />
            I'm a full-stack engineer based in Bangkok and Lampang, Thailand.
            Currently, I'm exploring 3D website development and drawing
            inspiration from many creative artists who craft fascinating
            software and digital art pieces.
          </div>
          <div>
            In my free time, I love working on creative side
            projects—experimenting with motion, animation, and 3D effects to
            make websites visually engaging and eventually turn this passion
            into my professional career.
          </div>
          <div>
            Off-screen, you'll often find me running, playing tennis, or
            training Muay Thai.
          </div>
          <div>
            If you have a project in mind, my inbox is always open. <br />
            Let's build together!
          </div>
          <div className="flex justify-start items-center gap-4">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/yanisa-poongthaisong"
            >
              <div className="cursor-pointer hover:bg-white/10 border rounded-full border-white/20 p-2">
                <Linkedin className="text-white" size={24} color="white" />
              </div>
            </Link>
            <Link target="_blank" href="https://github.com/yanisapths">
              <div className="cursor-pointer hover:bg-white/10 border rounded-full border-white/20 p-2">
                <GithubIcon className="text-white" size={24} />
              </div>
            </Link>
            <Link target="_blank" href="https://www.instagram.com/yani.mmmx/">
              <div className="cursor-pointer hover:bg-white/10 border rounded-full border-white/20 p-2">
                <Instagram className="text-white" size={24} color="white" />
              </div>
            </Link>
            <Link href="mailto:yanisa21@live.com">
              <div className="cursor-pointer hover:bg-white/10 border rounded-full border-white/20 p-2">
                <Mail className="text-white" size={24} />
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="relative">
        <CopyrightFooter />
      </div>
    </div>
  );
};

export default AboutPage;
