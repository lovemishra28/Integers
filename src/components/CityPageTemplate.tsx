import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCheck,
  FaArrowRight,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaBolt,
  FaUsers,
  FaClock,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaStar,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import { CityConfig } from "@/data/cities";
import { getProjectBySlug } from "@/data/projects";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQPageSchema,
} from "@/components/schema";

interface CityPageTemplateProps {
  city: CityConfig;
}

export default function CityPageTemplate({ city }: CityPageTemplateProps) {
  const caseStudy = getProjectBySlug(city.relatedCaseStudySlug);

  return (
    <SiteLayout>
      {/* City-Specific Structured Data */}
      <LocalBusinessSchema
        id={`https://integersdev.in/${city.slug}#localbusiness`}
        cityName={city.cityName}
        customDescription={city.meta.description}
      />
      <ServiceSchema
        name={`Web Development & Custom Software in ${city.cityName}`}
        description={city.meta.description}
        serviceType="Web Development & Custom Software"
        url={`/${city.slug}`}
        areaServed={[city.cityName, city.state, "India"]}
        offer={{
          priceStartingAt: "12250",
          priceCurrency: "INR",
          url: "/pricing",
        }}
      />
      <FAQPageSchema faqs={city.faqs} />

      {/* 1. Header Area with Local Keyword H1 */}
      <PageHeader
        badge={`${city.hero.badge} • ${city.cityName}, ${city.state}`}
        title={city.hero.h1Title}
        highlight={city.hero.h1Highlight}
        description={city.hero.description}
        breadcrumbs={[
          { label: "Locations", href: "/contact" },
          { label: `Web Development in ${city.cityName}` },
        ]}
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Discuss {city.cityName} Project
              <FaArrowRight className="w-3 h-3" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Explore Our Portfolio
            </Link>
          </>
        }
      />

      {/* 2. Local Market Context & Industry Realities */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#f8f9f5] border-2 border-black rounded-full text-xs font-black uppercase mb-4 shadow-[2px_2px_0px_0px_#000]">
            <FaMapMarkerAlt className="text-red-500" />
            {city.regionRole}
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight mb-6">
            {city.localContext.heading}
          </h2>

          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed mb-8 max-w-4xl">
            {city.localContext.intro}
          </p>

          {/* 3 City Specific Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {city.localContext.challenges.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000] flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-black text-[#d4ff3f] flex items-center justify-center font-black text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-black mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Market Opportunity Banner */}
          <div className="p-6 rounded-2xl bg-[#d4ff3f] border-2 border-black shadow-[4px_4px_0px_0px_#000]">
            <span className="text-xs font-black uppercase tracking-wider text-black block mb-1">
              💡 The Competitive Opportunity
            </span>
            <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
              {city.localContext.opportunity}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Industries Served in This City */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-3">
            <FaLaptopCode className="w-3.5 h-3.5" />
            Tailored Industry Solutions
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-4">
            Key Industries We Power in {city.cityName}
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            We don&apos;t build generic one-size-fits-all websites. We engineer high-conversion workflows specifically designed for {city.cityName}&apos;s leading commercial sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {city.industriesServed.map((ind) => (
            <div
              key={ind.title}
              className="bg-white border-2 border-black rounded-3xl p-7 sm:p-9 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-black text-[#d4ff3f] border border-black">
                    {ind.badge}
                  </span>
                  <span className="text-xs font-bold text-gray-400">
                    {city.cityName} Sector
                  </span>
                </div>

                <h3 className="text-2xl font-black text-black mb-4">
                  {ind.title}
                </h3>

                <div className="space-y-3.5 mb-6">
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200">
                    <span className="text-[10px] font-black uppercase text-red-700 tracking-wider block mb-1">
                      ⚠️ The Common Local Pain Point
                    </span>
                    <p className="text-xs font-semibold text-red-950 leading-relaxed">
                      {ind.painPoint}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                    <span className="text-[10px] font-black uppercase text-green-700 tracking-wider block mb-1">
                      ✅ How IntegersDev Engineers It
                    </span>
                    <p className="text-xs font-semibold text-green-950 leading-relaxed">
                      {ind.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block mb-2">
                  Engineered Stack
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {ind.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-black bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-md text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-black text-white hover:bg-[#d4ff3f] hover:text-black transition-all border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                >
                  Request a Quote for {ind.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The IntegersDev Regional Advantage */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="max-w-3xl mb-12">
            <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-3">
              Competitive Edge
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {city.localAdvantage.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-medium">
              {city.localAdvantage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {city.localAdvantage.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-gray-800 bg-[#1a1a1a] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#d4ff3f] text-black flex items-center justify-center font-black text-sm shrink-0">
                  <FaBolt className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Regional Case Study Spotlight */}
      {caseStudy && (
        <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
          <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-black uppercase tracking-wider text-[#62d124] block mb-2">
                  Proven Real-World Results
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-3">
                  Featured Case Study: {caseStudy.title}
                </h2>
                <p className="text-sm font-semibold text-gray-700 leading-relaxed mb-6">
                  {caseStudy.summary}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                  {caseStudy.results.map((m, i) => (
                    <div
                      key={i}
                      className="p-3.5 bg-[#f8f9f5] border border-black/10 rounded-xl"
                    >
                      <div className="text-2xl font-black text-black">
                        {m.metric}
                      </div>
                      <div className="text-[11px] font-bold text-gray-600">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/portfolio/${caseStudy.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 transition-transform"
                >
                  Read Full {caseStudy.title} Case Study
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Cover Image */}
              <div className="w-full lg:w-96 h-64 sm:h-72 relative rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_#000] shrink-0">
                <Image
                  src={caseStudy.coverImage}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Transparent Pricing Teaser for This City */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-[#f8f9f5] border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-black uppercase text-black/60 tracking-wider block mb-2">
              Transparent Regional Pricing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-2">
              Predictable Milestone Packages for {city.cityName}
            </h2>
            <p className="text-sm font-medium text-gray-700 max-w-xl">
              Starting from{" "}
              <strong className="text-black">
                {city.pricingTeaser.startingUSD} (
                {city.pricingTeaser.startingINR})
              </strong>{" "}
              with {city.pricingTeaser.delivery}. 100% source code ownership and zero hidden agency markups.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 transition-transform text-center"
            >
              Explore Full Pricing &amp; Plans
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. City-Specific FAQs */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full mb-16">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Local FAQs
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Frequently Asked Questions in {city.cityName}
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Common questions from founders, directors, and businesses in {city.cityName}, {city.state}.
          </p>
        </div>
        <FAQAccordion items={city.faqs} />
      </section>

      {/* 8. Final Local CTA Section */}
      <CTASection
        title={`Ready to Build Your ${city.cityName} Digital Platform?`}
        description={`Collaborate directly with Vinay, Aryan, Kuldeep & Love. Free 30-minute discovery consultation, fixed milestone pricing, and on-time delivery for ${city.cityName} businesses.`}
      />
    </SiteLayout>
  );
}
