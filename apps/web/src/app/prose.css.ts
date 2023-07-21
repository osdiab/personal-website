import { css } from "~pandacss/css";
import { SystemStyleObject } from "~pandacss/types";

const paragraphSpacingStyle: SystemStyleObject = {
  "&:not(:first-child)": { marginBlockStart: "1em" },
};

// this needs to be in this file so that panda can pick it up at compile time
export const hyperlinkStyles: SystemStyleObject = {
  color: "primaryText",
  textDecoration: "underline",
  display: "inline-block",
  cursor: "pointer",
  fontWeight: "semibold",
  border: "none",
  background: "none",
  transition: "color 0.1s linear",
  _hover: { color: "primaryHighlight" },
};

export const proseCss = css({
  "& a": hyperlinkStyles,
  "& p": paragraphSpacingStyle,
  "& h1": paragraphSpacingStyle,
  "& h2": paragraphSpacingStyle,
  "& h3": paragraphSpacingStyle,
  "& h4": paragraphSpacingStyle,
  "& h5": paragraphSpacingStyle,
  "& h6": paragraphSpacingStyle,
});
