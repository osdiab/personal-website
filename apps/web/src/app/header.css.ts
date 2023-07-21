export const maxContentWidth = "800px";
export const headerPaddingX: Parameters<typeof sprinkles>[0]["paddingX"] = {
  mobile: "xl2",
  tablet: "xl3",
};

export const siteHeaderCss = style([
  sprinkles({ fontSize: "lg", paddingX: headerPaddingX, paddingY: "md" }),
  {
    position: "sticky",
    top: 0,
    background: "white",
    borderBottom: `1px solid transparent`,
    transition: "border-bottom 0.3s",
  },
]);
export const headerContentCss = style([
  stackCss({
    direction: "x",
    gap: "lg",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  sprinkles({ marginX: "auto" }),
  { maxWidth: maxContentWidth },
]);
const headerSectionCss = [
  stackCss({ direction: "x", gap: "lg", alignItems: "center" }),
];
export const headerLeftCss = style([...headerSectionCss]);
export const headerRightCss = style([...headerSectionCss]);
export const siteHeaderScrolledCss = style({
  borderBottomColor: grayColors["gray-200"],
});
export const logoCss = style([{ height: fontSize.xl2 }]);
export const siteTitleCss = style([sprinkles({ fontWeight: "bold" })]);
