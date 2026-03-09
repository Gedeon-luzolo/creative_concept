import { Montserrat } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/src/seo/generateMetadata";
import ToastProvider from "@/src/components/ToastProvider";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = generateMetadata({
  title: "Creative Concept - Master Class Création d'Applications Web Robustes",
  description:
    "Formation intensive en développement web avec l'IA. Apprenez à créer des applications modernes. 35$ pour 3 séances. Début: 26 mars 2026.",
  Keywords: [
    "Creative Concept",
    "formation développement web",
    "HTML CSS JavaScript",
    "React JS",
    "Kinshasa",
    "RDC",
    "programmation",
    "coding",
    "master class",
    "applications web robustes",
    "intelligence artificielle",
  ],
  image: {
    url: "/images/opengraph/opengraph_hero.webp",
    alt: "Creative Concept - Master Class Création d'Applications Web Robustes",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
