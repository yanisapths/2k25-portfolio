"use client";
import { useCurrentWeatherData } from "@/app-hooks/weather-data";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Weather } from "../weather";
import { motion, useAnimation } from "motion/react";
import { sitemap } from "./sitemap";
import { useScrollDirection } from "@/app-hooks/use-scroll-direction";
import { Menu, X } from "lucide-react";
import { useBreakpoints } from "@/app-hooks/use-breakpoints";
import { useRouter } from "next/navigation";
import { Linkedin } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
import { Instagram } from "../icons/instagram";

export const Header = () => {
  const controls = useAnimation();
  const isVisible = useScrollDirection(50);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lg } = useBreakpoints();
  const router = useRouter();
  useEffect(() => {
    controls.start({
      y: isVisible ? 0 : -100,
      opacity: isVisible ? 1 : 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [isVisible, controls]);

  const { weather } = useCurrentWeatherData();
  const currentTime = weather.data?.current?.time;
  const formatTime = currentTime
    ? currentTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      })
    : "--:--";
  const [hm, ampm] = formatTime.split(" ");
  const [hours, minutes] = hm.split(":");

  return (
    <motion.header
      animate={controls}
      className="fixed top-0 left-0 right-0 pointer-events-auto z-[99]"
    >
      <div
        className={`${
          menuOpen ? "bg-black md:bg-transparent" : "bg-transparent"
        } px-6 md:px-24 flex justify-between m-auto max-w-screen-2xl items-center h-20`}
      >
        <div
          onClick={() => {
            router.push("/");
            setMenuOpen(false);
          }}
        >
          <div className="flex items-center gap-2 cursor-pointer">
            {!lg ? (
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.02)",
                  opacity: "0.72",
                  boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
                  backdropFilter: "blur(20px)",
                }}
                className="relative rounded-full mt-4 w-12 h-12 flex flex-col items-center justify-center m-auto"
              >
                <span
                  className={`${
                    menuOpen ? "text-black " : "text-white"
                  } font-unifraktur-cook uppercase text-2xl`}
                >
                  Y
                </span>
              </div>
            ) : (
              <span className="uppercase font-climate-crisis text-md">
                Lampang
              </span>
            )}

            {lg && (
              <Weather weatherCode={weather.data?.current?.weatherCode ?? 0} />
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-20 ml-auto">
          <a
            href="mailto:yanisa21@live.com"
            className="uppercase hover:text-gray-300"
          >
            yanisa21@live.com
          </a>
          {sitemap.map((item: any) => (
            <Link
              href={item.href}
              key={item.label}
              target={item.isExternal ? "_blank" : undefined}
              className="text-md hover:text-gray-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        {lg && (
          <div
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
          </div>
        )}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`${
            menuOpen ? "text-black" : "text-white"
          } md:hidden p-2 rounded mt-4 focus:outline-none focus:ring-none cursor-pointer`}
        >
          {menuOpen ? <X size={24} className="" /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#f8f8f8] -mt-16 min-h-[55vh] m-2 rounded-2xl"
        >
          <div className="flex flex-col pt-24 justify-center items-center gap-12 text-black">
            {sitemap.map((item: any) => (
              <Link
                target={item.isExternal ? "_blank" : undefined}
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
          <div className="flex mt-10 m-auto justify-center items-center max-w-48">
            {" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/yanisa-poongthaisong"
              className="cursor-pointer hover:bg-black/5 border rounded-full w-10 h-10 flex flex-col items-center justify-center m-auto border-black/40"
            >
              <Linkedin />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/yanisapths"
              className="cursor-pointer hover:bg-black/5 border rounded-full w-10 h-10 flex flex-col items-center justify-center m-auto border-black/40"
            >
              <GithubIcon color="black" />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/yani.mmmx/"
              className="cursor-pointer hover:bg-black/5 border rounded-full w-10 h-10 flex flex-col items-center justify-center m-auto border-black/40"
            >
              <Instagram color="black" />
            </Link>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
};
