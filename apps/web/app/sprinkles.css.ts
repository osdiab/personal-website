import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const space = {
  none: "0px",
  xs: "2px",
  s: "4px",
  m: "8px",
  l: "12px",
  xl: "16px",
};

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": "screen and (min-width: 768px)" },
    desktop: { "@media": "screen and (min-width: 1024px)" },
  },
  defaultCondition: "mobile",
  properties: {
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    gap: space,
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    // logical directions
    // https://github.com/csstools/stylelint-use-logical
    paddingBlockStart: space,
    paddingBlockEnd: space,
    paddingInlineStart: space,
    paddingInlineEnd: space,
  },
  shorthands: {
    padding: [
      "paddingBlockStart",
      "paddingBlockEnd",
      "paddingInlineStart",
      "paddingInlineEnd",
    ],
    paddingX: ["paddingInlineStart", "paddingInlineEnd"],
    paddingY: ["paddingBlockStart", "paddingBlockEnd"],
    paddingLeft: ["paddingInlineStart"],
    paddingRight: ["paddingInlineEnd"],
    paddingTop: ["paddingInlineStart"],
    paddingL: ["paddingInlineStart"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

export const grayColors = {
  "gray-50": "#f9fafb",
  "gray-100": "#f3f4f6",
  "gray-200": "#e5e7eb",
  "gray-300": "#d1d5db",
  "gray-400": "#9ca3af",
  "gray-500": "#6b7280",
  "gray-600": "#4b5563",
  "gray-700": "#374151",
  "gray-800": "#1f2937",
  "gray-900": "#111827",
};

export const sprinkles = createSprinkles(responsiveProperties);
