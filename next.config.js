/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/", destination: "/login", permanent: true }, // a permanent redirect
    ];
  },
};
module.exports = nextConfig;
