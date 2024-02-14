import React from "react";
import Link from "next/link";
import { currentDaySet, Clock } from "@/components/DateTime";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-md:justify-center items-center h-1/4 max-sm:h-1/6 px-20 text-sm">
      <div className="mt-10">
        <div className="opacity-60 max-md:hidden flex">
          <Clock />
          <p className="pl-2">{currentDaySet}</p>
        </div>
        <p className="enlarge-cursor font-sonder text-6xl text-twhite mt-2 text-center">
          Paramveer Singh
        </p>
      </div>
      <div className="flex max-md:hidden justify-between -mt-4 -mr-4">
        <Link
          href="/"
          className="reduce-cursor opacity-60 duration-200 hover:opacity-100 mr-5"
        >
          Home
        </Link>
        <Link
          href="/About"
          className="reduce-cursor opacity-60 duration-200 hover:opacity-100 mr-5"
        >
          About
        </Link>
        <Link
          href="mailto:paramsingh1205@hotmail.com"
          className="reduce-cursor opacity-60 duration-200 hover:opacity-100"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
