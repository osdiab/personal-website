import { defineConfig, defineSemanticTokens } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: defineSemanticTokens({
        colors: {
          bodyText: {
            value: { _light: "{zinc.800}", _dark: "{zinc.50}" },
          },
          primary: { value: "hsl(var(--primary-hue), 100%, 65%)" },
          primaryText: {
            value: {
              _light: "hsl(var(--primary-hue), 100%, 55%)",
              _dark: "hsl(var(--primary-hue), 100%, 75%)",
            },
          },
          primaryHighlight: {
            value: {
              _light: "hsl(var(--primary-hue), 100%, 75%)",
              _dark: "hsl(var(--primary-hue), 100%, 45%)",
            },
          },
        },
      }),
    },
  },

  // The output directory for your css system
  outdir: "./gen/pandacss",
});
