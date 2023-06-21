"use client"; // for scrolled interactivity

import {
  headerContentCss,
  logoCss,
  siteHeaderCss,
  siteHeaderScrolledCss,
  siteTitleCss,
} from "@/app/header.css";
import Logo from "@/app/logo.svg";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export function RootHeader({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const dummyRef = useRef<HTMLSpanElement | null>(null);
  useEffect(function setScrollStateByDummyVisibility() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(entry ? !entry.isIntersecting : false);
      },
      { threshold: [1] }
    );

    if (dummyRef.current) {
      observer.observe(dummyRef.current);
    }

    return () => {
      if (dummyRef.current) {
        observer.unobserve(dummyRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* dummy element to watch if still on screen to determine if we've
      scrolled down */}
      <span ref={dummyRef} />
      <header
        className={clsx(
          siteHeaderCss,
          isScrolled && siteHeaderScrolledCss,
          className
        )}
      >
        <div className={headerContentCss}>
          <Logo className={logoCss} />
          <span className={siteTitleCss}>Omar Diab</span>
        </div>
      </header>
    </>
  );
}
