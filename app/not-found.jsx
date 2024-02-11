import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="z-[1] fixed h-full w-full flex flex-col items-center font-jetbrains mt-20">
      <div className="w-[75%]">
        <p className="enlarge-cursor text-center text-6xl max-md:text-4xl mb-20 max-sm:mb-10">
          Uh-Oh! Not Found
        </p>
        <p className="hidden md:block text-center max-md:text-sm mb-20">
          You’re in the middle of nowhere. The page you requested either was
          moved or doesn’t exist.
        </p>
        <p className="mb-2 max-md:text-sm">What you can do:</p>
        <ul className="ml-4 max-md:text-sm" style={{ listStyleType: "square" }}>
          <li className="mb-2">
            Go back{" "}
            <Link
              href="/"
              className="bg-[#FFFFFF] text-[#000000] font-bold px-1 enlarge-cursor"
              replace
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="mailto:paramsingh1205@hotmail.com"
              className="bg-[#FFFFFF] text-[#000000] font-bold px-1 enlarge-cursor"
            >
              {" "}
              Reach
            </Link>{" "}
            out to me if you believe this happened in error
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NotFound;
