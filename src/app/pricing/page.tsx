import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import PricingComparison from "@/components/PricingComparison";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { JsonLd, FAQPageSchema } from "@/components/schema";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Pricing & Plans | Web & App Development | IntegersDev",
  description:
    "Transparent pricing for web development, UI/UX design, and custom software in Gwalior. Explore project packages starting from $129 (₹12,250), monthly retainers, and detailed plan comparison.",
  alternates: {
    canonical: "https://integersdev.in/pricing",
  },
  openGraph: {
    title: "Pricing & Plans | Web & App Development | IntegersDev",
    description:
      "Transparent pricing for web development, UI/UX design, and custom software in Gwalior. Clear milestone tiers starting from $129 / ₹12,250.",
    url: "https://integersdev.in/pricing",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Transparent Pricing" }],
  },
};

const pricingFaqs = [
  {
    question: "How do your milestone payments work (deposit vs. final handoff)?",
    answer:
      "For standard fixed-scope projects, we structure payments around clear milestones: 40% upfront deposit to initiate UI/UX wireframing and architecture, 30% upon approval of the interactive preview staging environment, and the final 30% upon production deployment, domain connection, and complete GitHub source code transfer.",
  },
  {
    question: "Are there any hidden fees, unexpected agency markups, or lock-ins?",
    answer:
      "None. Every quote is fully itemized and transparent. You receive 100% source code ownership and full administrator access. Third-party infrastructure costs (domain registration, cloud hosting on Vercel/AWS, or API tokens) are billed directly to your own provider accounts without agency surcharges.",
  },
  {
    question: "How does the USD vs. INR currency switch work for payment?",
    answer:
      "Indian businesses and startups can pay in Indian Rupees (INR) via UPI, NEFT/RTGS, NetBanking, or Razorpay with GST tax invoices provided. International clients across North America, Europe, and the Middle East can pay in USD via Stripe, Wise, or International Bank Wire.",
  },
  {
    question: "What does the 20% discount on Monthly Retainers include?",
    answer:
      "Our Monthly Retainer model is ideal for scaling startups that need continuous feature releases, SEO optimization, UX refinement, and priority bug support. Switching to a retainer provides an immediate 20% cost reduction compared to equivalent ad-hoc milestone sprints.",
  },
  {
    question: "What if I need custom features not listed in the standard tiers?",
    answer:
      "Use our bespoke consultation option or the Custom Project Estimator. We evaluate your exact scope—such as multi-vendor marketplaces, real-time messaging, custom AI agent integrations, or ERP synchronization—and provide a tailored fixed-price proposal.",
  },
  {
    question: "Do you offer a design satisfaction or revision guarantee?",
    answer:
      "Yes. During the initial design sprint, we work through interactive Figma revisions until you are completely satisfied with the aesthetic direction. If our initial design concept fails to meet your project brief after feedback, we will refund your kickoff deposit.",
  },
  {
    question: "What ongoing third-party costs should I expect after launch?",
    answer:
      "Typically only domain registration (approx. $10–$15 / ₹900–₹1,200 per year) and cloud hosting. Modern Next.js apps often run on Vercel's or Cloudflare's free or $20/mo hobby tiers with global CDN acceleration and free automated SSL certificates.",
  },
  {
    question: "Can I start with a Basic or Standard plan and upgrade later?",
    answer:
      "Yes, absolutely! All IntegersDev applications are engineered with modular TypeScript and scalable Next.js architecture. You can easily start with a high-converting landing page MVP and seamlessly upgrade to database-backed user authentication, CMS dashboards, or mobile apps as your business grows.",
  },
];

// Product and Offer Schema for Google Rich Snippets
const pricingProductsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://integersdev.in/pricing#basic-plan",
      "name": "IntegersDev Basic Web & UI/UX Plan",
      "description":
        "Ideal for early MVPs, landing pages & design validation. Custom UI/UX design, 2 iterative revisions, Figma source handoff, and mobile responsiveness.",
      "image": "https://integersdev.in/og-image.png",
      "brand": {
        "@type": "Brand",
        "name": "IntegersDev",
      },
      "category": "Web Development Services",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "129",
        "highPrice": "129",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "Basic Plan (USD) - Starting from $129",
            "price": "129",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
          {
            "@type": "Offer",
            "name": "Basic Plan (INR) - Starting from ₹12,250",
            "price": "12250",
            "priceCurrency": "INR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
        ],
      },
    },
    {
      "@type": "Product",
      "@id": "https://integersdev.in/pricing#standard-plan",
      "name": "IntegersDev Standard Full-Stack Web Plan",
      "description":
        "Complete production frontend & backend development with Next.js, database setup, interactive lead forms, and basic SEO configuration.",
      "image": "https://integersdev.in/og-image.png",
      "brand": {
        "@type": "Brand",
        "name": "IntegersDev",
      },
      "category": "Web Development Services",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "249",
        "highPrice": "249",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "Standard Plan (USD) - Starting from $249",
            "price": "249",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
          {
            "@type": "Offer",
            "name": "Standard Plan (INR) - Starting from ₹23,700",
            "price": "23700",
            "priceCurrency": "INR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
        ],
      },
    },
    {
      "@type": "Product",
      "@id": "https://integersdev.in/pricing#turbo-plan",
      "name": "IntegersDev Turbo Full-Stack & Mobile Platform Plan",
      "description":
        "End-to-end fullstack platform built for serious scale & traffic. Web and mobile app development (PWA/Hybrid), custom CMS dashboard, and priority sprint delivery.",
      "image": "https://integersdev.in/og-image.png",
      "brand": {
        "@type": "Brand",
        "name": "IntegersDev",
      },
      "category": "Software Development Services",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "449",
        "highPrice": "449",
        "offerCount": "2",
        "offers": [
          {
            "@type": "Offer",
            "name": "Turbo Plan (USD) - Starting from $449",
            "price": "449",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
          {
            "@type": "Offer",
            "name": "Turbo Plan (INR) - Starting from ₹42,750",
            "price": "42750",
            "priceCurrency": "INR",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock",
            "url": "https://integersdev.in/pricing",
            "seller": {
              "@type": "Organization",
              "name": "IntegersDev",
              "url": "https://integersdev.in",
            },
          },
        ],
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <SiteLayout>
      {/* Product & Offer Schema for Google Rich Results */}
      <JsonLd data={pricingProductsSchema} />

      {/* Schema.org FAQPage Structured Data */}
      <FAQPageSchema faqs={pricingFaqs} />

      <PageHeader
        badge="Transparent Investment"
        title="Predictable & Transparent"
        highlight="Pricing"
        description="No hidden fees, no ambiguous hourly bills. Clear milestone packages starting from $129 (₹12,250) for early-stage MVPs, scaling businesses, and full-stack custom engineering."
        breadcrumbs={[{ label: "Pricing" }]}
      />

      {/* Main Interactive Pricing Component with Tiers, Toggles & Modal */}
      <section className="w-full">
        <Pricing />
      </section>

      {/* Detailed Side-by-Side Comparison Matrix */}
      <PricingComparison />

      {/* Pricing FAQs Section */}
      <section className="py-16 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Billing &amp; Payment FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Frequently Asked Pricing Questions
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Everything you need to know about milestone deposits, currency exchange, retainers, and guarantees.
          </p>
        </div>
        <FAQAccordion items={pricingFaqs} />
      </section>

      <CTASection
        title="Need a Custom Enterprise Proposal?"
        description="Have custom architecture requirements or a complex multi-platform specification? Talk directly with Vinay and our engineering team in Gwalior."
      />
    </SiteLayout>
  );
}
