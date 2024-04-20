/* eslint-disable unicorn/prefer-module */
const packageJson = require("./package.json");

const referencedPackageNames = Object.keys(packageJson.dependencies).filter(
  (v) => v.startsWith("@osdiab-website/")
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: referencedPackageNames,
  experimental: { typedRoutes: true },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: "@svgr/webpack",
          // `removeDimensions` also sets a `viewBox` which we want
          options: {
            svgoConfig: {
              plugins: [{ name: "removeDimensions", active: true }],
            },
          },
        },
      ],
      resourceQuery: { not: /url/ }, // exclude if *.svg?url
    });
    return config;
  },
  // we handle ESLint and type checking outside of NextJS
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
