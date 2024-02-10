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
    <div className="hidden max-lg:block z-[2]">
      <div className="nav-overlay inset-0 fixed bg-[#FF0000] opacity-0 hidden">
        <div className="flex flex-col h-full justify-center ml-[50px]">
          <p className="text-4xl font-jetbrains mb-14">Get in touch_</p>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/1paramveer/"
              target="_blank"
              className="font-sonder text-[#000000] text-4xl mb-5 w-36"
            >
              LinkedIn
            </Link>
            <div className="-mt-[6px]">
              <RedirectIcon />
            </div>
          </div>
          <div className="flex">
            <Link
              href="https://github.com/1paramveer"
              target="_blank"
              className="font-sonder text-[#000000] text-4xl mb-5 w-36"
            >
              GitHub
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
