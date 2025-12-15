import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: { unoptimized: true },
  reactCompiler: true,
};

export default nextConfig;
