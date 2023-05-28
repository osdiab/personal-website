import { fontSize, grayColors, sprinkles } from "@/common/styles/sprinkles.css";
import { stackCss } from "@/common/styles/stack.css";
import { style } from "@vanilla-extract/css";

export const siteHeaderCss = style([
  stackCss({ direction: "x", gap: "l" }),
  sprinkles({ fontSize: "lg", padding: "m" }),
  {
    position: "sticky",
    top: 0,
    background: "white",
    borderBottom: `1px solid transparent`,
    transition: "border-bottom 0.3s",
  },
]);
export const siteHeaderScrolledCss = style({
  borderBottomColor: grayColors["gray-200"],
});
export const logoCss = style([{ height: fontSize.xl2 }]);
export const siteTitleCss = style([sprinkles({ fontWeight: "bold" })]);
