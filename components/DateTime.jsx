"use client";
import React from "react";

const currentDate = new Date();

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const currentDaySet = currentDate.toLocaleDateString("en-US", options);

export const Clock = () => {
  const [currentTime, setCurrentTime] = React.useState("00 : 00 : 00");

  React.useEffect(() => {
    const updateCurrentTime = () => {
      const d = new Date();
      const hours = String(d.getHours()).padStart(2, "0");
      const minutes = String(d.getMinutes()).padStart(2, "0");
      const seconds = String(d.getSeconds()).padStart(2, "0");
      setCurrentTime(`${hours} : ${minutes} : ${seconds}`);
    };

    updateCurrentTime();

    const timer = setInterval(updateCurrentTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return <>{currentTime}</>;
};
