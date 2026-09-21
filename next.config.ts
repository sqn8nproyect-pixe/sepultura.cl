import type { NextConfig } from "next";

// ─────────────────────────────────────────────────────────────
// NEXT_EXPORT=1 → genera un sitio 100% estático en /out
// (usado por el workflow de GitHub Pages del repo sepultura.cl).
// Sin esa variable, se usa el modo standalone habitual.
// ─────────────────────────────────────────────────────────────
const isStaticExport = process.env.NEXT_EXPORT === "1";
const repoBasePath = "/sepultura.cl";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: repoBasePath,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : { output: "standalone" as const }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
