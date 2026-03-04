export const seoConfig = {
  default: {
    title: "Creative Concept - Nous matérialisons vos idées",
    description:
      "Creative Concept - Agence de développement web et formation en programmation à Kinshasa. Master Class VIBE CODING: HTML, CSS, JavaScript, React JS avec l'IA.",
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
      "VIBE CODING",
      "Vibe",
      "Fomation",
      "intelligence artificielle",
    ],
    locale: "fr_FR",
    icons: {
      icon: "/favicon.png",
    },
    authors: [{ name: "Creative Concept" }],
    images: {
      url: "/images/opengraph/opengraph_hero.png",
      alt: "Creative Concept - Master Class VIBE CODING",
    },
    twitter: {
      card: "summary_large_image",
      site: "@CREATIVE_CONCEPT",
      creator: "@CREATIVE_CONCEPT",
    },
  },
  inscription: {
    title: "Inscription Master Class VIBE CODING - Creative Concept",
    description:
      "Inscrivez-vous à la Master Class VIBE CODING à Kinshasa. Formation intensive en développement web: HTML5, CSS3, JavaScript ES6+, React JS. 6 séances sur 2 semaines. Début: 18 mars 2026.",
    keywords: [
      "inscription formation",
      "master class vibe coding",
      "formation développement web Kinshasa",
      "apprendre programmation",
      "HTML CSS JavaScript React",
      "formation intensive",
      "Creative Concept",
      "Kinshasa RDC",
    ],
    image: {
      url: "/images/opengraph/opengraph_form.png",
      alt: "Inscription Master Class VIBE CODING - Creative Concept",
    },
  },
};
