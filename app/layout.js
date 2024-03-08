import React from "react";
import Head from "next/head";
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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <body
        className={`${inter.variable} ${sonder.variable} ${dm_mono.variable} ${dm_sans.variable} `}
      >
        <Cursor />
        <SmoothScroll>
          <div className="-mt-16 z-[10] fixed w-full flex justify-end">
            <HamburgerMenu />
          </div>
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
