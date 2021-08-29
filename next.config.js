/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

/** @type {import('next').NextConfig} */
const config = {
  // images: {
  //   loader: "imgix",
  //   path: ""
  // },
  reactStrictMode: true
};

module.exports = process.env.NODE_ENV === "production" ?
  config :
  withBundleAnalyzer(config);

