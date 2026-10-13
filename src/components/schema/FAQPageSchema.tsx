import React from "react";
import JsonLd from "./JsonLd";

export interface FAQItemData {
  question: string;
  answer: string;
}

export interface FAQPageSchemaProps {
  faqs?: FAQItemData[];
}

/**
 * Schema.org FAQPage structured data component
 * Renders only when valid FAQ items are provided.
 */
export default function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  if (!faqs || !Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  // Filter out any items missing question or answer
  const validFaqs = faqs.filter(
    (faq) =>
      typeof faq.question === "string" &&
      faq.question.trim().length > 0 &&
      typeof faq.answer === "string" &&
      faq.answer.trim().length > 0
  );

  if (validFaqs.length === 0) {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: validFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.trim(),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };

  return <JsonLd data={schema} />;
}
