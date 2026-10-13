import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorRole?: string;
  url: string;
  imageUrl?: string;
  keywords?: string[];
}

export default function ArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  authorRole,
  url,
  imageUrl,
  keywords,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url: url,
    image: imageUrl || "https://integersdev.in/og-image.png",
    author: {
      "@type": "Person",
      name: authorName,
      jobTitle: authorRole || "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: siteConfig.name,
      },
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: "https://integersdev.in/og-image.png",
      },
    },
    keywords: keywords && keywords.length > 0 ? keywords.join(", ") : undefined,
  };

  return <JsonLd data={schema} />;
}
