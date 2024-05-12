/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",
  images: { unoptimized: true },
};

export default nextConfig;
