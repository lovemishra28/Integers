"use client";

import React from "react";
import Link from "next/link";
import { FaCheck, FaTimes, FaBolt, FaStar } from "react-icons/fa";
import { trackPricingTierSelection } from "@/lib/analytics";

interface ComparisonRow {
  name: string;
  tooltip?: string;
  basic: string | boolean;
  standard: string | boolean;
  turbo: string | boolean;
  enterprise: string | boolean;
}

interface ComparisonCategory {
  category: string;
  rows: ComparisonRow[];
}

const COMPARISON_DATA: ComparisonCategory[] = [
  {
    category: "Overview & Investment",
    rows: [
      {
        name: "Starting Price (One-Time)",
        basic: "$129 / ₹12,250",
        standard: "$249 / ₹23,700",
        turbo: "$449 / ₹42,750",
        enterprise: "Custom Quote",
      },
      {
        name: "Monthly Retainer (-20%)",
        basic: "$103 / mo (₹9,800)",
        standard: "$199 / mo (₹18,960)",
        turbo: "$359 / mo (₹34,200)",
        enterprise: "Custom Retainer",
      },
      {
        name: "Typical Delivery Speed",
        basic: "3 – 5 Days",
        standard: "7 – 10 Days",
        turbo: "2 – 3 Weeks",
        enterprise: "Milestone Sprints",
      },
      {
        name: "Target Use Case",
        basic: "Early MVPs, Landing Pages",
        standard: "Growing Startups & SMBs",
        turbo: "Full Web & Mobile Apps",
        enterprise: "Enterprises & Scale-ups",
      },
    ],
  },
  {
    category: "Design & User Experience (UI/UX)",
    rows: [
      {
        name: "Custom Figma UI/UX Design",
        basic: true,
        standard: true,
        turbo: true,
        enterprise: "Full Design System",
      },
      {
        name: "Iterative Design Revisions",
        basic: "2 Rounds",
        standard: "3 Iterative Rounds",
        turbo: "Unlimited during sprint",
        enterprise: "Dedicated Design Lead",
      },
      {
        name: "Responsive Mobile & Tablet Viewports",
        basic: true,
        standard: true,
        turbo: true,
        enterprise: true,
      },
      {
        name: "Interactive Figma Clickable Prototype",
        basic: "Basic Wireframe",
        standard: true,
        turbo: true,
        enterprise: "Enterprise Multi-flow",
      },
      {
        name: "Micro-animations & Interactive States",
        basic: "Standard CSS",
        standard: "Framer Motion",
        turbo: "Advanced Interactive",
        enterprise: "Bespoke 3D / Canvas",
      },
      {
        name: "Figma Source Files Handoff",
        basic: true,
        standard: true,
        turbo: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Frontend & Web Architecture",
    rows: [
      {
        name: "Modern Framework Stack",
        basic: "React / Tailwind CSS",
        standard: "Next.js App Router (SSR/SSG)",
        turbo: "Next.js + Hybrid PWA / Mobile",
        enterprise: "Microfrontends / Polyglot",
      },
      {
        name: "Strict TypeScript Architecture",
        basic: false,
        standard: true,
        turbo: true,
        enterprise: true,
      },
      {
        name: "Lighthouse 90+ Performance Guarantee",
        basic: "Optimized",
        standard: "Guaranteed 90+",
        turbo: "Guaranteed 95+",
        enterprise: "Core Web Vitals SLA Guarantee",
      },
      {
        name: "Dynamic Lead Capture & Booking Forms",
        basic: "Basic Form",
        standard: "Interactive with Validation",
        turbo: "Multi-step + Automation",
        enterprise: "Custom CRM & Webhooks",
      },
      {
        name: "Dark Mode / Theme Switching",
        basic: false,
        standard: true,
        turbo: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "Backend, Database & CMS",
    rows: [
      {
        name: "Database Integration",
        basic: false,
        standard: "PostgreSQL / Supabase / MongoDB",
        turbo: "Cloud DB + Redis Caching",
        enterprise: "Distributed & Multi-region",
      },
      {
        name: "Authentication & Role-Based Access",
        basic: false,
        standard: "Optional Add-on",
        turbo: "NextAuth / Clerk / Supabase",
        enterprise: "Enterprise SSO / SAML / RBAC",
      },
      {
        name: "Content Management System (CMS)",
        basic: false,
        standard: "Sanity / Strapi Headless",
        turbo: "Custom Admin Dashboard",
        enterprise: "Enterprise Multi-tenant CMS",
      },
      {
        name: "Third-party APIs & Payment Gateways",
        basic: false,
        standard: "1 – 2 APIs (Stripe / Razorpay)",
        turbo: "Multi-service API Layer",
        enterprise: "Custom Microservices & ERP",
      },
    ],
  },
  {
    category: "SEO, Analytics & Security",
    rows: [
      {
        name: "On-Page SEO & Social Open Graph",
        basic: "Basic Meta Tags",
        standard: "Complete SEO + Open Graph",
        turbo: "Programmatic + Local SEO",
        enterprise: "Multi-regional International SEO",
      },
      {
        name: "Structured Data (Schema.org JSON-LD)",
        basic: false,
        standard: "Org & Service Schema",
        turbo: "Product, FAQ, Local Schema",
        enterprise: "Custom Knowledge Graph",
      },
      {
        name: "Analytics & Telemetry Setup",
        basic: false,
        standard: "Google Analytics 4",
        turbo: "GA4 + PostHog / Hotjar",
        enterprise: "Custom Data Pipeline",
      },
      {
        name: "SSL & Production Cloud Deployment",
        basic: "Vercel / Netlify",
        standard: "Vercel + Custom Domain",
        turbo: "AWS / Cloudflare + CI/CD",
        enterprise: "Custom Kubernetes / VPC",
      },
    ],
  },
  {
    category: "Ownership, Warranty & Support",
    rows: [
      {
        name: "100% Code & IP Ownership (GitHub)",
        basic: true,
        standard: true,
        turbo: true,
        enterprise: true,
      },
      {
        name: "Delivery Timeline",
        basic: "3 – 5 Days",
        standard: "7 – 10 Days",
        turbo: "2 – 3 Weeks",
        enterprise: "Milestone Sprints",
      },
      {
        name: "Post-Launch Warranty Bug Fixes",
        basic: "7 Days",
        standard: "14 Days",
        turbo: "30 Days Priority",
        enterprise: "60 – 90 Days SLA",
      },
      {
        name: "Direct Communication Channel",
        basic: "Email & WhatsApp",
        standard: "WhatsApp + Slack Updates",
        turbo: "Dedicated Slack + Standups",
        enterprise: "24/7 Dedicated Channel",
      },
      {
        name: "Non-Disclosure Agreement (NDA)",
        basic: true,
        standard: true,
        turbo: true,
        enterprise: true,
      },
    ],
  },
];

export default function PricingComparison() {
  const renderValue = (value: string | boolean, isHighlighted = false) => {
    if (typeof value === "boolean") {
      return value ? (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#d4ff3f] border-2 border-black text-black">
          <FaCheck className="w-3 h-3" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 border border-gray-300 text-gray-400">
          <FaTimes className="w-2.5 h-2.5" />
        </span>
      );
    }

    return (
      <span
        className={`text-xs font-bold ${
          isHighlighted ? "text-black font-black" : "text-gray-800"
        }`}
      >
        {value}
      </span>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto w-full relative">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-black uppercase text-[#62d124] tracking-widest block mb-2">
          Side-by-Side Breakdown
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight">
          Comprehensive Plan Comparison
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
          Detailed breakdown of every feature, revision tier, technical capability, and deliverable included in our development packages.
        </p>
      </div>

      {/* Comparison Table Box */}
      <div className="bg-white border-2 border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left border-collapse">
            {/* Table Header: Plan Cards */}
            <thead>
              <tr className="border-b-2 border-black bg-gray-50">
                <th className="p-4 sm:p-6 w-[28%] align-bottom">
                  <div className="text-xs font-black uppercase tracking-wider text-gray-500 mb-1">
                    Features &amp; Specs
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-black">
                    Compare Tiers
                  </div>
                </th>

                {/* Basic Plan Column Header */}
                <th className="p-4 sm:p-6 w-[18%] align-top border-l-2 border-black">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-gray-200 text-gray-800 border border-gray-400 mb-2">
                    Fast MVP
                  </span>
                  <div className="text-lg font-black text-black">Basic</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase mt-0.5">
                    Starting from
                  </div>
                  <div className="text-2xl font-black text-black mt-0.5">
                    $129
                    <span className="text-xs font-bold text-gray-500 block sm:inline sm:ml-1">
                      / ₹12,250
                    </span>
                  </div>
                  <Link
                    href="/contact?plan=basic"
                    onClick={() => trackPricingTierSelection("Basic", "$129", "USD")}
                    data-track-plan="Basic"
                    data-track-price="$129"
                    data-track-currency="USD"
                    className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-xl text-[11px] font-black uppercase tracking-wider bg-black text-white hover:bg-[#d4ff3f] hover:text-black transition-all border border-black cursor-pointer"
                  >
                    Select Basic
                  </Link>
                </th>

                {/* Standard Plan Column Header (Featured) */}
                <th className="p-4 sm:p-6 w-[18%] align-top border-l-2 border-black bg-[#d4ff3f]/20 relative">
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#d4ff3f]" />
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black text-[#d4ff3f] mb-2">
                    <FaStar className="w-2.5 h-2.5" /> Most Popular
                  </span>
                  <div className="text-lg font-black text-black">Standard</div>
                  <div className="text-[11px] font-bold text-gray-600 uppercase mt-0.5">
                    Starting from
                  </div>
                  <div className="text-2xl font-black text-black mt-0.5">
                    $249
                    <span className="text-xs font-bold text-gray-600 block sm:inline sm:ml-1">
                      / ₹23,700
                    </span>
                  </div>
                  <Link
                    href="/contact?plan=standard"
                    onClick={() => trackPricingTierSelection("Standard", "$249", "USD")}
                    data-track-plan="Standard"
                    data-track-price="$249"
                    data-track-currency="USD"
                    className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-xl text-[11px] font-black uppercase tracking-wider bg-black text-[#d4ff3f] shadow-[2px_2px_0px_0px_#000] hover:translate-y-[-1px] transition-all border border-black cursor-pointer"
                  >
                    Select Standard
                  </Link>
                </th>

                {/* Turbo Plan Column Header */}
                <th className="p-4 sm:p-6 w-[18%] align-top border-l-2 border-black">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-black text-white mb-2">
                    <FaBolt className="w-2.5 h-2.5 text-[#d4ff3f]" /> Scale &amp; App
                  </span>
                  <div className="text-lg font-black text-black">Turbo</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase mt-0.5">
                    Starting from
                  </div>
                  <div className="text-2xl font-black text-black mt-0.5">
                    $449
                    <span className="text-xs font-bold text-gray-500 block sm:inline sm:ml-1">
                      / ₹42,750
                    </span>
                  </div>
                  <Link
                    href="/contact?plan=turbo"
                    onClick={() => trackPricingTierSelection("Turbo", "$449", "USD")}
                    data-track-plan="Turbo"
                    data-track-price="$449"
                    data-track-currency="USD"
                    className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-xl text-[11px] font-black uppercase tracking-wider bg-black text-white hover:bg-[#d4ff3f] hover:text-black transition-all border border-black cursor-pointer"
                  >
                    Select Turbo
                  </Link>
                </th>

                {/* Enterprise Column Header */}
                <th className="p-4 sm:p-6 w-[18%] align-top border-l-2 border-black bg-gray-100">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#d4ff3f] text-black border border-black mb-2">
                    Bespoke
                  </span>
                  <div className="text-lg font-black text-black">Enterprise</div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase mt-0.5">
                    Architecture
                  </div>
                  <div className="text-xl font-black text-black mt-1">
                    Custom Quote
                  </div>
                  <Link
                    href="/contact"
                    className="mt-3 inline-flex items-center justify-center w-full py-2 px-3 rounded-xl text-[11px] font-black uppercase tracking-wider bg-white text-black hover:bg-black hover:text-white transition-all border-2 border-black cursor-pointer"
                  >
                    Discovery Call
                  </Link>
                </th>
              </tr>
            </thead>

            {/* Table Body with Categories */}
            <tbody>
              {COMPARISON_DATA.map((section, sectionIdx) => (
                <React.Fragment key={section.category}>
                  {/* Category Header Row */}
                  <tr className="bg-black text-[#d4ff3f] border-t-2 border-b-2 border-black">
                    <td
                      colSpan={5}
                      className="py-2.5 px-4 sm:px-6 text-xs font-black uppercase tracking-widest"
                    >
                      {section.category}
                    </td>
                  </tr>

                  {/* Rows within Category */}
                  {section.rows.map((row, rowIdx) => {
                    const isEven = rowIdx % 2 === 0;
                    return (
                      <tr
                        key={row.name}
                        className={`border-b border-gray-200 hover:bg-yellow-50/40 transition-colors ${
                          isEven ? "bg-white" : "bg-gray-50/50"
                        }`}
                      >
                        {/* Feature Name */}
                        <td className="p-3.5 sm:p-4 text-xs font-bold text-gray-900">
                          {row.name}
                        </td>

                        {/* Basic */}
                        <td className="p-3.5 sm:p-4 text-center border-l-2 border-black/10">
                          {renderValue(row.basic)}
                        </td>

                        {/* Standard (Featured Column) */}
                        <td className="p-3.5 sm:p-4 text-center border-l-2 border-black/10 bg-[#d4ff3f]/10">
                          {renderValue(row.standard, true)}
                        </td>

                        {/* Turbo */}
                        <td className="p-3.5 sm:p-4 text-center border-l-2 border-black/10">
                          {renderValue(row.turbo)}
                        </td>

                        {/* Enterprise */}
                        <td className="p-3.5 sm:p-4 text-center border-l-2 border-black/10 bg-gray-50">
                          {renderValue(row.enterprise)}
                        </td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              ))}
            </tbody>

            {/* Table Footer: Action CTA Rows */}
            <tfoot>
              <tr className="bg-gray-100 border-t-2 border-black">
                <td className="p-4 sm:p-6 font-black text-sm text-black">
                  Ready to start your project?
                </td>
                <td className="p-4 sm:p-6 text-center border-l-2 border-black">
                  <Link
                    href="/contact?plan=basic"
                    onClick={() => trackPricingTierSelection("Basic", "$129", "USD")}
                    className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase bg-black text-white hover:bg-[#d4ff3f] hover:text-black transition-all border border-black"
                  >
                    Get Basic
                  </Link>
                </td>
                <td className="p-4 sm:p-6 text-center border-l-2 border-black bg-[#d4ff3f]/30">
                  <Link
                    href="/contact?plan=standard"
                    onClick={() => trackPricingTierSelection("Standard", "$249", "USD")}
                    className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase bg-black text-[#d4ff3f] shadow-[3px_3px_0px_0px_#000] hover:translate-y-[-1px] transition-all border-2 border-black"
                  >
                    Get Standard
                  </Link>
                </td>
                <td className="p-4 sm:p-6 text-center border-l-2 border-black">
                  <Link
                    href="/contact?plan=turbo"
                    onClick={() => trackPricingTierSelection("Turbo", "$449", "USD")}
                    className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase bg-black text-white hover:bg-[#d4ff3f] hover:text-black transition-all border border-black"
                  >
                    Get Turbo
                  </Link>
                </td>
                <td className="p-4 sm:p-6 text-center border-l-2 border-black bg-gray-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase bg-white text-black hover:bg-black hover:text-white transition-all border-2 border-black"
                  >
                    Custom Scope
                  </Link>
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
