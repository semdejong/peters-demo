import type { Metadata } from "next";
import { content } from "@/content";
import { ServiceView } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "Lassen van staal, RVS en aluminium | Peters Metaaltechniek",
  description: content.services.lassen.meta,
};

export default function Page() {
  return <ServiceView serviceKey="lassen" />;
}
