import { Montserrat } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/src/seo/generateMetadata";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = generateMetadata({
  title: "Creative Concept - Master Class VIBE CODING",
  description:
    "Formation intensive en développement web avec HTML, CSS, JavaScript et React. Apprenez à créer des applications modernes avec l'IA. Inscription 19$, Frais 50$. Début: 18 mars 2026.",
  Keywords: [
    "Creative Concept",
    "formation développement web",
    "HTML CSS JavaScript",
    "React JS",
    "Lubumbashi",
    "RDC",
    "programmation",
    "coding",
    "master class",
    "VIBE CODING",
    "intelligence artificielle",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
