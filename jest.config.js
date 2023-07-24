/* eslint-disable unicorn/prefer-module */
module.exports = {
  projects: [
    {
      displayName: "lint",
      runner: "jest-runner-eslint",
      testMatch: ["<rootDir>/**/*.{js,jsx,ts,tsx}"],
    },
  ],
};
