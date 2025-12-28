import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "your-image-source.com", // e.g., 'supabase.co'
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
