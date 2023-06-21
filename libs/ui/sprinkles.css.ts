import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const space = {
  none: "0px",
  xs: "2px",
  sm: "4px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  xl2: "24px",
  xl3: "32px",
  xl4: "48px",
  xl5: "64px",
};
const spaceWithAuto = { ...space, auto: "auto" };

export const fontWeight = {
  base: 400,
  bold: 600,
};

/**
 * Common font sizes, follows same as Tailwind
 */
export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  xl2: "1.5rem",
  xl3: "1.875rem",
  xl4: "2.25rem",
  xl5: "3rem",
  xl6: "3.75rem",
  xl7: "4.5rem",
  xl8: "6rem",
  xl9: "8rem",
};

export const lineHeight: Record<keyof typeof fontSize, string> = {
  xs: "1rem",
  sm: "1.25rem",
  base: "1.5rem",
  lg: "1.75rem",
  xl: "1.75rem",
  xl2: "2rem",
  xl3: "2.25rem",
  xl4: "2.55rem",
  xl5: "1",
  xl6: "1",
  xl7: "1",
  xl8: "1",
  xl9: "1",
};

export const justifyContent = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
  "space-around",
  "space-between",
] as const;

export const alignItems = [
  "stretch",
  "flex-start",
  "center",
  "flex-end",
] as const;

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
    justifyContent,
    alignItems,
    fontSize,
    lineHeight,
    fontWeight,
    // logical directions
    // https://github.com/csstools/stylelint-use-logical
    paddingBlockStart: space,
    paddingBlockEnd: space,
    paddingInlineStart: space,
    paddingInlineEnd: space,
    marginBlockStart: spaceWithAuto,
    marginBlockEnd: spaceWithAuto,
    marginInlineStart: spaceWithAuto,
    marginInlineEnd: spaceWithAuto,
  },
  shorthands: {
    textSize: ["fontSize", "lineHeight"],
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
    paddingTop: ["paddingBlockStart"],
    paddingBottom: ["paddingBlockEnd"],
    margin: [
      "marginBlockStart",
      "marginBlockEnd",
      "marginInlineStart",
      "marginInlineEnd",
    ],
    marginX: ["marginInlineStart", "marginInlineEnd"],
    marginY: ["marginBlockStart", "marginBlockEnd"],
    marginLeft: ["marginInlineStart"],
    marginRight: ["marginInlineEnd"],
    marginTop: ["marginBlockStart"],
    marginBottom: ["marginBlockEnd"],
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
