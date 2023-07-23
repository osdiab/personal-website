// eslint-disable-next-line no-restricted-imports
import { useTheme as useThemeUntyped } from "next-themes";
import { useMemo } from "react";
import { z } from "zod";

export const themeSchema = z.enum(["system", "dark", "light"]);
export type Theme = z.infer<typeof themeSchema>;
const resolvedThemeSchema = z.enum(["dark", "light"]);
export type ResolvedTheme = z.infer<typeof resolvedThemeSchema>;

const laxThemeSchema = themeSchema.optional().catch("system").default("system");

export function useTheme() {
  const themeReturn = useThemeUntyped();
  return useMemo(
    () => ({
      ...themeReturn,
      themes: themeSchema.array().parse(themeReturn.themes),
      forcedTheme: themeSchema.optional().parse(themeReturn.forcedTheme),
      theme: laxThemeSchema.parse(themeReturn.theme),
      resolvedTheme: themeSchema
        .optional()
        // it returns "system" before it resolves, to avoid confusion we remove
        // that
        .transform((resolved) => (resolved === "system" ? undefined : resolved))
        .parse(themeReturn.resolvedTheme),
      // no need to wrap this fn, we know that restricting the input is safe
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      setTheme: themeReturn.setTheme as (theme: Theme) => void,
    }),
    [themeReturn]
  );
}
