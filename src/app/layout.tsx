import {
  clickerScript,
  climateCrisis,
  montserrat,
  silkscreen,
  unifrakturCook,
} from "@/components/theme/font";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Yanisa P. | Home",
  description: "Yanisa P.'s Portfolio",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${climateCrisis.variable} ${clickerScript.variable} ${silkscreen.variable} ${unifrakturCook.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
