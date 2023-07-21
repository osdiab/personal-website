import { hyperlinkStyles } from "~/app/hyperlink.css";
import { css } from "~pandacss/css";

// & h1:not(:first-child), & h2:not(first-child), ...
const childTextElementSelector = ["h1", "h2", "h3", "h4", "h5", "h6", "p"]
  .map((s) => `& ${s}:not(:first-child)`)
  .join(", ");

export const proseCss = css({
  "& a": hyperlinkStyles,
  [childTextElementSelector]: { marginBlockStart: "1em" },
});
