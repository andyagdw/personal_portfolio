import type { NextConfig } from "next";

const path = process.env.NODE_ENV === "production" ? "/personal_portfolio" : "";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: path,
  assetPrefix: path + "/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
