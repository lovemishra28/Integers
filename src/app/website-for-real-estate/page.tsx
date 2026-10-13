import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industryLandings";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SLUG = "website-for-real-estate";

export const metadata: Metadata = {
  title: "Website for Real Estate Developers, Builders & Realtors | IntegersDev",
  description:
    "High-conversion web platforms for real estate developers & luxury builders. Interactive master plans, floor plan selectors, site visit booking & ad funnels.",
  alternates: {
    canonical: "https://integersdev.in/website-for-real-estate",
  },
  openGraph: {
    title: "Website for Real Estate Developers, Builders & Realtors | IntegersDev",
    description:
      "High-conversion web platforms for real estate developers & luxury builders. Interactive master plans, floor plan selectors, site visit booking & ad funnels.",
    url: "https://integersdev.in/website-for-real-estate",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website for Real Estate by IntegersDev" }],
  },
};

export default function RealEstateLandingPage() {
  const industry = getIndustryBySlug(SLUG);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
