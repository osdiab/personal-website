import { recipe } from "@vanilla-extract/recipes";
import { alignItems, justifyContent, space, sprinkles } from "./sprinkles.css";
import { mapValues, objectify } from "radash";

export const stackCss = recipe({
  base: [sprinkles({ display: "flex" })],
  variants: {
    display: {
      flex: sprinkles({ display: "flex" }),
      inlineFlex: sprinkles({ display: "inline-flex" }),
    },
    gap: mapValues(space, (_value, key) => sprinkles({ gap: key })),
    direction: {
      x: [sprinkles({ flexDirection: "row" })],
      y: [sprinkles({ flexDirection: "column" })],
    },
    alignItems: mapValues(
      objectify(alignItems, (v) => v),
      (v) => [sprinkles({ alignItems: v })]
    ),
    justifyContent: mapValues(
      objectify(justifyContent, (v) => v),
      (v) => [sprinkles({ justifyContent: v })]
    ),
    // not clear how to achieve media query variants with recipes in Vanilla
    // Extract unfortunately
    // https://github.com/vanilla-extract-css/vanilla-extract/discussions/497
    directionTablet: {
      x: [sprinkles({ flexDirection: { tablet: "row" } })],
      y: [sprinkles({ flexDirection: { tablet: "column" } })],
    },
    alignItemsTablet: mapValues(
      objectify(alignItems, (v) => v),
      (v) => [sprinkles({ alignItems: { tablet: v } })]
    ),
    justifyContentTablet: mapValues(
      objectify(justifyContent, (v) => v),
      (v) => [sprinkles({ justifyContent: { tablet: v } })]
    ),
    directionDesktop: {
      x: [sprinkles({ flexDirection: { desktop: "row" } })],
      y: [sprinkles({ flexDirection: { desktop: "column" } })],
    },
    alignItemsDesktop: mapValues(
      objectify(alignItems, (v) => v),
      (v) => [sprinkles({ alignItems: { tablet: v } })]
    ),
    justifyContentDesktop: mapValues(
      objectify(justifyContent, (v) => v),
      (v) => [sprinkles({ justifyContent: { desktop: v } })]
    ),
  },
});
