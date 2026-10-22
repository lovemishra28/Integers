import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  FaBolt, 
  FaSearch, 
  FaBullseye, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaStar, 
  FaClock, 
  FaUsers, 
  FaAward, 
  FaExternalLinkAlt, 
  FaCode, 
  FaMobileAlt 
} from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import AuditForm from "@/components/audit/AuditForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Website Audit | Speed, SEO & Conversion Diagnostic | IntegersDev",
  description:
    "Get a free 24-hour website audit from IntegersDev in Gwalior. We analyze your Core Web Vitals, technical SEO, mobile UX friction, and Next.js migration roadmap.",
  alternates: {
    canonical: "https://www.integersdev.in/free-website-audit",
  },
  openGraph: {
    title: "Free Website Audit | Speed, SEO & Conversion Diagnostic | IntegersDev",
    description:
      "Get a free 24-hour website diagnostic from IntegersDev in Gwalior. Identify speed bottlenecks, technical SEO issues, and conversion blockers.",
    url: "https://www.integersdev.in/free-website-audit",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Free Website Audit" }],
  },
};

export default function FreeWebsiteAuditPage() {
  return (
    <SiteLayout>
      <PageHeader
        badge="Zero Cost • No Sales Pressure"
        title="Get Your Free 24-Hour"
        highlight="Website Audit"
        description="Discover why your website is losing traffic or conversion opportunities. Our senior engineering collective in Gwalior will benchmark your Core Web Vitals, technical SEO, and conversion friction."
        breadcrumbs={[{ label: "Free Website Audit" }]}
      />

      {/* Trust Metrics Bar */}
      <section className="py-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="flex items-center gap-1.5 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <div className="text-3xl font-black text-black">Verified</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Client Feedback
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaClock />
            </div>
            <div className="text-3xl font-black text-black">&lt; 24h</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Guaranteed Turnaround
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaAward />
            </div>
            <div className="text-3xl font-black text-black">100%</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Actionable Fixes
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaShieldAlt />
            </div>
            <div className="text-3xl font-black text-black">₹0 / $0</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Completely Free
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Audit Form + What Audit Covers */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <AuditForm />
          </div>

          {/* Explanation Column: What the Audit Covers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_#d4ff3f]">
              <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-2">
                Diagnostic Scope
              </span>
              <h2 className="text-2xl sm:text-3xl font-black mb-4 tracking-tight leading-snug">
                What Our 24-Hour Audit Covers
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-medium mb-6 leading-relaxed">
                We don&apos;t just run an automated scanner. Our senior engineers manually inspect your website across four critical technical pillars:
              </p>

              <div className="space-y-5">
                {/* Pillar 1 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#d4ff3f] text-black border border-black flex items-center justify-center shrink-0 text-sm mt-0.5">
                    <FaBolt />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-white">1. Core Web Vitals &amp; Speed</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                      Largest Contentful Paint (LCP), Interaction to Next Paint (INP), Cumulative Layout Shift (CLS), and uncompressed script payload audits.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-400 text-black border border-black flex items-center justify-center shrink-0 text-sm mt-0.5">
                    <FaSearch />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-white">2. Technical SEO &amp; Indexability</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                      Schema.org JSON-LD validity, canonical tag hierarchy, mobile viewport scaling, robots.txt directives, and Google crawl budget leaks.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-400 text-black border border-black flex items-center justify-center shrink-0 text-sm mt-0.5">
                    <FaBullseye />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-white">3. UX &amp; Conversion Funnels</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                      Friction points in your lead forms, tap target accessibility on mobile smartphones, visual hierarchy, and banner blindness factors.
                    </p>
                  </div>
                </div>

                {/* Pillar 4 */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-400 text-black border border-black flex items-center justify-center shrink-0 text-sm mt-0.5">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <h3 className="font-black text-sm text-white">4. Modernization Roadmap</h3>
                    <p className="text-xs text-gray-400 font-medium mt-1 leading-relaxed">
                      Concrete architecture recommendations for migrating legacy WordPress or SPA setups to Next.js App Router for sub-second speeds.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & No Obligation Guarantee Card */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000]">
              <div className="flex items-center gap-2 mb-2 text-black font-black text-sm">
                <FaCheckCircle className="text-black" />
                <span>Zero Sales Pressure Guarantee</span>
              </div>
              <p className="text-xs text-gray-700 font-medium leading-relaxed">
                Your diagnostic PDF includes exact technical solutions you can hand directly to your internal team or use to make informed decisions. We will never spam or call you uninvited.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Trust Signals: Case Study Proof */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-8">
          <span className="text-xs font-black uppercase tracking-wider text-black bg-[#d4ff3f] border border-black px-3 py-1 rounded-full shadow-[1px_1px_0px_0px_#000] inline-block mb-2">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-black tracking-tight">
            How Technical Audits Drive Real Business Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-yellow-100 border border-black rounded-full">
                  Case Study: Vastavikta
                </span>
                <span className="text-xs font-bold text-emerald-600">85% Faster Load</span>
              </div>
              <h3 className="text-xl font-black text-black mb-3">
                From 4.8s Clunky WordPress to Sub-0.7s Next.js
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-6">
                Our initial audit uncovered 18 uncompressed hero banners and 42 render-blocking plugins. Rebuilding with clean Next.js Server Components dropped mobile bounce rates by 54% and generated over 140% more table inquiries.
              </p>
            </div>

            <Link
              href="/portfolio/vastavikta"
              className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-black hover:text-[#62d124] transition-colors"
            >
              Read Full Vastavikta Case Study →
            </Link>
          </div>

          <div className="bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-blue-100 border border-black rounded-full">
                  Case Study: Divyanshi Travels
                </span>
                <span className="text-xs font-bold text-emerald-600">Direct Mobile Bookings</span>
              </div>
              <h3 className="text-xl font-black text-black mb-3">
                Eliminating Mobile Checkout Friction
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-6">
                Our audit pinpointed high drop-offs on smartphone tour booking forms due to clumsy dropdowns and slow API calls. A streamlined PWA reservation flow turned smartphones into their primary booking channel.
              </p>
            </div>

            <Link
              href="/portfolio/divyanshi-travels"
              className="inline-flex items-center gap-2 font-black text-xs uppercase tracking-wider text-black hover:text-[#62d124] transition-colors"
            >
              Read Divyanshi Travels Case Study →
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        title="Prefer a Direct Conversation?"
        description="Book a live 20-minute architecture discovery call with Vinay, Aryan, Kuldeep & Love. We will review your current digital infrastructure and outline next steps."
        primaryBtnText="Schedule a Technical Call"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
