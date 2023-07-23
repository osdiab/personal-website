import { cva } from "~pandacss/css";
import { SystemStyleObject } from "~pandacss/types";

const textButtonVariant: SystemStyleObject = {
  background: "transparent",
  border: "none",
  color: "primary.text",
  _hover: { color: "primary.highlight", background: "transparent" },
};
export const buttonCss = cva({
  base: {
    display: "inline-block",
    cursor: "pointer",
    paddingX: "4",
    paddingY: "2",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primary.text",
    borderRadius: "md",
    background: "primary.text",
    color: "bg.page",
    _hover: {
      background: "primary.highlight",
      borderColor: "primary.highlight",
    },
  },
  variants: {
    type: {
      secondary: {
        background: "transparent",
        color: "primary.text",
        _hover: { background: "transparent" },
      },
      text: textButtonVariant,
      plainText: { ...textButtonVariant, color: "text.body" },
    },
    padding: { none: { padding: 0 } },
  },
});
