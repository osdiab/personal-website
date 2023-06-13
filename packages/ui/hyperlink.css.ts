import { StyleRule, style } from "@vanilla-extract/css";

export const hyperlinkStyles: StyleRule = {
  color: "blue",
  textDecoration: "underline",
};
export const hyperlinkCss = style(hyperlinkStyles);
