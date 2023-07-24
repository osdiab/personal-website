import { hyperlinkStyles } from "~/components/ui/prose";
import { cva } from "~pandacss/css";

export const hyperlinkCss = cva({
  base: hyperlinkStyles,
  variants: {
    initColor: {
      body: { color: "text.body" },
      "brand.primary": { color: "brand.primary" },
    },
    activeColor: {
      "brand.primary": { _hover: { color: "brand.primary" } },
    },
  },
});
