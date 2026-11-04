import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      { source: "/vacatures", destination: "/werken-bij", permanent: true },
      { source: "/nieuws", destination: "/over-ons", permanent: true },
      { source: "/fotos/ponsen", destination: "/fotos?filter=ponsen", permanent: true },
      { source: "/fotos/kanten", destination: "/fotos?filter=kanten", permanent: true },
      { source: "/fotos/lassen", destination: "/fotos?filter=lassen", permanent: true },
      { source: "/fotos/constructiewerk", destination: "/fotos?filter=constructiewerk", permanent: true },
      { source: "/emd-fijnmechanica", destination: "/over-ons", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
