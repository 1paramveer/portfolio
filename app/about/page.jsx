import React from "react";
import Link from "next/link";

function About() {
  return (
    <div className="h-full w-full flex justify-center mb-10">
      <div className="w-3/4 h-full font-dmSans flex flex-col pt-16">
        <div className="w-full">
          <div className="w-full flex justify-center items-center mb-5">
            <p>Student | Developer | Editor</p>
          </div>

          <p>
            Currently, I am on the verge of surviving first year of my comp sci
            major, and also somehow managing to learn{" "}
            <span className="bg-tblack rounded-md px-1 font-dnMono">rust</span>{" "}
            and actively work/explore on frontend technologies
          </p>
          <p>
            Outside of work, I like playing table tennis and exploring linux
            distros{" "}
            <span className="bg-tblack rounded-md px-1 font-dnMono">
              currently on fedora
            </span>
            , also i like to contribute to gnome extensions i like, although i
            have no experience in gtk but sometimes i enjoy doing it along with
            a{" "}
            <span className="bg-tblack rounded-md px-1 font-dnMono">
              cup of coffee
            </span>{" "}
            when i am bored.
          </p>
        </div>

        <div className="flex flex-col mt-10 font-dmSans font-medium">
          <p className="mr-5">all of my socials</p>
          <div className="flex max-sm:flex-col mt-5 text-sm">
            <div className="mb-5">
              <Link
                href="/resume.pdf"
                target="_blank"
                className="rounded-sm px-2 py-1 mr-2 bg-[#14171a] hover:opacity-90 active:opacity-80"
              >
                Resume
              </Link>
              <a
                href="mailto:paramsingh1205@hotmail.com"
                target="_blank"
                className="rounded-sm px-2 py-1 mr-2 bg-[#bd081c] hover:opacity-90 active:opacity-80"
              >
                Email
              </a>
            </div>

            <div className="">
              <a
                href="https://www.linkedin.com/in/1paramveer/"
                target="_blank"
                className="rounded-sm px-2 py-1 mr-2 bg-[#0a66c2] hover:opacity-90 active:opacity-80"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/1paramveer"
                target="_blank"
                className="rounded-sm px-2 py-1 mr-2 bg-[#208f3a] hover:opacity-90 active:opacity-80"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
