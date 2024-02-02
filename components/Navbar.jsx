import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-lg:justify-center items-center h-1/4 px-20 text-sm">
      <div>
        <p className="enlarge-cursor font-sonder text-6xl text-twhite mt-2 text-center">
          Paramveer Singh
        </p>
      </div>
      <div className="flex w-48 max-lg:hidden justify-between -mt-4 -mr-4">
        <Link
          href="https://www.linkedin.com/in/1paramveer/edin.com/in/1paramveer/"
          target="_blank"
          className="opacity-60 duration-200 hover:opacity-100"
        >
          LinkedIn
        </Link>
        <Link
          href="https://github.com/1paramveer"
          target="_blank"
          className="opacity-60 duration-200 hover:opacity-100"
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
    </nav>
  );
};

export default Navbar;
