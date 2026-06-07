"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import Logo from "../widgets/logo";

function Navigation() {
  const path = usePathname();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (path === "/about" || path === "/brand" || path === "/case-study") {
      navRef.current?.classList.add("scrolled");
    }

    const initReveal = () => {
      const reveals = document.querySelectorAll(".reveal:not(.visible)");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      reveals.forEach((el) => io.observe(el));
    };

    scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(initReveal, 100);
  }, [path]);

  useEffect(() => {
    const toggleScroll = () => {
      if (scrollY > 40 && !navRef.current?.classList.contains("scrolled")) {
        navRef.current?.classList.add("scrolled");
      }

      if (
        scrollY <= 40 &&
        navRef.current?.classList.contains("scrolled") &&
        !(path === "/about" || path === "/brand" || path === "/case-study")
      ) {
        navRef.current?.classList.remove("scrolled");
      }
    };

    addEventListener("scroll", toggleScroll, { passive: true });

    return () => removeEventListener("scroll", toggleScroll);
  }, [path]);

  return (
    <nav
      ref={navRef}
      id="mainNav"
      className="px-4 sm:px-8 md:px-12 flex items-center justify-between fixed inset-x-0 top-0 z-1000"
    >
      <Link
        href="/"
        className="nav-logo flex items-center gap-2.5 text-base sm:text-lg md:text-[22px]"
      >
        <Logo />
        LUMINIQ
      </Link>

      <ul className="nav-links items-center gap-9 list-none hidden md:flex">
        <li>
          <Link href="/">Work</Link>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>

        <li>
          <Link href="/brand">Brand System</Link>
        </li>

        <li>
          <Link href="/case-study">Case Studies</Link>
        </li>

        <li>
          <Link href="/contact" className="nav-cta">
            Book Consultation
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
