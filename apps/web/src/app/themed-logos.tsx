"use client";

import EveryOrgLogoDark from "~/assets/logos/every-org-dark.svg";
import EveryOrgLogoLight from "~/assets/logos/every-org-light.svg";
import SpinachLogoNormal from "~/assets/logos/spinach.svg";
import SpinachLogoInverted from "~/assets/logos/spinach-inverted.svg";
import { WaitOnTheme } from "~/components/wait-on-theme";
import { useTheme } from "~/utils/theme";
import type { ComponentProps, FC } from "react";

type SvgComponent = FC<ComponentProps<"svg">>;

const EmptySvg: SvgComponent = (props) => <svg {...props} />;

interface ThemeDependentLogoProps extends ComponentProps<SvgComponent> {
  DarkLogo: SvgComponent;
  LightLogo: SvgComponent;
}

function ThemeDependentLogo({
  DarkLogo,
  LightLogo,
  ...props
}: ThemeDependentLogoProps) {
  const { resolvedTheme } = useTheme();
  switch (resolvedTheme) {
    case "dark": {
      return <DarkLogo {...props} />;
    }
    case "light": {
      return <LightLogo {...props} />;
    }
    default: {
      return <EmptySvg {...props} />;
    }
  }
}
export const EveryOrgLogo: SvgComponent = (props) => (
  <WaitOnTheme>
    <ThemeDependentLogo
      DarkLogo={EveryOrgLogoLight}
      LightLogo={EveryOrgLogoDark}
      {...props}
    />
  </WaitOnTheme>
);

export const SpinachLogo: SvgComponent = (props) => (
  <WaitOnTheme>
    <ThemeDependentLogo
      DarkLogo={SpinachLogoInverted}
      LightLogo={SpinachLogoNormal}
      {...props}
    />
  </WaitOnTheme>
);
