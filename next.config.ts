import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    GOOGLE_SHEET_URL: process.env.GOOGLE_SHEET_URL,
  },
};

export default nextConfig;
