import beeldenJson from "@/data/beelden.json";

export type BeeldCategory =
  | "pand"
  | "lassen"
  | "kanten"
  | "ponsen"
  | "constructie"
  | "plaatwerk"
  | "nieuws";

export type Beeld = {
  src: string;
  w: number;
  h: number;
  category: BeeldCategory;
  alt: string;
  family: string;
};

/** Crops of the same shot share a family and are never shown together. */
const families: Record<string, string> = {
  "/img/114.jpg": "las-overall-vonken",
  "/img/181.jpg": "las-overall-vonken",
  "/img/146.jpg": "las-overall",
  "/img/153.jpg": "las-samenstelling",
  "/img/129.jpg": "las-tig",
  "/img/147.jpg": "las-tig",
  "/img/180.jpg": "las-boog",
  "/img/199.jpg": "las-boog",
  "/img/139.jpg": "kant-zet",
  "/img/142.jpg": "kant-gereedschap",
  "/img/149.jpg": "kant-gereedschap",
  "/img/170.jpg": "kant-plaat",
  "/img/203.jpg": "kant-plaat",
  "/img/143.jpg": "kant-close",
  "/img/151.jpg": "kant-close",
  "/img/179.jpg": "kant-close",
  "/img/140.jpg": "pons-machine",
  "/img/148.jpg": "pons-machine",
  "/img/152.jpg": "pons-machine",
  "/img/205.jpg": "pons-machine",
  "/img/126.jpg": "pons-gaten-rand",
  "/img/173.jpg": "pons-gaten-rand",
  "/img/198.jpg": "pons-gaten-rand",
  "/img/128.jpg": "pons-perforatie",
  "/img/176.jpg": "pons-perforatie",
  "/img/201.jpg": "pons-perforatie",
  "/img/191.jpg": "pons-perforatie",
  "/img/141.jpg": "pons-vlakken",
  "/img/174.jpg": "pons-vlakken",
  "/img/175.jpg": "pons-patroon",
  "/img/162.jpg": "con-bordes",
  "/img/183.jpg": "con-bordes",
  "/img/186.jpg": "con-bordes",
  "/img/165.jpg": "con-frame",
  "/img/188.jpg": "con-frame",
  "/img/196.jpg": "con-frame",
  "/img/182.jpg": "con-frame",
  "/img/184.jpg": "con-trap",
  "/img/185.jpg": "con-buiten",
  "/img/187.jpg": "con-trap-bordes",
  "/img/194.jpg": "con-montage",
  "/img/192.jpg": "plaat-kanaal",
  "/img/193.jpg": "plaat-gerold",
  "/img/110.jpg": "pand",
  "/img/229.jpg": "nieuws-rtl",
};

export const beelden: Beeld[] = beeldenJson.map((beeld) => ({
  ...beeld,
  category: beeld.category as BeeldCategory,
  family: families[beeld.src] ?? beeld.src,
}));

export function beeld(src: string): Beeld {
  const found = beelden.find((item) => item.src === src);
  if (!found) throw new Error(`Onbekend beeld: ${src}`);
  return found;
}

export function uniqueFamilies(list: Beeld[]): Beeld[] {
  const sorted = [...list].sort((a, b) => b.w * b.h - a.w * a.h);
  const seen = new Set<string>();
  const unique: Beeld[] = [];
  for (const item of sorted) {
    if (seen.has(item.family)) continue;
    seen.add(item.family);
    unique.push(item);
  }
  return unique;
}
