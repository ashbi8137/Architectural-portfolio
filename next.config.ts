import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Architectural-portfolio',
  assetPrefix: '/Architectural-portfolio/',
  reactCompiler: true,
};

export default nextConfig;
