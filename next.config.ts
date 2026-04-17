import type { NextConfig } from "next";

const repoName = process.env.GITHUB_PAGES_REPO || "NEKIFOROV";
const useBasePath = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: useBasePath ? `/${repoName}` : "",
  assetPrefix: useBasePath ? `/${repoName}/` : undefined
};

export default nextConfig;
