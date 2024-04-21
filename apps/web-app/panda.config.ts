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
				colors: {
					brand: { value: "#F6490D" },
					background: {
						page: { value: "#FFFFFF" },
					},
					text: {
						body: { value: "{colors.slate.900}" },
						soft: { value: "{colors.slate.500}" },
						primary: { value: "#F6490D" },
						primaryHighlight: { value: "#FF7D50" },
					},
					border: {
						soft: { value: "{colors.slate.200}" },
					},
				},
			},
		},
	},

	importMap: "~gen/pandacss",

	// The output directory for your css system
	outdir: "./gen/pandacss",
});
