import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industryLandings";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SLUG = "website-for-schools";

export const metadata: Metadata = {
  title: "Website for Schools & Educational Institutes | Web Design | IntegersDev",
  description:
    "Modern websites & admission portals for private schools, colleges, and academies. Online admission forms, academic calendars, fee charts & parent portals.",
  alternates: {
    canonical: "https://www.integersdev.in/website-for-schools",
  },
  openGraph: {
    title: "Website for Schools & Educational Institutes | Web Design | IntegersDev",
    description:
      "Modern websites & admission portals for private schools, colleges, and academies. Online admission forms, academic calendars, fee charts & parent portals.",
    url: "https://www.integersdev.in/website-for-schools",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website for Schools by IntegersDev" }],
  },
};

export default function SchoolsLandingPage() {
  const industry = getIndustryBySlug(SLUG);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
