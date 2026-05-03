import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    qualities: [100, 75],
  },
  //basePath: '/Architectural-portfolio',
  //assetPrefix: '/Architectural-portfolio/',
  reactCompiler: true,
};

export default nextConfig;
