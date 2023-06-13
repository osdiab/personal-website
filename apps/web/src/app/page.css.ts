import { headerPaddingX } from "@/app/header.css";
import { sprinkles } from "ui/sprinkles.css";
import { stackCss } from "ui/stack.css";
import { style } from "@vanilla-extract/css";

export const pageContentCss = style([stackCss({ direction: "y", gap: "xl" })]);
export const sectionCss = style([
  stackCss({ direction: "y", gap: "lg" }),
  sprinkles({ paddingX: headerPaddingX, paddingY: "lg" }),
]);
export const heroTitleCss = style([
  sprinkles({ textSize: "xl4" }),
  { maxWidth: "40ch" },
]);
export const sectionHeadingCss = style([sprinkles({ textSize: "xl2" })]);
export const jobEntrySectionCss = style([
  stackCss({ direction: "y", gap: "lg" }),
]);
export const jobEntryCss = style([
  stackCss({ direction: "y", gap: "md" }),
  { maxWidth: "60ch" },
]);
