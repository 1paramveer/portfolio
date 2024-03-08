import React from "react";
import "../app/globals.css";
import { inter, sonder, dm_mono, dm_sans } from "../components/Fonts";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Paramveer Singh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body
          className={`${inter.variable} ${sonder.variable} ${dm_mono.variable} ${dm_sans.variable} `}
        >
          <Cursor />
          <div className="-mt-16 z-[10] fixed w-full flex justify-end">
            <HamburgerMenu />
          </div>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </body>
      </SmoothScroll>
    </html>
  );
}
