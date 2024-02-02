import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="hidden max-lg:flex justify-end m-10">
      <Link
        href="https://www.linkedin.com/in/1paramveer/edin.com/in/1paramveer/"
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
  );
};

export default Footer;
