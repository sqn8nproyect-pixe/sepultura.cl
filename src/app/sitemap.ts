import type { MetadataRoute } from "next";

// Requerido para output: export (build estático de GitHub Pages)
export const dynamic = "force-static";

// Sitemap apuntando SIEMPRE al dominio canónico (sepulturasenoferta.cl).
// El espejo de GitHub Pages canonicaliza al dominio, así que incluso
// su sitemap debe listar la URL canónica.
const siteUrl = "https://sepulturasenoferta.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
