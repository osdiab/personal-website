import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: {
    color: "primary.text",
    textDecoration: "underline",
    display: "inline-block",
    cursor: "pointer",
    fontWeight: "semibold",
    border: "none",
    background: "none",
    transition: "color 0.1s linear",
    _hover: { color: "primary.highlight" },
  },
  variants: {
    initColor: {
      bodyText: { color: "bodyText" },
      primaryDisplay: { color: "primary.display" },
    },
    activeColor: {
      primaryDisplay: { _hover: { color: "primary.display" } },
    },
  },
});
