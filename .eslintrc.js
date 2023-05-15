const path = require("path");

/* eslint-env node */
module.exports = {
  plugins: ["@typescript-eslint", "unused-imports"],
  ignorePatterns: [".eslintrc.js", "next.config.js"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "turbo",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./packages/*/tsconfig.json", "./apps/*/tsconfig.json"],
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
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
      files: ["apps/web/**/*"],
      extends: ["plugin:@next/next/core-web-vitals"],
      settings: { next: { rootDir: "apps/web" } },
    },
  ],
};
