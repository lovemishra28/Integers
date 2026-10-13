import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface LocalBusinessSchemaProps {
  id?: string;
  cityName?: string;
  customDescription?: string;
}

/**
 * Schema.org LocalBusiness / ProfessionalService structured data component
 * Includes exact Gwalior physical address, phone, geo coordinates, and verified social links.
 */
export default function LocalBusinessSchema({
  id = `${siteConfig.url}/#localbusiness`,
  cityName = siteConfig.address.city,
  customDescription,
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": id,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.png`,
    description:
      customDescription ||
      `Top web development company in ${cityName}, India. IntegersDev crafts custom Next.js sites, UI/UX & mobile apps to grow your brand. Contact us for a free quote!`,
    telephone: siteConfig.phoneClean,
    email: siteConfig.email,
    priceRange: "₹₹",
    currenciesAccepted: "INR, USD",
    paymentAccepted: "Cash, Credit Card, Bank Transfer, UPI",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.geo.latitude,
      longitude: siteConfig.address.geo.longitude,
    },
    hasMap: siteConfig.mapDirectionsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:30",
      },
    ],
    sameAs: siteConfig.socials,
    areaServed: [
      {
        "@type": "City",
        name: "Gwalior",
      },
      {
        "@type": "City",
        name: "Indore",
      },
      {
        "@type": "City",
        name: "Bhopal",
      },
      {
        "@type": "AdministrativeArea",
        name: "Madhya Pradesh",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
  };

  return <JsonLd data={schema} />;
}
