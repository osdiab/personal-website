import { globalStyle, style } from "@vanilla-extract/css";
import { hyperlinkStyles } from "./hyperlink.css";

export const proseCss = style({});
globalStyle(`${proseCss} a`, hyperlinkStyles);
globalStyle(
  ["h1", "h2", "h3", "h4", "h5", "h6", "p"]
    .map((s) => `${proseCss} ${s}:not(:first-child)`)
    .join(", "),
  { marginBlockStart: "1em" }
);
