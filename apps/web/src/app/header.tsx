"use client"; // for scrolled interactivity

import {
  logoCss,
  siteHeaderCss,
  siteHeaderScrolledCss,
  siteTitleCss,
} from "@/app/header.css";
import Logo from "@/app/logo.svg";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export function RootHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry ? !entry.isIntersecting : false);
      },
      { threshold: [1] }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
      <span ref={ref} />
      <header
        className={clsx(siteHeaderCss, isScrolled && siteHeaderScrolledCss)}
      >
        <Logo className={logoCss} />
        <span className={siteTitleCss}>Omar Diab</span>
      </header>
    </>
  );
}
