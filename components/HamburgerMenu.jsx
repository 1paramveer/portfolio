"use client";
import React, { useEffect, useState } from "react";
import { Spiral as Hamburger } from "hamburger-react";
import Link from "next/link";
import gsap from "gsap";
import RedirectIcon from "@/components/RedirectIcon";

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.to(".text-split-menu", {
      y: "0%",
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out",
    });
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    updateMenuVisibility(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    updateMenuVisibility(false);
  };

  const updateMenuVisibility = (open) => {
    const newOpacity = open ? 1 : 0;
    gsap.to(".nav-overlay", {
      opacity: newOpacity,
      display: open ? "block" : "none",
    });

    gsap.to(".text-split-menu-items", {
      y: "0%",
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div className="hidden max-md:block max-md:z-[2]">
      <div>
        <div className="nav-overlay fixed inset-0 bg-[#FF0000] opacity-0 hidden">
          <div className="flex flex-col h-full justify-center ml-[50px]">
            <div className="overflow-hidden">
              <p className="text-split-menu-items -translate-y-[110%] text-4xl max-xs:text-2xl font-dmMono mb-14">
                Get in <span className="bg-twhite text-[#000000]">touch_</span>
              </p>
            </div>

            <div className="overflow-hidden flex">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-split-menu-items -translate-y-full font-sonder text-[#000000] text-4xl mb-5 w-36"
              >
                Home
              </Link>
              <div className="overflow-hidden -mt-[6px]">
                <div className="text-split-menu-items -translate-y-full pt-1">
                  <RedirectIcon />
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex">
              <Link
                href="/About"
                onClick={closeMenu}
                className="text-split-menu-items -translate-y-full font-sonder text-[#000000] text-4xl mb-5 w-36"
              >
                About
              </Link>
              <div className="overflow-hidden -mt-[6px]">
                <div className="text-split-menu-items -translate-y-full pt-1">
                  <RedirectIcon />
                </div>
              </div>
            </div>
            <div className="overflow-hidden flex">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="text-split-menu-items -translate-y-full font-sonder text-[#000000] text-4xl mb-5 w-36"
              >
                Resume
              </Link>
              <div className="overflow-hidden -mt-[6px]">
                <div className="text-split-menu-items -translate-y-full pt-1">
                  <RedirectIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-split-menu -translate-y-[110%] flex justify-end m-5"
        onClick={toggleMenu}
      >
        <Hamburger duration={1} toggled={isOpen} />
      </div>
    </div>
  );
}

export default HamburgerMenu;
