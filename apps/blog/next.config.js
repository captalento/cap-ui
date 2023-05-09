/** @type {import('next').NextConfig} */
const { createVanillaExtractPlugin } = require('@vanilla-extract/next-plugin');
const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@captalento/design-system"],
};

module.exports = withVanillaExtract(nextConfig);
