"use client";

import { useEffect } from "react";
import { trackWhatsAppClick } from "@/lib/clarity";

// Rastreo por delegación: un solo listener global captura TODOS los clics en
// enlaces de WhatsApp (botones, flotante, teléfono, footer) sin convertir los
// componentes existentes en client components. La ubicación del CTA sale del
// atributo data-wa-section del enlace (o de un ancestro) y, si no existe,
// de la ruta actual (p. ej. /blog/<slug> identifica el artículo).
export function ClarityTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!/wa\.me|api\.whatsapp|whatsapp\.com/.test(href)) return;
      const ubicacion =
        anchor.getAttribute("data-wa-section") ??
        anchor
          .closest("[data-wa-section]")
          ?.getAttribute("data-wa-section") ??
        undefined;
      trackWhatsAppClick(ubicacion);
    };
    document.addEventListener("click", onClick, { capture: true });
    return () =>
      document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
