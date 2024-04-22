import type { PropsOf } from "@builder.io/qwik";
import type { Tooltip } from "@qwik-ui/headless";
import { css } from "~gen/pandacss/css";

export const tooltipCss = css.raw({
	textStyle: "p",
	borderWidth: "1px",
	borderStyle: "solid",
	borderColor: "border.soft",
	background: "background.page",
	paddingX: "2",
	paddingY: "1",
	borderRadius: "md",
});

export const defaultTooltipProps: Omit<PropsOf<typeof Tooltip>, "content"> = {
	class: css(tooltipCss),
	offset: 8,
};
