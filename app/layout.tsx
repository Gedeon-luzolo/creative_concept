import { Montserrat } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/src/seo/generateMetadata";
import ToastProvider from "@/src/components/ToastProvider";
import { seoConfig } from "@/src/seo/config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = generateMetadata({
  title: "Creative Concept - Master Class VIBE CODING",
  description:
    "Formation intensive en développement web avec HTML, CSS, JavaScript et React. Apprenez à créer des applications modernes avec l'IA. Inscription 10$, Formation 50$. Début: 18 mars 2026.",
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
    "VIBE CODING",
    "intelligence artificielle",
  ],
  image: {
    url: seoConfig.default.images.url,
    alt: seoConfig.default.images.alt,
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
