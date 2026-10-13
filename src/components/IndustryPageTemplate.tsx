import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaBolt,
  FaShieldAlt,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaExclamationTriangle,
  FaChartLine,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { IndustryLandingConfig } from "@/data/industryLandings";
import { ServiceSchema, FAQPageSchema } from "@/components/schema";

interface IndustryPageTemplateProps {
  industry: IndustryLandingConfig;
}

export default function IndustryPageTemplate({
  industry,
}: IndustryPageTemplateProps) {
  return (
    <SiteLayout>
      {/* Schema.org Structured Data */}
      <ServiceSchema
        name={`${industry.hero.h1Title} ${industry.hero.h1Highlight}`.trim()}
        description={industry.meta.description}
        serviceType={`${industry.industryName} Web Development`}
        url={`/${industry.slug}`}
        offer={{
          priceStartingAt: "12250",
          priceCurrency: "INR",
          url: "/pricing",
        }}
      />
      <FAQPageSchema faqs={industry.faqs} />

      {/* 1. Header Area with Target H1 Keyword */}
      <PageHeader
        badge={industry.hero.badge}
        title={industry.hero.h1Title}
        highlight={industry.hero.h1Highlight}
        description={industry.hero.description}
        breadcrumbs={[
          { label: "Solutions", href: "/services" },
          { label: industry.industryName },
        ]}
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Get Free Consultation
              <FaArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Explore Pricing &amp; Plans
            </Link>
          </>
        }
      />

      {/* 2. Industry Pain Points */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-red-100 border-2 border-black rounded-full text-xs font-black uppercase mb-4 text-red-900 shadow-[2px_2px_0px_0px_#000]">
            <FaExclamationTriangle className="text-red-600" />
            Industry Vulnerabilities
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-4">
            {industry.painPoints.heading}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mb-10 max-w-4xl">
            {industry.painPoints.subheading}
          </p>

          {/* 4 Pain Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.painPoints.items.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-red-500 text-white border border-black">
                      Bottleneck 0{idx + 1}
                    </span>
                    {item.stat && (
                      <span className="text-xs font-black text-red-700 bg-red-100 px-2.5 py-0.5 rounded-full border border-red-300">
                        {item.stat}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features We Build */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-3">
            <FaLaptopCode className="w-3.5 h-3.5" />
            Engineered Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-4">
            {industry.features.heading}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            {industry.features.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.features.items.map((feat) => (
            <div
              key={feat.title}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black text-[#d4ff3f] border border-black">
                    {feat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-black text-black mb-3">
                  {feat.title}
                </h3>
                <p className="text-xs font-medium text-gray-700 leading-relaxed mb-6">
                  {feat.description}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">
                  Key Tech
                </span>
                <div className="flex flex-wrap gap-1">
                  {feat.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-black bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Related Case Study Spotlight */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-2xl">
              <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-2">
                Featured Case Study
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
                {industry.caseStudy.title}
              </h2>
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-gray-300 mb-5">
                Client: {industry.caseStudy.client} • {industry.caseStudy.category}
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-medium leading-relaxed mb-8">
                {industry.caseStudy.summary}
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                {industry.caseStudy.metrics.map((m, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-[#1c1c1c] border border-gray-800 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-black text-[#d4ff3f]">
                      {m.metric}
                    </div>
                    <div className="text-[10px] font-bold text-gray-400 mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {industry.caseStudy.slug && (
                  <Link
                    href={`/portfolio/${industry.caseStudy.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black hover:scale-105 transition-transform"
                  >
                    Read Full Case Study
                    <FaArrowRight className="w-3 h-3" />
                  </Link>
                )}
                {industry.caseStudy.liveUrl && (
                  <a
                    href={industry.caseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white/10 text-white border border-gray-700 hover:bg-white hover:text-black transition-all"
                  >
                    Visit Live Platform
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Cover Image */}
            <div className="w-full lg:w-96 h-64 sm:h-80 relative rounded-2xl overflow-hidden border-2 border-gray-700 shrink-0">
              <Image
                src={industry.caseStudy.coverImage}
                alt={industry.caseStudy.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Transparent Pricing Teaser */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-2">
              Transparent Investment
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight mb-2">
              Fixed Milestone Packages for {industry.industryName}
            </h2>
            <p className="text-xs sm:text-sm font-medium text-gray-700 max-w-xl">
              Projects starting from <strong className="text-black">$129 (₹12,250)</strong> with clear deliverables, 100% source code ownership, and zero hidden agency markups.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 transition-transform"
            >
              Explore Full Pricing &amp; Comparison
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Industry FAQs */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Frequently Asked Questions for {industry.industryName}
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Clear answers about timelines, third-party integrations, and direct ownership.
          </p>
        </div>
        <FAQAccordion items={industry.faqs} />
      </section>

      {/* 7. Final Conversion CTA */}
      <CTASection
        title={`Ready to Build a High-Converting Website for Your ${industry.industryName}?`}
        description={`Collaborate directly with Vinay, Aryan, Kuldeep & Love. Free 30-minute discovery consultation, fixed pricing, and fast sprint turnaround.`}
      />
    </SiteLayout>
  );
}
