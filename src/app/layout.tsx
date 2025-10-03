import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/navigation/header";
import {
  clickerScript,
  climateCrisis,
  montserrat,
  silkscreen,
} from "@/components/theme/font";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Yanisa P. | Home",
  description: "Yanisa P.'s Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${climateCrisis.variable} ${clickerScript.variable} ${silkscreen.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
