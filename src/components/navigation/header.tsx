"use client";
import { useCurrentWeatherData } from "@/app-hooks/weather-data";
import Link from "next/link";
import React from "react";
import { Weather } from "../weather";
import { motion } from "motion/react";
import { sitemap } from "./sitemap";

export const Header = () => {
  // const { weather } = useCurrentWeatherData();
  // const currentTime = weather.data?.current?.time;
  // const formatTime = currentTime
  //   ? currentTime.toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //       hour12: true,
  //     })
  //   : "--:--";
  // const [hm, ampm] = formatTime.split(" ");
  // const [hours, minutes] = hm.split(":");

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="flex m-auto max-w-screen-2xl items-center h-24">
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="uppercase font-climate-crisis text-md">
              Lampang
            </span>
            {/* <Weather weatherCode={weather.data?.current?.weatherCode ?? 0} /> */}
          </div>
        </Link>
        <div className="flex items-center gap-20 ml-auto">
          <a href="mailto:yanisa21@live.com" className="uppercase">
            yanisa21@live.com
          </a>
          {sitemap.map((item) => (
            <Link href={item.href} key={item.label} className="text-md">
              {item.label}
            </Link>
          ))}
        </div>
        {/* <div
          className="flex items-center gap-2 ml-auto font-silkscreen font-semibold text-black text-xl"
          style={{ WebkitTextStroke: "1px white" }}
        >
          <span>{hours}</span>
          <motion.span
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
          >
            :
          </motion.span>
          <span>{minutes}</span>
          <span>{ampm}</span>
        </div> */}
      </div>
    </div>
  );
};
