import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        port: '',
        pathname: '/**',
      },
    
      {
        hostname: "cdn.sanity.io",
        protocol:"https",
      },
      
    ],
  },
};

export default nextConfig;
