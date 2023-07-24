/* eslint-env node */
module.exports = {
  plugins: ["unused-imports"],
  ignorePatterns: [
    ".eslintrc.js",
    "generated/",
    "build/",
    "gen/",
    "next-env.d.ts",
  ],
  extends: [
    "eslint:recommended",
    "plugin:unicorn/recommended",
    "turbo",
    "prettier",
  ],
  root: true,
  rules: {
    "no-template-curly-in-string": "warn",
    "no-unused-vars": "off", // typescript handles this
    "unused-imports/no-unused-imports": "error", // cleans up imports
    // cleans up unused variables
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          { name: "next-themes", message: "Please use ~/utils/theme instead" },
          {
            name: "@radix-ui/react-dropdown-menu",
            message:
              "Are you sure you didn't mean to use ~/components/ui/dropdown-menu ?",
          },
        ],
      },
    ],
    // distinguishing undefined and null is useful in my opinion -Omar
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": [
      "warn",
      {
        replacements: {
          // the following are known keywords in React, allow them
          ref: false,
          props: false,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["libs/db-migrations/migrations/**/*.ts"],
      rules: {
        "unicorn/filename-case": "off", // tool doesn't output kebab case by default
      },
    },
    {
      files: ["./**/*.ts{,x}"],
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
        "@typescript-eslint/no-unused-vars": "off", // typescript handles this
        // asserting types is unsafe, only use if truly necessary
        "@typescript-eslint/consistent-type-assertions": [
          "warn",
          { assertionStyle: "never" },
        ],
        // makes extra sure that types are imported correctly
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          { prefer: "type-imports" },
        ],
        // consistency
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "variableLike",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
          },
        ],
      },
    },
    {
      files: ["./**/*.[jt]s{,x}"],
      extends: [
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/strict",
      ],
      rules: {
        "react/react-in-jsx-scope": "off", // not needed for modern React
        "react/prop-types": "off", // we use TypeScript
      },
      settings: { react: { version: "detect" } },
    },
    {
      files: ["./apps/web/**/*"],
      extends: ["plugin:@next/next/core-web-vitals"],
      settings: { next: { rootDir: "apps/web" } },
    },
  ],
};
