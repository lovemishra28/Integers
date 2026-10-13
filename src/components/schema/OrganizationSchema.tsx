import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface OrganizationSchemaProps {
  id?: string;
}

/**
 * Schema.org Organization structured data component for IntegersDev
 */
export default function OrganizationSchema({
  id = `${siteConfig.url}/#organization`,
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": id,
    name: siteConfig.name,
    legalName: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.png`,
    description:
      "IntegersDev is a premier web development and UI/UX design studio based in Gwalior, Madhya Pradesh, crafting modern Next.js websites and high-performance digital products.",
    email: siteConfig.email,
    telephone: siteConfig.phoneClean,
    sameAs: siteConfig.socials,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneClean,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    founder: siteConfig.team.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.role,
    })),
  };

  return <JsonLd data={schema} />;
}
