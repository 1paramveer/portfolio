"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

const Page = () => {
  useEffect(() => {
    gsap.to(".text-split-work", {
      y: "0%",
      duration: 1,
      stagger: 0.1,
      delay: 0.2,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-2/4 h-full flex flex-col justify-end max-md:justify-center p-20 max-sm:p-10 max-lg:w-full max-md:pb-0 text-twhite">
      <div className="flex-1"></div>
      <div className="overflow-hidden">
        <p className="text-split-work translate-y-[115%] font-dmMono mb-2 opacity-60">
          Work
        </p>
      </div>
      <div>
        <div className="overflow-hidden flex justify-between mb-1">
          <p className="text-split-work translate-y-full font-dmSans">
            <span className=" font-dmMono mr-5 opacity-60">01</span>
            <Link
              href=""
              target="_blank"
              className="reduce-cursor opacity-60 hover:opacity-100 duration-200"
            >
              Portfolio Website
            </Link>
          </p>
          <p className="text-split-work translate-y-full font-dmMono opacity-60">
            2024
          </p>
        </div>

        <div className="overflow-hidden flex justify-between mb-1">
          <p className="text-split-work translate-y-full font-dmSans">
            <span className="font-dmMono mr-5 opacity-60">02</span>
            <Link
              href="https://bc3club.github.io/website/"
              target="_blank"
              className="reduce-cursor opacity-60 hover:opacity-100 duration-200"
            >
              BC3. Club Website
            </Link>
          </p>
          <p className="text-split-work translate-y-full font-dmMono opacity-60">
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
