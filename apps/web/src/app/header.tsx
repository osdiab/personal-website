"use client"; // for scrolled interactivity

import Logo from "@/app/logo.svg";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function RootHeader({}: { className?: string }) {
  const [_isScrolled, setIsScrolled] = useState(false);

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
      <header>
        <div>
          <div>
            <Logo />
            <span>Omar Diab</span>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/osdiab/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-label="LinkedIn" />
            </a>
            <a
              href="mailto:hello@omardiab.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail aria-label="Email" />
            </a>
            <a
              href="https://github.com/osdiab/personal-website"
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-label="Github" />
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
