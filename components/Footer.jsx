import React from "react";
import Link from "next/link";
import { currentDaySet, Clock } from "@/components/DateTime";

const Footer = () => {
  return (
    <div className="opacity-60 flex lg:hidden justify-end max-sm:justify-center max-sm:text-[14px] mb-10 sm:mr-10">
      <p>
        <Clock />
      </p>
      <p className="pl-2">{currentDaySet}</p>
    </div>
  );
};

export default Footer;
