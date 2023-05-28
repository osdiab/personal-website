const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  experimental: {
    // The App Router is stable, but the Vanilla Extract Next Plugin
    // currently requires that `experimental.appDir` is `true`.
    //
    // https://github.com/vanilla-extract-css/vanilla-extract/issues/929#issuecomment-1538555608
    appDir: true,
    typedRoutes: true,
  },
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
};

module.exports = withVanillaExtract(nextConfig);
