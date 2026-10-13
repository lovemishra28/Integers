"use client";

import React from "react";
import Link from "next/link";
import { FaCheck, FaArrowRight, FaClock, FaStar, FaBolt, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { trackPricingTierSelection } from "@/lib/analytics";

const TEASER_PLANS = [
  {
    id: "basic",
    name: "Basic",
    badge: "Fast MVP",
    tagline: "Ideal for early MVPs, landing pages & design validation",
    priceUSD: "$129",
    priceINR: "₹12,250",
    delivery: "3 – 5 Days",
    popular: false,
    features: [
      "Custom Figma UI/UX Design Creation",
      "2 Iterative Design Revisions",
      "Mobile Responsive Viewports",
      "Figma Source File Handoff",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    badge: "★ Most Popular",
    tagline: "Complete production frontend & backend ready to convert",
    priceUSD: "$249",
    priceINR: "₹23,700",
    delivery: "7 – 10 Days",
    popular: true,
    features: [
      "Full Next.js / React Frontend Development",
      "Complete Backend & Database Integration",
      "Interactive Lead Forms & Validation",
      "90+ Lighthouse Performance & SEO",
      "Production Cloud Deployment Setup",
    ],
  },
  {
    id: "turbo",
    name: "Turbo",
    badge: "Scale & App",
    tagline: "End-to-end fullstack platform built for serious scale & traffic",
    priceUSD: "$449",
    priceINR: "₹42,750",
    delivery: "2 – 3 Weeks",
    popular: false,
    features: [
      "Full Web & Mobile App Dev (PWA/Hybrid)",
      "Advanced Cloud DB & API Integrations",
      "Custom Admin / CMS Dashboard",
      "Priority Sprint Delivery & 30-Day Support",
    ],
  },
];

export default function PricingTeaser() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 py-20 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5] relative overflow-hidden"
    >
      {/* Decorative Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#d4ff3f] rounded-full opacity-20 blur-3xl pointer-events-none" />

      {/* Header Area */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs sm:text-sm font-bold text-black uppercase tracking-wider block mb-2">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-black tracking-tight leading-[1.1]">
            Predictable Pricing.{" "}
            <span className="relative inline-block mt-1">
              Zero Hidden Fees.
              <span className="absolute left-0 bottom-1 w-full h-2.5 sm:h-3 bg-[#d4ff3f] -z-10 -rotate-1 opacity-80" />
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
            Clear fixed-scope packages and flexible monthly retainers. Starting from $129 (₹12,250) with 100% source code ownership.
          </p>
        </motion.div>

        {/* View Full Pricing CTA Link */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,63,1)] hover:translate-y-[-2px] active:translate-y-[1px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            Explore Full Pricing &amp; Comparison
            <FaArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </motion.div>
      </div>

      {/* 3 Compact Preview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {TEASER_PLANS.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
              plan.popular
                ? "bg-[#d4ff3f] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:-translate-y-2"
                : "bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                    plan.popular
                      ? "bg-black text-[#d4ff3f] border-black"
                      : "bg-gray-100 text-gray-800 border-gray-300"
                  }`}
                >
                  {plan.badge}
                </span>

                <span
                  className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                    plan.popular ? "bg-black/10 text-black" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <FaClock className="w-2.5 h-2.5" />
                  {plan.delivery}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-black text-black tracking-tight">{plan.name}</h3>
              <p
                className={`text-xs mt-1 leading-snug font-semibold ${
                  plan.popular ? "text-black/80" : "text-gray-500"
                }`}
              >
                {plan.tagline}
              </p>

              {/* Pricing Display with Starting From Label */}
              <div className="my-5 pt-4 border-t border-black/10">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/5 text-black border border-black/10">
                    Starting from
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black font-sans text-black tracking-tight">
                    {plan.priceUSD}
                  </span>
                  <span className="text-xs font-bold text-black/70">
                    / {plan.priceINR}
                  </span>
                </div>
                <span className="text-[10px] font-semibold text-black/60 block mt-0.5">
                  One-time project or monthly retainer (-20%)
                </span>
              </div>

              {/* Key Features List */}
              <ul className="space-y-2 mb-6">
                {plan.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs font-bold text-gray-800"
                  >
                    <span
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] border ${
                        plan.popular
                          ? "bg-black text-[#d4ff3f] border-black"
                          : "bg-[#d4ff3f] text-black border-black"
                      }`}
                    >
                      <FaCheck className="w-2 h-2" />
                    </span>
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card Action Link to /pricing */}
            <Link
              href="/pricing"
              onClick={() => trackPricingTierSelection(plan.name, plan.priceUSD, "USD")}
              data-track-plan={plan.name}
              data-track-price={plan.priceUSD}
              data-track-currency="USD"
              className={`w-full py-3 px-4 rounded-xl font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all border-2 border-black ${
                plan.popular
                  ? "bg-black text-[#d4ff3f] shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] hover:translate-y-[-1px]"
                  : "bg-black text-white hover:bg-[#d4ff3f] hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-1px]"
              }`}
            >
              <span>Explore {plan.name} Tier</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom Trust & Feature Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-10 p-5 sm:p-6 bg-white border-2 border-black rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-4 relative z-10"
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-gray-800">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#62d124]" />
            <span>USD &amp; INR Currency Switcher</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#62d124]" />
            <span>20% Discount on Monthly Retainers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#62d124]" />
            <span>Side-by-Side Feature Comparison Table</span>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Link
            href="/pricing"
            className="w-full md:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black hover:bg-black hover:text-[#d4ff3f] transition-all cursor-pointer text-center"
          >
            View Full Pricing &amp; Comparison Table →
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
