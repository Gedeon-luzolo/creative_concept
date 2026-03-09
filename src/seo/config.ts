export const seoConfig = {
  default: {
    title: "Creative Concept - Nous matérialisons vos idées",
    description:
      "Creative Concept - Agence de développement web et formation en programmation à Kinshasa. Master Class Création d'Applications Web Robustes avec l'IA.",
    url: process.env.NEXT_PUBLIC_BASE_URL || "https://creativeconcept-rdc.com",
    siteName: "Creative Concept",
    type: "website" as const,
    keywords: [
      "Creative Concept",
      "développement web",
      "formation programmation",
      "HTML CSS JavaScript",
      "React JS",
      "Kinshasa",
      "RDC",
      "Congo",
      "agence web",
      "master class",
      "applications web robustes",
      "intelligence artificielle",
      "IA",
    ],
    locale: "fr_FR",
    icons: {
      icon: "/favicon.png",
    },
    authors: [{ name: "Creative Concept" }],
    images: {
      url: "/images/opengraph/opengraph_hero.webp",
      alt: "Creative Concept - Master Class Création d'Applications Web Robustes",
    },
    twitter: {
      card: "summary_large_image",
      site: "@CREATIVE_CONCEPT",
      creator: "@CREATIVE_CONCEPT",
    },
  },
  inscription: {
    title:
      "Inscription Master Class Création d'Applications Web Robustes - Creative Concept",
    description:
      "Inscrivez-vous à la Master Class à Kinshasa. Formation intensive en développement web avec l'IA. 3 séances sur 1 semaine. Début: 26 mars 2026. 35$ total.",
    keywords: [
      "inscription formation",
      "master class développement web",
      "formation développement web Kinshasa",
      "apprendre programmation",
      "HTML CSS JavaScript React",
      "formation intensive",
      "Creative Concept",
      "Kinshasa RDC",
      "intelligence artificielle",
    ],
    image: {
      url: "/images/opengraph/opengraph_form.webp",
      alt: "Inscription Master Class Création d'Applications Web Robustes - Creative Concept",
    },
  },
};
