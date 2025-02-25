import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";
import { ReactNode } from "react";

const ibmPlexSans = localFont({
  src: [
    { path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "/fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});

const bebasNeue = localFont({
  src: [
    { path: "./fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

const rundeckSmooth = localFont({
  src: [{ path: "/fonts/Rundeck-Smooth.ttf", weight: "400", style: "normal" }],
  variable: "--rundeck-smooth",
});

export const metadata: Metadata = {
  title: "Fleur",
  description:
    "Your go-to app for exploring, booking, and attending live events with ease",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} ${rundeckSmooth.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
