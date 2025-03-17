import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Using https as the protocol
        hostname: "*.ufs.sh", // Matches any subdomain of ufs.sh
      },
    ],
  },
};

export default nextConfig;
