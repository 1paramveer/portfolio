"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import "../app/globals.css";
import { inter, sonder, dm_mono, dm_sans } from "../components/Fonts";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import HamburgerMenu from "@/components/HamburgerMenu";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  useEffect(() => {
    gsap.to(".text-split", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);
  return (
    <html lang="en">
      <head>
        <title>Paramveer Singh</title>
      </head>
      <body
        className={`${inter.variable} ${sonder.variable} ${dm_mono.variable} ${dm_sans.variable} flex flex-col overflow-hidden fixed h-full w-full`}
      >
        <Cursor />
        <SmoothScroll>
          <HamburgerMenu />
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
