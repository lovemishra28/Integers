import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industryLandings";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SLUG = "website-for-clinics";

export const metadata: Metadata = {
  title: "Website for Clinics, Doctors & Hospitals | Healthcare Web Design | IntegersDev",
  description:
    "High-performance, secure websites for clinics, dental centers, and doctors. Seamless appointment booking, OPD schedules, doctor profiles & local SEO.",
  alternates: {
    canonical: "https://integersdev.in/website-for-clinics",
  },
  openGraph: {
    title: "Website for Clinics, Doctors & Hospitals | Healthcare Web Design | IntegersDev",
    description:
      "High-performance, secure websites for clinics, dental centers, and doctors. Seamless appointment booking, OPD schedules, doctor profiles & local SEO.",
    url: "https://integersdev.in/website-for-clinics",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website for Clinics by IntegersDev" }],
  },
};

export default function ClinicsLandingPage() {
  const industry = getIndustryBySlug(SLUG);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
