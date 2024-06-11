import type { SVGProps } from "@builder.io/qwik";
import type { AddCssProp } from "~/utils/css";
import { css } from "~gen/pandacss/css";

export const defaultLogoCss = css.raw({ height: "100%", width: "auto" });
export type LogoProps = AddCssProp<
	Omit<SVGProps<SVGElement>, "xlmns" | "fill" | "class">
>;
