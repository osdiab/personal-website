import { hyperlinkStyles } from "~/app/prose.css";
import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: hyperlinkStyles,
  variants: {
    initColor: {
      bodyText: { color: "bodyText" },
      largePrimary: { color: "primary" },
    },
    activeColor: {
      largePrimary: { _hover: { color: "primary" } },
    },
  },
});
