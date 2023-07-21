"use client";

import { useTheme } from "next-themes";
import EveryOrgLogoDark from "~/assets/logos/every-org-dark.svg";
import EveryOrgLogoLight from "~/assets/logos/every-org-light.svg";
import SpinachLogoNormal from "~/assets/logos/spinach.svg";
import SpinachLogoInverted from "~/assets/logos/spinach-inverted.svg";
import { SvgComponent } from "~/types";

const EmptySvg: SvgComponent = (props) => <svg {...props} />;

export const EveryOrgLogo: SvgComponent = (props) => {
  const { resolvedTheme } = useTheme();
  const Logo = resolvedTheme
    ? ((resolvedTheme === "dark"
        ? EveryOrgLogoLight
        : EveryOrgLogoDark) as SvgComponent)
    : EmptySvg;
  return <Logo {...props} />;
};

export const SpinachLogo: SvgComponent = (props) => {
  const { resolvedTheme } = useTheme();
  const Logo = resolvedTheme
    ? ((resolvedTheme === "dark"
        ? SpinachLogoInverted
        : SpinachLogoNormal) as SvgComponent)
    : EmptySvg;
  return <Logo {...props} />;
};
