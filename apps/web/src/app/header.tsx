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
import { hyperlinkCss } from "~/components/ui/hyperlink";
import { SvgComponent } from "~/types";
import { ThemeSwitcher } from "~/app/theme-switcher";

export function RootHeader() {
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
        className={cx(siteHeaderCss, isScrolled && siteHeaderScrolledCss)}
      >
        <div className={headerContentCss}>
          <div className={headerLeftCss}>
            <Logo className={logoCss} />
            <span className={siteTitleCss}>Omar Diab</span>
          </div>
          <div className={headerRightCss}>
            <ThemeSwitcher />
            <NavLink
              url="https://www.linkedin.com/in/osdiab/"
              Icon={Linkedin}
              title="LinkedIn"
            />
            <NavLink
              url="mailto:hello@omardiab.com"
              Icon={Mail}
              title="Email"
            />
            <NavLink
              url="https://github.com/osdiab/personal-website"
              Icon={Github}
              title="Github"
            />
          </div>
        </div>
      </header>
    </>
  );
}
function NavLink({
  url,
  Icon,
  title,
}: {
  url: string;
  Icon: SvgComponent;
  title: string;
}) {
  return (
    <a
      className={hyperlinkCss({
        initColor: "body",
        activeColor: "primaryDisplay",
      })}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className={logoCss} aria-label={title} />
    </a>
  );
}
