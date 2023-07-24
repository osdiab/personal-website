import { css, cx } from "~pandacss/css";
import { hstack } from "~pandacss/patterns";

export const baseMenuCss = css({
  zIndex: 50,
  minWidth: "8rem",
  overflow: "hidden",
  borderRadius: "md",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "border.soft",
  bg: "bg.page",
  color: "text.body",
  shadow: "md",
  "&[data-state=open]": {
    animation: "zoomInSlight 0.2s ease-out, fadeIn 0.2s ease-out",
  },
  "&[data-state=closed]": {
    animation: "zoomOutSlight 0.2s ease-in-out, fadeOut 0.2s ease-in-out",
  },
});

export const baseMenuItemCss = cx(
  hstack(),
  css({
    cursor: "pointer",
    userSelect: "none",
    padding: 2,
    fontSize: "sm",
    outline: "none",
    _focus: { bg: "bg.highlight", color: "text.body" },
    "&[data-disabled]": {
      pointerEvents: "none",
      opacity: 0.5,
    },
  })
);

export const baseMenuIndicatorWrapperCss = css({
  width: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
