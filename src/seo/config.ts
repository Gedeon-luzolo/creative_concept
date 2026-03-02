export const seoConfig = {
  default: {
    title: "Creative Concept - Nous matérialisons vos idées",
    description:
      "Creative Concept - Agence de développement web et formation en programmation à Lubumbashi. Master Class VIBE CODING: HTML, CSS, JavaScript, React JS avec l'IA.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://creativeconcept-rdc.com",
    siteName: "Creative Concept",
    type: "website" as const,
    keywords: [
      "Creative Concept",
      "développement web",
      "formation programmation",
      "HTML CSS JavaScript",
      "React JS",
      "Lubumbashi",
      "RDC",
      "Congo",
      "agence web",
      "master class",
      "VIBE CODING",
      "intelligence artificielle",
    ],
    locale: "fr_FR",
    icons: {
      icon: "/favicon.png",
    },
    authors: [{ name: "Creative Concept" }],
    images: {
      og: {
        url: "/images/opengraph/funda_opengraph.jpg",
        alt: "Creative Concept - Master Class VIBE CODING",
      },
    },
    twitter: {
      card: "summary_large_image",
      site: "@CREATIVE_CONCEPT",
      creator: "@CREATIVE_CONCEPT",
    },
  },
};
