"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "@/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header data-section="header" className="site-header">
      <div className="frame-wide py-2">
        <div className="flex items-center gap-3">
          <Link href="/" className="logo-plate shrink-0" aria-label="Peters Metaaltechniek, naar home">
            {/* Logo is a fixed brand plate; keep it at its own aspect and under the source width. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={content.company.logo}
              alt="Peters Metaaltechniek, uw partner in metaalwerk"
              width={304}
              height={143}
              className="h-11 w-auto md:h-14"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 xl:flex" aria-label="Hoofdmenu">
            {content.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="inline-flex min-h-11 items-center whitespace-nowrap px-1.5 text-[0.95rem] text-ink no-underline hover:text-brand"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto hidden items-center gap-2 xl:flex">
            <Link
              href="/werken-bij"
              data-cta="solliciteren"
              className="inline-flex min-h-11 items-center gap-2 px-1 text-ink no-underline hover:text-brand"
            >
              Werken bij
              <span className="counter" aria-label="2 vacatures">
                2
              </span>
            </Link>
            <a
              href={content.contact.phoneHref}
              data-cta="bellen"
              className="inline-flex min-h-11 items-center whitespace-nowrap px-1 font-mono text-[0.92rem] text-ink no-underline"
            >
              {content.contact.phone}
            </a>
            <Link href="/offerte" data-cta="offerte" className="btn btn-solid">
              Offerte aanvragen
            </Link>
          </div>

          <button
            type="button"
            className="btn ml-auto xl:hidden"
            aria-expanded={open}
            aria-controls="mobiel-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>

        <div className="mt-2 hidden gap-2 max-xl:flex">
          <Link href="/werken-bij" data-cta="solliciteren" className="btn flex-1">
            Werken bij
            <span className="counter ml-2" aria-label="2 vacatures">
              2
            </span>
          </Link>
          <Link href="/offerte" data-cta="offerte" className="btn btn-solid flex-1">
            Offerte
          </Link>
        </div>
      </div>

      {open ? (
        <nav id="mobiel-menu" className="menu-panel xl:hidden" aria-label="Mobiel menu">
          <ul className="frame grid py-2">
            {content.nav.map((item) => (
              <li key={item.href} className="border-t border-ink/10">
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center text-ink no-underline"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
