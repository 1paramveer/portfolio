import { Inter } from "next/font/google";
import localfont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const sonder = localfont({
  src: [
    {
      path: "../public/fonts/SonderRegular.otf",
    },
  ],
  variable: "--font-sonder",
});

export const jetbrains_mono = localfont({
  src: [
    {
      path: "../public/fonts/JetBrainsMono.ttf",
    },
  ],
  variable: "--font-jetbrains",
});
