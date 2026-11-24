import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog-posts";

// Requerido para output: export (build estático de GitHub Pages)
export const dynamic = "force-static";

// Sitemap apuntando SIEMPRE al dominio canónico (sepulturasenoferta.cl).
// El espejo de GitHub Pages canonicaliza al dominio, así que incluso
// su sitemap debe listar la URL canónica.
const siteUrl = "https://sepulturasenoferta.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  // Fecha fija: builds deterministas (evita revalidar todo el sitemap en cada build)
  const lastModified = new Date("2026-11-24");
  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/blog/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...POSTS.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
