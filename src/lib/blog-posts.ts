// ─────────────────────────────────────────────────────────────
// BLOG — Guías concentradas en las palabras clave reales del
// mercado chileno (research 24-nov-2026 + datos de Search Console).
// Clusters cubiertos:
//   A. Traspaso / cesión de derechos  (poco competido, alto valor)
//   B. Precio / cuánto cuesta         (volumen alto → convierte por WhatsApp)
//   C. Educativo / diferencias        (citable por IA de Google)
//   D. Compra / venta en Santiago     (cluster principal, «venta de sepulturas» ya pos. 11,5)
// Políticas: SIN precios publicados; cotización por WhatsApp.
// Fechas fijas (no new Date()) para que el build estático sea determinista.
// ─────────────────────────────────────────────────────────────

import { withBasePath, WHATSAPP_NUMBER } from "@/lib/site-config";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "cta"; note?: string };

export type BlogPost = {
  slug: string;
  title: string; // ≤ 60 caracteres (límite Bing)
  shortTitle: string; // para tarjetas
  description: string; // ≤ 160 caracteres (límite Bing)
  keywords: string[];
  date: string; // ISO
  readingMinutes: number;
  blocks: BlogBlock[];
  related: string[]; // slugs de artículos relacionados
};

export const SITE_NAME = "Sepulturas Américo Vespucio";

export function blogPath(slug?: string): string {
  return withBasePath(slug ? `/blog/${slug}/` : "/blog/");
}

// Mensaje de WhatsApp preconfigurado por artículo (más específico = más conversión)
export function blogWhatsAppUrl(post: BlogPost): string {
  const msg = `Hola, leí la guía "${post.shortTitle}" en el blog de sepulturasenoferta.cl y quisiera que me ayuden con mi caso (sepultura en el Parque El Recuerdo Américo Vespucio). ¡Gracias!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export const POSTS: BlogPost[] = [
  {
    slug: "traspaso-de-sepultura-en-chile",
    title: "Traspaso de sepultura en Chile: cómo se hace la cesión",
    shortTitle: "Traspaso de sepultura en Chile",
    description:
      "Cómo funciona el traspaso de una sepultura: cesión de derechos ante notario, registro en el cementerio, requisitos y documentos. Guía clara para Chile.",
    keywords: [
      "traspaso de sepulturas",
      "cesión de derechos de sepultura",
      "transferencia de sepultura",
      "derechos de sepultación perpetua",
      "enajenación de sepultura",
      "traspaso notarial cementerio",
    ],
    date: "2026-11-24",
    readingMinutes: 6,
    related: ["comprar-sepultura-santiago", "cuanto-cuesta-una-sepultura"],
    blocks: [
      {
        type: "p",
        text: "Cuando una familia hereda, vende o compra una sepultura en Chile, la pregunta que aparece primero es siempre la misma: **¿cómo se hace el traspaso para que todo quede legal?** La buena noticia es que se trata de un proceso conocido, con pasos claros, y que hoy se realiza de forma habitual entre particulares y con la intervención de un notario. Esta guía explica, en lenguaje simple, qué se transfiere exactamente, qué exige el cementerio y qué documentos necesitas.",
      },
      { type: "h2", text: "Qué se transfiere realmente: un derecho, no un terreno" },
      {
        type: "p",
        text: "En Chile, quien «tiene una sepultura» no es dueño del terreno, sino titular de un **derecho de sepultación** —habitualmente perpetuo— otorgado por la administradora del cementerio. Por eso las escrituras hablan de «cesión de derechos de sepultación» y por eso el traspaso se registra ante el propio cementerio. Cuando compras, recibes ese derecho, con su ubicación exacta (sector, manzana y número) y sus condiciones de uso.",
      },
      {
        type: "p",
        text: "El marco general lo fija el **Reglamento de Cementerios (Decreto Supremo N° 357 de 1970, del Ministerio de Salud)**, que exige que la transferencia cuente con la autorización del cementerio y que la sepultura esté desocupada y al día. En la práctica, las administradoras —incluido el Parque El Recuerdo— tienen procedimientos de cambio de titularidad bien definidos: documentos de identidad, el contrato de cesión y el registro del nuevo titular.",
      },
      { type: "h2", text: "Las tres formas más comunes de traspasar una sepultura" },
      {
        type: "ul",
        items: [
          "**Venta (enajenación):** el titular cede sus derechos a un tercero a cambio de un precio. Es la vía que usamos en cada venta de este sitio y se formaliza ante notario.",
          "**Herencia:** al fallecer el titular, los derechos pasan a sus herederos; si son varios, suelen cederlos a uno de ellos mediante cesión de derechos hereditarios.",
          "**Donación entre vivos:** el titular cede gratuitamente a un familiar. Se documenta igual que una venta, solo que sin precio.",
        ],
      },
      { type: "h2", text: "El proceso paso a paso" },
      {
        type: "ul",
        items: [
          "**Revisión de antecedentes:** se verifican los derechos de la sepultura (titularidad vigente, ubicación, capacidad y que esté desocupada y sin deudas de mantención).",
          "**Cédula de identidad vigente:** el único documento que necesitas aportar como comprador.",
          "**Contrato de cesión de derechos:** se redacta con la identificación exacta de la sepultura y de las partes.",
          "**Firma ante notario:** ambos comparecen y la cesión queda como escritura o instrumento notarial.",
          "**Registro ante la administradora:** el contrato se presenta en la administración del cementerio, que actualiza el titular. Con ese registro, la sepultura queda oficialmente a tu nombre.",
        ],
      },
      {
        type: "quote",
        text: "En nuestras operaciones, todo este proceso está incluido: preparamos el contrato, coordinamos la notaría y hacemos el cambio de titularidad ante el parque, cubriendo el 100 % de los gastos de documentación notarial y el 10 % de los costos de transferencia.",
      },
      { type: "h2", text: "Errores que conviene evitar" },
      {
        type: "ul",
        items: [
          "Comprar sin verificar que el titular que firma es el titular registrado (o que los herederos autorizan la venta).",
          "Aceptar un simple «papel interno» sin notario: sin cesión formal, el cambio de titular no se registra.",
          "Olvidar revisar mantenciones o deudas pendientes con el cementerio antes de cerrar.",
          "Dejar el registro ante la administradora «para después»: mientras no se registre, el derecho sigue a nombre del vendedor.",
        ],
      },
      { type: "h2", text: "Preguntas rápidas" },
      {
        type: "p",
        text: "**¿Cuánto demora?** Entre la revisión de antecedentes y el registro en el parque, el proceso completo suele resolverse en pocos días hábiles, siempre que la documentación esté al día. **¿Necesito ir al cementerio?** Para la visita a la sepultura lo recomendamos; para el trámite, nosotros te acompañamos en cada etapa. **¿Y si la sepultura tiene otra persona sepultada?** Una sepultura ocupada no se transfiere con el mismo régimen que una desocupada: primero se resuelve la situación con la administradora. Escríbenos y revisamos tu caso concreto sin compromiso.",
      },
      {
        type: "cta",
        note: "¿Tienes dudas sobre un traspaso concreto, o quieres comprar una sepultura con el traspaso notarial incluido?",
      },
    ],
  },
  {
    slug: "cuanto-cuesta-una-sepultura",
    title: "¿Cuánto cuesta una sepultura en Chile? Factores clave",
    shortTitle: "¿Cuánto cuesta una sepultura?",
    description:
      "Los factores que definen el precio de una sepultura en Chile: tipo, perpetuidad, parque y ubicación. Por qué no publicamos precios y cómo cotizar rápido.",
    keywords: [
      "cuánto cuesta una sepultura",
      "precio de una sepultura en Chile",
      "valor de una sepultura en un cementerio",
      "sepulturas económicas Santiago",
      "cotización sepultura Parque El Recuerdo",
    ],
    date: "2026-11-24",
    readingMinutes: 5,
    related: ["comprar-sepultura-santiago", "diferencia-entre-sepultura-nicho-y-osario"],
    blocks: [
      {
        type: "p",
        text: "Es la búsqueda más común y también la que menos respuesta directa encuentra: casi ningún sitio funerario publica valores. Esta guía explica por qué no existe «un precio» único, qué factores mueven el valor de una sepultura en Chile y cómo obtener una **cotización real, con todo incluido, en un solo mensaje de WhatsApp**. No publicamos cifras en la página por una razón que te contamos al final: aquí lo importante es que sepas leer el mercado antes de comparar.",
      },
      { type: "h2", text: "Por qué no hay un precio único" },
      {
        type: "p",
        text: "El valor de una sepultura depende de decisiones que cada familia toma distinto. Un nicho municipal renovable no se compara con una sepultura perpetua en un parque privado; una ubicación junto a la laguna o con vista a la cordillera no vale lo mismo que una pradera estándar; y la **capacidad** (1, 3 o 6 urnas) cambia la cifra final. A esto se suma el mercado de reventa: sepulturas ya constituidas que se ofrecen a valores distintos a la lista actual del parque.",
      },
      { type: "h2", text: "Los cinco factores que definen el valor" },
      {
        type: "ul",
        items: [
          "**Tipo de espacio:** sepultura en tierra, nicho en muro o columbario, bóveda o mausoleo. Cada tipo tiene lógicas de precio distintas.",
          "**Perpetuidad vs. plazo:** en cementerios municipales los nichos suelen concederse por plazos renovables (de 5 o 10 años); la perpetuidad evita renovaciones futuras.",
          "**Categoría del cementerio:** parque privado con jardinería, seguridad y servicios permanentes frente a cementerio municipal con aranceles anuales.",
          "**Ubicación y capacidades:** sector (jardines arbolados, praderas, laguna), vista, cercanía de accesos y número de urnas que admite.",
          "**Qué incluye el precio:** gastos notariales, cambio de titularidad y costos de transferencia pueden ir dentro del acuerdo o sumarse después.",
        ],
      },
      { type: "h2", text: "Comparar bien: la lista que recomendamos" },
      {
        type: "ul",
        items: [
          "Pide siempre el **precio final con todo incluido**, no solo el valor del lote.",
          "Pregunta qué gastos de notaría y de transferencia quedan de tu lado.",
          "Verifica que la sepultura esté **desocupada, al día y con titularidad vigente**.",
          "Confirma por escrito la perpetuidad del derecho y la capacidad.",
          "Visita la sepultura antes de decidir: ubicación real, entorno y accesos.",
        ],
      },
      { type: "h2", text: "El mercado de reventa: por qué puede ser más conveniente" },
      {
        type: "p",
        text: "Gran parte de las sepulturas disponibles hoy en Santiago son **sepulturas ya constituidas** que familias o intermediarios ponen en el mercado. Eso abre una ventana de valores difícil de obtener comprando directo en lista de precios del parque. El punto crítico no es el valor sino la formalidad: la operación debe cerrarse con cesión de derechos ante notario y registro del cambio de titular en la administradora. Ese es exactamente el estándar con el que trabajamos en cada venta de este sitio.",
      },
      { type: "h2", text: "Por qué no publicamos precios (y cómo cotizar en 2 minutos)" },
      {
        type: "p",
        text: "Publicar una cifra genérica obligaría a promediar sepulturas que son distintas entre sí: sectores, capacidades y vistas que no se equivalen. Prefierimos lo contrario: te mostramos **fotos reales de cada sepultura disponible** con su sector, y cuando escribes por WhatsApp te entregamos el valor final con todo incluido para el lote que te interesa. Sin intermediarios de información, sin números que no corresponden a ningún lote real, y sin compromiso.",
      },
      {
        type: "cta",
        note: "¿Quieres el precio final de una sepultura concreta, con notaría y transferencia incluidas?",
      },
    ],
  },
  {
    slug: "diferencia-entre-sepultura-nicho-y-osario",
    title: "Sepultura, nicho y osario: diferencias y cuál elegir",
    shortTitle: "Sepultura, nicho y osario: diferencias",
    description:
      "Diferencias entre sepultura, nicho, osario, columbario y mausoleo, explicadas en simple. Tipos de enterramiento en Chile para decidir con calma.",
    keywords: [
      "diferencia entre sepultura y nicho",
      "qué es un osario",
      "tipos de enterramiento",
      "columbario y mausoleo",
      "sepultura perpetua",
    ],
    date: "2026-11-24",
    readingMinutes: 5,
    related: ["cuanto-cuesta-una-sepultura", "comprar-sepultura-santiago"],
    blocks: [
      {
        type: "p",
        text: "Sepultura, nicho, osario, columbario, mausoleo… son palabras que aparecen juntas justo cuando una familia debe decidir con apuro. Esta guía ordena el vocabulario funerario en Chile de una vez por todas: qué es cada espacio, en qué se diferencian y cuál conviene según la situación de tu familia. Sin tecnicismos innecesarios y con la decisión práctica al final.",
      },
      { type: "h2", text: "Sepultura: el espacio en tierra" },
      {
        type: "p",
        text: "La sepultura es el lugar de inhumación en tierra: un lote dentro de un jardín o pradera del cementerio donde la familia puede colocar lápidas, planchas y flores, y donde recordar a sus seres queridos al aire libre. Es la opción con más presencia familiar: cada visita es a un espacio propio, reconocible, en un entorno de parque. Cuando el derecho es **perpetuo**, la sepultura queda para la familia sin renovaciones de plazo.",
      },
      { type: "h2", text: "Nicho: la cavidad en el muro" },
      {
        type: "p",
        text: "El nicho no está excavado en la tierra: es una **cavidad en un muro o estructura**, cerrada con una placa, que recibe el féretro o la urna. Los nichos se agrupan en grandes estructuras llamadas **columbarios**. Su ventaja está en el espacio y la mantención: no requieren jardinería propia y suelen ser la alternativa más compacta. En cementerios municipales se conceden frecuentemente por plazos renovables; en parques privados existen versiones perpetuas.",
      },
      { type: "h2", text: "Osario: la etapa posterior" },
      {
        type: "p",
        text: "El osario no compite con los anteriores: es una **etapa posterior**. Cuando un nicho o sepultura temporal cumple su plazo y no se renueva, los restos se reducen y se trasladan al osario, un espacio común de menor costo. La secuencia típica en cementerios con plazos es: nicho temporal → reducción → osario. Con una sepultura perpetua, esa jugada futura simplemente no existe: no hay renovaciones ni traslados obligados.",
      },
      { type: "h2", text: "Mausoleo: la construcción familiar" },
      {
        type: "p",
        text: "El mausoleo es una construcción sobre el terreno —una pequeña edificación familiar que aloja varios féretros o urnas—. Es la opción de mayor inversión y presencia, típica de familias con tradición de apellido. En el mercado de reventa casi no aparece; se construye a medida en parques que lo permiten.",
      },
      { type: "h2", text: "Cuadro de decisión rápida" },
      {
        type: "ul",
        items: [
          "**Quieres un lugar de recuerdo al aire libre, con jardín y para siempre →** sepultura perpetua en parque (nuestra especialidad).",
          "**Buscas la opción más compacta y de mantención mínima →** nicho en columbario.",
          "**Te preocupa el futuro de una sepultura con plazo vencido →** revisa la renovación antes de la fecha límite para evitar el traslado al osario.",
          "**La familia es numerosa y quiere un espacio propio emblemático →** mausoleo, con proyecto a medida.",
        ],
      },
      { type: "h2", text: "El detalle que casi nadie mira: perpetuidad" },
      {
        type: "p",
        text: "En la práctica chilena, la gran diferencia no está solo en el tipo de espacio sino en el **régimen del derecho**: perpetuo o por plazo. Un espacio por plazo parece más económico al inicio, pero suma renovaciones periódicas y, si la familia no renueva, la reducción a osario. Una sepultura perpetua se paga una vez y la familia queda cubierta para siempre. Es la razón por la que nuestras sepulturas disponibles en el Parque El Recuerdo Américo Vespucio se ofrecen con derechos perpetuos y transferencia registrada.",
      },
      {
        type: "cta",
        note: "¿Quieres ver sepulturas perpetuas reales, con foto y sector, disponibles hoy?",
      },
    ],
  },
  {
    slug: "comprar-sepultura-santiago",
    title: "Comprar una sepultura en Santiago: guía en 7 pasos",
    shortTitle: "Comprar sepultura en Santiago: 7 pasos",
    description:
      "Guía para comprar una sepultura en Santiago: tipos, documentos, verificación de derechos, traspaso notarial y entrega. Compra segura paso a paso.",
    keywords: [
      "comprar sepultura Santiago",
      "venta de sepulturas Santiago",
      "sepulturas en venta Chile",
      "lote de cementerio en venta",
      "sepultura en venta Parque El Recuerdo",
    ],
    date: "2026-11-24",
    readingMinutes: 7,
    related: ["traspaso-de-sepultura-en-chile", "cuanto-cuesta-una-sepultura"],
    blocks: [
      {
        type: "p",
        text: "Comprar una sepultura es una decisión patrimonial: se compra una vez y queda para la familia. Esta guía ordena el proceso completo en **7 pasos**, con los documentos necesarios y las señales de seguridad que conviene exigir, ya sea que compres directamente en un parque, en un marketplace o con un intermediario como nosotros. Al final, el caso concreto que resolvemos a diario: sepulturas disponibles hoy en el Parque El Recuerdo Américo Vespucio.",
      },
      { type: "h2", text: "Paso 1 · Define el tipo de espacio que tu familia necesita" },
      {
        type: "p",
        text: "Parte por el uso real: ¿es para un fallecimiento próximo, para planificación familiar o para resolver un traspaso hereditario? La respuesta define tipo y capacidad. Una **sepultura familiar de 3 capacidades** resuelve la mayoría de los casos; las de mayor capacidad sirven a familias extensas. Si el objetivo es el recuerdo al aire libre sin renovaciones, la respuesta es la sepultura perpetua en parque.",
      },
      { type: "h2", text: "Paso 2 · Elige el cementerio y el sector" },
      {
        type: "p",
        text: "En Santiago, la decisión práctica incluye **dónde quedará la visita de cada año**: accesos, transporte, entorno. El Parque El Recuerdo Américo Vespucio se ubica sobre la avenida Américo Vespucio, con acceso directo desde toda la capital, y ofrece sectores muy distintos entre sí: jardines arbolados, praderas abiertas con vista a la cordillera y el entorno de la laguna. Elegir sector es elegir cómo será cada visita.",
      },
      { type: "h2", text: "Paso 3 · Verifica la titularidad y el estado del lote" },
      {
        type: "ul",
        items: [
          "Que el vendedor sea el **titular registrado** (o acredite la cadena de herederos).",
          "Que la sepultura esté **desocupada y sin deudas de mantención**.",
          "Que el derecho sea **perpetuo** y con la capacidad declarada.",
          "Que la administradora reconozca el lote: sector, manzana y número.",
        ],
      },
      { type: "h2", text: "Paso 4 · Exige cesión de derechos ante notario" },
      {
        type: "p",
        text: "El corazón de la compra segura es el **contrato de cesión de derechos firmado ante notario**. Un «papel interno» o un acuerdo verbal no registran titularidad. La cesión debe identificar la sepultura con precisión y quedar en poder de ambas partes: es el documento que la administradora exigirá para el cambio de titular. Si alguien te presiona para saltarte este paso, es señal de alerta.",
      },
      { type: "h2", text: "Paso 5 · Registra el cambio de titularidad en el parque" },
      {
        type: "p",
        text: "Firmado el contrato, la operación se cierra **registrando el cambio de titular ante la administradora**. Solo con ese registro la sepultura queda oficialmente a tu nombre y puedes ejercer todos los derechos: sepultación, construcción de lápida, visitas y futura reventa. Nosotros realizamos este trámite por ti y te entregamos la constancia.",
      },
      { type: "h2", text: "Paso 6 · Ponle precio final a todo" },
      {
        type: "p",
        text: "La comparación honesta se hace sobre el **precio final con todo incluido**: valor del lote + gastos de notaría + costos de transferencia. Muchas ofertas de marketplace se ven convenientes hasta que aparecen los gastos de tu lado. En nuestra propuesta, la documentación notarial va **100 % incluida** y asumimos el 10 % de los costos de transferencia; lo conversado por WhatsApp es lo que pagas, por escrito.",
      },
      { type: "h2", text: "Paso 7 · Visita la sepultura antes de firmar" },
      {
        type: "p",
        text: "Ninguna foto reemplaza estar ahí: caminar el sector, ver la luz, los árboles y el entorno en una hora real de visita. Coordinamos la visita al parque contigo, sin presiones y sin compromiso, para que la decisión se tome con calma. Una decisión tan importante merece información real.",
      },
      {
        type: "quote",
        text: "Resumen de la compra segura: titularidad verificada + cesión ante notario + registro en el parque + precio final por escrito. Todo lo demás es riesgo innecesario.",
      },
      { type: "h2", text: "Sepulturas disponibles hoy en Américo Vespucio" },
      {
        type: "p",
        text: "Trabajamos con sepulturas ya constituidas y disponibles para transferencia inmediata en el Parque El Recuerdo Américo Vespucio: jardines con árboles en flor, praderas con vista a la cordillera y posiciones junto a la laguna. Cada una tiene **fotos reales, sector y descripción en la galería de esta página**, y se entrega con el proceso completo de los pasos 4 y 5 incluido. Revisa la galería y escríbenos por WhatsApp para recibir disponibilidad y valor final del lote que te interese.",
      },
      {
        type: "cta",
        note: "¿Listo para el paso 1? Te ayudamos a definirlo en un solo mensaje.",
      },
    ],
  },
];
