"use client";
import React, { useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import gsap from "gsap";
import RedirectIcon from "@/components/RedirectIcon";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const newOpacity = isOpen ? 0 : 1;
    gsap.to(".nav-overlay", {
      opacity: newOpacity,
      display: isOpen ? "none" : "block",
    });
  };

  useEffect(() => {}, [isOpen]);

  return (
    <div className="hidden max-md:block z-[2]">
      <div className="nav-overlay inset-0 fixed bg-[#FF0000] opacity-0 hidden">
        <div className="flex flex-col h-full justify-center ml-[50px]">
          <p className="text-4xl max-xs:text-2xl font-jetbrains mb-14">
            Get in <span className="bg-[#FFFFFF] text-[#000000]">touch_</span>
          </p>
          <div className="flex">
            <Link
              href="/"
              className="font-sonder text-[#000000] text-4xl mb-5 w-36"
            >
              Home
            </Link>
            <div className="-mt-[6px]">
              <RedirectIcon />
            </div>
          </div>
          <div className="flex">
            <Link
              href="/About"
              className="font-sonder text-[#000000] text-4xl mb-5 w-36"
            >
              About
            </Link>
            <div className="-mt-[6px]">
              <RedirectIcon />
            </div>
          </div>
          <div className="flex">
            <Link
              href="mailto:paramsingh1205@hotmail.com"
              className="font-sonder text-[#000000] text-4xl mb-5 w-36"
            >
              Contact
            </Link>
            <div className="-mt-[6px]">
              <RedirectIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end m-5" onClick={toggleMenu}>
        <Hamburger duration={1} toggled={isOpen} />
      </div>
    </div>
  );
}

export default HamburgerMenu;
