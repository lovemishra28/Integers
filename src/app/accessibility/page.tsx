import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaUniversalAccess, FaCheckCircle, FaKeyboard, FaEye, FaMobileAlt, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Accessibility Statement | IntegersDev - WCAG 2.1 AA Standards",
  description:
    "Read the IntegersDev Accessibility Statement. Discover our commitment to WCAG 2.1 Level AA compliance, high contrast design, keyboard navigation, and India's RPwD Act 2016.",
  alternates: {
    canonical: "https://integersdev.in/accessibility",
  },
  openGraph: {
    title: "Accessibility Statement | IntegersDev",
    description:
      "Digital accessibility standards, assistive technology support, and WCAG compliance at IntegersDev.",
    url: "https://integersdev.in/accessibility",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Accessibility Statement" }],
  },
};

export default function AccessibilityPage() {
  const lastUpdated = "October 2026";

  return (
    <SiteLayout>
      <PageHeader
        badge="Inclusivity & Access"
        title="Accessibility Statement &amp;"
        highlight="WCAG Compliance"
        description="Our ongoing dedication to ensuring an inclusive, obstacle-free digital web experience for users of all abilities, adhering to WCAG 2.1 Level AA and India's Rights of Persons with Disabilities Act, 2016."
        breadcrumbs={[{ label: "Accessibility" }]}
      />

      <article className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] text-black space-y-10">
          
          {/* Header Info Banner */}
          <div className="pb-8 border-b-2 border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-gray-500 block mb-1">
                Conformance Benchmark
              </span>
              <p className="text-sm font-bold text-gray-800">
                WCAG 2.1 Level AA • RPwD Act, 2016 (India)
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#d4ff3f] border-2 border-black px-4 py-2 rounded-full text-xs font-black shadow-[2px_2px_0px_0px_#000]">
              <FaUniversalAccess className="w-3.5 h-3.5" />
              Reviewed: {lastUpdated}
            </div>
          </div>

          {/* Section 1: Commitment */}
          <section className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">1</span>
              Our Commitment to Digital Accessibility
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              At <strong>IntegersDev</strong>, we firmly believe that the internet should be available and accessible to everyone regardless of ability, technology, or physical limitations. As a digital agency crafting Next.js applications and UI/UX design systems, accessibility is not an afterthought—it is engineered into every component, layout, and interaction from day one.
            </p>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We continually audit and optimize our website to align with the <strong>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</strong> developed by the World Wide Web Consortium (W3C), and adhere to the principles outlined under the <strong>Rights of Persons with Disabilities (RPwD) Act, 2016</strong> of India.
            </p>
          </section>

          {/* Section 2: Concrete Accessibility Measures */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">2</span>
              Core Accessibility Features Implemented
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Our website incorporates the following foundational accessibility enhancements across all public pages:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 mb-3 text-black font-black text-sm uppercase tracking-wide">
                  <FaEye className="w-4 h-4 text-black" />
                  High Contrast &amp; Typography
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Our signature Neo-Brutalist design language employs bold #000 borders, high-contrast dark modes (#111111), and vibrant accents (#d4ff3f) that exceed WCAG 2.1 AA 4.5:1 contrast ratios for all body text and 3:1 for graphical interface elements.
                </p>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 mb-3 text-black font-black text-sm uppercase tracking-wide">
                  <FaKeyboard className="w-4 h-4 text-black" />
                  Full Keyboard Operability
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Every link, pricing currency toggle, modal dialogue, and input field is completely operable via standard keyboard controls (Tab, Shift+Tab, Enter, Space, and Escape). Interactive elements receive distinct, high-visibility focus indicators.
                </p>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 mb-3 text-black font-black text-sm uppercase tracking-wide">
                  <FaMobileAlt className="w-4 h-4 text-black" />
                  Responsive Zoom &amp; Touch Targets
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  The interface supports browser zoom up to 400% without horizontal scrolling or broken layout wraps. Interactive buttons and mobile drawer targets maintain a minimum 44x44 CSS pixel tap area.
                </p>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[3px_3px_0px_0px_#000]">
                <div className="flex items-center gap-2 mb-3 text-black font-black text-sm uppercase tracking-wide">
                  <FaUniversalAccess className="w-4 h-4 text-black" />
                  Screen Reader Semantics
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed">
                  Clear semantic HTML5 architecture (&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, &lt;footer&gt;), strict single &lt;h1&gt; hierarchy per page, descriptive alt text for illustrations, and explicit ARIA labels on all social and icon links.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Contact Form Accessibility */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">3</span>
              Form &amp; Input Accessibility
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              Our contact inquiry forms and client review forms are engineered to guarantee seamless input for assistive tech users:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-gray-700 font-medium">
              <li>Explicit visual and programmatically associated &lt;label&gt; elements for all fields (Name, Email, Phone, Project Message).</li>
              <li>Visible error announcements and real-time validation states without reliance solely on color cues.</li>
              <li>Autocomplete attributes (e.g. <code>name</code>, <code>email</code>, <code>tel</code>) for accelerated browser autofill and accessibility assistance.</li>
              <li>Screen reader announcements for form submission confirmations and alerts.</li>
            </ul>
          </section>

          {/* Section 4: Testing & Assistive Tech */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">4</span>
              Auditing Methodology &amp; Assistive Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              We validate our web pages and components using a combination of automated testing engines and manual real-user testing, including:
            </p>
            <ul className="list-disc pl-6 space-y-1.5 text-sm sm:text-base text-gray-700 font-medium">
              <li>Lighthouse Accessibility audits (targeting consistent 95-100 scores).</li>
              <li>Axe Core and WAVE accessibility evaluation toolkits.</li>
              <li>Manual keyboard-only walkthroughs with tab sequences and screen zoom tests up to 400%.</li>
              <li>Screen reader compatibility testing on NVDA (Windows), VoiceOver (macOS / iOS), and Android TalkBack.</li>
            </ul>
          </section>

          {/* Section 5: Known Limitations & Roadmap */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">5</span>
              Known Limitations &amp; Continuous Optimization
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              While we strive to adhere strictly to all accepted accessibility standards, third-party embedded content (such as Google Maps iframes) may occasionally present limitations beyond our direct control. We actively work with vendors and implement accessible fallback directions.
            </p>
          </section>

          {/* Section 6: Feedback & Contact */}
          <section className="space-y-4 pt-6 border-t border-black/10">
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-black flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black shrink-0">6</span>
              Accessibility Assistance &amp; Feedback Channel
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
              If you experience any difficulty accessing content on our website, require information in an alternative format, or wish to suggest accessibility improvements, please contact our team directly. We take all feedback seriously and commit to responding promptly:
            </p>

            <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 sm:p-8 shadow-[4px_4px_0px_0px_#000] space-y-3">
              <div className="font-black text-lg text-black">
                Accessibility Coordinator • IntegersDev
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
                Turnaround Time: We will review and respond to accessibility inquiries within 48 business hours.
              </p>
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
                href="/terms"
                className="text-xs font-black text-black underline hover:text-[#d4ff3f]"
              >
                Terms of Use →
              </Link>
            </div>
          </div>

        </div>
      </article>
    </SiteLayout>
  );
}
