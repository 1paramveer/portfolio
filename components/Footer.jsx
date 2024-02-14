import React from "react";
import Link from "next/link";
import { currentDaySet, Clock } from "@/components/DateTime";

const Footer = () => {
  return (
    <div className="overflow-hidden opacity-60 flex md:hidden justify-end max-sm:justify-center max-sm:text-[14px] mb-10 sm:mr-10">
      <p className="text-split translate-y-full">
        <Clock />
      </p>
      <p className="text-split translate-y-full pl-2">{currentDaySet}</p>
    </div>
  );
};

export default Footer;
