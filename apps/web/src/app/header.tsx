"use client"; // for scrolled interactivity

import {
  headerContentCss,
  headerLeftCss,
  headerRightCss,
  logoCss,
  navLinkCss,
  siteHeaderCss,
  siteHeaderScrolledCss,
  siteTitleCss,
} from "~/app/header.css";
import Logo from "~/app/logo.svg";

import { ComponentProps, useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { cx } from "~pandacss/css";
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
            <ThemeSwitcher className={navLinkCss} />
            <NavLink
              href="https://www.linkedin.com/in/osdiab/"
              Icon={Linkedin}
              title="LinkedIn"
            />
            <NavLink
              href="mailto:hello@omardiab.com"
              Icon={Mail}
              title="Email"
            />
            <NavLink
              href="https://github.com/osdiab/personal-website"
              Icon={Github}
              title="Github"
            />
          </div>
        </div>
      </header>
    </>
  );
}
interface NavLinkProps extends ComponentProps<"a"> {
  href: string;
  Icon: SvgComponent;
  title: string;
}

function NavLink({ href, Icon, title, ...props }: NavLinkProps) {
  return (
    <a
      className={navLinkCss}
      href={href}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      <Icon aria-label={title} />
    </a>
  );
}
