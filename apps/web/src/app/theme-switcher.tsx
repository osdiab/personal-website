"use client";

import { Moon, Stars, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "~/components/ui/dropdown-menu";
import { hstack } from "~pandacss/patterns";
import { buttonCss } from "~/components/ui/button";
import { cx } from "~pandacss/css";
import { WaitOnTheme } from "~/components/wait-on-theme";
import type { Theme } from "~/utils/theme";
import { themeSchema, useTheme } from "~/utils/theme";

// TODO: add i18n
const nameForTheme: Record<Theme, string> = {
  dark: "Dark",
  light: "Light",
  system: "System",
};
function ThemeIcon({ theme }: { theme: Theme }) {
  switch (theme) {
    case "system":
      return <Stars />;
    case "dark":
      return <Moon />;
    case "light":
      return <Sun />;
  }
}

export const ThemeSwitcher = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();

  if (!theme) {
    return null;
  }
  return (
    <WaitOnTheme>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cx(
            buttonCss({
              type: "plainText",
              padding: "none",
              border: "none",
            }),
            className
          )}
        >
          <ThemeIcon theme={theme} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup
            onValueChange={(option) => setTheme(themeSchema.parse(option))}
            value={theme}
          >
            {themeSchema.options.map((option) => (
              <DropdownMenuRadioItem
                key={option}
                className={hstack({ justifyContent: "start" })}
                value={option}
              >
                <ThemeIcon theme={option} />
                <span>{nameForTheme[option]}</span>
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </WaitOnTheme>
  );
};
