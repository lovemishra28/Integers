import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import FaqClient from "./FaqClient";
import { FAQPageSchema } from "@/components/schema";
import { ALL_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | IntegersDev",
  description:
    "Got questions about web development, Next.js, pricing, UI/UX, or mobile apps in Gwalior? Browse all frequently asked questions about working with IntegersDev.",
  alternates: {
    canonical: "https://integersdev.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | IntegersDev",
    description:
      "All answers about web development, UI/UX design, pricing, and project delivery with IntegersDev in Gwalior.",
    url: "https://integersdev.in/faq",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev FAQs" }],
  },
};

export default function FaqPage() {
  return (
    <SiteLayout>
      <FAQPageSchema faqs={ALL_FAQS} />
      <PageHeader
        badge="Knowledge & Clarifications"
        title="Everything You Need to"
        highlight="Know"
        description="Clear answers about our engineering process, tech stack, milestone pricing, project timelines, and post-launch support."
        breadcrumbs={[{ label: "FAQ" }]}
        actions={
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
          >
            Have a Specific Question?
            <FaArrowRight className="w-3 h-3" />
          </Link>
        }
      />

      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <FaqClient />
      </section>

      <CTASection
        title="Didn't Find Your Answer?"
        description="Our engineers in Gwalior are available on WhatsApp and email to provide personalized guidance for your project."
        primaryBtnText="Contact The Team"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
