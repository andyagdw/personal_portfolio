"use client";
// Next
import Image from "next/image";
import Link from "next/link";
// Images
import Logo from "@/src/app/assets/website_logo.png";
// React
import { useEffect, useRef, useState } from "react";

interface NavLink {
  label: string;
  path: string;
}

const navLinks: NavLink[] = [
  {
    label: "Skills",
    path: "#skills",
  },
  {
    label: "Portfolio",
    path: "#projects",
  },
  {
    label: "About Me",
    path: "#my-journey",
  },
  {
    label: "Get In Touch",
    path: "#get-in-touch",
  },
];

const spanStyle = "block bg-black h-1 w-6";
const breakPoint = 768;

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const handleClick = () => {
    setMenuIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  });

  // Close menu on resize
  useEffect(() => {
    const closeMenu = () => {
      if (window.innerWidth > breakPoint && menuIsOpen) {
        setMenuIsOpen(false);
      }
    };

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, [menuIsOpen]);

  // Toggle menu using 'Enter' key on keyboard (accessibility)
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const toggleMenu = (e: KeyboardEvent) => {
      if (
        e.code === "Enter" &&
        document.activeElement === hamburgerRef.current
      ) {
        setMenuIsOpen((prev) => !prev);
      }
    };

    const focusOnFirstNavLink = (e: KeyboardEvent) => {
      if (
        e.code === "Enter" &&
        document.activeElement === hamburgerRef.current
      ) {
        const firstLink = menuRef.current?.querySelector("a");
        firstLink?.focus();
      }
    };

    if (hamburger) {
      hamburger.addEventListener("keydown", toggleMenu);
      hamburger.addEventListener("keydown", focusOnFirstNavLink);
    }
    return () => {
      if (hamburger) {
        hamburger.removeEventListener("keydown", toggleMenu);
        hamburger.addEventListener("keydown", focusOnFirstNavLink);
      }
    };
  }, []);

  return (
    <header className="bg-(--smart-blue)">
      <div className="flex justify-between items-center max-w-(--max-width) mx-auto flex-wrap px-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" className="w-[10em]" />
        </Link>
        <nav
          aria-label="primary"
          className={`order-1 md:order-0 basis-full md:basis-auto header__navigation overflow-hidden md:overflow-visible transition-discrete transition-[height] duration-300 ${
            menuIsOpen ? "h-auto" : "h-0"
          }`}
        >
          <menu
            className="flex gap-x-8 flex-col gap-y-8 md:gap-y-0 items-center md:flex-row relative z-1"
            ref={menuRef}
            id="menu"
          >
            {navLinks?.map((item, idx) => {
              return (
                <li key={idx}>
                  <Link className="hover:text-(--ivory)" href={item.path}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </menu>
        </nav>
        <div
          ref={hamburgerRef}
          tabIndex={0}
          role="button"
          aria-controls="menu"
          {...(menuIsOpen &&
            windowWidth < breakPoint && {
              "aria-expanded": true,
              "aria-label": "Close Menu",
            })}
          {...(!menuIsOpen &&
            windowWidth < breakPoint && {
              "aria-expanded": false,
              "aria-label": "Open Menu",
            })}
          onClick={handleClick}
          className={`md:hidden flex flex-col items-center gap-2 cursor-pointer nav-hamburger relative z-1 ${
            menuIsOpen ? "rotate-hamburger" : "restore-rotate-hamburger"
          }`}
        >
          <span className={spanStyle}></span>
          <span className={spanStyle}></span>
          <span className={spanStyle}></span>
        </div>
      </div>
    </header>
  );
}
