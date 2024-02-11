import React from "react";
import Link from "next/link";
import "../app/page.css";

export const metadata = {
  title: "Paramveer Singh",
};

const page = () => {
  return (
    <div className="w-2/4 font-jetbrains h-full flex flex-col justify-end max-md:justify-center p-20 max-sm:p-10 max-lg:w-full max-md:pb-0">
      <p className="mb-2">Work_</p>
      <div>
        <div className="flex justify-between">
          <p className="font-inter">
            <span className="font-jetbrains mr-5 opacity-60">01</span>
            <Link
              href=""
              target="_blank"
              className="opacity-60 hover:opacity-100 duration-200"
            >
              Portfolio Website
            </Link>
          </p>
          <p className="enlarge-cursor duration-200 opacity-60 hover:opacity-100">
            2024
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-inter">
            <span className="font-jetbrains mr-5 opacity-60">02</span>
            <Link
              href=""
              target="_blank"
              className="opacity-60 hover:opacity-100 duration-200"
            >
              BC3. Club Website
            </Link>
          </p>
          <p className="enlarge-cursor duration-200 opacity-60 hover:opacity-100">
            2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
