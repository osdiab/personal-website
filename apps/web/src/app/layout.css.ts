import { sprinkles } from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";

export const contentCss = style([
  stackCss({ direction: "y", gap: "lg", alignItems: "stretch" }),
]);
export const mainContentCss = style([sprinkles({ paddingBottom: "xl7" })]);
