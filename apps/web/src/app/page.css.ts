import { headerPaddingX, maxContentWidth } from "~/app/header.css";
import { sprinkles } from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";
import { fontSize } from "@osdiab-website/ui/sprinkles.css";
import { proseCss } from "@osdiab-website/ui/prose.css";

export const pageCss = style([
  sprinkles({ paddingX: headerPaddingX, paddingY: "xl3" }),
]);
export const pageContentCss = style([
  stackCss({ direction: "y", gap: "xl5" }),
  sprinkles({ marginX: "auto" }),
  { width: "100%", maxWidth: maxContentWidth },
]);
export const sectionCss = style([
  stackCss({ direction: "y", gap: "xl4" }),
  sprinkles({ paddingY: "lg" }),
]);
export const heroTitleCss = style([
  sprinkles({ textSize: "xl4", textWrap: "balance" }),
  { maxWidth: maxContentWidth },
]);
export const sectionHeadingCss = style([sprinkles({ textSize: "xl3" })]);
export const jobEntrySectionCss = style([
  stackCss({ direction: "y", gap: "xl5" }),
]);
export const timeCss = style([
  sprinkles({ color: "gray-500", fontStyle: "italic" }),
]);
export const jobEntryCss = style([
  stackCss({ direction: "y", gap: "xl4" }),
  { maxWidth: "60ch" },
]);
export const jobHeaderCss = style([
  stackCss({
    direction: "y",
    alignItems: "flex-start",
    directionTablet: "x",
    alignItemsTablet: "center",
    justifyContentTablet: "space-between",
    gap: "lg",
  }),
]);
export const companyTitleCss = style([
  stackCss({ direction: "x", alignItems: "center", gap: "lg" }),
]);
export const jobLinkIconCss = style([{ height: fontSize.lg }]);
export const jobTitleCss = style([
  sprinkles({ fontWeight: "bold", color: "gray-600" }),
]);
export const jobMetadataCss = style([
  stackCss({ direction: "y", gap: "md" }),
  sprinkles({ textAlign: { tablet: "end" } }),
]);
export const jobDescriptionCss = style([proseCss, { textAlign: "justify" }]);

export const companyLogoSvgCss = style({ height: fontSize.xl5 });
