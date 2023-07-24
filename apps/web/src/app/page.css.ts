import { headerPaddingX, maxContentWidth } from "~/app/header.css";
import { proseCss } from "~/components/ui/prose";
import { css, cx } from "~pandacss/css";
import { hstack, stack, vstack } from "~pandacss/patterns";

export const pageCss = css({ paddingX: headerPaddingX, paddingY: "6" });
export const pageContentCss = cx(
  vstack({ gap: "20", alignItems: "start" }),
  css({ marginX: "auto", width: "full", maxWidth: maxContentWidth })
);
export const sectionCss = cx(
  vstack({ gap: "16", alignItems: "start" }),
  css({ paddingY: "8" })
);
export const heroTitleCss = css({
  textStyle: "4xl",
  textWrap: "balance",
  maxWidth: maxContentWidth,
});

export const sectionHeadingCss = css({ textStyle: "3xl" });
export const jobEntrySectionCss = vstack({
  gap: "14",
  alignItems: "start",
});
export const timeCss = css({ color: "gray-500", fontStyle: "italic" });
export const jobEntryCss = cx(vstack({ gap: "10" }), css({ maxWidth: "60ch" }));
export const jobHeaderCss = stack({
  alignItems: { base: "stretch", md: "center" },
  justifyContent: { md: "space-between" },
  direction: { base: "column", md: "row" },
  gap: "6",
  width: "100%",
});
export const companyTitleCss = hstack({
  alignItems: "center",
  gap: "6",
  justifyContent: "space-between",
});
export const jobLinkIconCss = css({ height: "2em" });
export const jobTitleCss = css({ fontWeight: "bold", color: "text.soft" });
export const jobMetadataCss = vstack({
  gap: "md",
  alignItems: { base: "start", md: "end" },
});
export const jobDescriptionCss = cx(proseCss, css({ textAlign: "justify" }));

export const companyLogoSvgCss = css({ height: "3rem" });
