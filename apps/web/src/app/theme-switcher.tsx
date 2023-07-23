"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "next-themes";
import { z } from "zod";
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

const themeSchema = z.enum(["system", "dark", "light"]);
type Theme = z.infer<typeof themeSchema>;
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
export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const themeReturn = useTheme();
  const { theme, setTheme } = useMemo(
    () => ({
      theme: themeSchema.optional().parse(themeReturn.theme),
      setTheme: (target: Theme) => themeReturn.setTheme(target),
    }),
    [themeReturn]
  );

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return null;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={buttonCss({ type: "plainText", padding: "none" })}
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
  );
};
