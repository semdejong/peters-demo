"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { beeld, uniqueFamilies, type Beeld } from "@/lib/beelden";

const filters = [
  { id: "alles", label: "Alles" },
  { id: "ponsen", label: "Ponsen" },
  { id: "kanten", label: "Kanten" },
  { id: "lassen", label: "Lassen" },
  { id: "constructiewerk", label: "Constructiewerk" },
] as const;

type FilterId = (typeof filters)[number]["id"];

const order = [
  "/img/187.jpg",
  "/img/186.jpg",
  "/img/184.jpg",
  "/img/185.jpg",
  "/img/165.jpg",
  "/img/194.jpg",
  "/img/140.jpg",
  "/img/126.jpg",
  "/img/128.jpg",
  "/img/141.jpg",
  "/img/175.jpg",
  "/img/139.jpg",
  "/img/142.jpg",
  "/img/203.jpg",
  "/img/143.jpg",
  "/img/114.jpg",
  "/img/129.jpg",
  "/img/153.jpg",
  "/img/199.jpg",
  "/img/146.jpg",
];

const all = uniqueFamilies(order.map((src) => beeld(src)));

function categoryOf(item: Beeld): FilterId {
  if (item.category === "ponsen") return "ponsen";
  if (item.category === "kanten") return "kanten";
  if (item.category === "lassen") return "lassen";
  if (item.category === "constructie") return "constructiewerk";
  return "alles";
}

export function Gallery() {
  const params = useSearchParams();
  const requested = params.get("filter");
  const active: FilterId = filters.some((item) => item.id === requested) ? (requested as FilterId) : "alles";
  const items = active === "alles" ? all : all.filter((item) => categoryOf(item) === active);
  const [open, setOpen] = useState<Beeld | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    if (open && !node.open) node.showModal();
    if (!open && node.open) node.close();
  }, [open]);

  function step(direction: 1 | -1) {
    if (!open) return;
    const index = items.findIndex((item) => item.src === open.src);
    const next = items[(index + direction + items.length) % items.length];
    setOpen(next);
  }

  return (
    <div data-section="galerij">
      <div className="mb-6 flex gap-2 overflow-x-auto" role="toolbar" aria-label="Filter foto's">
        {filters.map((filter) => {
          const selected = filter.id === active;
          const href = filter.id === "alles" ? "/fotos" : `/fotos?filter=${filter.id}`;
          return (
            <a
              key={filter.id}
              href={href}
              aria-pressed={selected}
              className={`btn shrink-0 ${selected ? "btn-solid" : ""}`}
            >
              {filter.label}
            </a>
          );
        })}
      </div>

      <p className="kicker mb-4">{items.length} foto&apos;s</p>
      <ul className="archive">
        {items.map((item) => (
          <li key={item.src}>
            <figure>
              <button
                type="button"
                className="block w-full border-0 bg-transparent p-0 text-left"
                onClick={() => setOpen(item)}
              >
                {/* Native img so a 600px source is never requested larger than itself. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  style={{ width: "100%", maxWidth: item.w, height: "auto", display: "block" }}
                />
              </button>
              <figcaption className="photo-note">{item.alt}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-steel">Klik een foto om hem groter te zien. Vorige en volgende blijven bij het gekozen filter.</p>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Foto vergroot"
        onClose={() => setOpen(null)}
        onClick={(event) => {
          if (event.target === dialog.current) setOpen(null);
        }}
      >
        {open ? (
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="kicker m-0">{open.alt}</p>
              <button type="button" className="btn" onClick={() => setOpen(null)}>
                Sluiten
              </button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={open.src}
              alt={open.alt}
              width={open.w}
              height={open.h}
              style={{ width: "auto", maxWidth: "100%", maxHeight: "70vh", height: "auto", marginInline: "auto" }}
            />
            <div className="mt-3 flex gap-2">
              <button type="button" className="btn" onClick={() => step(-1)}>
                Vorige
              </button>
              <button type="button" className="btn" onClick={() => step(1)}>
                Volgende
              </button>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
