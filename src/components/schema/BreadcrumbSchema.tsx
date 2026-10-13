import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface BreadcrumbCrumb {
  label: string;
  href?: string;
}

export interface BreadcrumbSchemaProps {
  items?: BreadcrumbCrumb[];
  currentUrl?: string;
}

/**
 * Schema.org BreadcrumbList structured data component
 * Automatically prepends "Home" at position 1 and calculates sequential 1-based indexing.
 */
export default function BreadcrumbSchema({
  items,
  currentUrl,
}: BreadcrumbSchemaProps) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return null;
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: siteConfig.url,
    },
    ...items.map((crumb, index) => {
      const position = index + 2;
      const isLast = index === items.length - 1;
      const rawHref = crumb.href || (isLast && currentUrl ? currentUrl : undefined);

      const fullUrl = rawHref
        ? rawHref.startsWith("http")
          ? rawHref
          : `${siteConfig.url}${rawHref.startsWith("/") ? "" : "/"}${rawHref}`
        : undefined;

      const itemObj: Record<string, any> = {
        "@type": "ListItem",
        position,
        name: crumb.label,
      };

      if (fullUrl) {
        itemObj.item = fullUrl;
      }

      return itemObj;
    }),
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };

  return <JsonLd data={schema} />;
}
