"use client";
// Motion
import { motion } from "motion/react";
// Next
import Image from "next/image";
import Link from "next/link";
// Images
import HeroImage from "@/src/app/assets/hero-image.png";
// Components
import Github from "../icons/github";
import Linkedin from "../icons/linkedin";
import DownArrow from "../icons/down-arrow";

interface SocialIcon {
  name: string;
  link: string;
  Icon: React.ComponentType<{ fill: string }>;
  fillColor: string;
}

const socialIcons: SocialIcon[] = [
  {
    name: "GitHub",
    Icon: Github,
    link: "https://github.com/andyagdw",
    fillColor: "#fff",
  },
  {
    name: "LinkedIn",
    Icon: Linkedin,
    link: "https://www.linkedin.com/in/andyagyeidwumah/",
    fillColor: "#000",
  },
];

export default function Hero() {
  const handleClick = () => {
    const skillsSection = document.getElementById("skills");
    skillsSection?.scrollIntoView({ block: "start" });
  };
  return (
    <section aria-labelledby="hero" className="relative bg-(--smart-blue)">
      <div className="absolute w-3/7 h-[60em] lg:h-[80em] right-0 -top-80 hero-div-right rounded-bl-4xl"></div>
      {/* This div ensures that the animation has a container that is not the section */}
      <div className="max-w-(--max-width) mx-auto px-4 relative">
        <BouncingBall />
      </div>
      <div className="max-w-(--max-width) mx-auto px-4 py-10 flex justify-between items-center relative z-1">
        <div className="max-w-[60ch]">
          <h1 id="hero" className="mb-6">
            Hello, my name is Andy. I am a{" "}
            <span className="bg-clip-text bg-linear-to-r from-(--graphite) to-(--navy-electric) text-transparent">
              Junior Software Engineer
            </span>
            .
          </h1>
          <SocialIcons />
          <div>
            <button
              className="cursor-pointer"
              onClick={handleClick}
              aria-label="Scroll down to main content"
            >
              <DownArrow fill={"hsla(77, 100%, 97%, 1)"} />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={HeroImage}
            alt="Andy Agyei-Dwumah"
            className="rounded-full w-[24em] hero-img-style"
          />
        </div>
      </div>
    </section>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-4 mb-12">
      {socialIcons?.map((item) => {
        return (
          <motion.div key={item.name} whileHover={{ scale: 1.1 }}>
            <Link href={item.link}>
              <item.Icon fill={item.fillColor} />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}

function BouncingBall() {
  return (
    <motion.div
      aria-hidden
      className="w-[5em] aspect-square bg-(--navy-electric) absolute left-4 z-1 motion-div-hero"
      animate={{ top: [5, 50, 5] }}
      transition={{
        repeat: Infinity,
        duration: 1,
        ease: ["easeIn", "easeOut"],
      }}
    ></motion.div>
  );
}
