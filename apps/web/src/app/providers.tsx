"use client";

// rule is there to ensure safer usage, provider is a singleton
// eslint-disable-next-line no-restricted-imports
import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider themes={["light", "dark"]} enableSystem>
      {children}
    </ThemeProvider>
  );
}
