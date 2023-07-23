import { css, cx } from "~pandacss/css";
import { hstack } from "~pandacss/patterns";
import { SystemProperties } from "~pandacss/types/style-props";

export const maxContentWidth = "800px";
export const headerPaddingX: SystemProperties["paddingX"] = {
  base: "5",
  md: "6",
};

export const siteHeaderCss = css({
  position: "sticky",
  top: 0,
  transition: "border-bottom 0.3s, background 0.2s ease-out",
  fontSize: "lg",
  paddingX: headerPaddingX,
  paddingY: "2",
  background: "pageBackground",
  borderBottom: `1px solid transparent`,
});
export const headerContentCss = cx(
  hstack({
    gap: "6",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  css({ marginX: "auto", maxWidth: maxContentWidth })
);
const headerSectionCss = hstack({ gap: "6", alignItems: "center" });
export const headerLeftCss = headerSectionCss;
export const headerRightCss = headerSectionCss;
export const siteHeaderScrolledCss = css({
  borderBottomColor: "border.soft",
});
export const logoCss = css({ height: "1em" });
export const siteTitleCss = css({ fontWeight: "bold" });
