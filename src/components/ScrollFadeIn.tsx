import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
}

export const ScrollFadeIn = ({ children }: ScrollFadeInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ amount: 0.5 }}
      className="relative flex flex-col m-auto w-full h-screen overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
