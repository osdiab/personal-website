"use client"; // for scrolled interactivity

import {
  headerContentCss,
  headerLeftCss,
  headerRightCss,
  logoCss,
  siteHeaderCss,
  siteHeaderScrolledCss,
  siteTitleCss,
} from "~/app/header.css";
import Logo from "~/app/logo.svg";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cx } from "~pandacss/css";

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

    const { current: dummySpan } = dummyRef;
    if (dummySpan) {
      observer.observe(dummySpan);
    }

    return () => {
      if (dummySpan) {
        observer.unobserve(dummySpan);
      }
    };
  }, []);

  return (
    <>
      {/* dummy element to watch if still on screen to determine if we've
      scrolled down */}
      <span ref={dummyRef} />
      <header
        className={cx(
          siteHeaderCss,
          isScrolled && siteHeaderScrolledCss,
          className
        )}
      >
        <div className={headerContentCss}>
          <div className={headerLeftCss}>
            <Logo className={logoCss} />
            <span className={siteTitleCss}>Omar Diab</span>
          </div>
          <div className={headerRightCss}>
            <a
              href="https://www.linkedin.com/in/osdiab/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className={logoCss} aria-label="LinkedIn" />
            </a>
            <a
              href="mailto:hello@omardiab.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className={logoCss} aria-label="Email" />
            </a>
            <a
              href="https://github.com/osdiab/personal-website"
              target="_blank"
              rel="noreferrer"
            >
              <Github className={logoCss} aria-label="Github" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
