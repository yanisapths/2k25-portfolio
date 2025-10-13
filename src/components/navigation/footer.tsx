import dayjs from "dayjs";
import { Cloud, Mail, Sun } from "lucide-react";
import React from "react";
import { GlassDock } from "../effect/GlassDock";
import Link from "next/link";
import { GithubIcon } from "../icons/github";
import { motion } from "motion/react";
export const Footer = () => {
  return (
    <footer className="absolute max-w-screen mx-auto w-full inset-x-0 justify-center py-4 z-40 pointer-events-auto">
      <div className="min-h-[70vh] my-auto justify-center flex flex-col px-6 md:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
        >
          <p className="font-black text-6xl md:text-9xl font-montserrat justify-center text-center items-center m-auto">
            LET'S BUILD TOGETHER
          </p>
          <div className="flex justify-center items-center my-12 gap-4">
            <Link href="https://github.com/yanisapths">
              <GlassDock>
                <GithubIcon className="text-white" size={48} />
              </GlassDock>
            </Link>

            <Link href="mailto:yanisa21@live.com">
              <GlassDock>
                <div className="flex justify-center items-center gap-3 px-2">
                  <Mail className="w-12 h-12 text-white" />
                  <p className="text-3xl font-black text-white">SAY HI</p>
                </div>
              </GlassDock>
            </Link>
          </div>
        </motion.div>
      </div>

      <CopyrightFooter />
    </footer>
  );
};

export const CopyrightFooter = () => {
  const currentYear = dayjs().year();

  return (
    <div className="max-w-screen-2xl mx-auto py-4 w-full flex md:flex-row flex-col text-center justify-center z-50 lg:justify-between text-white">
      <p>© {currentYear} All Rights Reserved.</p>

      <p>DESIGNED AND DEVELOPED BY YANISA P.</p>
    </div>
  );
};
