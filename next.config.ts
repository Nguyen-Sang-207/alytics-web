import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Allow images from any source (for development)
    images: {
        remotePatterns: [],
    },
};

export default nextConfig;
