import React from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | Integers',
  description: 'Terms of Use and service agreements for Integers web and mobile agency.',
};

export default function TermsPage() {
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
            Legal Policy
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-black tracking-tight mb-6">
            Terms of Use
          </h1>
          <p className="text-sm font-semibold text-gray-500 mb-8 pb-6 border-b border-gray-200">
            Last Updated: October 2026 • Integers Digital Agency
          </p>

          <div className="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
            <p>
              Welcome to <strong>Integers</strong>. By engaging our services, browsing this website, or interacting with our digital assets, you agree to comply with and be bound by the following Terms of Use. Please review them carefully.
            </p>

            <h2 className="text-xl font-black text-black pt-4">1. Scope of Services</h2>
            <p>
              Integers delivers bespoke software engineering, website development, mobile application design, UI/UX architecture, performance optimization, and brand identity design. Specific deliverables, sprint schedules, milestones, and fees are governed by individual project agreements or statements of work (SOW).
            </p>

            <h2 className="text-xl font-black text-black pt-4">2. Intellectual Property & Ownership</h2>
            <p>
              Upon final payment completion for contracted work, all custom source code, designs, and bespoke assets created specifically for the client are 100% transferred to the client. Integers reserves the right to showcase publicly deployed works in our portfolio, case studies, and marketing materials unless an explicit non-disclosure agreement (NDA) dictates otherwise.
            </p>

            <h2 className="text-xl font-black text-black pt-4">3. Payment Terms & Milestone Deliveries</h2>
            <p>
              Invoices must be settled in accordance with agreed milestone dates. Third-party expenses including domain registration, dedicated cloud hosting, and external API tokens are client-side responsibilities unless explicitly packaged into a retainer plan.
            </p>

            <h2 className="text-xl font-black text-black pt-4">4. Client Responsibilities</h2>
            <p>
              The client is responsible for providing timely feedback, assets, and approvals necessary for sprint execution. Delays in providing necessary feedback or credentials may result in schedule revisions.
            </p>

            <h2 className="text-xl font-black text-black pt-4">5. Limitation of Liability</h2>
            <p>
              Integers provides services on an "as-is" and "as-available" basis. In no event shall Integers or its team members be liable for consequential, incidental, indirect, or punitive damages arising from the use of delivered software once signed off and deployed.
            </p>

            <h2 className="text-xl font-black text-black pt-4">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, with jurisdiction in Gwalior, Madhya Pradesh. For any inquiries regarding our terms, please contact us at <a href="mailto:contact@integersdev.in" className="text-black font-bold underline">contact@integersdev.in</a>.
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
