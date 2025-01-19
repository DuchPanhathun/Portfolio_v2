import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com', // Add this to allow example.com
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com', // Add Google Drive hostname
      },
    ],
  },
};

export default nextConfig;
