import { motion } from "motion/react";
import React, { ReactNode } from "react";

interface ScrollFadeInProps {
  children: ReactNode;
  aboveFold?: boolean;
}

export const ScrollFadeIn = ({
  children,
  aboveFold = false,
}: ScrollFadeInProps) => {
  return (
    <motion.div
      initial={aboveFold ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.15 }}
      className="relative flex flex-col m-auto w-full min-h-screen h-auto lg:h-screen overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
