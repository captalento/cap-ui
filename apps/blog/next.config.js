const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  transpilePackages: ["ui", "@captalento/design-system"],
};

module.exports = withVanillaExtract(nextConfig);
