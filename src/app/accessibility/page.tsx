import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | Integers',
  description: 'Our commitment to digital accessibility and WCAG standards at Integers.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-[#f8f9f5] text-black font-sans py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all mb-10"
        >
          <FaArrowLeft className="w-3 h-3" />
          Back to Home
        </Link>

        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-4">
            Commitment to Inclusivity
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            Accessibility Statement
          </h1>
          <p className="text-sm font-semibold text-gray-500 mb-8 pb-6 border-b border-gray-200">
            Last Updated: October 2026 • Integers Digital Agency
          </p>

          <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
            <p>
              <strong>Integers</strong> is dedicated to ensuring digital accessibility for individuals of all abilities. We believe the internet should be available and accessible to anyone, and we continually optimize our digital experiences to adhere to the highest international standards.
            </p>

            <h2 className="text-xl font-black text-black pt-4">1. Conformance Standard</h2>
            <p>
              The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for individuals with disabilities. Integers aims to conform to <strong>WCAG 2.1 Level AA</strong> across all public digital interfaces.
            </p>

            <h2 className="text-xl font-black text-black pt-4">2. Accessibility Features Implemented</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li><strong>High-Contrast Aesthetics:</strong> Distinct black borders, rich dark modes, and curated high-contrast neon accents ensure clear visibility.</li>
              <li><strong>Keyboard Navigation:</strong> All interactive controls, pricing toggles, modals, and input fields are accessible via standard keyboard navigation (Tab, Enter, Space, Escape).</li>
              <li><strong>Screen Reader Semantic Markup:</strong> Clear heading hierarchies (H1 through H5), descriptive image alt attributes, and ARIA roles.</li>
              <li><strong>Responsive Scaling:</strong> Viewport scaling support up to 500% zoom without horizontal clipping or broken touch targets.</li>
              <li><strong>Reduced Motion Support:</strong> Respects user preferences for reduced motion where applicable.</li>
            </ul>

            <h2 className="text-xl font-black text-black pt-4">3. Continual Assessment</h2>
            <p>
              We conduct routine accessibility evaluations using automated testing suites and real-device testing on mobile screens (iOS Safari and Android Chrome) to identify and rectify potential accessibility barriers.
            </p>

            <h2 className="text-xl font-black text-black pt-4">4. Feedback & Contact Information</h2>
            <p>
              We welcome your feedback on the accessibility of Integers. If you encounter any barriers, difficulty accessing content, or have suggestions for improvement, please let us know:
            </p>

            <div className="p-4 bg-gray-50 rounded-2xl border border-gray-300 font-bold text-sm space-y-1.5 max-w-md">
              <div>Email: <a href="mailto:hello@integers.in" className="text-black underline">hello@integers.in</a></div>
              <div>Phone: <a href="tel:+919644397542" className="text-black underline">+91 9644397542</a></div>
              <div>Address: Gwalior, Madhya Pradesh, India</div>
            </div>

            <p className="text-xs text-gray-500">
              We make every effort to acknowledge and respond to accessibility feedback within 2 business days.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Return to Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
