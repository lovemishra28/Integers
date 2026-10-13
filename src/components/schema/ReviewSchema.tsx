import React from "react";
import JsonLd from "./JsonLd";
import { siteConfig } from "@/config/site";

export interface ReviewItem {
  author: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  datePublished?: string;
}

export interface ReviewSchemaProps {
  /** Single real review/testimonial */
  review?: ReviewItem | null;
  /** Array of real, verified client reviews */
  reviews?: ReviewItem[] | null;
  /** Name of item being reviewed (e.g. "Vastavikta Web Development", "IntegersDev") */
  itemName?: string;
  itemType?: "LocalBusiness" | "Service" | "Product" | "WebSite" | "Organization";
  itemUrl?: string;
}

/**
 * Schema.org Review and AggregateRating structured data component
 * STRICT RULE: Only renders when real, verified review data exists with both author and quote.
 * Returns null if no reviews are present, preventing Google manual actions or penalties for fabricated ratings.
 */
export default function ReviewSchema({
  review,
  reviews,
  itemName = siteConfig.name,
  itemType = "LocalBusiness",
  itemUrl = siteConfig.url,
}: ReviewSchemaProps) {
  const verifiedList: ReviewItem[] = [];

  if (review && review.quote && review.author && review.quote.trim().length > 0 && review.author.trim().length > 0) {
    verifiedList.push(review);
  }

  if (reviews && Array.isArray(reviews)) {
    for (const r of reviews) {
      if (r && r.quote && r.author && r.quote.trim().length > 0 && r.author.trim().length > 0) {
        verifiedList.push(r);
      }
    }
  }

  // Gated: Absolutely do NOT render if no real reviews exist
  if (verifiedList.length === 0) {
    return null;
  }

  // Single review
  if (verifiedList.length === 1) {
    const single = verifiedList[0];
    const schema = {
      "@context": "https://schema.org",
      "@type": "Review",
      itemReviewed: {
        "@type": itemType,
        name: itemName,
        url: itemUrl,
      },
      author: {
        "@type": "Person",
        name: single.author,
        ...(single.role || single.company
          ? { jobTitle: [single.role, single.company].filter(Boolean).join(" at ") }
          : {}),
      },
      reviewBody: single.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: single.rating || 5,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: single.datePublished || "2024-06-01",
    };

    return <JsonLd data={schema} />;
  }

  // Multiple verified reviews: Generate AggregateRating alongside genuine reviews
  const totalScore = verifiedList.reduce((acc, curr) => acc + (curr.rating || 5), 0);
  const avgScore = (totalScore / verifiedList.length).toFixed(1);

  const aggregateSchema = {
    "@context": "https://schema.org",
    "@type": itemType,
    name: itemName,
    url: itemUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgScore,
      reviewCount: verifiedList.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: verifiedList.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
        ...(r.role || r.company
          ? { jobTitle: [r.role, r.company].filter(Boolean).join(" at ") }
          : {}),
      },
      reviewBody: r.quote,
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating || 5,
        bestRating: 5,
        worstRating: 1,
      },
      datePublished: r.datePublished || "2024-06-01",
    })),
  };

  return <JsonLd data={aggregateSchema} />;
}
