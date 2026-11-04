import type { Metadata } from "next";
import { content } from "@/content";
import { ServiceView } from "@/components/ServiceView";

export const metadata: Metadata = {
  title: "CNC-kanten | Peters Metaaltechniek",
  description: content.services.kanten.meta,
};

export default function Page() {
  return <ServiceView serviceKey="kanten" />;
}
