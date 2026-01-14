"use client";
// Icons
import Git from "../icons/git";
import Html from "../icons/html";
import Css from "../icons/css";
import Javascript from "../icons/javascript";
import Scss from "../icons/scss";
import Bem from "../icons/bem";
import ReactIcon from "../icons/react";
import Java from "../icons/java";
import Springboot from "../icons/springboot";
// React
import { useState } from "react";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const skills = [
    { name: "Git", Icon: Git, hoverColor: "#f14e32" },
    { name: "HTML5", Icon: Html, hoverColor: "#F54927" },
    { name: "CSS3", Icon: Css, hoverColor: "#1572B6" },
    { name: "JavaScript", Icon: Javascript, hoverColor: "#F7DF1D" },
    { name: "SCSS", Icon: Scss, hoverColor: "#CF649B" },
    { name: "BEM", Icon: Bem, hoverColor: "#000" },
    { name: "React", Icon: ReactIcon, hoverColor: "#61DBFB" },
    { name: "Java", Icon: Java, hoverColor: "#EC2025" },
    { name: "Spring Boot", Icon: Springboot, hoverColor: "#6DB33F" },
  ];

  return (
    <section
      aria-labelledby="skills"
      className="pt-40 pb-10 bg-linear-to-b from-(--smart-blue) to-(--ivory)"
    >
      <div className="max-w-(--max-width) mx-auto px-4">
        <h2 id="skills" className="mb-20">
          Skills
        </h2>
        {/* This is positioned relative only to prevent 'hero-div-right' from covering the skills section on smaller screens */}
        <div className="skills-wrapper relative z-1">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-between gap-y-4 p-4"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <skill.Icon
                fill={
                  hoveredIndex === index ? skill.hoverColor : "currentColor"
                }
              />
              <span className="text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
