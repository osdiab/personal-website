import { css } from "~gen/pandacss/css";

const paragraphSpacingStyle = {
	"&:not(:first-child)": { marginBlockStart: "1em" },
};

export const interactiveTransitionCss = css.raw({
	transitionDuration: "interactive",
	transitionTimingFunction: "linear",
});

export const hyperlinkBaseCss = css.raw({
	textDecoration: "underline",
	fontWeight: "bold",
	display: "inline-block",
	cursor: "pointer",
	border: "none",
	background: "none",
	color: "text.primary",
	"&:hover": { color: "text.primaryHighlight" },
});

// this needs to be in this file so that panda can pick it up at compile time
export const hyperlinkCss = css.raw(
	hyperlinkBaseCss,
	interactiveTransitionCss,
	{
		transitionProperty: "color",
		color: "text.primary",
		"&:hover": { color: "text.primaryHighlight" },
	},
);

export const proseCss = css.raw({
	maxWidth: {
		mdDown:
			"calc(token(sizes.fullPageWidth) - token(spacing.padding.bodyContent.x) * 2)",
		md: "proseWidth.max",
	},
	"& a": hyperlinkCss,
	"& p": { ...paragraphSpacingStyle, textStyle: "p" },
	"& h1": { ...paragraphSpacingStyle, textStyle: "h1" },
	"& h2": { ...paragraphSpacingStyle, textStyle: "h2" },
	"& h3": { ...paragraphSpacingStyle, textStyle: "h3" },
	"& h4": { ...paragraphSpacingStyle, textStyle: "h4" },
	"& h5": { ...paragraphSpacingStyle, textStyle: "h5" },
	"& h6": { ...paragraphSpacingStyle, textStyle: "h6" },
	"& ul": {
		...paragraphSpacingStyle,
		textStyle: "sm",
		listStyleType: "disc",
		marginInlineStart: "4",
	},
	"& ul ul": { listStyleType: "circle", marginInlineStart: "4" },
	"& ul ul ul": { listStyleType: "square", marginInlineStart: "4" },
	"& ol": { listStyleType: "decimal", marginInlineStart: "4" },
	"& ol ol": { listStyleType: "lower-alpha", marginInlineStart: "4" },
	"& ol ol ol": { listStyleType: "lower-roman", marginInlineStart: "4" },
});
