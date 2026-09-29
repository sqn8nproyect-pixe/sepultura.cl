import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { withBasePath } from "@/lib/site-config";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Fuente serif para titulares: cálida, digna y legible
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

// ─────────────────────────────────────────────────────────────
// SEO LOCAL — Optimizado para búsquedas en Santiago / Américo Vespucio
// En GitHub Pages (NEXT_EXPORT=1) se usa la URL del proyecto;
// al publicar con dominio propio, actualiza la URL principal.
// ─────────────────────────────────────────────────────────────
const siteUrl =
  process.env.NEXT_EXPORT === "1"
    ? "https://sqn8nproyect-pixe.github.io/sepultura.cl"
    : "https://www.sepulturasamericovespucio.cl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Sepulturas en Venta | Parque El Recuerdo Américo Vespucio, Santiago | Precios de Oportunidad",
    template: "%s | Sepulturas Américo Vespucio",
  },
  description:
    "Sepulturas y lotes en venta en el Parque El Recuerdo Américo Vespucio, Santiago. Adquiérelas a precio de oportunidad, con entrega inmediata, transferencia notarial y documentación incluida. Consulta por WhatsApp.",
  keywords: [
    "sepulturas en venta Santiago",
    "lotes de sepultura en venta",
    "Parque El Recuerdo Américo Vespucio",
    "sepulturas Parque El Recuerdo",
    "comprar sepultura Santiago",
    "cementerio Américo Vespucio",
    "lotes cementerio Santiago Chile",
    "sepulturas económicas Santiago",
    "venta de nichos y sepulturas Chile",
    "traspaso sepultura Parque El Recuerdo",
  ],
  authors: [{ name: "Sepulturas Américo Vespucio" }],
  icons: {
    icon: withBasePath("/favicon.svg"),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sepulturas en Parque El Recuerdo Américo Vespucio a Precio de Oportunidad | Santiago",
    description:
      "Adquiere tu sepultura a precio de oportunidad. Entrega inmediata, transferencia 100% notarial y documentación cubierta. Consulta por WhatsApp.",
    url: "/",
    siteName: "Sepulturas Américo Vespucio",
    locale: "es_CL",
    type: "website",
    images: [
      {
        // URL absoluta: metadataBase ya incluye el basePath del repo
        // (…/sepultura.cl), por lo que una ruta con "leading slash"
        // resolvería a /sepultura.cl/sepultura.cl/ (404).
        url: `${siteUrl}/img/hero-parque.jpg`,
        width: 1344,
        height: 768,
        alt: "Parque cementerio con jardines y árboles en Santiago de Chile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sepulturas en Parque El Recuerdo Américo Vespucio a Precio de Oportunidad | Santiago",
    description:
      "Entrega inmediata · Transferencia notarial · Documentación incluida. Consulta por WhatsApp.",
  },
  other: {
    "geo.region": "CL-RM",
    "geo.placename": "Santiago, Chile",
    ICBM: "-33.4172, -70.6067",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
