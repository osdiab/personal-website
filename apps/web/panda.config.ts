import {
  defineConfig,
  defineGlobalStyles,
  defineSemanticTokens,
} from "@pandacss/dev";
import { preset } from "@pandacss/preset-panda";
import { mapValues } from "radash";
import { primaryColorVariables } from "~/utils/css-variables";

const zinc = mapValues(preset.theme.tokens.colors.zinc, (v) => v.value);

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

  globalCss: defineGlobalStyles({
    ":root": {
      "--full-dvh": "100vh",
      [primaryColorVariables.hue]: "14.67",
      [primaryColorVariables.saturation]: "100%",
      [primaryColorVariables.lightness]: "65%",
    },
    "@supports (height: 100dvh)": {
      ":root": {
        "--full-dvh": "100dvh",
      },
    },
    "*:focus:focus-visible": {
      outline: `2px solid hsl(${[
        primaryColorVariables.hue,
        primaryColorVariables.saturation,
        primaryColorVariables.lightness,
      ]
        .map((v) => `var(${v})`)
        .join(", ")})`,
    },
    /* Focusing the button with a mouse, touch, or stylus will not show outlines */
    "*:focus:not(:focus-visible)": { outline: "none" },
    html: { color: "text.body" },
  }),
  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        zoomIn: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOut: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
        zoomInSlight: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        zoomOutSlight: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      semanticTokens: defineSemanticTokens({
        colors: {
          text: {
            body: { value: { _light: zinc[900], _dark: zinc[50] } },
            soft: { value: { _light: zinc[600], _dark: zinc[200] } },
            primary: {
              normal: {
                value: {
                  _light: `hsl(var(${primaryColorVariables.hue}), 100%, 55%)`,
                  _dark: `hsl(var(${primaryColorVariables.hue}), 100%, 65%)`,
                },
              },
              highlight: {
                value: {
                  _light: `hsl(var(${primaryColorVariables.hue}), var(${primaryColorVariables.saturation}), 35%)`,
                  _dark: `hsl(var(${primaryColorVariables.hue}), var(${primaryColorVariables.saturation}), 85%)`,
                },
              },
            },
          },
          bg: {
            page: { value: { _light: zinc[50], _dark: zinc[800] } },
            highlight: {
              value: {
                _light: `hsl(var(${primaryColorVariables.hue}), calc(.5 * var(${primaryColorVariables.saturation})), 90%)`,
                _dark: `hsl(var(${primaryColorVariables.hue}), calc(.5 * var(${primaryColorVariables.saturation})), 35%)`,
              },
            },
          },
          border: {
            soft: { value: { _light: zinc[300], _dark: zinc[500] } },
            softer: { value: { _light: zinc[200], _dark: zinc[600] } },
          },
          brand: {
            primary: {
              value: `hsl(var(${primaryColorVariables.hue}), var(${primaryColorVariables.saturation}), var(${primaryColorVariables.lightness}))`,
            },
          },
        },
      }),
    },
  },

  // The output directory for your css system
  outdir: "./gen/pandacss",
});
