import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // Required for static export
	// Remove basePath and assetPrefix for user repo at root
};

export default nextConfig;
