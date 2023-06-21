import {
  fontSize,
  grayColors,
  sprinkles,
} from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";

export const maxContentWidth = "800px";
export const headerPaddingX = "xl3";
export const siteHeaderCss = style([
  sprinkles({ fontSize: "lg", paddingX: headerPaddingX, paddingY: "md" }),
  {
    position: "sticky",
    top: 0,
    background: "white",
    borderBottom: `1px solid transparent`,
    transition: "border-bottom 0.3s",
  },
]);
export const headerContentCss = style([
  stackCss({ direction: "x", gap: "lg" }),
  sprinkles({ marginX: "auto" }),
  { maxWidth: maxContentWidth },
]);
export const siteHeaderScrolledCss = style({
  borderBottomColor: grayColors["gray-200"],
});
export const logoCss = style([{ height: fontSize.xl2 }]);
export const siteTitleCss = style([sprinkles({ fontWeight: "bold" })]);
