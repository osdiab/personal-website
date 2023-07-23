import { hyperlinkStyles } from "~/components/ui/prose";
import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: hyperlinkStyles,
  variants: {
    initColor: {
      body: { color: "text.body" },
      "primary.display": { color: "primary.display" },
    },
    activeColor: {
      "primary.display": { _hover: { color: "primary.display" } },
    },
  },
});
