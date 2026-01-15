"use client";
// React
import { useState } from "react";
// Icons
import Send from "../icons/send";

export default function GetInTouchText() {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <span
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      Get In Touch <Send fill={isHover ? "hsla(77, 100%, 97%, 1)" : ""} />
    </span>
  );
}
