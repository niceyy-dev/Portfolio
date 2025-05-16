import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // important pour GitHub Pages
  },
  // assetPrefix: "/Portfolio/",
  // basePath: "/Portfolio",
  /* config options here */
};

export default nextConfig;
