import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Fragment, type ReactNode } from "react";
import {
  POSTS,
  blogPath,
  blogWhatsAppUrl,
  SITE_NAME,
  type BlogBlock,
  type BlogPost,
} from "@/lib/blog-posts";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { withBasePath } from "@/lib/site-config";

// ─────────────────────────────────────────────────────────────
// BLOG — Plantilla de artículo. Estático: generateStaticParams
// para export y standalone. SEO por artículo: metadata, JSON-LD
// BlogPosting + BreadcrumbList, enlaces entre artículos.
// ─────────────────────────────────────────────────────────────

export const dynamic = "force-static";

const siteUrl = "https://sepulturasenoferta.cl";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

async function getPost(slug: string): Promise<BlogPost> {
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  return post;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return {
    // absolute: sin el template del layout para respetar el límite de Bing (≤60)
    title: { absolute: post.title },
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}/`,
      siteName: SITE_NAME,
      locale: "es_CL",
      type: "article",
      publishedTime: post.date,
    },
  };
}

// Negritas **texto** → <strong>, sin dangerouslySetInnerHTML
function parseInline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 font-serif text-2xl font-semibold tracking-tight">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-4 leading-relaxed text-muted-foreground">
          {parseInline(block.text)}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-muted-foreground marker:text-primary">
          {block.items.map((item, i) => (
            <li key={i}>{parseInline(item)}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="mt-6 rounded-r-2xl border-l-4 border-primary bg-card px-5 py-4 font-serif text-base italic leading-relaxed">
          {parseInline(block.text)}
        </blockquote>
      );
    case "cta":
      return (
        <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-sm">
          <p className="font-serif text-lg font-semibold">
            {block.note ?? "¿Tienes dudas sobre tu caso concreto?"}
          </p>
          <p className="text-sm text-muted-foreground">
            Escríbenos por WhatsApp y te respondemos en horario hábil, sin
            compromiso.
          </p>
          <WhatsAppButton />
        </div>
      );
  }
}

function fechaLegible(iso: string): string {
  const [y, m, d] = iso.split("-");
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${Number(d)} de ${meses[Number(m) - 1]} de ${y}`;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        keywords: post.keywords.join(", "),
        inLanguage: "es-CL",
        url: `${siteUrl}/blog/${post.slug}/`,
        mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/blog/${post.slug}/` },
        author: { "@type": "Organization", name: SITE_NAME },
        publisher: { "@type": "Organization", name: SITE_NAME },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog/` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.shortTitle,
            item: `${siteUrl}/blog/${post.slug}/`,
          },
        ],
      },
    ],
  };

  const related = POSTS.filter((p) => post.related.includes(p.slug));

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Cabecera */}
      <section className="bg-forest py-12 sm:py-14">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-white/70">
            <a
              href={withBasePath("/")}
              className="transition-colors hover:text-white hover:underline"
            >
              Inicio
            </a>{" "}
            ·{" "}
            <a
              href={blogPath()}
              className="transition-colors hover:text-white hover:underline"
            >
              Blog
            </a>
          </p>
          <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {post.shortTitle}
          </h1>
          <p className="mt-3 text-sm text-white/70">
            {fechaLegible(post.date)} · {post.readingMinutes} min de lectura
          </p>
        </div>
      </section>

      {/* Contenido */}
      <article className="py-12 sm:py-14">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          {post.blocks.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          {/* CTA del artículo con mensaje preconfigurado */}
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-sm">
            <p className="font-serif text-lg font-semibold">
              Atención personal para tu caso
            </p>
            <p className="text-sm text-muted-foreground">
              El botón abre WhatsApp con un mensaje que ya menciona esta guía:
              te respondemos con disponibilidad y valores finales.
            </p>
            <WhatsAppButton href={blogWhatsAppUrl(post)} />
          </div>

          {/* Artículos relacionados */}
          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="font-serif text-xl font-semibold tracking-tight">
                Sigue leyendo
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((r) => (
                  <a
                    key={r.slug}
                    href={blogPath(r.slug)}
                    className="group rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="font-serif text-base font-semibold leading-snug group-hover:underline">
                      {r.shortTitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {r.description.slice(0, 110)}…
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}

          <p className="mt-10 text-sm">
            <a
              href={blogPath()}
              className="font-semibold text-primary hover:underline"
            >
              ← Volver al blog y las guías
            </a>
          </p>
        </div>
      </article>
    </main>
  );
}
