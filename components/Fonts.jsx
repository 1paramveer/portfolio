import { Inter, JetBrains_Mono } from "next/font/google";
import localfont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const sonder = localfont({
  src: [
    {
      path: "../public/fonts/SonderRegular.otf",
    },
  ],
  variable: "--font-sonder",
});
