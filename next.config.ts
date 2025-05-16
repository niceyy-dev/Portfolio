import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // important pour GitHub Pages
  },
  basePath: "/Portfolio",
  assetPrefix: "/Portfolio/",
  /* config options here */
};

export default nextConfig;
