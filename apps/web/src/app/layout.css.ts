import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";

export const contentCss = style([
  stackCss({ direction: "y", gap: "lg", alignItems: "stretch" }),
]);
