"use client";
import { useCurrentWeatherData } from "@/app-hooks/weather-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Weather } from "../weather";
import { motion, useAnimation } from "motion/react";
import { sitemap } from "./sitemap";
import { useScrollDirection } from "@/app-hooks/use-scroll-direction";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const controls = useAnimation();
  const isVisible = useScrollDirection(50);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [isVisible, controls]);

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
    <motion.header
      animate={controls}
      className="fixed top-0 left-0 right-0 pointer-events-auto z-[99]"
    >
      <div
        className={`${
          menuOpen ? "bg-black md:bg-transparent" : "bg-transparent"
        } px-6 md:px-0 flex justify-between m-auto max-w-screen-2xl items-center h-24`}
      >
        <Link href="/">
          <div className="flex items-center gap-2">
            <span className="uppercase font-climate-crisis text-md">
              Lampang
            </span>
            {/* <Weather weatherCode={weather.data?.current?.weatherCode ?? 0} /> */}
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-20 ml-auto">
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
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-white p-2 rounded focus:outline-none focus:ring-none cursor-pointer"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden h-screen bg-black"
        >
          <div className="flex flex-col my-auto h-full -mt-20 justify-center items-center py-4 gap-20 text-white">
            {sitemap.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:yanisa21@live.com"
              onClick={() => setMenuOpen(false)}
              className="uppercase hover:text-gray-300"
            >
              yanisa21@live.com
            </a>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};
