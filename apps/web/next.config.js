const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const packageJson = require("./package.json");
const withVanillaExtract = createVanillaExtractPlugin();

const referencedPackageNames = Object.keys(packageJson.dependencies).filter(
  (v) => v.startsWith("@osdiab-website/")
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: referencedPackageNames,
  experimental: {
    // The App Router is stable, but the Vanilla Extract Next Plugin
    // currently requires that `experimental.appDir` is `true`.
    //
    // https://github.com/vanilla-extract-css/vanilla-extract/issues/929#issuecomment-1538555608
    appDir: true,
    typedRoutes: true,
  },
  webpack(config) {
    // https://github.com/vanilla-extract-css/vanilla-extract/issues/1085#issuecomment-1555986222
    config.optimization.splitChunks = false;

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

module.exports = withVanillaExtract(nextConfig);
