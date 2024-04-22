import {
	defineConfig,
	defineGlobalStyles,
	defineTextStyles,
} from "@pandacss/dev";

export default defineConfig({
	jsxFramework: "qwik",

	// Whether to use css reset
	preflight: true,

	// Where to look for your css declarations
	include: ["./src/**/*.{js,jsx,ts,tsx}"],

	// Files to exclude
	exclude: [],

	globalCss: defineGlobalStyles({ html: { color: "text.body" } }),

	// Useful for theme customization
	theme: {
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
					brand: { value: "#F6490D" },
					background: {
						page: {
							value: {
								_light: "#FFFFFF",
								_dark: "{colors.slate.900}",
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
	},
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},
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
