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
