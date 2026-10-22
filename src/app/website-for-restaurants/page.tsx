import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getIndustryBySlug } from "@/data/industryLandings";
import IndustryPageTemplate from "@/components/IndustryPageTemplate";

const SLUG = "website-for-restaurants";

export const metadata: Metadata = {
  title: "Website for Restaurants & Cafes | Custom Next.js Web Design | IntegersDev",
  description:
    "High-converting custom websites for restaurants, cafes & dining brands. Commission-free table reservations, digital menus, QR ordering, and local SEO.",
  alternates: {
    canonical: "https://www.integersdev.in/website-for-restaurants",
  },
  openGraph: {
    title: "Website for Restaurants & Cafes | Custom Next.js Web Design | IntegersDev",
    description:
      "High-converting custom websites for restaurants, cafes & dining brands. Commission-free table reservations, digital menus, QR ordering, and local SEO.",
    url: "https://www.integersdev.in/website-for-restaurants",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Website for Restaurants by IntegersDev" }],
  },
};

export default function RestaurantLandingPage() {
  const industry = getIndustryBySlug(SLUG);

  if (!industry) {
    notFound();
  }

  return <IndustryPageTemplate industry={industry} />;
}
