const path = require("path");

/* eslint-env node */
module.exports = {
  plugins: ["@typescript-eslint"],
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
  root: true,
  overrides: [
    {
      files: ["apps/web/**/*"],
      extends: ["plugin:@next/next/core-web-vitals"],
      settings: { next: { rootDir: "apps/web" } },
    },
  ],
};
