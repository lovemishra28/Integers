import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface ServiceOffer {
  price?: string | number;
  priceCurrency?: string;
  priceStartingAt?: string | number;
  url?: string;
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
  providerName?: string;
  areaServed?: string | string[];
  offer?: ServiceOffer;
}

/**
 * Schema.org Service structured data component for service pages
 */
export default function ServiceSchema({
  name,
  description,
  url,
  serviceType,
  providerName = siteConfig.name,
  areaServed = ["Gwalior", "Indore", "Bhopal", "Madhya Pradesh", "India"],
  offer,
}: ServiceSchemaProps) {
  const fullUrl = url.startsWith("http")
    ? url
    : `${siteConfig.url}${url.startsWith("/") ? "" : "/"}${url}`;

  const areas = Array.isArray(areaServed) ? areaServed : [areaServed];

  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: fullUrl,
    provider: {
      "@type": "LocalBusiness",
      name: providerName,
      url: siteConfig.url,
      telephone: siteConfig.phoneClean,
      email: siteConfig.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  if (offer) {
    const offerPrice = offer.priceStartingAt || offer.price;
    if (offerPrice) {
      schema.offers = {
        "@type": "Offer",
        price: String(offerPrice),
        priceCurrency: offer.priceCurrency || "INR",
        availability: "https://schema.org/InStock",
        url: offer.url || `${siteConfig.url}/pricing`,
      };
    }
  }

  return <JsonLd data={schema} />;
}
