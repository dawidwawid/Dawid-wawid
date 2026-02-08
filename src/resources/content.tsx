import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "IT’S",
  lastName: "FRACTAL",
  name: "IT’S FRACTAL",
  role: "Premium Automotive Studio",
  avatar: "/images/avatar.jpg",
  email: "kontakt@itsfractal.pl",
  location: "Europe/Warsaw", // IANA time zone identifier (np. 'Europe/Warsaw')
  languages: ["Polski", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Dołącz do newslettera IT’S FRACTAL</>,
  description: <>Nowe realizacje, premiery projektów i dostępne terminy — bez spamu.</>,
};

const social: Social = [
  // Uzupełnij swoje linki (to są bezpieczne placeholdery)
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/",
    essential: true,
  },
  {
    name: "TikTok",
    icon: "tiktok",
    link: "https://www.tiktok.com/",
    essential: true,
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: "IT’S FRACTAL — Premium Automotive Studio",
  description:
    "PPF • Detailing • Tuning • Carbon • Indywidualne projekty. Premium modyfikacje i ochrona aut — precyzja, jakość, efekt.",
  headline: <>IT’S FRACTAL</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">IT’S FRACTAL</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Pakiety Carbon — projekt + produkcja + montaż
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      Premium automotive studio — PPF, detailing, tuning i carbon.
      <br />
      Projekty dopasowane 1:1 do auta, procesu i efektu, który ma robić wrażenie.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "O nas",
  title: "O nas — IT’S FRACTAL",
  description:
    "IT’S FRACTAL — premium automotive studio: PPF, detailing, tuning i carbon. Precyzja, dopasowanie i efekt końcowy.",
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Kim jesteśmy",
    description: (
      <>
        IT’S FRACTAL to studio premium, w którym łączymy ochronę, estetykę i modyfikacje.
        Robimy projekty dopracowane w detalach — tak, żeby wyglądały jak fabryczne… tylko lepsze.
        PPF, detailing, tuning i carbon traktujemy jak proces, nie jak “usługę z listy”.
      </>
    ),
  },
  work: {
    display: true,
    title: "Jak pracujemy",
    experiences: [
      {
        company: "Konsultacja i plan",
        timeframe: "Krok 01",
        role: "Cel → zakres → efekt końcowy",
        achievements: [
          <>Ustalamy cel projektu i priorytety: ochrona, wygląd, osiągi, detale.</>,
          <>Dobieramy rozwiązania pod auto: pakiet, materiały, terminy i budżet.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "IT’S FRACTAL — konsultacja i plan",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Realizacja i kontrola jakości",
        timeframe: "Krok 02",
        role: "Precyzja wykonania + powtarzalny standard",
        achievements: [
          <>Pracujemy etapowo i czytelnie: przygotowanie → montaż → wykończenie.</>,
          <>Kontrola jakości na każdym etapie, żeby final był idealny wizualnie i technicznie.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Specjalizacje",
    institutions: [
      {
        name: "PPF / Ochrona",
        description: <>Dobór ochrony pod styl jazdy i oczekiwany efekt.</>,
      },
      {
        name: "Detailing / Wykończenie",
        description: <>Połysk, głębia i perfekcyjne detale — bez kompromisów.</>,
      },
      {
        name: "Tuning / Styling",
        description: <>Modyfikacje premium: funkcja + wygląd + spójność projektu.</>,
      },
      {
        name: "Carbon / Custom",
        description: <>Indywidualne pakiety: projekt, produkcja i montaż.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technologie i standard",
    skills: [
      {
        title: "PPF — precyzyjny montaż",
        description: (
          <>
            Montaż z naciskiem na krawędzie, spasowanie i finalny wygląd.
            Zależy nam, żeby wszystko wyglądało “OEM+”.
          </>
        ),
        tags: [
          { name: "PPF", icon: "shield" },
          { name: "Detailing", icon: "sparkles" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "IT’S FRACTAL — PPF",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Carbon — projekt i dopasowanie",
        description: (
          <>
            Pakiety carbonowe robimy jak produkt: dopasowanie, jakość, powtarzalność i kontrola.
            Od pomiaru / skanów po finalny montaż.
          </>
        ),
        tags: [
          { name: "Carbon", icon: "layers" },
          { name: "Custom", icon: "wand" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "IT’S FRACTAL — carbon",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Poradniki",
  title: "Poradniki i realizacje",
  description: "PPF • detailing • tuning • carbon — procesy, case studies i konkretne wskazówki.",
  // Dodawaj wpisy: app/blog/posts/*.mdx
};

const work: Work = {
  path: "/work",
  label: "Realizacje",
  title: "Realizacje — IT’S FRACTAL",
  description: "Projekty IT’S FRACTAL: PPF, detailing, tuning i carbon. Zobacz proces i efekt końcowy.",
  // Dodawaj projekty: app/work/projects/*.mdx
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: "Galeria — IT’S FRACTAL",
  description: "Zdjęcia realizacji i detali: PPF, detailing, tuning i carbon.",
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "IT’S FRACTAL — realizacja",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "IT’S FRACTAL — detal",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "IT’S FRACTAL — realizacja",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "IT’S FRACTAL — detal",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "IT’S FRACTAL — detal",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "IT’S FRACTAL — realizacja",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "IT’S FRACTAL — realizacja",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "IT’S FRACTAL — detal",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
