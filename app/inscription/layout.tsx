import { generateMetadata } from "@/src/seo/generateMetadata";
import { seoConfig } from "@/src/seo/config";

export const metadata = generateMetadata({
  title: seoConfig.inscription.title,
  description: seoConfig.inscription.description,
  Keywords: seoConfig.inscription.keywords,
});

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
