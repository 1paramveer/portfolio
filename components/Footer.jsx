"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { currentDaySet, Clock } from "@/components/DateTime";

const Footer = () => {
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
    <div className="overflow-hidden opacity-60 hidden justify-end max-md:flex max-sm:justify-center max-sm:text-[14px] mb-10 sm:mr-10">
      <p className="text-split translate-y-full">
        <Clock />
      </p>
      <p className="text-split translate-y-full pl-2">{currentDaySet}</p>
    </div>
  );
};

export default Footer;
