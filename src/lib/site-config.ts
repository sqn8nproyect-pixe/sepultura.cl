// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN CENTRAL DEL SITIO
// ✅ DATOS DE CONTACTO ACTUALIZADOS
//    Formato para WHATSAPP_NUMBER: internacional, sin "+",
//    sin espacios ni guiones. Ejemplo Chile: 56912345678
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "56984791346";
export const WHATSAPP_DISPLAY = "+56 9 8479 1346";
export const EMAIL = "mariateresa.morap@gmail.com";
export const EMAIL_MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Consulta por sepulturas - Parque El Recuerdo Américo Vespucio"
)}`;

// ─────────────────────────────────────────────────────────────
// BASE PATH PARA IMÁGENES (crítico en GitHub Pages)
// next/image con `unoptimized: true` NO antepone el basePath a
// las rutas de imágenes: en el sitio exportado apuntarían a la
// raíz del dominio (404). Este helper garantiza que las rutas
// empiecen con /sepultura.cl/ en el build estático.
// ─────────────────────────────────────────────────────────────
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBasePath = (p: string) =>
  p.startsWith(BASE_PATH) ? p : `${BASE_PATH}${p}`;

// Mensaje preconfigurado: nombre del servicio + ubicación + solicitud de info
export const WHATSAPP_MESSAGE =
  "Hola, estoy interesado(a) en sepulturas en el Parque El Recuerdo Américo Vespucio (Santiago). Vi la oferta al 50% del valor oficial y quisiera recibir información sobre precios y disponibilidad. ¡Gracias!";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Parque%20El%20Recuerdo%20Am%C3%A9rico%20Vespucio%20Santiago%20Chile";

// Horario de atención mostrado en el footer
export const BUSINESS_HOURS = [
  { dias: "Lunes a Viernes", horario: "09:00 – 19:00" },
  { dias: "Sábados", horario: "10:00 – 14:00" },
];

// ─────────────────────────────────────────────────────────────
// PREGUNTAS FRECUENTES (también se usan para el JSON-LD de FAQPage)
// ─────────────────────────────────────────────────────────────
export const FAQS = [
  {
    question: "¿Por qué la sepultura cuesta 50% menos que en el parque?",
    answer:
      "Trabajamos con sepulturas ya constituidas y disponibles para transferencia inmediata, adquiridas a valores preferentes que el parque ya no ofrece en su lista de precios actual. Al vender a la mitad del valor oficial, ambas partes ganan: tú accedes a un precio muy difícil de obtener directamente en el parque y nosotros damos rotación a nuestro inventario. Es una oportunidad de mercado real, no una oferta engañosa ni un precio sujeto a condiciones ocultas.",
  },
  {
    question: "¿Es legal comprar una sepultura a un particular o intermediario?",
    answer:
      "Sí, es completamente legal. Los derechos de uso de una sepultura son un bien que puede transferirse y, en Chile, esta operación se realiza habitualmente entre particulares e intermediarios. Para tu total seguridad, toda la operación se formaliza mediante contrato de cesión de derechos ante notario y el cambio de titularidad se registra oficialmente ante la administradora del cementerio, quedando la sepultura a tu nombre.",
  },
  {
    question: "¿Qué documentación necesito y quién se hace cargo de los gastos?",
    answer:
      "Solo necesitas tu cédula de identidad vigente. Del resto nos encargamos nosotros: preparamos el contrato de cesión de derechos, coordinamos la comparecencia ante notario y realizamos el trámite de cambio de titularidad ante la administración del parque. Además, cubrimos el 100% de los gastos de documentación notarial y el 10% de los costos de transferencia, tal como lo indicamos en nuestra propuesta.",
  },
  {
    question: "¿Cómo funciona la transferencia de titularidad ante el parque?",
    answer:
      "Una vez firmada la cesión de derechos ante notario, presentamos los documentos en la administración del Parque El Recuerdo Américo Vespucio para registrar el cambio de titular. Con ese registro, la sepultura queda oficialmente a tu nombre o al de quien tú indiques, con todos los derechos de uso correspondientes. Te acompañamos durante todo el proceso y te mantenemos informado en cada etapa.",
  },
  {
    question: "¿La entrega de la sepultura es realmente inmediata?",
    answer:
      "Sí. Al tratarse de sepulturas disponibles para transferencia, una vez completada la firma ante notario y el registro en el parque, la sepultura queda a tu disposición de inmediato. No hay listas de espera ni tiempos de habilitación de nuevos proyectos: el lote existe, está disponible y se entrega al momento de concretar la operación.",
  },
  {
    question: "¿Existen costos ocultos o pagos adicionales?",
    answer:
      "No. El precio que te entregamos por WhatsApp es el precio final de la sepultura. Dentro del acuerdo, nosotros además asumimos el 10% de los costos de transferencia y la totalidad de la documentación notarial. Antes de firmar conocerás cada detalle por escrito y resolveremos cualquier duda que tengas, para que la operación sea 100% transparente.",
  },
  {
    question: "¿Puedo visitar el parque y ver la sepultura antes de comprar?",
    answer:
      "Por supuesto, y de hecho lo recomendamos. Coordinamos contigo una visita al Parque El Recuerdo Américo Vespucio para que conozcas la sepultura, su ubicación dentro del parque y el entorno. Creemos que una decisión tan importante debe tomarse con total tranquilidad y sobre la base de información real, sin presiones de ningún tipo.",
  },
  {
    question: "¿Cómo inicio el proceso de compra?",
    answer:
      "Solo debes escribirnos por WhatsApp haciendo clic en cualquiera de los botones verdes de esta página. El mensaje llega preconfigurado con la información del servicio para agilizar tu atención. Te responderemos con la disponibilidad actual, los precios y todos los pasos a seguir, sin ningún compromiso de tu parte.",
  },
];

// ─────────────────────────────────────────────────────────────
// TESTIMONIOS
// ⚠️ IMPORTANTE: los siguientes son textos de ejemplo (placeholders).
//    ANTES DE PUBLICAR, reemplázalos por testimonios reales de tus
//    clientes (con su autorización) o elimina esta sección.
// ─────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    quote:
      "El proceso fue mucho más simple de lo que imaginaba. Todo se hizo ante notario y en pocos días teníamos la sepultura a nombre de la familia, a la mitad de lo que nos cotizaban directamente en el parque.",
    author: "M. T.",
    place: "Santiago",
  },
  {
    quote:
      "Perdimos mucho tiempo comparando precios y aquí nos resolvieron todo por WhatsApp: precio claro, documentación incluida y una atención muy respetuosa en un momento difícil para nosotros.",
    author: "C. R.",
    place: "Recoleta",
  },
  {
    quote:
      "Lo que más valoro es la transparencia. Nos explicaron cada paso, el contrato quedó registrado en el parque y el ahorro fue cercano al 50%. Los recomendaría sin dudarlo.",
    author: "J. A.",
    place: "Huechuraba",
  },
];

// ─────────────────────────────────────────────────────────────
// GALERÍA DE SEPULTURAS DISPONIBLES
// ✅ FOTOS REALES del Parque El Recuerdo Américo Vespucio
//    (galería personal del vendedor, seleccionadas 10 de 26).
//    SIN precios en el sitio: los valores se entregan por
//    WhatsApp (la oferta al 50% del valor oficial se comunica
//    en el resto de la página).
//    Para agregar/quitar fichas: edita este array y guarda la
//    foto correspondiente en public/img/ (600x800, 3:4).
// ─────────────────────────────────────────────────────────────
export type Sepultura = {
  id: string;
  titulo: string;
  sector: string;
  descripcion: string;
  imagen: string;
  disponible: boolean;
};

export const SEPULTURAS: Sepultura[] = [
  {
    id: "lote-01",
    titulo: "Sepultura en jardín con árboles en flor",
    sector: "Jardín L07 · floración de primavera",
    descripcion:
      "Lote en un jardín de árboles florados y arbustos formados, con pradera verde y luz durante casi todo el año. Uno de los sectores más hermosos del parque.",
    imagen: withBasePath("/img/sep-real-01.jpg"),
    disponible: true,
  },
  {
    id: "lote-02",
    titulo: "Sepultura con vista a la cordillera",
    sector: "Sector B40 · vista abierta a cerros",
    descripcion:
      "Posición en pradera alta con vista despejada hacia la cordillera. Entorno sereno, caminos planos y una de las mejores panorámicas del parque.",
    imagen: withBasePath("/img/sep-real-02.jpg"),
    disponible: true,
  },
  {
    id: "lote-03",
    titulo: "Sepultura entre jardines con vista a cerros",
    sector: "Sector B40 · jardinería formada",
    descripcion:
      "Lote rodeado de arbustos esféricos y macizos de flores, con los cerros verdes como telón de fondo. Jardinería cuidada durante todo el año.",
    imagen: withBasePath("/img/sep-real-03.jpg"),
    disponible: true,
  },
  {
    id: "lote-04",
    titulo: "Sepultura en jardín arbolado",
    sector: "Jardín L07 · sombra y privacidad",
    descripcion:
      "Posición en jardín con árboles maduros que entregan sombra fresca en verano y un marco natural de privacidad para la familia.",
    imagen: withBasePath("/img/sep-real-04.jpg"),
    disponible: true,
  },
  {
    id: "lote-05",
    titulo: "Sepultura en pradera con vista a cerros",
    sector: "Sector B40 · pradera abierta",
    descripcion:
      "Lote en pradera amplia con bancos de descanso cercanos y vista a los cerros. Luminoso, de fácil acceso y con entorno natural despejado.",
    imagen: withBasePath("/img/sep-real-05.jpg"),
    disponible: true,
  },
  {
    id: "lote-06",
    titulo: "Sepultura con vista panorámica",
    sector: "Sector B40 · panorama cordillerano",
    descripcion:
      "Lote con vista panorámica hacia las montañas y los jardines del parque, en un sector amplio, tranquilo y bien iluminado.",
    imagen: withBasePath("/img/sep-real-06.jpg"),
    disponible: true,
  },
  {
    id: "lote-07",
    titulo: "Sepultura bajo cedro",
    sector: "Arboleda de cedros",
    descripcion:
      "Lote al pie de un cedro maduro, con el verde del césped y la copa del árbol como entorno natural permanente.",
    imagen: withBasePath("/img/sep-lote-07.jpg"),
    disponible: true,
  },
  {
    id: "lote-08",
    titulo: "Sepultura junto a laguna",
    sector: "Sector laguna · nenúfares",
    descripcion:
      "Posición próxima a la laguna del parque, con aves y nenúfares en el entorno. Uno de los sectores más apetecidos.",
    imagen: withBasePath("/img/sep-lote-08.jpg"),
    disponible: true,
  },
  {
    id: "lote-09",
    titulo: "Sepultura con vista a laguna",
    sector: "Sendero laguna · entorno ajardinado",
    descripcion:
      "Lote sobre el sendero de acceso a la laguna, combinación de agua, piedras y jardinería cuidada a su alrededor.",
    imagen: withBasePath("/img/sep-lote-09.jpg"),
    disponible: true,
  },
  {
    id: "lote-10",
    titulo: "Sepultura en jardín florido",
    sector: "Jardín con arbustos en flor",
    descripcion:
      "Lote rodeado de arbustos con floración amarilla: color y vida en cada visita durante buena parte del año.",
    imagen: withBasePath("/img/sep-lote-10.jpg"),
    disponible: true,
  },
];

// Mensaje de WhatsApp preconfigurado por producto (más específico = más conversión)
export function sepulturaWhatsAppUrl(s: Sepultura): string {
  const msg = `Hola, me interesa la "${s.titulo}" (${s.sector}) que vi en la galería de fotos del Parque El Recuerdo Américo Vespucio. ¿Sigue disponible y cuál es el valor con todo incluido? ¡Gracias!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
