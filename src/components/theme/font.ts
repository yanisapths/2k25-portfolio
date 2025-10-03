import {
  Climate_Crisis,
  Clicker_Script,
  Montserrat,
  Silkscreen,
} from "next/font/google";

export const climateCrisis = Climate_Crisis({
  variable: "--font-climate-crisis",
  subsets: ["latin"],
});

export const clickerScript = Clicker_Script({
  variable: "--font-clicker-script",
  subsets: ["latin"],
  weight: ["400"],
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});
