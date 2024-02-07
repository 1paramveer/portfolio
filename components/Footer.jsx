import React from "react";
import Link from "next/link";
import { currentDaySet, Clock } from "@/components/DateTime";

const Footer = () => {
  return (
    <div className="hidden max-lg:flex max-lg:flex-col mx-10 max-sm:mb-6 mb-10">
      <div className="flex justify-end max-sm:justify-between">
        <Link
          href="https://www.linkedin.com/in/1paramveer/"
          target="_blank"
          className="opacity-60 duration-200 hover:opacity-100 pr-5"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/1paramveer"
          target="_blank"
          className="opacity-60 duration-200 hover:opacity-100 pr-5"
        >
          GitHub
        </Link>
        <Link
          href="mailto:paramsingh1205@hotmail.com"
          className="opacity-60 duration-200 hover:opacity-100"
        >
          Contact
        </Link>
      </div>
      <div className="opacity-60 flex justify-end max-sm:justify-center max-sm:text-[12px] max-sm:pt-4 pt-1">
        <p>
          <Clock />
        </p>
        <p className="pl-2">{currentDaySet}</p>
      </div>
    </div>
  );
};

export default Footer;
