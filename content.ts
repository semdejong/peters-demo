/**
 * Bedrijfsgegevens Peters Metaaltechniek.
 * Alleen feiten die het bedrijf zelf noemt. Geen openingstijden, geen oprichtingsjaar.
 */
export const content = {
  slug: "peters-demo",

  company: {
    name: "Peters Metaaltechniek B.V.",
    shortName: "Peters Metaaltechniek",
    tagline: "Uw partner in metaalwerk",
    slogan: "Alle bewerkingen onder één dak",
    description:
      "Betrouwbare toeleverancier voor producten uit RVS, staal en aluminium. Ponsnibbelen, CNC-kanten, lassen en constructiewerk vanuit Emmen.",
    logo: "/img/logo-peters.png",
    city: "Emmen",
    owner: "Herman Peters",
  },

  colors: {
    primary: "#265684",
    primaryForeground: "#ffffff",
    accent: "#F2C230",
    background: "#F3F4F5",
    foreground: "#13212E",
    muted: "#E7EAEC",
  },

  seo: {
    title: "Peters Metaaltechniek | Alle bewerkingen onder één dak",
    description:
      "Ponsnibbelen, CNC-kanten, lassen en constructiewerk in staal, RVS en aluminium. Peters Metaaltechniek B.V. in Emmen. Stuur uw tekening voor een offerte.",
    lang: "nl",
  },

  contact: {
    phone: "0591 39 38 28",
    phoneHref: "tel:+31591393828",
    email: "info@petersmetaaltechniek.nl",
    jobsEmail: "administratie@petersmetaaltechniek.nl",
    street: "Willem Schoutenstraat 10",
    postalCode: "7825 VV",
    city: "Emmen",
    kvk: "74062816",
    btw: "NL8597.60.339.B.01",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Willem%20Schoutenstraat%2010%2C%207825%20VV%20Emmen",
  },

  quotes: {
    partner:
      "Peters Metaaltechniek (en haar rechtsvoorganger) is voor haar klanten al meer dan 15 jaar de betrouwbare partner in metaalwerk.",
    allround:
      "In de afgelopen jaren zijn wij uitgegroeid naar een all-round toeleverancier voor maatwerk in metaal.",
    kracht: "De kracht van ons bedrijf is dat we alles in eigen huis kunnen uitvoeren.",
    meedenken: "Wij denken met u mee van begin tot eind.",
    series: "Voor zowel grote als kleine series.",
  },

  nav: [
    { label: "Ponsnibbelen", href: "/ponsnibbelen" },
    { label: "Kanten", href: "/cnc-kanten" },
    { label: "Lassen", href: "/lassen-staal-rvs-en-aluminium" },
    { label: "Constructiewerk", href: "/constructiewerk" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  strengths: [
    "Alles onder één dak",
    "100% maatwerk",
    "Flexibele opstelling en korte levertijden",
    "Modern machinepark",
    "Ervaren medewerkers die met u meedenken",
    "Erkend leerbedrijf",
  ],

  values: ["Maatwerk", "Flexibiliteit", "Betrokkenheid"],

  sectors: ["Industrie", "Zorg", "Bouw", "Horeca", "Particulieren"],

  materials: [
    {
      name: "Staal",
      text: "Ponsnibbelen, kanten, lassen en constructiewerk.",
    },
    {
      name: "RVS",
      text: "Ponsnibbelen, kanten, lassen en constructiewerk.",
    },
    {
      name: "Aluminium",
      text: "Ponsnibbelen, kanten en constructiewerk. Lassen door gecertificeerde aluminiumlassers.",
    },
  ],

  certificates: [
    {
      title: "ISO 9001",
      text: "Kwaliteit van het werk, aantoonbaar vastgelegd.",
    },
    {
      title: "VCA*",
      text: "Veilig werken op de werkvloer.",
    },
    {
      title: "EN 1090-1 / EN 1090-2 EXC2",
      text: "Het vervaardigen van RVS-, staal- en aluminiumconstructies, executieklasse 2.",
    },
    {
      title: "Metaalunievoorwaarden",
      text: "Gelden voor alle offertes en opdrachten. Gedeponeerd bij de griffie van de rechtbank Rotterdam.",
    },
    {
      title: "Erkend leerbedrijf",
      text: "Een erkende plek om het vak in de praktijk te leren.",
    },
  ],

  chain: [
    {
      id: "plaat",
      label: "Plaat",
      href: "/diensten",
      image: "/img/192.jpg",
      text: "Een vlakke plaat in staal, RVS of aluminium. Het begin van elk product.",
    },
    {
      id: "ponsen",
      label: "Ponsen",
      href: "/ponsnibbelen",
      image: "/img/140.jpg",
      text: "Perforaties, gaten, gatenpatronen en afbeeldingen in de vlakke plaat.",
    },
    {
      id: "kanten",
      label: "Kanten",
      href: "/cnc-kanten",
      image: "/img/139.jpg",
      text: "Het zetten van plaatwerk is één van onze specialiteiten.",
    },
    {
      id: "lassen",
      label: "Lassen",
      href: "/lassen-staal-rvs-en-aluminium",
      image: "/img/153.jpg",
      text: "Lassen van staal, RVS en aluminium, ook van samenstellingen.",
    },
    {
      id: "construeren",
      label: "Construeren",
      href: "/constructiewerk",
      image: "/img/165.jpg",
      text: "Maatwerk in staal, RVS of aluminium.",
    },
    {
      id: "monteren",
      label: "Monteren",
      href: "/constructiewerk",
      image: "/img/194.jpg",
      text: "Ontwerp, productie en montage. Wij denken met u mee van begin tot eind.",
    },
  ],

  services: {
    ponsnibbelen: {
      href: "/ponsnibbelen",
      nav: "Ponsnibbelen",
      title: "Ponsnibbelen",
      meta: "CNC-ponsnibbelen van staal, RVS en aluminium in Emmen. Perforaties, gaten, gatenpatronen en afbeeldingen, voor grote en kleine productieorders.",
      h1: "Ponsnibbelen",
      lede: "Perforaties, gaten, gatenpatronen en afbeeldingen in een vlakke plaat. Staal, RVS en aluminium.",
      body: [
        "Peters Metaaltechniek heeft een moderne CNC-pons-nibbelmachine en een uitgebreid assortiment ponsgereedschappen. Daarmee brengen we perforaties, gaten, gatenpatronen en afbeeldingen aan in een vlakke plaat.",
        "De machine verwerkt staal, RVS en aluminium. Grote en kleine productieorders kunnen allebei. De machine werkt efficiënt en creëert weinig restafval.",
      ],
      points: [
        "Moderne CNC-pons-nibbelmachine",
        "Uitgebreid assortiment ponsgereedschappen",
        "Staal, RVS en aluminium",
        "Grote en kleine productieorders",
        "Weinig restafval",
      ],
      images: ["/img/140.jpg", "/img/126.jpg", "/img/128.jpg", "/img/141.jpg", "/img/175.jpg"],
      pattern: "beeld" as const,
      faq: [
        {
          q: "Welke materialen kunnen jullie ponsnibbelen?",
          a: "Staal, RVS en aluminium.",
        },
        {
          q: "Kunnen jullie gaten of patronen in plaat ponsen?",
          a: "Ja. We brengen perforaties, gaten, gatenpatronen en afbeeldingen aan in een vlakke plaat.",
        },
        {
          q: "Doen jullie ook kleine productieorders?",
          a: "Ja. De machine is gebouwd voor grote en kleine producties.",
        },
      ],
    },
    kanten: {
      href: "/cnc-kanten",
      nav: "Kanten",
      title: "CNC-kanten",
      meta: "CNC-kanten en zetten van aluminium, staal en RVS. Twee kantbanken, serieproductie en enkele stuks, grote en kleine series.",
      h1: "CNC-kanten",
      lede: "Kanten en zetten van plaatwerk. Eén van onze specialiteiten. Voor zowel grote als kleine series.",
      body: [
        "Het zetten van plaatwerk is één van onze specialiteiten. We hebben twee kantbanken en een groot assortiment buiggereedschappen.",
        "U kunt aluminium, staal en RVS door ons laten kanten en zetten. Dat doen we als serieproductie en als enkele stuks. Voor zowel grote als kleine series.",
        "Onze medewerkers zijn ervaren in het gebruik van de kantbanken.",
      ],
      points: [
        "Twee kantbanken",
        "Groot assortiment buiggereedschappen",
        "Aluminium, staal en RVS",
        "Serieproductie en enkele stuks",
        "Grote en kleine series",
      ],
      images: ["/img/139.jpg", "/img/142.jpg", "/img/203.jpg", "/img/143.jpg"],
      pattern: "slots" as const,
      faq: [
        {
          q: "Welke materialen kanten jullie?",
          a: "Aluminium, staal en RVS.",
        },
        {
          q: "Doen jullie ook enkele stuks?",
          a: "Ja. Zowel serieproductie als enkele stuks, en zowel grote als kleine series.",
        },
        {
          q: "Met welke machines zetten jullie?",
          a: "Met twee kantbanken en een groot assortiment buiggereedschappen.",
        },
      ],
    },
    lassen: {
      href: "/lassen-staal-rvs-en-aluminium",
      nav: "Lassen",
      title: "Lassen",
      meta: "Lassen van staal, RVS en aluminium in Emmen. Gecertificeerde aluminiumlassers. Dekkels, vaten, trappen, hekwerken, bordessen, frames en samenstellingen.",
      h1: "Lassen van staal, RVS en aluminium",
      lede: "Lassen van samenstellingen, met gecertificeerde aluminiumlassers voor het aluminiumwerk.",
      body: [
        "Peters Metaaltechniek last staal, roestvast staal en aluminium. Onze gecertificeerde aluminiumlassers lassen het aluminium.",
        "We lassen deksels, vaten, trappen, hekwerken, bordessen en frames, en het lassen van samenstellingen.",
      ],
      points: [
        "Staal, RVS en aluminium",
        "Gecertificeerde aluminiumlassers",
        "Dekkels, vaten, trappen, hekwerken, bordessen en frames",
        "Lassen van samenstellingen",
      ],
      images: ["/img/114.jpg", "/img/129.jpg", "/img/153.jpg", "/img/199.jpg", "/img/146.jpg"],
      pattern: "rounds" as const,
      faq: [
        {
          q: "Lassen jullie aluminium?",
          a: "Ja. Aluminium wordt gelast door gecertificeerde aluminiumlassers. We lassen ook staal en RVS.",
        },
        {
          q: "Wat voor laswerk doen jullie?",
          a: "Dekkels, vaten, trappen, hekwerken, bordessen, frames en het lassen van samenstellingen.",
        },
      ],
    },
    constructie: {
      href: "/constructiewerk",
      nav: "Constructiewerk",
      title: "Constructiewerk",
      meta: "Maatwerk constructiewerk in staal, RVS en aluminium. Trappen, bordessen en constructies voor nieuwbouw en renovatie. Ontwerp, productie en montage. EN 1090-2 EXC2.",
      h1: "Constructiewerk",
      lede: "Maatwerk in staal, RVS of aluminium. Van ontwerp tot productie en montage.",
      body: [
        "Peters Metaaltechniek maakt constructiewerk uit staal, RVS of aluminium. Dit werk vraagt meestal om maatwerk. Wij denken met u mee van begin tot eind.",
        "We maken trappen, bordessen en constructies voor nieuwbouw en renovaties. Ontwerp, productie en montage nemen we uit handen.",
        "We zijn gecertificeerd volgens NEN-EN 1090-1 en EN 1090-2, executieklasse 2 (EXC2), voor het vervaardigen van RVS-, staal- en aluminiumconstructies.",
      ],
      points: [
        "Staal, RVS en aluminium",
        "Trappen, bordessen en constructies",
        "Nieuwbouw en renovaties",
        "Ontwerp, productie en montage",
        "EN 1090-2 EXC2",
      ],
      images: ["/img/187.jpg", "/img/186.jpg", "/img/165.jpg", "/img/184.jpg", "/img/194.jpg", "/img/185.jpg"],
      pattern: "squares" as const,
      faq: [
        {
          q: "Doen jullie ook de montage?",
          a: "Ja. Bij constructiewerk verzorgen we ontwerp, productie en montage.",
        },
        {
          q: "Zijn jullie EN 1090-gecertificeerd?",
          a: "Ja. NEN-EN 1090-1 en EN 1090-2, executieklasse 2 (EXC2), voor het vervaardigen van RVS-, staal- en aluminiumconstructies.",
        },
        {
          q: "Voor welke toepassingen?",
          a: "Onder meer trappen, bordessen en constructies voor nieuwbouw en renovaties.",
        },
      ],
    },
  },

  vacancies: [
    {
      slug: "plaatwerker",
      title: "Ervaren plaatwerker",
      hours: "38 uur per week (fulltime)",
      start: "Per direct",
      intro:
        "Wij zijn per direct op zoek naar een ervaren plaatwerker voor 38 uur per week (fulltime).",
      role: [
        "U bewerkt vanaf tekeningen, zowel handmatig als machinaal, plaatwerk.",
        "Daarbij gebruikt u een CNC-gestuurde kant-/zetbank en een ponsnibbelmachine.",
        "U heeft ervaring in het verwisselen van matrijzen en stempels voor verschillende plaatdiktes.",
        "Een ruime materiaal- en proceskennis is van groot belang.",
      ],
      profile: [
        "Opleiding in de techniek op minimaal MBO-niveau",
        "Minimaal 5 jaar recente ervaring",
        "Goed technisch inzicht en zelfstandig tekeningen lezen",
        "Een actieve houding",
      ],
      images: ["/img/139.jpg", "/img/140.jpg", "/img/126.jpg"],
    },
    {
      slug: "constructiebankwerker-lasser",
      title: "Ervaren constructiebankwerker / lasser",
      hours: "38 uur per week (fulltime)",
      start: "Per direct",
      intro:
        "Wij zijn per direct op zoek naar een ervaren constructiebankwerker / lasser voor 38 uur per week (fulltime).",
      role: [
        "U zet vanaf tekeningen zelfstandig ingewikkelde (plaatwerk)constructies in elkaar.",
        "U last de constructie af en zorgt voor de verdere afwerking volgens specificaties van de opdrachtgever.",
      ],
      profile: [
        "Opleiding in de techniek op minimaal MBO-niveau",
        "Minimaal 5 jaar recente ervaring",
        "Goed technisch inzicht en zelfstandig tekeningen lezen",
        "Een zeer kritische blik en een actieve houding",
      ],
      images: ["/img/153.jpg", "/img/165.jpg", "/img/187.jpg"],
    },
  ],

  offer: {
    weBieden: [
      "Een prima werksfeer, een no-nonsense mentaliteit maar vooral plezier in vakwerk.",
      "Een marktconforme beloning met prima secundaire arbeidsvoorwaarden.",
    ],
  },

  offerteFaq: [
    {
      q: "Welke materialen verwerken jullie?",
      a: "Staal, RVS en aluminium. Dat geldt voor ponsnibbelen, kanten, lassen en constructiewerk.",
    },
    {
      q: "Doen jullie ook enkele stuks?",
      a: "Ja. Zowel serieproductie als enkele stuks, en zowel grote als kleine series en productieorders.",
    },
    {
      q: "Kunnen jullie gaten of patronen in plaat ponsen?",
      a: "Ja. Met de CNC-pons-nibbelmachine brengen we perforaties, gaten, gatenpatronen en afbeeldingen aan in een vlakke plaat.",
    },
    {
      q: "Lassen jullie aluminium?",
      a: "Ja. Aluminium wordt gelast door gecertificeerde aluminiumlassers. We lassen ook staal en RVS.",
    },
    {
      q: "Zijn jullie EN 1090-gecertificeerd?",
      a: "Ja. NEN-EN 1090-1 en EN 1090-2, executieklasse 2 (EXC2), voor het vervaardigen van RVS-, staal- en aluminiumconstructies.",
    },
    {
      q: "Doen jullie ook de montage?",
      a: "Ja. Bij constructiewerk horen ontwerp, productie en montage.",
    },
    {
      q: "Welke voorwaarden gelden?",
      a: "Op alle offertes en opdrachten zijn de Metaalunievoorwaarden van toepassing. Die zijn gedeponeerd bij de griffie van de rechtbank Rotterdam.",
    },
  ],

  rtl: {
    date: "zaterdag 16 september 2017",
    program: "Van Passie Naar Droombaan",
    channel: "RTL 4",
    href: "https://www.youtube.com/watch?v=VOjcggkN8YM",
    image: "/img/229.jpg",
  },
};

export type Content = typeof content;
export type ServiceKey = keyof typeof content.services;
export type Vacancy = (typeof content.vacancies)[number];

/** Extra blad per bewerking. Alleen zinnen die uit hun eigen tekst volgen. */
export const sheets: Record<
  ServiceKey,
  {
    spec: { label: string; value: string }[];
    makes: string[];
    place: string;
    send: string[];
  }
> = {
  ponsnibbelen: {
    spec: [
      { label: "Machine", value: "Moderne CNC-pons-nibbelmachine" },
      { label: "Gereedschap", value: "Uitgebreid assortiment ponsgereedschappen" },
      { label: "Materiaal", value: "Staal, RVS en aluminium" },
      { label: "Orders", value: "Grote en kleine productieorders" },
      { label: "Restafval", value: "De machine werkt efficiënt en creëert weinig restafval" },
    ],
    makes: [
      "Perforaties in een vlakke plaat",
      "Gaten en gatenpatronen",
      "Afbeeldingen, opgebouwd uit geponste gaten",
      "Zowel een serie als een kleine productieorder",
    ],
    place:
      "Ponsnibbelen begint bij een vlakke plaat. Het geponste deel kan in dezelfde werkplaats gezet, gelast of in een constructie opgenomen worden.",
    send: [
      "Tekening of bestand: DXF, STEP of PDF",
      "Materiaal en plaatdikte",
      "Aantal, en of het een serie of een kleine order is",
      "Welke gaten, perforaties of welk patroon u nodig heeft",
    ],
  },
  kanten: {
    spec: [
      { label: "Machines", value: "Twee kantbanken" },
      { label: "Gereedschap", value: "Groot assortiment buiggereedschappen" },
      { label: "Materiaal", value: "Aluminium, staal en RVS" },
      { label: "Series", value: "Serieproductie en enkele stuks" },
      { label: "Omvang", value: "Grote en kleine series" },
    ],
    makes: [
      "Zetten van vlakke plaat tot een gezet deel",
      "Enkel stuk of een serie",
      "Aluminium, staal en RVS door elkaar in hetzelfde huis",
    ],
    place:
      "Het zetten van plaatwerk is één van onze specialiteiten. Een vlakke plaat, al dan niet geponst, wordt hier gezet. Daarna kan het deel gelast of gemonteerd worden.",
    send: [
      "Tekening of bestand: DXF, STEP of PDF",
      "Materiaal en plaatdikte",
      "Aantal",
      "Serie of eenmalig",
    ],
  },
  lassen: {
    spec: [
      { label: "Materialen", value: "Staal, RVS en aluminium" },
      { label: "Aluminium", value: "Gecertificeerde aluminiumlassers" },
      { label: "Werk", value: "Samenstellingen, deksels, vaten, trappen, hekwerken, bordessen en frames" },
    ],
    makes: ["Dekkels", "Vaten", "Trappen", "Hekwerken", "Bordessen", "Frames", "Samenstellingen"],
    place:
      "Gezette en geponste delen komen hier samen. We lassen staal, RVS en aluminium, en het lassen van samenstellingen.",
    send: [
      "Tekening of bestand",
      "Materiaal: staal, RVS of aluminium",
      "Wat er gelast moet worden",
      "Aantal, serie of enkel stuk",
    ],
  },
  constructie: {
    spec: [
      { label: "Materiaal", value: "Staal, RVS of aluminium" },
      { label: "Toepassing", value: "Trappen, bordessen en constructies" },
      { label: "Werk", value: "Nieuwbouw en renovaties" },
      { label: "Traject", value: "Ontwerp, productie en montage" },
      { label: "Norm", value: "EN 1090-2 EXC2" },
    ],
    makes: [
      "Trappen",
      "Bordessen",
      "Constructies voor nieuwbouw",
      "Constructies voor renovaties",
      "Montage op locatie",
    ],
    place:
      "Constructiewerk is maatwerk van begin tot eind. Ponsen, kanten en lassen zitten in hetzelfde huis, en montage hoort erbij.",
    send: [
      "Tekening of bestand",
      "Materiaal",
      "Trap, bordes of andere constructie",
      "Of montage nodig is",
      "Gewenste levering, als u die al weet",
    ],
  },
};
