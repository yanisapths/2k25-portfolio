"use client";
import { useCurrentWeatherData } from "@/app-hooks/weather-data";
import { useIsMobile } from "@/app-hooks/use-is-mobile";
import { useScrollDirection } from "@/app-hooks/use-scroll-direction";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Weather } from "../weather";
import { motion, useAnimation } from "motion/react";
import { sitemap } from "./sitemap";
import { Menu, X } from "lucide-react";
import { Linkedin } from "../icons/linkedin";
import { GithubIcon } from "../icons/github";
import { Instagram } from "../icons/instagram";

const navItems = sitemap.filter(
  (item): item is NonNullable<typeof item> => Boolean(item)
);

export const Header = () => {
  const controls = useAnimation();
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const hideOnScroll = isMobile !== true && !menuOpen;
  const isVisible = useScrollDirection(50, hideOnScroll);
  const shouldShow = isMobile === true || menuOpen || isVisible;

  useEffect(() => {
    controls.start({
      y: shouldShow ? 0 : -100,
      opacity: shouldShow ? 1 : 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    });
  }, [shouldShow, controls]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

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
      className="fixed top-0 left-0 right-0 z-[100] isolate pointer-events-auto"
      style={{ pointerEvents: shouldShow ? "auto" : "none" }}
    >
      <div className="relative z-20 px-6 md:px-24 flex justify-between m-auto max-w-screen-2xl items-center h-20">
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div
            style={{
              background: "rgba(255, 255, 255, 0.02)",
              opacity: "0.72",
              boxShadow: "inset 0px 0px 10px 1px rgba(255, 255, 255, 0.25)",
              backdropFilter: "blur(20px)",
            }}
            className="relative rounded-full mt-4 w-12 h-12 flex flex-col items-center justify-center lg:hidden"
          >
            <span
              className={`${
                menuOpen ? "text-black" : "text-white"
              } font-unifraktur-cook uppercase text-2xl`}
            >
              Y
            </span>
          </div>
          <span className="hidden lg:inline uppercase font-climate-crisis text-md">
            Lampang
          </span>
          <div className="hidden lg:flex">
            <Weather weatherCode={weather.data?.current?.weatherCode ?? 0} />
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-20 ml-auto">
          <a
            href="mailto:yanisa21@live.com"
            className="uppercase hover:text-gray-300"
          >
            yanisa21@live.com
          </a>
          {navItems.map((item) => (
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
        <div
          className="hidden lg:flex items-center gap-2 ml-auto font-silkscreen font-semibold text-black text-xl"
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
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className={`${
            menuOpen ? "text-black" : "text-white"
          } relative z-30 md:hidden p-3 -mr-2 mt-4 min-h-11 min-w-11 flex items-center justify-center rounded touch-manipulation focus:outline-none cursor-pointer`}
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
          className="absolute top-2 left-2 right-2 z-10 md:hidden bg-[#eeeeee] min-h-fit pb-12 rounded-2xl pointer-events-auto"
        >
          <div className="flex flex-col pt-24 justify-center items-center gap-12 text-black">
            {navItems.map((item) => (
              <Link
                target={item.isExternal ? "_blank" : undefined}
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-black hover:text-gray-500 py-2 touch-manipulation"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="mailto:yanisa21@live.com"
              onClick={() => setMenuOpen(false)}
              className="uppercase hover:text-gray-500 py-2 touch-manipulation"
            >
              yanisa21@live.com
            </a>
          </div>
          <div className="flex mt-10 m-auto justify-center items-center max-w-48">
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
