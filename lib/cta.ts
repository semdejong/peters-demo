/** Leidt de data-cta-waarde af van een href (voor de Sleads demo-analytics tracker). */
export function ctaType(href: string): "bellen" | "mailen" | "offerte" | "solliciteren" {
  if (href.startsWith("tel:")) return "bellen";
  if (href.startsWith("mailto:administratie@")) return "solliciteren";
  if (href.startsWith("mailto:")) return "mailen";
  if (href.startsWith("/werken-bij")) return "solliciteren";
  return "offerte";
}
