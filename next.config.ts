import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      },
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      },
    ],
  },

};

export default nextConfig;
