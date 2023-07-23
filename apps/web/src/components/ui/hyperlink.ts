import { hyperlinkStyles } from "~/components/ui/prose";
import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: hyperlinkStyles,
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
