import { style } from "@vanilla-extract/css";
import { stackCss } from "./stack.css";

export const siteHeaderCss = style([stackCss({ direction: "x", gap: "l" })]);
