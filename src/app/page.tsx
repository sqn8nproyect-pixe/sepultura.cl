"use client";

import Image from "next/image";
import {
  Tag,
  Clock3,
  Wallet,
  FileCheck2,
  ShieldCheck,
  MapPin,
  CarFront,
  TreePine,
  Building2,
  Star,
  Lock,
  MessageCircle,
  FileText,
  PenLine,
  KeyRound,
  ExternalLink,
  Leaf,
  Mail,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  WhatsAppButton,
  WhatsAppIcon,
  FloatingWhatsApp,
} from "@/components/whatsapp-button";
import {
  FAQS,
  TESTIMONIALS,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  EMAIL,
  EMAIL_MAILTO,
  GOOGLE_MAPS_URL,
  BUSINESS_HOURS,
  SEPULTURAS,
  sepulturaWhatsAppUrl,
  withBasePath,
} from "@/lib/site-config";

// ─────────────────────────────────────────────────────────────
// SEO ESTRUCTURADO (JSON-LD): FAQPage + Service para búsquedas locales
// ─────────────────────────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Venta de sepulturas en Parque El Recuerdo Américo Vespucio",
  description:
    "Compra-venta de sepulturas y lotes en el Parque El Recuerdo Américo Vespucio, Santiago de Chile. Precio de oportunidad preferencial, entrega inmediata, transferencia notarial y documentación incluida.",
  serviceType: "Compra-venta de derechos de sepultura",
  areaServed: { "@type": "City", name: "Santiago de Chile" },
  provider: {
    "@type": "Organization",
    name: "Sepulturas Américo Vespucio",
    areaServed: "Región Metropolitana, Chile",
  },
  offers: {
    "@type": "Offer",
    description:
      "Sepulturas a precio de oportunidad preferencial, con 10% de costos de transferencia y documentación notarial cubiertos.",
  },
};

const HERO_CHIPS = [
  { icon: ShieldCheck, label: "Transferencia notarial" },
  { icon: Clock3, label: "Entrega inmediata" },
  { icon: FileCheck2, label: "Documentación incluida" },
  { icon: MapPin, label: "Américo Vespucio, Santiago" },
];

const BENEFITS = [
  {
    icon: Tag,
    title: "Precio de oportunidad preferencial",
    description:
      "Adquiere tu sepultura a un precio preferencial muy por debajo del valor de lista del parque. Un ahorro real y verificable en una decisión tan importante para tu familia.",
    highlighted: true,
  },
  {
    icon: Clock3,
    title: "Entrega inmediata",
    description:
      "Una vez firmado y registrado el traspaso, la sepultura queda a tu disposición al instante. Sin listas de espera, sorteos ni tiempos de habilitación.",
    highlighted: false,
  },
  {
    icon: Wallet,
    title: "Cubrimos el 10% de la transferencia",
    description:
      "Nos hacemos cargo del 10% de los costos de transferencia que cobra la administradora del parque por el cambio de titularidad. Menos gastos para ti.",
    highlighted: false,
  },
  {
    icon: FileCheck2,
    title: "Documentación notarial incluida",
    description:
      "El contrato de cesión, la notaría y todos los gastos legales del proceso corren por nuestra cuenta. Tú solo firmas y recibes tu sepultura.",
    highlighted: false,
  },
];

const STEPS = [
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description:
      "Cuéntanos qué buscas con el botón verde: tipo de sepultura, ubicación preferida y presupuesto. Te respondemos con disponibilidad real.",
  },
  {
    icon: FileText,
    title: "Recibe la propuesta completa",
    description:
      "Te enviamos la información de la sepultura disponible: precio final de oportunidad, ubicación dentro del parque y todos los detalles por escrito.",
  },
  {
    icon: PenLine,
    title: "Firma ante notaría",
    description:
      "Coordinamos y acompañamos la cesión de derechos ante notario. Nosotros cubrimos el 10% de la transferencia y toda la documentación.",
  },
  {
    icon: KeyRound,
    title: "Recibe tu sepultura",
    description:
      "Con el cambio de titularidad registrado en el parque, la sepultura queda a tu nombre de forma inmediata. Sin esperas de ningún tipo.",
  },
];

const LOCATION_FACTS = [
  {
    icon: MapPin,
    title: "Avenida Américo Vespucio",
    detail: "Zona norte de Santiago, Región Metropolitana",
  },
  {
    icon: CarFront,
    title: "Acceso en vehículo",
    detail: "Directo desde el eje Américo Vespucio y autopistas urbanas",
  },
  {
    icon: TreePine,
    title: "Entorno de parque",
    detail: "Áreas verdes, árboles y caminos amplios para la visita",
  },
  {
    icon: Building2,
    title: "Cercano a la ciudad",
    detail: "Conecta con las comunas del sector norte de Santiago",
  },
];

export default function Home() {
  return (
    <>
      {/* Datos estructurados para Google (SEO local) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <div className="flex min-h-screen flex-col">
        {/* ═══════════ BARRA DE CONFIANZA SUPERIOR ═══════════ */}
        <div className="bg-forest-deep px-4 py-2 text-center text-xs text-white/90 sm:text-sm">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-4 shrink-0 text-gold" aria-hidden="true" />
            Operación 100% notarial y registrada · Entrega inmediata en Santiago
          </span>
        </div>

        {/* ═══════════ HEADER ═══════════ */}
        <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
          <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
            <a
              href="#inicio"
              className="flex min-w-0 items-center gap-2.5"
              aria-label="Ir al inicio"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                <Leaf className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block truncate font-serif text-sm font-semibold leading-tight sm:text-base">
                  Sepulturas Américo Vespucio
                </span>
                <span className="hidden text-[11px] text-muted-foreground sm:block">
                  Parque El Recuerdo · Santiago, Chile
                </span>
              </span>
            </a>

            <nav
              aria-label="Navegación principal"
              className="hidden items-center gap-6 text-sm font-medium text-foreground/80 md:flex"
            >
              <a href="#beneficios" className="transition-colors hover:text-primary">
                Beneficios
              </a>
              <a href="#proceso" className="transition-colors hover:text-primary">
                Cómo funciona
              </a>
              <a href="#sepulturas" className="transition-colors hover:text-primary">
                Sepulturas
              </a>
              <a href="#ubicacion" className="transition-colors hover:text-primary">
                Ubicación
              </a>
              <a href="#faq" className="transition-colors hover:text-primary">
                Preguntas
              </a>
            </nav>

            <WhatsAppButton label="Consultar" className="px-5 py-2.5 text-sm" />
          </div>
        </header>

        <main className="flex-1">
          {/* ═══════════ HERO ═══════════ */}
          <section
            id="inicio"
            aria-labelledby="hero-title"
            className="relative isolate overflow-hidden"
          >
            <Image
              src={withBasePath("/img/hero-parque.jpg")}
              alt="Jardines y árboles del parque cementerio en Santiago de Chile"
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover"
            />
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-deep/95 via-forest-deep/80 to-forest-deep/95"
              aria-hidden="true"
            />

            <div className="animate-fade-up mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-32">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/95 backdrop-blur sm:text-sm">
                <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
                Oportunidad real · Santiago, Chile
              </p>

              <h1
                id="hero-title"
                className="mt-6 font-serif text-4xl font-semibold leading-[1.15] text-white sm:text-5xl lg:text-6xl"
              >
                Sepulturas en el Parque El Recuerdo Américo Vespucio{" "}
                <span className="text-gold">a precio de oportunidad preferencial</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Lotes de sepultura disponibles para transferencia inmediata, con
                toda la documentación notarial incluida y un proceso simple,
                seguro y transparente. Te acompañamos en cada paso.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <WhatsAppButton size="lg" className="w-full sm:w-auto" />
                <a
                  href="#proceso"
                  className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/35 px-7 py-3 font-medium text-white/95 backdrop-blur transition-colors hover:bg-white/10 sm:w-auto"
                >
                  Conocer el proceso
                </a>
              </div>

              <ul
                aria-label="Garantías del servicio"
                className="mt-9 flex flex-wrap items-center justify-center gap-2.5"
              >
                {HERO_CHIPS.map((chip) => (
                  <li
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs text-white/90 backdrop-blur sm:text-sm"
                  >
                    <chip.icon className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    {chip.label}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ═══════════ PROPUESTAS DE VALOR ═══════════ */}
          <section
            id="beneficios"
            aria-labelledby="beneficios-title"
            className="scroll-mt-20 py-16 sm:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Nuestras propuestas de valor
                </p>
                <h2
                  id="beneficios-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Precio preferencial, sin riesgos ni letra chica
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Sabemos que comprar una sepultura es una decisión emocional y
                  económica importante. Por eso ofrecemos condiciones que no
                  encontrarás comprando directamente en el parque, siempre con
                  respaldo legal completo.
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {BENEFITS.map((benefit) => (
                  <article
                    key={benefit.title}
                    className="relative rounded-2xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    {benefit.highlighted && (
                      <span className="absolute -top-3 right-4 rounded-full bg-gold px-3 py-1 text-[11px] font-semibold text-forest-deep">
                        Mayor ahorro
                      </span>
                    )}
                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <benefit.icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 font-serif text-lg font-semibold leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-2 text-center">
                <WhatsAppButton />
                <p className="text-xs text-muted-foreground">
                  Respuesta rápida en horario hábil · Sin compromiso
                </p>
              </div>
            </div>
          </section>

          {/* ═══════════ CÓMO FUNCIONA ═══════════ */}
          <section
            id="proceso"
            aria-labelledby="proceso-title"
            className="scroll-mt-20 bg-secondary/60 py-16 sm:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Cómo funciona
                </p>
                <h2
                  id="proceso-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Un proceso simple, transparente y 100% legal
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Cuatro pasos claros desde tu primer mensaje hasta la entrega de
                  la sepultura. Cada etapa queda documentada y registrada para tu
                  total tranquilidad.
                </p>
              </div>

              <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {STEPS.map((step, index) => (
                  <li
                    key={step.title}
                    className="rounded-2xl border bg-card p-6 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-xl bg-forest text-white">
                        <step.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="font-serif text-3xl font-semibold text-primary/20"
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-lg font-semibold leading-snug">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </li>
                ))}
              </ol>

              {/* Sello de confianza */}
              <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl bg-forest p-6 text-white sm:p-8 lg:flex-row">
                <div className="flex items-start gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                    <Lock className="size-6 text-gold" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold">
                      Tu seguridad legal es prioritaria
                    </h3>
                    <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/85">
                      Todas las operaciones se realizan con contrato de cesión
                      ante notario y registro oficial del cambio de titularidad
                      ante la administradora del cementerio.
                    </p>
                  </div>
                </div>
                <WhatsAppButton
                  label="Hablar con un asesor"
                  className="w-full shrink-0 bg-white text-forest-deep shadow-none hover:bg-white/90 lg:w-auto"
                />
              </div>
            </div>
          </section>

          {/* ═══════════ SEPULTURAS DISPONIBLES ═══════════ */}
          <section
            id="sepulturas"
            aria-labelledby="sepulturas-title"
            className="scroll-mt-20 py-16 sm:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Disponibilidad actual
                </p>
                <h2
                  id="sepulturas-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Sepulturas disponibles en el parque
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Fotografías reales de los lotes disponibles, tomadas en el
                  Parque El Recuerdo Américo Vespucio. Elige el entorno que más
                  te acomode y consulta su valor final — a precio de
                  oportunidad preferencial — directamente por WhatsApp. Stock
                  limitado: esta galería se actualiza a medida que se venden.
                </p>
              </div>

              <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {SEPULTURAS.map((s) => (
                  <li
                    key={s.id}
                    className="group flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md"
                  >
                    {/* Foto + badges */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={s.imagen}
                        alt={`${s.titulo} — ${s.sector}, Parque El Recuerdo Américo Vespucio`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-bold text-forest-deep shadow"
                      >
                        <Tag className="size-3.5" />
                        Precio preferencial
                      </span>
                      <span
                        className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold backdrop-blur ${
                          s.disponible
                            ? "bg-forest-deep/85 text-white"
                            : "bg-neutral-700/80 text-neutral-200"
                        }`}
                      >
                        {s.disponible ? "Disponible" : "Reservada"}
                      </span>
                    </div>

                    {/* Contenido de la ficha */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-serif text-xl font-semibold leading-snug">
                        {s.titulo}
                      </h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin
                          className="size-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />
                        {s.sector}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {s.descripcion}
                      </p>

                      <WhatsAppButton
                        label={
                          s.disponible
                            ? "Consultar este lote"
                            : "Consultar alternativas"
                        }
                        href={sepulturaWhatsAppUrl(s)}
                        className="mt-5 w-full"
                      />
                    </div>
                  </li>
                ))}

                {/* Tarjeta CTA para completar la grilla (fila final) */}
                <li className="flex flex-col items-center justify-center rounded-2xl border border-primary/20 bg-secondary/60 p-8 text-center sm:col-span-2">
                  <p className="font-serif text-xl font-semibold leading-snug text-forest-deep">
                    ¿Buscas otra ubicación dentro del parque?
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Revisamos contigo la disponibilidad completa del día y te
                    enviamos los valores preferenciales por WhatsApp.
                  </p>
                  <WhatsAppButton
                    label="Ver disponibilidad completa"
                    className="mt-5 w-full"
                  />
                </li>
              </ul>
            </div>
          </section>

          {/* ═══════════ UBICACIÓN ═══════════ */}
          <section
            id="ubicacion"
            aria-labelledby="ubicacion-title"
            className="scroll-mt-20 py-16 sm:py-24"
          >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">
              {/* Imagen del parque */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
                <Image
                  src={withBasePath("/img/ubicacion-parque.jpg")}
                  alt="Avenida arbolada de acceso al parque cementerio en Santiago, con la cordillera de los Andes al fondo"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-forest-deep/85 px-4 py-2 text-xs font-medium text-white backdrop-blur sm:text-sm">
                  <MapPin className="size-4 shrink-0 text-gold" aria-hidden="true" />
                  Av. Américo Vespucio · Santiago Norte
                </p>
              </div>

              {/* Contenido */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Ubicación
                </p>
                <h2
                  id="ubicacion-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Parque El Recuerdo Américo Vespucio
                </h2>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  El parque se emplaza sobre la Avenida Américo Vespucio, uno de
                  los ejes viales más importantes de Santiago, en la zona norte
                  de la capital. Esta ubicación privilegiada permite llegar
                  fácilmente en vehículo desde las principales autopistas
                  urbanas y cuenta con locomoción colectiva a lo largo de toda
                  la avenida.
                </p>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Un entorno de áreas verdes, árboles y caminos amplios que
                  invita a la visita tranquila y al recuerdo. Coordinamos
                  contigo una visita para que conozcas personalmente la
                  sepultura y su ubicación dentro del parque antes de tomar
                  cualquier decisión.
                </p>

                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {LOCATION_FACTS.map((fact) => (
                    <li
                      key={fact.title}
                      className="flex items-start gap-3 rounded-xl border bg-card p-4"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                        <fact.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-medium">
                          {fact.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground">
                          {fact.detail}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-forest-deep hover:underline"
                >
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Ver ubicación exacta en Google Maps
                </a>
              </div>
            </div>
          </section>

          {/* ═══════════ TESTIMONIOS ═══════════ */}
          <section
            id="testimonios"
            aria-labelledby="testimonios-title"
            className="scroll-mt-20 bg-secondary/60 py-16 sm:py-24"
          >
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
              <div className="mx-auto max-w-2xl text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Confianza
                </p>
                <h2
                  id="testimonios-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Familias que ya aseguraron su tranquilidad
                </h2>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {TESTIMONIALS.map((testimonial) => (
                  <figure
                    key={testimonial.author}
                    className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm"
                  >
                    <div
                      className="flex items-center gap-1"
                      aria-label="Calificación: 5 de 5 estrellas"
                    >
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 fill-gold text-gold"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                      “{testimonial.quote}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t pt-4">
                      <span
                        aria-hidden="true"
                        className="flex size-10 items-center justify-center rounded-full bg-forest text-sm font-semibold text-white"
                      >
                        {testimonial.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold">
                          {testimonial.author}
                        </span>
                        <span className="block text-xs text-muted-foreground">
                          {testimonial.place}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ═══════════ PREGUNTAS FRECUENTES ═══════════ */}
          <section
            id="faq"
            aria-labelledby="faq-title"
            className="scroll-mt-20 py-16 sm:py-24"
          >
            <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-widest text-primary/80">
                  Resolvemos tus dudas
                </p>
                <h2
                  id="faq-title"
                  className="mt-3 font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
                >
                  Preguntas frecuentes
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Todo lo que necesitas saber sobre la compra de sepulturas, las
                  transferencias y la documentación. Si tu duda no está aquí,
                  escríbenos y te respondemos personalmente.
                </p>
              </div>

              <Accordion
                type="single"
                collapsible
                className="mt-10 rounded-2xl border bg-card px-5 shadow-sm sm:px-6"
              >
                {FAQS.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${index}`}
                    className="last:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-left text-base font-medium hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center shadow-sm">
                <p className="font-serif text-lg font-semibold">
                  ¿Tienes otra pregunta?
                </p>
                <p className="text-sm text-muted-foreground">
                  Escríbenos por WhatsApp y te respondemos en horario hábil,
                  sin compromiso.
                </p>
                <WhatsAppButton />
              </div>
            </div>
          </section>

          {/* ═══════════ LLAMADO FINAL A LA ACCIÓN ═══════════ */}
          <section
            aria-labelledby="cta-final-title"
            className="bg-forest py-16 sm:py-20"
          >
            <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
              <h2
                id="cta-final-title"
                className="font-serif text-3xl font-semibold text-white sm:text-4xl"
              >
                Asegura tu sepultura al mejor precio de Santiago
              </h2>
              <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/85">
                Disponibilidad limitada y precios que el parque ya no ofrece.
                Escríbenos hoy y recibe la información completa de las
                sepulturas disponibles, directamente en tu WhatsApp.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3">
                <WhatsAppButton
                  size="lg"
                  label="Quiero información de sepulturas"
                  className="w-full sm:w-auto"
                />
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white/90 transition-colors hover:text-white hover:underline"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <a
                  href={EMAIL_MAILTO}
                  className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white hover:underline"
                >
                  <Mail className="size-4 shrink-0" aria-hidden="true" />
                  {EMAIL}
                </a>
                <p className="text-xs text-white/70">
                  Atención de lunes a sábado · Respuesta rápida en horario hábil
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* ═══════════ FOOTER ═══════════ */}
        <footer
          id="contacto"
          className="mt-auto border-t border-white/10 bg-forest-deep text-white/75"
        >
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
            {/* Marca */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
                  <Leaf className="size-5" aria-hidden="true" />
                </span>
                <span className="font-serif text-base font-semibold text-white">
                  Sepulturas Américo Vespucio
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed">
                Servicio de intermediación en la compra-venta de sepulturas en
                Santiago de Chile. Condiciones preferentes, respaldo notarial y
                acompañamiento completo hasta la entrega.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h2 className="font-serif text-base font-semibold text-white">
                Contacto
              </h2>
              <address className="mt-4 space-y-3 text-sm not-italic">
                <p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 transition-colors hover:text-white"
                  >
                    <WhatsAppIcon className="size-5 shrink-0 text-whatsapp" />
                    {WHATSAPP_DISPLAY} (WhatsApp)
                  </a>
                </p>
                <p>
                  <a
                    href={EMAIL_MAILTO}
                    className="inline-flex items-center gap-2.5 break-all transition-colors hover:text-white"
                  >
                    <Mail className="size-5 shrink-0 text-gold" aria-hidden="true" />
                    {EMAIL}
                  </a>
                </p>
                <p className="flex items-start gap-2.5">
                  <Clock3 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span>
                    {BUSINESS_HOURS.map((item) => (
                      <span key={item.dias} className="block">
                        {item.dias}: {item.horario}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  Parque El Recuerdo Américo Vespucio · Av. Américo Vespucio,
                  Santiago (Región Metropolitana), Chile
                </p>
              </address>
            </div>

            {/* Enlaces */}
            <nav aria-label="Enlaces del sitio">
              <h2 className="font-serif text-base font-semibold text-white">
                Enlaces rápidos
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {[
                  { href: "#beneficios", label: "Propuestas de valor" },
                  { href: "#proceso", label: "Cómo funciona" },
                  { href: "#ubicacion", label: "Ubicación del parque" },
                  { href: "#faq", label: "Preguntas frecuentes" },
                  { href: WHATSAPP_URL, label: "Consultar por WhatsApp", external: true },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="transition-colors hover:text-white hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Aviso legal + copyright */}
          <div className="border-t border-white/10">
            <div className="mx-auto w-full max-w-6xl space-y-2 px-4 py-6 text-xs leading-relaxed text-white/55 sm:px-6">
              <p>
                Servicio independiente de intermediación y venta de derechos de
                sepultura. No somos parte de, ni estamos afiliados oficialmente
                a Parque El Recuerdo o a sus administradoras. Las marcas
                mencionadas se utilizan únicamente con fines descriptivos e
                informativos. Toda operación se formaliza mediante contrato
                ante notario.
              </p>
              <p>
                © {new Date().getFullYear()} Sepulturas Américo Vespucio ·
                Santiago, Chile. Todos los derechos reservados.
              </p>
              <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Sitio web realizado por</span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath("/img/cerotraba-logo.png")}
                  alt="Cerotraba"
                  width={371}
                  height={64}
                  className="h-7 w-auto"
                  loading="lazy"
                />
              </p>
            </div>
          </div>
        </footer>

        {/* Botón flotante de WhatsApp (visible en todo el recorrido) */}
        <FloatingWhatsApp />
      </div>
    </>
  );
}
