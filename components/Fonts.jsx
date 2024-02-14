import { Inter, DM_Mono, DM_Sans } from "next/font/google";
import localfont from "next/font/local";

export const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const dm_sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const dm_mono = DM_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-mono",
});

export const sonder = localfont({
  src: [
    {
      path: "../public/fonts/SonderRegular.otf",
    },
  ],
  variable: "--font-sonder",
});
