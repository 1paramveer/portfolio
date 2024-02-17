"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { currentDaySet, Clock } from "@/components/DateTime";

const Footer = () => {
  useEffect(() => {
    gsap.to(".text-split-time", {
      y: "0%",
      duration: 0.8,
      stagger: 0.2,
      delay: 0.5,
      ease: "power2.out",
    });
  });

  return (
    <div className="overflow-hidden opacity-60 hidden justify-end max-md:flex max-sm:justify-center max-sm:text-[14px] mb-10 sm:mr-10">
      <p className="text-split-time translate-y-full">
        <Clock />
      </p>
      <p className="text-split-time translate-y-full pl-2">{currentDaySet}</p>
    </div>
  );
};

export default Footer;
