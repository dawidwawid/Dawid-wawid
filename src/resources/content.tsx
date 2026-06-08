import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Dawid",
  lastName: "Wierzbicki",
  name: "DEWORA Digital",
  role: "Web Development • Digital Marketing • AI Solutions",
  avatar: "/images/avatar.jpg",
  email: "home@dewora.pl",
  location: "Europe/Warsaw",
  languages: ["Polski", "English"],
};

const newsletter: Newsletter = {
  display: true,
  title: <>Dołącz do newslettera DEWORA Digital</>,
  description: <>Otrzymuj praktyczne wskazówki dotyczące stron internetowych, marketingu, SEO, AI oraz rozwoju biznesu online.</>,
};

const social: Social = [
  // Uzupełnij swoje linki (to są bezpieczne placeholdery)
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/dewora_pl",
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
title: "DEWORA Digital — Strony Internetowe, Marketing i AI",
description:
  "Projektujemy nowoczesne strony internetowe, sklepy online, aplikacje i strategie marketingowe, które pomagają firmom rozwijać się w internecie.",
headline: <>DEWORA Digital</>,
featured: {
  display: true,
  title: (
    <Row gap="12" vertical="center">
      <strong className="ml-4">DEWORA Digital</strong>{" "}
      <Line background="brand-alpha-strong" vert height="20" />
      <Text marginRight="4" onBackground="brand-medium">
        Strony WWW • Marketing • SEO • Social Media • AI
      </Text>
    </Row>
  ),
    href: "/work",
  },
subline: (
  <>
    Tworzymy nowoczesne strony internetowe, sklepy online i rozwiązania cyfrowe.
    <br />
    Pomagamy firmom zdobywać klientów, budować markę i rozwijać biznes w internecie.
  </>
),
};

const about: About = {
  path: "/about",
  label: "O nas",
  title: "O nas — DEWORA Digital",
  description:
    "DEWORA Digital — strony internetowe, sklepy online, marketing, social media, branding, SEO i rozwiązania AI dla firm.",
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
        DEWORA Digital to nowoczesne studio digital, które pomaga firmom budować profesjonalny wizerunek online.
        Tworzymy strony internetowe, sklepy, aplikacje, branding, social media i strategie marketingowe.
        Łączymy design, technologię i AI, aby tworzyć rozwiązania, które realnie wspierają sprzedaż i rozwój biznesu.
      </>
    ),
  },
  work: {
    display: true,
    title: "Jak pracujemy",
    experiences: [
      {
        company: "Analiza i strategia",
        timeframe: "Krok 01",
        role: "Cel → projekt → plan działania",
        achievements: [
          <>Poznajemy firmę, ofertę, klientów i cel projektu.</>,
          <>Dobieramy rozwiązania: stronę, sklep, branding, SEO, social media lub automatyzacje AI.</>,
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "DEWORA Digital — analiza i strategia",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Projekt, wdrożenie i rozwój",
        timeframe: "Krok 02",
        role: "Design + technologia + marketing",
        achievements: [
          <>Tworzymy nowoczesny projekt, wdrażamy stronę i optymalizujemy ją pod urządzenia mobilne.</>,
          <>Po publikacji możemy wspierać firmę w marketingu, aktualizacjach, SEO i dalszym rozwoju online.</>,
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
        name: "Strony internetowe",
        description: <>Nowoczesne, responsywne strony dla firm lokalnych i marek premium.</>,
      },
      {
        name: "E-commerce",
        description: <>Sklepy online przygotowane do sprzedaży produktów i usług w internecie.</>,
      },
      {
        name: "Marketing i social media",
        description: <>Grafiki, treści, kampanie i komunikacja dopasowana do marki.</>,
      },
      {
        name: "AI i automatyzacje",
        description: <>Rozwiązania usprawniające sprzedaż, obsługę klienta i codzienną pracę firmy.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technologie i standard",
    skills: [
      {
        title: "Strony WWW — projekt i wdrożenie",
        description: (
          <>
            Projektujemy strony, które są szybkie, estetyczne i dopasowane do celu biznesowego.
            Dbamy o wygląd, responsywność, czytelność i mocne wezwania do działania.
          </>
        ),
        tags: [
          { name: "Web Design", icon: "monitor" },
          { name: "SEO", icon: "search" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "DEWORA Digital — strony internetowe",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Digital Marketing — rozwój online",
        description: (
          <>
            Pomagamy firmom budować widoczność w internecie poprzez branding, social media,
            SEO, treści i spójną komunikację marki.
          </>
        ),
        tags: [
          { name: "Marketing", icon: "megaphone" },
          { name: "AI", icon: "sparkles" },
        ],
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "DEWORA Digital — marketing i AI",
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
  title: "Poradniki i inspiracje",
  description: "Strony internetowe, marketing, SEO, social media, AI i rozwój biznesu online.",
  // Dodawaj wpisy: app/blog/posts/*.mdx
};

const work: Work = {
  path: "/work",
  label: "Realizacje",
  title: "Realizacje — DEWORA Digital",
  description: "Projekty DEWORA Digital: strony internetowe, branding, sklepy online, marketing i rozwiązania cyfrowe.",
  // Dodawaj projekty: app/work/projects/*.mdx
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galeria",
  title: "Galeria — DEWORA Digital",
  description: "Wybrane projekty, realizacje stron internetowych, identyfikacji wizualnych i materiałów digital.",
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
      alt: "IT’ FRACTAL — detal",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
