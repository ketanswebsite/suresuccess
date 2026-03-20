import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  serverExternalPackages: ["firebase", "@firebase/auth", "@firebase/util"],
};

export default nextConfig;
