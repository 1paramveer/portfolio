"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll("a,.enlarge-cursor");

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX - 10, y: clientY - 10 });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 4 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener("mousemove", onMouseMove);

    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnterLink);
      link.addEventListener("mouseleave", onMouseLeaveLink);
    });
  });

  return <div id="custom-cursor" className="custom-cursor max-sm:hidden"></div>;
};

export default Cursor;
