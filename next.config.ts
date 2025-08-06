import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'skillicons.dev',
      pathname: '/**',
    }, {
      protocol: 'http',
      hostname: 'www.w3.org',
      pathname: '/**',
    }]
  }
};

export default nextConfig;
