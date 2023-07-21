import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
} from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  conditions: {
    light: "[data-theme=light] &",
    dark: "[data-theme=dark] &",
  },

  globalCss: defineGlobalStyles({ html: { color: "bodyText" } }),
  staticCss: {
    css: [
      {
        properties: {
          // needed so the tokens used in the theming below are definitely
          // present in the generated CSS
          color: ["zinc.900", "zinc.50"],
        },
      },
    ],
  },
  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: defineSemanticTokens({
        colors: {
          bodyText: {
            value: { _light: "#18181b", _dark: "#fafafa" },
          },
          pageBackground: {
            value: { _light: "#fafafa", _dark: "#18181b" },
          },
          border: {
            soft: {
              value: { _light: "hsl(0, 0%, 80%)", _dark: "hsl(0, 0%, 20%)" },
            },
          },
          primary: {
            display: { value: "hsl(var(--color-primary-hue), 100%, 65%)" },
            text: {
              value: {
                _light: "hsl(var(--color-primary-hue), 100%, 55%)",
                _dark: "hsl(var(--color-primary-hue), 100%, 65%)",
              },
            },
            highlight: {
              value: {
                _light: "hsl(var(--color-primary-hue), 60%, 55%)",
                _dark: "hsl(var(--color-primary-hue), 60%, 65%)",
              },
            },
          },
        },
      }),
    },
  },

  // The output directory for your css system
  outdir: "./gen/pandacss",
});
