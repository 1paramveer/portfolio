"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const target = document.querySelectorAll(".enlarge-cursor");
    const link = document.querySelectorAll(".reduce-cursor");

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      gsap.to(cursor, { x: clientX - 10, y: clientY - 10 });

      if (
        clientX >= 0 &&
        clientX <= window.innerWidth &&
        clientY >= 0 &&
        clientY <= window.innerHeight
      ) {
        gsap.to(cursor, { opacity: 1, delay: 0.25, duration: 0.1 });
      }
    };

    const scaleFour = () => {
      gsap.to(cursor, { scale: 4 });
    };

    const scaleOne = () => {
      gsap.to(cursor, { scale: 1 });
    };

    const scaleZero = () => {
      gsap.to(cursor, { scale: 0 });
    };

    document.addEventListener("mousemove", onMouseMove);

    target.forEach((target) => {
      target.addEventListener("mouseenter", scaleFour);
      target.addEventListener("mouseleave", scaleOne);
    });

    link.forEach((link) => {
      link.addEventListener("mouseenter", scaleZero);
      link.addEventListener("mouseleave", scaleOne);
    });
  });

  return (
    <div
      id="custom-cursor"
      className="custom-cursor opacity-0 max-lg:hidden"
    ></div>
  );
};

export default Cursor;
