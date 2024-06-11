import { defineConfig, defineTextStyles } from "@pandacss/dev";
import type { Config } from "@pandacss/dev";
import * as R from "ramda";
import { rootThemeAttribute } from "~/components/theme-switcher/constants";

type Theme = Config["theme"];

type NestedObject = {
	[key: string]: string | NestedObject;
};

/**
 * Duplicates the _light and _dark values in the theme object to _osLight and
 * _osDark (recursively) so that the prefers-color-scheme preference behavs as
 * expected
 */
function addOsColorThemes(theme: NestedObject): NestedObject {
	if (!theme || typeof theme !== "object") {
		return theme;
	}
	const entries = Object.entries(theme);
	const additionalEntries = [
		"_light" in theme && typeof theme["_light"] === "string"
			? ["_osLight", theme["_light"]]
			: null,
		"_dark" in theme && typeof theme["_dark"] === "string"
			? ["_osDark", theme["_dark"]]
			: null,
	].filter(R.isNotNil);
	return Object.fromEntries([
		...additionalEntries,
		...entries.map(([key, value]) => [
			key,
			addOsColorThemes(value as NestedObject),
		]),
	]);
}

const brandColor = "#F6490D";

const theme: Theme = {
	extend: {
		textStyles: defineTextStyles({
			p: { value: { fontSize: "sm", lineHeight: "1.5em" } },
			h1: {
				value: {
					fontSize: "2xl",
					lineHeight: "1.2em",
					fontWeight: "semibold",
				},
			},
			h2: {
				value: { fontSize: "2xl", lineHeight: "1.2em", fontWeight: "normal" },
			},
			h3: {
				value: {
					fontSize: "xl",
					lineHeight: "1.3em",
					fontWeight: "semibold",
				},
			},
			h4: {
				value: { fontSize: "xl", lineHeight: "1.3em", fontWeight: "normal" },
			},
			h5: {
				value: {
					fontSize: "lg",
					lineHeight: "1.3em",
					fontWeight: "semibold",
				},
			},
			h6: {
				value: {
					fontSize: "md",
					lineHeight: "1.4em",
					fontWeight: "semibold",
				},
			},
		}),
		semanticTokens: {
			durations: { interactive: { value: "0.1s" } },
			colors: {
				brand: { value: brandColor },
				background: {
					page: {
						value: {
							_light: "#FFFFFF",
							_dark: "{colors.slate.900}",
						},
					},
					tooltip: {
						value: {
							_light: "{colors.slate.100}",
							_dark: "{colors.slate.800}",
						},
					},
					select: {
						highlight: {
							value: {
								_light: "{colors.slate.200}",
								_dark: "{colors.slate.700}",
							},
						},
					},
				},
				text: {
					body: {
						value: {
							_light: "{colors.slate.950}",
							_dark: "{colors.slate.50}",
						},
					},
					soft: {
						value: {
							_light: "{colors.slate.600}",
							_dark: "{colors.slate.400}",
						},
					},
					primary: { value: "#F6490D" },
					primaryHighlight: { value: "#FF7D50" },
				},
				border: {
					soft: {
						value: {
							_light: "{colors.slate.200}",
							_dark: "{colors.slate.700}",
						},
					},
				},
			},
		},
	},
};
export default defineConfig({
	jsxFramework: "qwik",

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	conditions: {
		extend: {
			light: `[${rootThemeAttribute}=light] &`,
			dark: `[${rootThemeAttribute}=dark] &`,
			osLight: [
				`:not([${rootThemeAttribute}]) &`,
				"@media (prefers-color-scheme: light)",
			],
			osDark: [
				`:not([${rootThemeAttribute}]) &`,
				"@media (prefers-color-scheme: dark)",
			],
			autoColorTheme: `body:not([${rootThemeAttribute}]) &`,
		},
	},

	// Useful for theme customization
	theme: addOsColorThemes(theme as NestedObject) as Theme,

	patterns: {
		extend: {
			invisible: {
				description: "Visually hidden but accessible to screen readers",
				transform() {
					return {
						position: "absolute",
						height: 0,
						width: 0,
						opacity: 0,
						transform: "translateX(100vw)",
					};
				},
			},
		},
	},

	importMap: "~gen/pandacss",

	// The output directory for your css system
	outdir: "./gen/pandacss",
});
