import type { Metadata } from "next";
import { POSTS, blogPath, SITE_NAME } from "@/lib/blog-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { withBasePath } from "@/lib/site-config";

// ─────────────────────────────────────────────────────────────
// BLOG — Índice de guías. Compatible con build standalone
// (Vercel) y export estático (GitHub Pages): rutas via
// withBasePath y fechas fijas en los datos.
// ─────────────────────────────────────────────────────────────

export const dynamic = "force-static";

const siteUrl = "https://sepulturasenoferta.cl";

export const metadata: Metadata = {
  // absolute: sin el template del layout para respetar el límite de Bing (≤60)
  title: { absolute: "Blog y guías sobre sepulturas | Américo Vespucio" },
  description:
    "Guías claras sobre traspasos, precios y tipos de sepulturas en Chile. Información directa para decidir bien, con cotización por WhatsApp.",
  keywords: [
    "blog sepulturas Chile",
    "guía traspaso sepultura",
    "cuánto cuesta una sepultura",
    "diferencia sepultura nicho osario",
    "comprar sepultura Santiago",
  ],
  alternates: { canonical: "/blog/" },
  openGraph: {
    title: "Blog y guías sobre sepulturas en Chile",
    description:
      "Traspasos, precios y tipos de sepulturas explicados en simple, con cotización directa por WhatsApp.",
    url: "/blog/",
    siteName: SITE_NAME,
    locale: "es_CL",
    type: "website",
  },
};

// JSON-LD: Blog + ItemList de artículos
const blogJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": `${siteUrl}/blog/`,
      name: "Blog y guías — Sepulturas Américo Vespucio",
      description:
        "Guías sobre traspaso, precios y tipos de sepulturas en Chile.",
      url: `${siteUrl}/blog/`,
      publisher: { "@type": "Organization", name: SITE_NAME },
    },
    {
      "@type": "ItemList",
      itemListElement: POSTS.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: `${siteUrl}/blog/${p.slug}/`,
      })),
    },
  ],
};

// Fecha legible en español
function fechaLegible(iso: string): string {
  const [y, m, d] = iso.split("-");
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`;
}

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* Cabecera */}
      <section className="bg-forest py-14 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            <a
              href={withBasePath("/")}
              className="transition-colors hover:text-white hover:underline"
            >
              Inicio
            </a>{" "}
            · Blog y guías
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Guías para decidir bien tu sepultura
          </h1>
          <p className="mt-4 leading-relaxed text-white/85">
            Traspasos, precios y tipos de enterramiento, explicados en lenguaje
            simple y con datos reales del mercado chileno. Escrito para familias
            que necesitan información clara, sin presión y sin tecnicismos.
          </p>
        </div>
      </section>

      {/* Artículos */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <div className="grid gap-5 sm:grid-cols-2">
            {POSTS.map((post) => (
              <a
                key={post.slug}
                href={blogPath(post.slug)}
                className="group flex flex-col rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {fechaLegible(post.date)} · {post.readingMinutes} min de lectura
                </p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug tracking-tight group-hover:underline">
                  {post.shortTitle}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.description}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Leer la guía →
                </p>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-sm">
            <p className="font-serif text-lg font-semibold">
              ¿Prefieres resolverlo directo?
            </p>
            <p className="text-sm text-muted-foreground">
              Te respondemos personalmente con disponibilidad y valores finales,
              sin compromiso.
            </p>
            <WhatsAppButton track="blog_indice" />
          </div>
        </div>
      </section>
    </main>
  );
}
