import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generateMetadata(title?: string, description?: string): Metadata {
  return {
    title: title ? `${title} | ${SITE_CONFIG.siteName}` : SITE_CONFIG.siteName,
    description: description || SITE_CONFIG.description,
    authors: [{ name: SITE_CONFIG.author }],
    creator: SITE_CONFIG.author,
    keywords: ["blog", "articles", "stories", "medium", "writing"],
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_CONFIG.url,
      title: title || SITE_CONFIG.siteName,
      description: description || SITE_CONFIG.description,
      siteName: SITE_CONFIG.siteName,
    },
    twitter: {
      card: "summary_large_image",
      title: title || SITE_CONFIG.siteName,
      description: description || SITE_CONFIG.description,
      creator: SITE_CONFIG.social.twitter,
    },
  };
}
