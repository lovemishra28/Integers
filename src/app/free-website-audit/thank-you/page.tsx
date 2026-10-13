import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaArrowRight, FaClock, FaEnvelope, FaWhatsapp, FaShieldAlt, FaExternalLinkAlt } from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/config/site";
import ThankYouTracker from "./ThankYouTracker";

export const metadata: Metadata = {
  title: "Audit Request Confirmed | Free Website Audit | IntegersDev",
  description:
    "Thank you for requesting a free website audit from IntegersDev. Our engineering team is evaluating your website and will deliver your actionable report within 24 hours.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AuditThankYouPage() {
  return (
    <SiteLayout>
      <Suspense fallback={null}>
        <ThankYouTracker />
      </Suspense>

      <PageHeader
        badge="Audit Queued Successfully"
        title="Your Free Website Diagnostic is"
        highlight="In Progress"
        description="Our core engineering collective in Gwalior is initiating a deep audit of your website's performance, SEO health, and conversion funnel."
        breadcrumbs={[
          { label: "Free Website Audit", href: "/free-website-audit" },
          { label: "Confirmation" },
        ]}
      />

      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        {/* Main Confirmation Box */}
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000] text-black">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-8 border-b-2 border-black/10">
            <div className="w-16 h-16 rounded-full bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-2xl text-black shadow-[3px_3px_0px_0px_#000] shrink-0">
              <FaCheckCircle />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-wider text-gray-500 block mb-1">
                Goal Converted • Request ID Queued
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight">
                Thank You! We Have Received Your Audit Request
              </h2>
            </div>
          </div>

          {/* 3-Step Process Explanation */}
          <div className="my-10 space-y-6">
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-black">
              What Happens in the Next 24 Hours:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-black text-[#d4ff3f] flex items-center justify-center text-xs font-black mb-3">
                    1
                  </div>
                  <h4 className="font-black text-base text-black mb-2">
                    Deep Core Web Vitals Run
                  </h4>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    We simulate real mobile traffic across 4G networks to benchmark your Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and asset payloads.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-bold text-gray-500">
                  Estimated time: 2 hours
                </div>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-black text-[#d4ff3f] flex items-center justify-center text-xs font-black mb-3">
                    2
                  </div>
                  <h4 className="font-black text-base text-black mb-2">
                    Architectural &amp; UX Review
                  </h4>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    Vinay and Aryan review your Schema.org structured data, mobile tap targets, conversion funnels, and banner blindness factors.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-bold text-gray-500">
                  Manual Engineer Inspection
                </div>
              </div>

              <div className="bg-[#f8f9f5] border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-full bg-[#d4ff3f] text-black border border-black flex items-center justify-center text-xs font-black mb-3">
                    3
                  </div>
                  <h4 className="font-black text-base text-black mb-2">
                    Actionable PDF Delivered
                  </h4>
                  <p className="text-xs text-gray-700 font-medium leading-relaxed">
                    You receive a concise, prioritized roadmap outlining exact fixes that will increase your speed, organic rankings, and lead conversions.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-black/10 text-[11px] font-bold text-gray-500">
                  Direct to your Inbox &lt; 24h
                </div>
              </div>
            </div>
          </div>

          {/* Urgent Inquiry or WhatsApp Alternative */}
          <div className="p-6 sm:p-8 bg-black text-white border-2 border-black rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-[6px_6px_0px_0px_#d4ff3f]">
            <div>
              <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-1">
                Have an Urgent Launch or Deadline?
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-white">
                Chat Directly With Our Founders on WhatsApp
              </h4>
              <p className="text-xs text-gray-300 font-medium mt-1">
                Skip the queue if you have an active migration or impending deadline.
              </p>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#fff] hover:scale-105 active:scale-95 transition-transform shrink-0"
            >
              <FaWhatsapp className="w-4 h-4 text-black" />
              Direct WhatsApp Chat
            </a>
          </div>

          {/* While You Wait: Case Studies */}
          <div className="mt-12 pt-8 border-t-2 border-black/10">
            <h4 className="text-base sm:text-lg font-black text-black mb-4">
              While You Wait, Explore How We Transformed Other Platforms:
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/portfolio/vastavikta"
                className="p-5 bg-[#f8f9f5] border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] hover:-translate-y-1 transition-all group"
              >
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Hospitality &amp; Dining
                </div>
                <div className="font-black text-base text-black group-hover:text-black flex items-center justify-between">
                  <span>Vastavikta Heritage Dining</span>
                  <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-xs text-gray-600 font-medium mt-2">
                  Cut LCP from 4.8s to 0.7s and increased mobile table reservation inquiries by 140%.
                </p>
              </Link>

              <Link
                href="/portfolio/divyanshi-travels"
                className="p-5 bg-[#f8f9f5] border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000] hover:-translate-y-1 transition-all group"
              >
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1">
                  Travel &amp; Logistics
                </div>
                <div className="font-black text-base text-black group-hover:text-black flex items-center justify-between">
                  <span>Divyanshi Travels Booking Platform</span>
                  <FaExternalLinkAlt className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-xs text-gray-600 font-medium mt-2">
                  Engineered mobile tour reservation flow resulting in 65% direct smartphone bookings.
                </p>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </SiteLayout>
  );
}
