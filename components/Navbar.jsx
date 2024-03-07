"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import { currentDaySet, Clock } from "@/components/DateTime";

const Navbar = () => {
  useEffect(() => {
    gsap.to(".text-split-nav", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      delay: 0.1,
      ease: "power2.out",
    });
  }, []);

  return (
    <nav className="flex justify-between max-md:justify-center items-center h-1/4 px-20 max-sm:px-3 text-sm">
      <div className="mt-10 max-sm:mt-3 overflow-hidden">
        <div className="overflow-hidden">
          <div className="text-split-nav translate-y-full opacity-60 max-md:hidden flex">
            <Clock />
            <p className="pl-2">{currentDaySet}</p>
          </div>
        </div>
        <div className="max-sm:hidden">
          <p className="text-split-nav translate-y-full enlarge-cursor font-sonder text-6xl text-twhite mt-2 text-center">
            Paramveer Singh
          </p>
        </div>
        <div className="sm:hidden overflow-hidden">
          <div className="overflow-hidden">
            <p className="text-split-nav translate-y-full enlarge-cursor font-sonder text-6xl text-twhite text-center">
              Paramveer
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="text-split-nav translate-y-full enlarge-cursor font-sonder text-6xl text-twhite mt-2 text-center">
              Singh
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden flex max-md:hidden justify-between -mt-4 -mr-4">
        <Link
          href="/"
          className="text-split-nav translate-y-full reduce-cursor opacity-60 duration-200 hover:opacity-100 mr-5"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="text-split-nav translate-y-full reduce-cursor opacity-60 duration-200 hover:opacity-100 mr-5"
        >
          About
        </Link>
        <Link
          href="/resume.pdf"
          target="_blank"
          className="text-split-nav translate-y-full reduce-cursor opacity-60 duration-200 hover:opacity-100"
        >
          Resume
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
