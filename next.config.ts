import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        // Warning: This will allow builds to succeed even if ESLint errors are present.
        ignoreDuringBuilds: true,
    },
    // Add other configuration options here
};

export default nextConfig;
