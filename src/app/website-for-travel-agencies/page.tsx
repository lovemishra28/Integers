import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industryLandings";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SLUG = "website-for-travel-agencies";

export const metadata: Metadata = {
  title: "Website for Travel Agencies & Tour Operators | IntegersDev",
  description:
    "Custom high-speed websites for travel agencies, tour operators & vehicle rental companies. Interactive itineraries, WhatsApp lead funnels, and instant inquiries.",
  alternates: {
    canonical: "https://www.integersdev.in/website-for-travel-agencies",
  },
  openGraph: {
    title: "Website for Travel Agencies & Tour Operators | IntegersDev",
    description:
      "Custom high-speed websites for travel agencies, tour operators & vehicle rental companies. Interactive itineraries, WhatsApp lead funnels, and instant inquiries.",
    url: "https://www.integersdev.in/website-for-travel-agencies",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website for Travel Agencies by IntegersDev" }],
  },
};

export default function TravelAgenciesLandingPage() {
  const industry = getIndustryBySlug(SLUG);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
