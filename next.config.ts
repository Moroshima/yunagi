import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: { unoptimized: true },
};

export default nextConfig;
