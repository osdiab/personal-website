import { recipe } from "@vanilla-extract/recipes";
import { alignItems, justifyContent, space, sprinkles } from "./sprinkles.css";
import { mapValues, objectify } from "radash";

export const stackCss = recipe({
  base: [sprinkles({ display: "flex", alignItems: "center" })],
  variants: {
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
  },
});
