import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaShieldAlt, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLock, FaUserCheck, FaFileContract } from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | IntegersDev - Data Protection & Contact Form Disclosure",
  description:
    "Read the IntegersDev Privacy Policy. Learn how we collect, process, and protect client data, contact form inquiries, and project specifications in compliance with India's DPDPA 2023 and IT Act 2000.",
  alternates: {
    canonical: "https://integersdev.in/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | IntegersDev",
    description:
      "Data protection, contact form disclosure, and user privacy standards for IntegersDev in Gwalior, India.",
    url: "https://integersdev.in/privacy-policy",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Privacy Policy" }],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <SiteLayout>
      <PageHeader
        badge="Legal & Compliance"
        title="Privacy Policy &amp;"
        highlight="Data Protection"
        description="Our commitment to safeguarding your personal data, project inquiries, and digital privacy under India's Digital Personal Data Protection Act (DPDPA), 2023 and the Information Technology Act, 2000."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <article className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] text-black space-y-10">
          
          {/* Header Info Banner */}
          <div className="pb-8 border-b-2 border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-gray-500 block mb-1">
                Statutory Compliance
              </span>
              <p className="text-sm font-bold text-gray-800">
                Governed by the laws of India • Jurisdiction: Gwalior, Madhya Pradesh
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#d4ff3f] border-2 border-black px-4 py-2 rounded-full text-xs font-black shadow-[2px_2px_0px_0px_#000]">
              <FaShieldAlt className="w-3.5 h-3.5" />
              Effective Date: {lastUpdated}
            </div>
          </div>

          {/* Section 1: Introduction & Scope */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">1</span>
              Introduction &amp; Regulatory Framework
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              IntegersDev (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is a boutique digital engineering and design agency headquartered in Gwalior, Madhya Pradesh, India. We are deeply committed to respecting and protecting the privacy of our website visitors, prospective clients, founders, and business partners.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              This Privacy Policy details how we collect, store, process, transfer, and safeguard personal information collected through our official website (<a href="https://integersdev.in" className="text-black font-bold underline">integersdev.in</a>), project consultation channels, and contact forms. This policy adheres strictly to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 font-medium">
              <li><strong>The Digital Personal Data Protection Act (DPDPA), 2023</strong> (India).</li>
              <li><strong>The Information Technology Act, 2000</strong> and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules).</li>
              <li>Global best practices for data minimization, lawful processing, and transparency.</li>
            </ul>
          </section>

          {/* Section 2: Data Collected via Contact Form */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">2</span>
              Information Collected Through the Contact Form
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              When you voluntarily reach out to us using the contact and project inquiry form across our website or footer, we collect specific information necessary to evaluate your project scope and provide accurate technical estimates:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase tracking-wider mb-2 text-black">
                  Direct Contact Identifiers
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <li>• <strong>Full Name:</strong> To address you professionally in communications.</li>
                  <li>• <strong>Email Address:</strong> To send formal technical proposals, project estimates, and sprint deliverables.</li>
                  <li>• <strong>Phone / WhatsApp Number:</strong> For scheduling discovery calls, instant WhatsApp clarifications, and milestone updates.</li>
                </ul>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-5 shadow-[3px_3px_0px_0px_#000]">
                <h3 className="font-black text-sm uppercase tracking-wider mb-2 text-black">
                  Project &amp; Requirement Details
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700 font-medium">
                  <li>• <strong>Service Category:</strong> Web Development, Next.js Engineering, Mobile App Development, UI/UX Design, or Custom Software.</li>
                  <li>• <strong>Budget Range / Plan Tier:</strong> Estimated financial budget in INR or USD to tailor milestones.</li>
                  <li>• <strong>Project Scope &amp; Message:</strong> Feature requests, user stories, technical architecture needs, or existing website URLs.</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-yellow-50 border-2 border-black rounded-2xl text-xs sm:text-sm font-medium text-gray-800">
              <strong>Notice:</strong> We do not collect Sensitive Personal Data or Information (SPDI) such as credit card credentials, passwords, biometric records, or financial PINs through our public contact form. All milestone payments are conducted via authorized banking transfers, UPI, or compliant international payment gateways.
            </div>
          </section>

          {/* Section 3: Technical & Automated Data */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">3</span>
              Automated Technical Data &amp; Server Logs
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              To ensure website security, mitigate malicious bot traffic, and optimize Core Web Vitals, our cloud hosting infrastructure and server logs automatically record standard technical parameters:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-gray-700 font-medium">
              <li>Internet Protocol (IP) address and approximate geographic location (city level).</li>
              <li>Browser user agent, screen viewport dimensions, and operating system.</li>
              <li>Referring website URLs and requested route paths.</li>
              <li>Timestamps of requests for rate limiting and DDoS mitigation.</li>
            </ul>
          </section>

          {/* Section 4: Purpose of Data Processing */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">4</span>
              Lawful Purpose of Data Processing
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We process your personal information strictly under lawful bases specified under the DPDPA 2023 (including consent and legitimate business interests):
            </p>
            <div className="space-y-3 text-sm sm:text-base text-gray-700 font-medium">
              <div className="flex items-start gap-3">
                <FaUserCheck className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>Pre-Contractual Communication:</strong> To evaluate inquiry feasibility, formulate architecture proposals, and schedule technical discovery sessions.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaFileContract className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>Execution of Development Contracts:</strong> To execute Statements of Work (SOW), provide repository access, verify milestone signoffs, and issue invoices.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaLock className="w-5 h-5 text-black shrink-0 mt-1" />
                <div>
                  <strong>Security &amp; Fraud Prevention:</strong> To prevent spam submissions, enforce rate limits, and maintain the integrity of our contact mechanisms.
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Zero Data Selling Policy */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">5</span>
              Zero Data Selling Commitment
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              <strong>IntegersDev does NOT sell, rent, trade, or monetize your personal information to third parties, advertising exchanges, or data brokers under any circumstances.</strong>
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We only share data with vetted service providers strictly as required to provide our services (e.g., our cloud hosting provider, transactional email service, or when mandated by a lawful order from Indian judicial authorities or law enforcement agencies under the Information Technology Act).
            </p>
          </section>

          {/* Section 6: Data Retention & Security */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">6</span>
              Data Retention &amp; Security Safeguards
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Contact form inquiries are stored in secure, encrypted MongoDB databases with strict access controls restricted to authorized core team members. We retain prospective client records for up to 24 months to support follow-up inquiries unless a deletion request is received earlier. For active development clients, transactional records and invoices are retained for the statutory period mandated under Indian tax laws (typically 7 years).
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-gray-700 font-medium">
              <li>End-to-end TLS 1.3 encryption across all web traffic.</li>
              <li>Parameterized database queries to prevent injection vulnerabilities.</li>
              <li>Role-based administrative credentials with multi-factor authentication.</li>
            </ul>
          </section>

          {/* Section 7: User Rights Under DPDPA 2023 */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">7</span>
              Your Rights as a Data Principal
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Under India&rsquo;s Digital Personal Data Protection Act, 2023, you hold the following rights regarding your personal data processed by IntegersDev:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm font-bold">
              <div className="p-4 bg-gray-50 border border-black rounded-xl">
                1. Right to Access Information
                <p className="font-normal text-xs text-gray-600 mt-1">Request a summary of your personal data processed by us.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-black rounded-xl">
                2. Right to Correction &amp; Erasure
                <p className="font-normal text-xs text-gray-600 mt-1">Request correction of inaccurate information or deletion of your contact records.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-black rounded-xl">
                3. Right of Grievance Redressal
                <p className="font-normal text-xs text-gray-600 mt-1">Direct inquiries or concerns to our designated Grievance Officer.</p>
              </div>
              <div className="p-4 bg-gray-50 border border-black rounded-xl">
                4. Right to Nominate
                <p className="font-normal text-xs text-gray-600 mt-1">Nominate an individual to exercise rights on your behalf in the event of incapacity.</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 font-medium">
              To exercise any of these rights, email us at <a href="mailto:contact@integersdev.in" className="text-black font-bold underline">contact@integersdev.in</a> with the subject line &ldquo;DPDPA Data Rights Request&rdquo;.
            </p>
          </section>

          {/* Section 8: Grievance Redressal Officer (Mandatory India Requirement) */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">8</span>
              Grievance Redressal Officer (India)
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              In accordance with Rule 5(9) of the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 and provisions of the DPDPA 2023, the designated Grievance Officer for IntegersDev is:
            </p>

            <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="font-black text-lg text-black">
                Vinay Kushwah
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Designated Grievance &amp; Data Protection Officer • IntegersDev
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
              <p className="text-xs font-bold text-gray-600 pt-3 border-t border-black/10">
                Resolution Timeline: We will acknowledge receipt of your grievance within 48 hours and resolve it within 30 calendar days as prescribed under Indian law.
              </p>
            </div>
          </section>

          {/* Section 9: Updates to Policy */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">9</span>
              Policy Updates &amp; Amendments
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We may periodically revise this Privacy Policy to reflect technical enhancements, updated regulatory guidelines, or changes in statutory rules. The updated version will always be posted on this URL with an updated effective date. Continued interaction with our website signifies acceptance of the amended policy.
            </p>
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
                href="/terms"
                className="text-xs font-black text-black underline hover:text-[#d4ff3f]"
              >
                Terms of Use →
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
