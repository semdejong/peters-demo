import type { ReactNode } from "react";
import { content } from "@/content";

export function PhoneLink({ className = "", children }: { className?: string; children?: ReactNode }) {
  return (
    <a href={content.contact.phoneHref} data-cta="bellen" className={className}>
      {children ?? content.contact.phone}
    </a>
  );
}
