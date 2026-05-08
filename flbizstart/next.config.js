/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['react-markdown'],
  },
};

module.exports = nextConfig;
