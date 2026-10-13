import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCitySlugs, getCityBySlug } from "@/data/cities";
import CityPageTemplate from "@/components/CityPageTemplate";

interface CityPageProps {
  params: Promise<{
    citySlug: string;
  }>;
}

// Generate static params for all configured cities at build time (SSG)
export async function generateStaticParams() {
  const slugs = getAllCitySlugs();
  return slugs.map((citySlug) => ({
    citySlug,
  }));
}

// Generate unique metadata for each city landing page
export async function generateMetadata({
  params,
}: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "City Not Found | IntegersDev",
    };
  }

  return {
    title: city.meta.title,
    description: city.meta.description,
    alternates: {
      canonical: city.meta.canonical,
    },
    openGraph: {
      title: city.meta.title,
      description: city.meta.description,
      url: city.meta.canonical,
      siteName: "IntegersDev",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${city.meta.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: city.meta.title,
      description: city.meta.description,
      site: "@integers_dev",
      creator: "@integers_dev",
      images: ["/og-image.png"],
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = getCityBySlug(citySlug);

  // If slug is not in CITIES_DATA, trigger Next.js 404
  if (!city) {
    notFound();
  }

  return <CityPageTemplate city={city} />;
}
