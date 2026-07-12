import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Next's built-in image optimizer intermittently serves the wrong source
    // file under concurrent requests on this Next 16 build (verified: raw
    // files and direct isolated requests are always correct; only the
    // optimizer pipeline under real page-load concurrency mixes them up).
    // All images here are already pre-sized/compressed, so skip it.
    unoptimized: true,
  },
};

export default nextConfig;
