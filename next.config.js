/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    LASTFM_API_KEY: "d1991f52e38148193d246584f69a1452",
  },
};

module.exports = nextConfig;
