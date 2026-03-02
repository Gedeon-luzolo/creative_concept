import { Metadata } from "next";
import { seoConfig } from "./config";

type PropsMetadata = {
  title?: string;
  description?: string;
  image?: {
    url: string;
    alt: string;
  };
  Keywords?: string[];
};

export function generateMetadata({
  title,
  description,
  image,
  Keywords,
}: PropsMetadata): Metadata {
  const { default: defaultConfig } = seoConfig;
  const pagetitle = title || defaultConfig.title;
  const pageDesciption = description || defaultConfig.description;
  const pageImage = image || defaultConfig.images.og;
  const pageKeywords = Keywords || defaultConfig.keywords;

  return {
    metadataBase: new URL(defaultConfig.url),
    title: pagetitle,
    description: pageDesciption,
    openGraph: {
      type: "website",
      title: pagetitle,
      images: [
        {
          url: pageImage.url,
          alt: pageImage.alt,
        },
      ],
      description: pageDesciption,
    },
    twitter: {
      card: "summary_large_image",
      title: pagetitle,
      description: pageDesciption,
      images: [pageImage.url],
      site: defaultConfig.twitter?.site,
      creator: defaultConfig.twitter?.creator,
    },
    keywords: pageKeywords,
    authors: defaultConfig.authors,
    icons: {
      icon: defaultConfig.icons.icon,
      apple: defaultConfig.icons.icon,
    },
  };
}
