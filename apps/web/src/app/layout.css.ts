import { headerPaddingX, maxContentWidth } from "@/app/header.css";
import { sprinkles } from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";

export const bodyCss = style([
  { minHeight: ["100dvh", "100vh"] },
  stackCss({ direction: "y", gap: "lg", alignItems: "stretch" }),
]);
export const mainContentCss = style([sprinkles({ paddingBottom: "xl7" })]);

export const footerCss = style([
  sprinkles({
    marginTop: "auto",
    position: "relative",
  }),
  {
    ":before": {
      display: "block",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      content: '""',
      zIndex: -1,
      background:
        "linear-gradient(135deg, #ff7D0055 25%, transparent 25%) -19px 0/ 38px 38px, linear-gradient(225deg, #ff7D00 25%, transparent 25%) -19px 0/ 38px 38px, linear-gradient(315deg, #ff7D0055 25%, transparent 25%) 0px 0/ 38px 38px, linear-gradient(45deg, #ff7D00 25%, #e5e5f7 25%) 0px 0/ 38px 38px",
      opacity: 0.25,
      maskImage:
        "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
    },
  },
]);

export const footerWrapperCss = style([
  sprinkles({
    paddingX: headerPaddingX,
    paddingTop: "xl7",
    paddingBottom: "xl4",
  }),
]);

export const footerContentCss = style([
  sprinkles({
    marginX: "auto",
  }),
  { maxWidth: maxContentWidth },
]);
