import { headerPaddingX, maxContentWidth } from "~/app/header.css";
import { css, cx } from "~pandacss/css";
import { hstack, vstack } from "~pandacss/patterns";

export const bodyCss = css({
  minHeight: "var(--full-dvh)",
  transition: "background 0.3s ease-out",
  background: "pageBackground",
});
export const bodyContentCss = vstack({ gap: "6", alignItems: "stretch" });
export const mainContentCss = css({ paddingBlockEnd: "20" });

export const footerCss = cx(
  css({
    marginTop: "auto",
    position: "relative",
  }),
  css({
    _before: {
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
  })
);

export const footerWrapperCss = css({
  paddingX: headerPaddingX,
  paddingBlockStart: "28",
  paddingBlockEnd: "10",
});

export const footerContentCss = cx(
  css({
    marginX: "auto",
    maxWidth: maxContentWidth,
  }),
  hstack({ gap: "6", justifyContent: "space-between" })
);
