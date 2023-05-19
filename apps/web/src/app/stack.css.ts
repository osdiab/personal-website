import { recipe } from "@vanilla-extract/recipes";
import { space, sprinkles } from "./sprinkles.css";
import { mapValues } from "radash";

export const stackCss = recipe({
  base: [sprinkles({ display: "flex", alignItems: "center" })],
  variants: {
    gap: mapValues(space, (_value, key) => sprinkles({ gap: key })),
    direction: {
      x: [sprinkles({ flexDirection: "row" })],
      y: [sprinkles({ flexDirection: "column" })],
    },
  },
});
