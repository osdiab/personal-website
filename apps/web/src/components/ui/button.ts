import { cva } from "~pandacss/css";
import type { SystemStyleObject } from "~pandacss/types";

const textButtonVariant: SystemStyleObject = {
  background: "transparent",
  border: "none",
  borderColor: "none",
  borderWidth: "0",
  borderStyle: "none",
  color: "text.primary.normal",
  _hover: { color: "text.primary.highlight", background: "transparent" },
};
export const buttonCss = cva({
  base: {
    display: "inline-block",
    cursor: "pointer",
    paddingX: "4",
    paddingY: "2",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "text.primary.normal",
    borderRadius: "md",
    background: "text.primary.normal",
    color: "bg.page",
    _hover: {
      background: "text.primary.highlight",
      borderColor: "text.primary.highlight",
    },
  },
  variants: {
    type: {
      secondary: {
        background: "transparent",
        color: "text.primary.normal",
        _hover: { background: "transparent" },
      },
      text: textButtonVariant,
      plainText: { ...textButtonVariant, color: "text.body" },
    },
    padding: { none: { paddingX: "0", paddingY: "0" } },
    border: { none: { border: "none" } },
  },
});
