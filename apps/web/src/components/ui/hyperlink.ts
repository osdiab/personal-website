import { hyperlinkStyles } from "~/components/ui/prose";
import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: hyperlinkStyles,
  variants: {
    initColor: {
      body: { color: "text.body" },
      primaryDisplay: { color: "primary.display" },
    },
    activeColor: {
      primaryDisplay: { _hover: { color: "primary.display" } },
    },
  },
});
