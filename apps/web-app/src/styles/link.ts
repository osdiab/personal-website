import { css } from "~gen/pandacss/css";

export const hyperlinkCss = css.raw({
	textDecoration: "underline",
	transition: "color 0.1s linear",
	color: "text.primary",
	display: "inline-block",
	cursor: "pointer",
	border: "none",
	background: "none",

	"&:hover": { color: "text.primaryHighlight" },
});
