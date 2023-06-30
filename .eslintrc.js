/* eslint-env node */
module.exports = {
  plugins: ["unused-imports"],
  ignorePatterns: [".eslintrc.js", "next.config.js", "generated/", "build/"],
  extends: ["turbo", "prettier"],
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  root: true,
  overrides: [
    {
      files: ["./**/*.{ts,tsx}"],
      plugins: ["@typescript-eslint"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: true,
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
    {
      files: ["./**/*.{j,t}sx"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/strict",
      ],
      rules: {
        "react/react-in-jsx-scope": "off",
      },
    },
    {
      files: ["./apps/web/**/*"],
      extends: ["plugin:@next/next/core-web-vitals"],
      settings: { next: { rootDir: "apps/web" } },
      rules: {
        "no-restricted-imports": [
          "error",
          {
            paths: [
              {
                name: "styled-jsx/css",
                message: "You probably meant to use the panda-css import",
              },
            ],
          },
        ],
      },
    },
  ],
};
