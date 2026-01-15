"use client";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../header/header"), {
  ssr: false,
});

export default Header;
