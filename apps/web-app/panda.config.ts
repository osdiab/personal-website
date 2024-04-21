import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

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
			semanticTokens: {
				colors: {
					brand: { value: "#F6490D" },
					text: {
						body: { value: "{colors.slate.900}" },
						primary: { value: "#F6490D" },
						primaryHighlight: { value: "#FF7D50" },
					},
				},
			},
		},
	},

	importMap: "~gen/pandacss",

	// The output directory for your css system
	outdir: "./gen/pandacss",
});
