import { headerPaddingX, maxContentWidth } from "@/app/header.css";
import { sprinkles } from "@osdiab-website/ui/sprinkles.css";
import { stackCss } from "@osdiab-website/ui/stack.css";
import { style } from "@vanilla-extract/css";
import { fontSize } from "@osdiab-website/ui/sprinkles.css";

export const pageContentCss = style([stackCss({ direction: "y", gap: "xl5" })]);
export const sectionCss = style([
  stackCss({ direction: "y", gap: "xl4" }),
  sprinkles({ paddingX: headerPaddingX, paddingY: "lg", marginX: "auto" }),
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
  { maxWidth: maxContentWidth },
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
  sprinkles({}),
]);
export const jobTitleCss = style([
  sprinkles({ fontWeight: "bold", color: "gray-600" }),
]);
export const jobMetadataCss = style([
  stackCss({ direction: "y", gap: "md" }),
  sprinkles({ textAlign: { tablet: "end" } }),
]);

export const companyLogoSvgCss = style({ height: fontSize.xl5 });
