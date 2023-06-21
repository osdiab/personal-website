import { headerPaddingX, maxContentWidth } from "@/app/header.css";
import { sprinkles } from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";

export const bodyCss = style([
  stackCss({ direction: "y", gap: "lg", alignItems: "stretch" }),
]);
export const mainContentCss = style([sprinkles({ paddingBottom: "xl7" })]);

export const footerCss = style([
  sprinkles({
    paddingX: headerPaddingX,
    paddingTop: "xl7",
    paddingBottom: "xl4",
  }),
  {
    background:
      "linear-gradient(0deg, rgba(255,125,80,.15) 30%, rgba(0,0,0,0) 100%)",
  },
]);

export const footerContentCss = style([
  sprinkles({ marginX: "auto" }),
  { maxWidth: maxContentWidth },
]);
