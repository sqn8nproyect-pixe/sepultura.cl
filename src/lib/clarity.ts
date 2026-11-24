// Utilidades de Microsoft Clarity (vía E del plan: medición y conversión).
// El script solo se carga con CLARITY_PROJECT_ID definido (layout.tsx);
// sin Clarity activo, todas estas funciones son no-ops seguras.

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

// Límite seguro para valores de tags personalizados de Clarity
const TAG_MAX_LEN = 40;

/**
 * Dispara el evento de conversión principal (whatsapp_click) y etiqueta la
 * sesión con la ubicación del CTA (data-wa-section del botón, o la ruta
 * actual como respaldo). En el panel de Clarity: Events → whatsapp_click,
 * y filtros por el tag "cta_ubicacion".
 */
export function trackWhatsAppClick(ubicacion?: string): void {
  if (typeof window === "undefined" || typeof window.clarity !== "function") {
    return;
  }
  const desdeRuta = (window.location.pathname || "/")
    .replace(/^\//, "")
    .replace(/\/$/, "");
  const tag = (ubicacion || desdeRuta || "home").slice(0, TAG_MAX_LEN);
  window.clarity("event", "whatsapp_click");
  window.clarity("set", "cta_ubicacion", tag);
}
