import { headerPaddingX } from "@/app/header.css";
import { sprinkles } from "@/common/styles/sprinkles.css";
import { style } from "@vanilla-extract/css";

export const sectionCss = style([
  sprinkles({ paddingX: headerPaddingX, paddingY: "lg" }),
]);
export const heroTitleCss = style([
  sprinkles({ textSize: "xl4" }),
  { maxWidth: "40ch" },
]);
