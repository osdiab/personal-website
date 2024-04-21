import { css } from "~gen/pandacss/css";

export const hyperlinkCss = css.raw({
	textDecoration: "underline",
	transition: "color 0.1s linear",
	color: "text.primary",
	"&:hover": {
		color: "text.primaryHighlight",
	},
});
