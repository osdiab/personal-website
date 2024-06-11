module.exports = {
	root: true,
	env: { es2021: true, node: true },
	ignorePatterns: [".eslintrc.cjs", "generated/", "build/", "gen/"],
	rules: {},
	overrides: [
		{
			files: ["./**/*.ts{,x}"],
			plugins: ["@typescript-eslint"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				// biome-ignore lint/style/useNamingConvention: this is from @typescript-eslint
				EXPERIMENTAL_useProjectService: true,
				tsconfigRootDir: __dirname,
				project: [
					"./tsconfig.json",
					"./apps/*/tsconfig.json",
					"./libs/*/tsconfig.json",
					"./scripts/*/tsconfig.json",
				],
				ecmaVersion: 2021,
				sourceType: "module",
				ecmaFeatures: { jsx: true },
			},
		},
		{
			files: ["./apps/web-app/src/**/*.{ts,tsx}"],
			extends: ["plugin:qwik/recommended"],
			env: { browser: true },
			rules: {
				"@typescript-eslint/no-restricted-imports": [
					"error",
					{
						paths: [
							{
								name: "@qwik-ui/headless",
								importNames: ["Tooltip"],
								message: 'Use "~/components/tooltip" instead',
							},
						],
					},
				],
			},
		},
	],
};
