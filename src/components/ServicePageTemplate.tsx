import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaExternalLinkAlt,
  FaClock,
  FaTag,
  FaCogs,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { ServiceSchema, FAQPageSchema } from "@/components/schema";
import { ServicePageSkeleton } from "@/components/ui/Skeleton";

export { ServicePageSkeleton };

export interface IncludedFeature {
  icon?: React.ReactNode;
  title: string;
  desc: string;
  deliverables?: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface TechItem {
  name: string;
  category: string;
  badge?: string;
  desc?: string;
}

export interface PricingTeaser {
  title: string;
  badge?: string;
  startingPrice: string;
  currencyLabel?: string;
  timeframe: string;
  warranty?: string;
  description: string;
  highlights: string[];
  ctaText?: string;
  ctaHref?: string;
}

export interface RelatedCaseStudy {
  title: string;
  client?: string;
  category: string;
  badge: string;
  description: string;
  impact: string;
  image: string;
  stack: string[];
  liveUrl?: string;
  portfolioHref?: string;
}

export interface OtherServiceLink {
  title: string;
  slug: string;
  desc: string;
  badge?: string;
}

export interface ServicePageTemplateProps {
  // Hero & Header
  badge?: string;
  title: string;
  highlight?: string;
  breadcrumbs?: { label: string; href?: string }[];
  actions?: React.ReactNode;

  // Intro Section (100 words target)
  introHeading?: string;
  introText: string | React.ReactNode;
  introStats?: { value: string; label: string }[];

  // Core Pillars / What's Included
  whatsIncludedTitle?: string;
  whatsIncludedSubtitle?: string;
  whatsIncluded: IncludedFeature[];

  // Process Steps
  processTitle?: string;
  processSubtitle?: string;
  processSteps: ProcessStep[];

  // Technologies Used
  techTitle?: string;
  techSubtitle?: string;
  techStack: TechItem[];

  // Pricing Teaser linking to /pricing
  pricingTeaser: PricingTeaser;

  // FAQs (4-5 items)
  faqTitle?: string;
  faqSubtitle?: string;
  faqs: FAQItem[];

  // Related Case Study
  caseStudyTitle?: string;
  caseStudy: RelatedCaseStudy;

  // Internal Links to other services
  otherServicesTitle?: string;
  otherServices: OtherServiceLink[];

  // Schema Props
  serviceType?: string;
  serviceDescription?: string;
  canonicalUrl?: string;

  // Bottom CTA
  ctaTitle?: string;
  ctaDescription?: string;
  ctaBadge?: string;

  // Optional Loading Skeleton state
  isLoading?: boolean;
}

export default function ServicePageTemplate({
  isLoading = false,
  badge = "Service Offering",
  title,
  highlight,
  breadcrumbs,
  actions,
  serviceType,
  serviceDescription,
  canonicalUrl,
  introHeading = "Engineered for Measurable Impact",
  introText,
  introStats,
  whatsIncludedTitle = "What's Included in This Service",
  whatsIncludedSubtitle = "Every engagement delivers end-to-end production assets, tested code, and full intellectual property transfer.",
  whatsIncluded,
  processTitle = "Our Step-by-Step Delivery Process",
  processSubtitle = "A structured, transparent roadmap from first discovery call to final production deployment.",
  processSteps,
  techTitle = "Modern Tech Stack & Architecture",
  techSubtitle = "We choose cutting-edge frameworks that guarantee speed, security, and effortless maintainability.",
  techStack,
  pricingTeaser,
  faqTitle = "Frequently Asked Questions",
  faqSubtitle = "Clear answers about timelines, technical scopes, milestone billing, and post-launch maintenance.",
  faqs,
  caseStudyTitle = "Featured Related Case Study",
  caseStudy,
  otherServicesTitle = "Explore Our Other Digital Services",
  otherServices,
  ctaTitle,
  ctaDescription,
  ctaBadge,
}: ServicePageTemplateProps) {
  if (isLoading) {
    return (
      <SiteLayout>
        <ServicePageSkeleton />
      </SiteLayout>
    );
  }
  const fullServiceTitle = `${title} ${highlight || ""}`.trim();
  const resolvedUrl =
    canonicalUrl ||
    (breadcrumbs && breadcrumbs.length > 0 && breadcrumbs[breadcrumbs.length - 1].href) ||
    "/services";

  return (
    <SiteLayout>
      {/* Schema.org Service Structured Data */}
      <ServiceSchema
        name={fullServiceTitle}
        description={
          serviceDescription ||
          (typeof introText === "string"
            ? introText
            : `${fullServiceTitle} engineered by IntegersDev in Gwalior, India. Production-ready code, modern architecture, and high conversion.`)
        }
        serviceType={serviceType || title}
        url={resolvedUrl}
        offer={
          pricingTeaser
            ? {
                priceStartingAt: pricingTeaser.startingPrice,
                priceCurrency: "INR",
                url: "/pricing",
              }
            : undefined
        }
      />

      {/* Schema.org FAQPage Structured Data */}
      <FAQPageSchema faqs={faqs} />

      {/* 1. Header with Breadcrumbs & Primary Keyword H1 */}
      <PageHeader
        badge={badge}
        title={title}
        highlight={highlight}
        description=""
        breadcrumbs={breadcrumbs}
        actions={actions}
      />

      {/* 2. Intro Section (100+ words of keyword-rich copy + metrics) */}
      <section className="py-8 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full -mt-6">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1 max-w-3xl">
              <span className="text-xs font-black uppercase tracking-wider text-[#62d124] block mb-2">
                Strategic Foundation
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-4">
                {introHeading}
              </h2>
              <div className="text-sm sm:text-base font-medium text-gray-700 leading-relaxed space-y-4">
                {introText}
              </div>
            </div>

            {introStats && introStats.length > 0 && (
              <div className="w-full lg:w-auto shrink-0 grid grid-cols-2 lg:grid-cols-1 gap-4 bg-[#f8f9f5] border-2 border-black p-5 sm:p-6 rounded-2xl shadow-[3px_3px_0px_0px_#000]">
                {introStats.map((stat, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-2xl sm:text-3xl font-black text-black">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. What's Included / Service Pillars */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Deliverables &amp; Scope
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-3">
            {whatsIncludedTitle}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
            {whatsIncludedSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsIncluded.map((feat, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-black mb-4 shadow-[2px_2px_0px_0px_#000]">
                  {feat.icon || <FaCheck className="w-5 h-5" />}
                </div>
                <h3 className="text-xl font-black text-black mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed mb-4">
                  {feat.desc}
                </p>
              </div>

              {feat.deliverables && feat.deliverables.length > 0 && (
                <div className="pt-4 border-t border-black/10 mt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">
                    Standard Inclusions
                  </span>
                  <ul className="space-y-1.5 text-xs font-bold text-gray-800">
                    {feat.deliverables.map((deliv, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Process Steps (Numbered Sprints) */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-3">
              <FaCogs className="w-3.5 h-3.5" />
              Agile Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-black mb-3">
              {processTitle}
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
              {processSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 border-black bg-[#f8f9f5] shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-black text-white bg-black px-2.5 py-1 rounded-lg">
                      {st.step}
                    </span>
                    <span className="text-[10px] font-black uppercase text-gray-400">Phase 0{i + 1}</span>
                  </div>
                  <h3 className="text-base font-black text-black mb-2">{st.title}</h3>
                  <p className="text-xs font-medium text-gray-700 leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Tech Used */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Tools &amp; Frameworks
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-3">
            {techTitle}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-600 leading-relaxed">
            {techSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {techStack.map((tech, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-black rounded-2xl p-4 sm:p-5 shadow-[4px_4px_0px_0px_#000] hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 bg-gray-100 border border-gray-300 px-2 py-0.5 rounded">
                  {tech.category}
                </span>
                {tech.badge && (
                  <span className="text-[9px] font-black uppercase bg-[#d4ff3f] border border-black px-1.5 py-0.2 rounded">
                    {tech.badge}
                  </span>
                )}
              </div>
              <h3 className="text-base font-black text-black mb-1">{tech.name}</h3>
              {tech.desc && (
                <p className="text-[11px] font-medium text-gray-600 leading-snug">
                  {tech.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Pricing Teaser (Linking directly to /pricing) */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#d4ff3f] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              {pricingTeaser.badge && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] text-black border border-black rounded-full text-[10px] font-black uppercase mb-4 shadow-[1px_1px_0px_0px_#fff]">
                  <FaTag className="w-2.5 h-2.5" />
                  {pricingTeaser.badge}
                </span>
              )}
              <h2 className="text-2xl sm:text-4xl font-black mb-3">
                {pricingTeaser.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mb-6 leading-relaxed">
                {pricingTeaser.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {pricingTeaser.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-200">
                    <span className="w-4 h-4 rounded-full bg-[#d4ff3f] text-black flex items-center justify-center text-[8px] shrink-0 font-black">
                      ✓
                    </span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Card & Action */}
            <div className="w-full lg:w-auto shrink-0 bg-[#1c1c1c] border-2 border-gray-700 rounded-2xl p-6 sm:p-8 text-center min-w-[280px]">
              <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
                Transparent Starting Rate
              </span>
              <div className="text-3xl sm:text-4xl font-black text-[#d4ff3f] mb-1">
                {pricingTeaser.startingPrice}
              </div>
              <div className="flex flex-col items-center justify-center gap-1.5 text-[11px] font-bold text-gray-300 mb-4">
                <span className="flex items-center gap-1.5">
                  <FaClock className="w-3 h-3 text-[#d4ff3f]" />
                  Delivery: {pricingTeaser.timeframe}
                </span>
                {pricingTeaser.warranty && (
                  <span className="flex items-center gap-1.5 text-[#d4ff3f]">
                    <FaShieldAlt className="w-3 h-3" />
                    {pricingTeaser.warranty}
                  </span>
                )}
              </div>

              <Link
                href={pricingTeaser.ctaHref || "/pricing"}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#fff] hover:scale-105 active:scale-95 transition-transform"
              >
                {pricingTeaser.ctaText || "View Full Pricing & Plans"}
                <FaArrowRight className="w-3 h-3" />
              </Link>

              <p className="text-[10px] text-gray-400 font-bold mt-3">
                Milestone payments • 0% hidden agency fees
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Related Case Study */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            {caseStudyTitle}
          </h2>
        </div>

        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] grid grid-cols-1 lg:grid-cols-12 items-stretch">
          {/* Artwork Container */}
          <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[280px] border-b-2 lg:border-b-0 lg:border-r-2 border-black bg-gray-100">
            <Image
              src={caseStudy.image}
              alt={`${caseStudy.title} - ${caseStudy.category} case study by IntegersDev`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              loading="lazy"
              className="object-cover object-top"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-black text-[#d4ff3f] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-black">
                {caseStudy.badge}
              </span>
            </div>
          </div>

          {/* Description & Impact Body */}
          <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                <span>{caseStudy.category}</span>
                {caseStudy.client && (
                  <>
                    <span>•</span>
                    <span className="text-black font-black">{caseStudy.client}</span>
                  </>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black mb-3">
                {caseStudy.title}
              </h3>
              <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6">
                {caseStudy.description}
              </p>

              {/* Impact Callout */}
              <div className="bg-[#f8f9f5] p-4 rounded-2xl border border-gray-300 mb-6">
                <span className="text-[10px] font-black uppercase text-gray-500 block mb-1">
                  Measurable Impact
                </span>
                <p className="text-xs sm:text-sm font-bold text-black">
                  {caseStudy.impact}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-8">
                {caseStudy.stack.map((st, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-black bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-md text-gray-800"
                  >
                    {st}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-black/10">
              {caseStudy.portfolioHref && (
                <Link
                  href={caseStudy.portfolioHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#d4ff3f] hover:text-black transition-colors"
                >
                  Read In-Depth Case Study
                  <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              )}
              {caseStudy.liveUrl && (
                <a
                  href={caseStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:scale-105 transition-transform"
                >
                  Visit Live Platform
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </a>
              )}
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-gray-100 transition-colors"
              >
                All Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. 4-5 FAQs */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black mb-2">
            {faqTitle}
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-600">
            {faqSubtitle}
          </p>
        </div>
        <FAQAccordion items={faqs} />
      </section>

      {/* 9. Internal Links to Other Service Pages */}
      {otherServices && otherServices.length > 0 && (
        <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
          <div className="border-t-2 border-black pt-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
                  Explore Specialties
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-black">
                  {otherServicesTitle}
                </h3>
              </div>
              <Link
                href="/services"
                className="text-xs font-black uppercase tracking-wider text-black hover:text-[#62d124] underline flex items-center gap-1"
              >
                View Services Hub →
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherServices.map((service, idx) => (
                <Link
                  key={idx}
                  href={service.slug}
                  className="group bg-white border-2 border-black rounded-2xl p-5 shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#d4ff3f] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    {service.badge && (
                      <span className="text-[9px] font-black uppercase bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-700 block w-max mb-2">
                        {service.badge}
                      </span>
                    )}
                    <h3 className="text-base font-black text-black group-hover:text-[#62d124] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-gray-600 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-1 text-xs font-black text-black group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Reusable CTA */}
      <CTASection
        badge={ctaBadge || "Start Your Build"}
        title={ctaTitle}
        description={ctaDescription}
      />
    </SiteLayout>
  );
}
