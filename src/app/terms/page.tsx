import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaFileContract, FaCheckCircle, FaBalanceScale, FaShieldAlt, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use & Service Agreement | IntegersDev",
  description:
    "Read the terms of service and client engagement agreements for IntegersDev. India-governed contract terms, milestone deliverables, IP ownership, and liability standards.",
  alternates: {
    canonical: "https://www.integersdev.in/terms",
  },
  openGraph: {
    title: "Terms of Use & Service Agreement | IntegersDev",
    description:
      "Client engagement guidelines, milestone billing terms, IP ownership, and legal contracts for IntegersDev in Gwalior, India.",
    url: "https://www.integersdev.in/terms",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Terms of Use" }],
  },
};

export default function TermsPage() {
  const lastUpdated = "October 2026";

  return (
    <SiteLayout>
      <PageHeader
        badge="Legal & Governance"
        title="Terms of Use &amp;"
        highlight="Client Agreement"
        description="Comprehensive terms governing our web engineering sprints, mobile app development, milestone billing, IP transfer, and mutual obligations under Indian law."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <article className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] text-black space-y-10">
          
          {/* Header Info Banner */}
          <div className="pb-8 border-b-2 border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-gray-500 block mb-1">
                Indian Contract Act, 1872 &amp; IT Act, 2000
              </span>
              <p className="text-sm font-bold text-gray-800">
                Governing Jurisdiction: Courts of Gwalior, Madhya Pradesh, India
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#d4ff3f] border-2 border-black px-4 py-2 rounded-full text-xs font-black shadow-[2px_2px_0px_0px_#000]">
              <FaFileContract className="w-3.5 h-3.5" />
              Effective Date: {lastUpdated}
            </div>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">1</span>
              Acceptance of Terms &amp; Digital Contract Formation
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              These Terms of Use (&ldquo;Terms&rdquo;) constitute a legally enforceable agreement between you (&ldquo;Client&rdquo;, &ldquo;User&rdquo;, or &ldquo;You&rdquo;) and <strong>IntegersDev</strong> (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered and operating from Gwalior, Madhya Pradesh, India.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              By accessing, browsing, interacting with <a href="https://www.integersdev.in" className="text-black font-bold underline">integersdev.in</a>, submitting inquiries through our contact forms, or commissioning bespoke development, you acknowledge that you have read, understood, and agreed to be bound by these Terms, together with our <Link href="/privacy-policy" className="text-black font-bold underline">Privacy Policy</Link>.
            </p>
            <div className="p-4 bg-[#f8f9f5] border-2 border-black rounded-2xl text-xs sm:text-sm font-medium text-gray-800">
              <strong>Contact Form Disclosure:</strong> Submitting a project inquiry via our contact form initiates a pre-contractual discovery dialogue. It does NOT automatically bind IntegersDev to build or deliver software until both parties formally sign a dedicated Statement of Work (SOW), project specification sheet, or confirm a sprint kickoff proposal.
            </div>
          </section>

          {/* Section 2: Services & Scope */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">2</span>
              Scope of Engineering Services &amp; Sprints
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              IntegersDev delivers bespoke technical services across the following primary domains:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 font-medium">
              <li><strong>Next.js &amp; Web Development:</strong> Server Component architecture, fullstack TypeScript development, SEO optimization, and sub-second Core Web Vitals engineering.</li>
              <li><strong>UI/UX &amp; Design Systems:</strong> Neo-Brutalist interface design, design tokens, Figma prototypes, and responsive interactive component libraries.</li>
              <li><strong>Mobile Application Development:</strong> Cross-platform iOS and Android apps with native device integrations, offline sync, and app store deployment assistance.</li>
              <li><strong>Custom Software &amp; API Engineering:</strong> Scalable backend microservices, REST/GraphQL APIs, database schema architecture, and third-party SaaS integrations.</li>
            </ul>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Every client project is defined by a specific Statement of Work (SOW) detailing exact deliverables, milestones, acceptance criteria, and revision cycles. Any requests outside the agreed SOW will be billed under our change-order hourly rate or formulated into a separate development sprint.
            </p>
          </section>

          {/* Section 3: Pricing, Currencies & Milestone Payments */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">3</span>
              Pricing, Milestone Payments &amp; Invoicing
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We offer transparent, fixed-price milestone tiers as detailed on our <Link href="/pricing" className="text-black font-bold underline">Pricing Page</Link> alongside custom enterprise estimates:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase tracking-wider mb-2 text-black">
                  Domestic &amp; International Billing
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Invoices are issued in <strong>INR (₹)</strong> for Indian businesses and founders (subject to applicable Goods and Services Tax - GST regulations), and in <strong>USD ($)</strong> for international clients via wire transfer, SWIFT, or verified international payment processors.
                </p>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase tracking-wider mb-2 text-black">
                  Milestone-Based Releases
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Standard fixed contracts are split into verified milestones (e.g., 40% initial kickoff deposit, 30% intermediate staging demo, 30% production deployment &amp; code transfer). Invoices are due within 7 calendar days of issuance.
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              Note: External recurring expenses—including domain registration, dedicated cloud hosting (AWS, Vercel, GCP), third-party SMS/email APIs, and paid SaaS software keys—remain direct client responsibilities unless explicitly included in a managed retainer agreement.
            </p>
          </section>

          {/* Section 4: Intellectual Property & Ownership */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">4</span>
              Intellectual Property Rights &amp; Code Ownership
            </h2>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 font-medium">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>100% Transfer Upon Full Settlement:</strong> Upon receipt of complete and final payment for the project, IntegersDev irrevocably assigns and transfers 100% full ownership of all custom source code, bespoke visual assets, Figma project files, and database schemas created specifically for the client.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>Pre-existing Frameworks &amp; Open Source:</strong> Components utilizing third-party open-source libraries (e.g., Next.js, React, Tailwind CSS, Framer Motion) are licensed under their respective MIT/Apache open-source licenses. IntegersDev retains ownership of its internal generic boilerplate utilities.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>Portfolio &amp; Showcase Rights:</strong> Unless a formal Non-Disclosure Agreement (NDA) is executed prior to sprint commencement, IntegersDev reserves the right to display the completed work, project screenshots, and general case study metrics in our public portfolio and promotional channels.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Client Responsibilities */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">5</span>
              Client Obligations &amp; Timelines
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Smooth sprint execution relies on collaborative coordination. The Client agrees to:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-gray-700 font-medium">
              <li>Provide required brand assets, high-resolution logos, copywriting, and media in a timely manner.</li>
              <li>Grant necessary developer access permissions (DNS, hosting, repository, APIs) within 48 hours of sprint launch.</li>
              <li>Review staging builds and milestone deliverables within 5 business days of notification. Lack of written feedback within 7 business days will be deemed acceptance of that specific milestone.</li>
            </ul>
          </section>

          {/* Section 6: Warranty & Post-Launch Support */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">6</span>
              30-Day Bug Fix Warranty &amp; Performance Guarantee
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              IntegersDev provides a <strong>30-calendar-day warranty</strong> commencing from the official production deployment date. During this warranty window, we will fix any reproducible functional bugs or regressions in the custom code delivered under the SOW free of charge.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              The warranty does not cover issues resulting from client modifications to the codebase, unauthorized third-party tampering, breaking changes in external third-party APIs, or web hosting server downtime.
            </p>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">7</span>
              Limitation of Liability &amp; Disclaimers
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              To the maximum extent permitted by applicable Indian law, IntegersDev, its partners, and team members shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data loss, business interruption, or commercial losses arising out of or in connection with the use or inability to use the delivered software.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              In any event, IntegersDev&rsquo;s aggregate liability arising out of or related to any project engagement shall not exceed the total fees actually received by IntegersDev for the specific milestone or project at issue.
            </p>
          </section>

          {/* Section 8: Governing Law & Jurisdiction */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">8</span>
              Governing Law &amp; Dispute Resolution (India)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              These Terms and all disputes, claims, or controversies arising out of or relating to our services shall be governed by, construed, and enforced exclusively in accordance with the <strong>laws of the Republic of India</strong>, without regard to conflict of law principles.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              In the event of any dispute, the parties agree to first attempt resolution through good-faith mutual discussions for 30 days. If unresolved, the dispute shall be subject to the exclusive jurisdiction of the competent courts in <strong>Gwalior, Madhya Pradesh, India</strong>.
            </p>
          </section>

          {/* Section 9: Legal Inquiries Contact */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">9</span>
              Contact Information for Legal Inquiries
            </h2>
            <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="font-black text-lg text-black">
                IntegersDev Legal &amp; Contract Administration
              </div>
              <div className="space-y-2 pt-2 text-sm font-medium text-gray-800">
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-black shrink-0" />
                  <span>{siteConfig.address.full}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaEnvelope className="w-4 h-4 text-black shrink-0" />
                  <a href={`mailto:${siteConfig.email}`} className="text-black font-bold underline">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone className="w-4 h-4 text-black shrink-0" />
                  <a href={`tel:${siteConfig.phoneClean}`} className="text-black font-bold underline">
                    {siteConfig.phone}
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Actions */}
          <div className="pt-8 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
            >
              Return to Home
            </Link>
            <div className="flex gap-4">
              <Link
                href="/privacy-policy"
                className="text-xs font-black text-black underline hover:text-[#d4ff3f]"
              >
                Privacy Policy →
              </Link>
              <Link
                href="/accessibility"
                className="text-xs font-black text-black underline hover:text-[#d4ff3f]"
              >
                Accessibility Statement →
              </Link>
            </div>
          </div>

        </div>
      </article>
    </SiteLayout>
  );
}
