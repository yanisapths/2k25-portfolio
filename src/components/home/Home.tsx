"use client";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { Footer } from "@/components/home/Footer";
import { BgElement } from "@/components/home/background/Background";
import { ScrollFadeIn } from "../ScrollFadeIn";
import dynamic from "next/dynamic";

const Chrome = dynamic(() => import("../effect/Chrome"), { ssr: false });

export default function Home() {
  const isMobile = useIsMobile();
  const showChrome = isMobile === false;

  return (
    <ScrollFadeIn aboveFold>
      <BgElement
        imgSrc="/images/home/element1.webp"
        className="absolute -top-[15%] -left-[15%] lg:-top-[10%] lg:-left-[10%] pointer-events-none"
      />
      <BgElement
        imgSrc="/images/home/element2.webp"
        className="absolute -bottom-[15%] -right-[40%] lg:bottom-0 lg:-right-[25%] pointer-events-none"
      />

      <div className="absolute inset-0 m-auto flex flex-col justify-center pointer-events-none">
        <div className="h-auto w-fit">
          {showChrome ? (
            <Chrome lines={["Yanisa", "Poongthaisong"]} />
          ) : (
            <div className="px-6">
              <h1 className="font-climate-crisis text-5xl leading-tight uppercase">
                Yanisa
              </h1>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </ScrollFadeIn>
  );
}
