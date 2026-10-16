import React from "react";
import Link from "next/link";
import {
  FaCode,
  FaPaintBrush,
  FaServer,
  FaRocket,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaCheck,
  FaBolt,
  FaLock,
  FaLightbulb,
  FaShieldAlt,
  FaSearch,
  FaLaptopCode,
  FaCheckCircle,
} from "react-icons/fa";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "About Us | Web Development Studio in Gwalior | IntegersDev",
  description:
    "Meet IntegersDev: Vinay, Aryan, Kuldeep & Love. A modern web development, UI/UX and mobile app engineering studio rooted in Gwalior, Madhya Pradesh, India. Discover our story, values, and 5-step process.",
  alternates: {
    canonical: "https://integersdev.in/about",
  },
  openGraph: {
    title: "About Us | IntegersDev - Web Development Studio in Gwalior",
    description:
      "Meet the team behind IntegersDev: engineering fast Next.js platforms, UI/UX systems & mobile apps in Gwalior, India.",
    url: "https://integersdev.in/about",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Team in Gwalior" }],
  },
};

const teamMembers = [
  {
    name: "Vinay",
    role: "Fullstack Architecture & Cloud Engineering",
    bio: "Leads backend systems, Next.js Server Components, cloud infrastructure, distributed caching, and sub-second load times.",
    icon: <FaServer className="w-5 h-5 text-black" />,
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloud Infra"],
  },
  {
    name: "Aryan",
    role: "UI/UX & Visual Experience Design",
    bio: "Obsessed with neo-brutalist visual systems, fluid motion design, Figma component architectures, and converting user funnels.",
    icon: <FaPaintBrush className="w-5 h-5 text-black" />,
    skills: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "Micro-Interactions"],
  },
  {
    name: "Kuldeep",
    role: "Frontend Engineering & Web Performance",
    bio: "Dedicated to pixel-perfect responsive layouts, Web Vitals optimization, accessible semantic HTML, and cross-device smoothness.",
    icon: <FaCode className="w-5 h-5 text-black" />,
    skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Web", "SEO Architecture"],
  },
  {
    name: "Love",
    role: "Software Engineering & System Optimization",
    bio: "Specializes in application state modeling, database optimizations, third-party API orchestrations, and QA test coverage.",
    icon: <FaRocket className="w-5 h-5 text-black" />,
    skills: ["Fullstack JS", "REST / GraphQL", "MongoDB", "Auth & Security", "Performance"],
  },
];

const values = [
  {
    title: "Zero Bloat & Peak Velocity",
    desc: "We don't tolerate bloated page loads or lazy JavaScript bundles. Every platform we engineer is optimized to achieve 90+ Google Lighthouse benchmarks, sub-second TTFB, and instant user interactions.",
    icon: <FaBolt className="w-5 h-5 text-black" />,
  },
  {
    title: "Neo-Brutalist Visual Distinction",
    desc: "The web is overflowing with identical, sterile corporate templates. We craft bold contrast, expressive typography, and tactile drop shadows that build memorable digital identities for ambitious brands.",
    icon: <FaPaintBrush className="w-5 h-5 text-black" />,
  },
  {
    title: "Direct Engineer Collaboration",
    desc: "You collaborate directly with the engineers building your software — Vinay, Aryan, Kuldeep & Love. No account managers, no junior offshore handoffs, and no games of telephone.",
    icon: <FaUsers className="w-5 h-5 text-black" />,
  },
  {
    title: "100% Client IP & Code Ownership",
    desc: "When a milestone is completed, the complete GitHub repository, Figma design tokens, and cloud configurations belong entirely to you. Zero vendor lock-in and zero proprietary dependencies.",
    icon: <FaShieldAlt className="w-5 h-5 text-black" />,
  },
  {
    title: "Radical Transparency & Fixed Milestones",
    desc: "We provide upfront, itemized estimates with clear milestone deliveries (40% kickoff / 30% preview staging / 30% final launch). No unexpected hourly billings or ambiguous extra charges.",
    icon: <FaLock className="w-5 h-5 text-black" />,
  },
  {
    title: "Craftsmanship Over Volume",
    desc: "We deliberately limit the number of active sprint slots we take on each month. This ensures our core team dedicates focused creative energy and obsessive quality to your product.",
    icon: <FaLightbulb className="w-5 h-5 text-black" />,
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    subtitle: "Days 1 – 2",
    description:
      "We unpack your business objectives, target audience, competitive differentiators, and data models. We map out database schemas, third-party API dependencies, and establish milestone deliverables.",
    deliverables: ["Product Requirements Document", "Technical Architecture Diagram", "Milestone Roadmap"],
  },
  {
    step: "02",
    title: "Wireframing & Neo-Brutalist UI/UX",
    subtitle: "Days 3 – 5",
    description:
      "Aryan architects high-fidelity Figma prototypes with clickable user flows, atomic design tokens, accessible color contrasts, and responsive viewports for mobile, tablet, and desktop.",
    deliverables: ["Clickable Figma Prototype", "Component Design System", "Interactive Flow Review"],
  },
  {
    step: "03",
    title: "Fullstack Engineering Sprint",
    subtitle: "Days 6 – 12",
    description:
      "Vinay, Kuldeep, and Love implement production Next.js App Router code, strict TypeScript types, server actions, database migrations, and performant API integrations with clean modular architecture.",
    deliverables: ["Working Preview Staging URL", "Clean Modular TypeScript Codebase", "Database & API Integration"],
  },
  {
    step: "04",
    title: "Performance, SEO & Security Audits",
    subtitle: "Days 13 – 15",
    description:
      "We conduct exhaustive audits: 90+ Lighthouse Core Web Vitals checks, structured data schema (JSON-LD) validation, cross-browser responsiveness tests, and input sanitization to ensure security.",
    deliverables: ["Lighthouse 90+ Audit Report", "Open Graph & Schema Verification", "Cross-Device QA Sign-off"],
  },
  {
    step: "05",
    title: "Production Launch & Code Handoff",
    subtitle: "Day 16+",
    description:
      "We connect your custom domain, configure automated CI/CD deployments on Vercel/Cloudflare/AWS, transfer complete GitHub repository ownership, and provide 14 to 30 days of post-launch warranty support.",
    deliverables: ["Live Production Deployment", "Full GitHub & Figma Transfer", "Post-Launch Warranty Bug Fixes"],
  },
];

import { JsonLd } from "@/components/schema";

// AboutPage Schema for Google SEO
const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://integersdev.in/about#webpage",
  url: "https://integersdev.in/about",
  name: "About IntegersDev | Web Development Studio in Gwalior",
  description:
    "Learn about IntegersDev: the core engineering team, company story, values, and 5-step delivery process based in Gwalior, Madhya Pradesh.",
};

export default function AboutPage() {
  return (
    <SiteLayout>
      {/* AboutPage Specific JSON-LD Schema */}
      <JsonLd data={aboutPageSchema} />

      <PageHeader
        badge="Our Studio & Collective"
        title="Engineering High-Impact Software from"
        highlight="Gwalior to the World"
        description="IntegersDev is a dedicated web development, UI/UX design, and custom software studio based in Gwalior, Madhya Pradesh, India. We partner with founders, local businesses, and scaling brands to engineer software that converts."
        breadcrumbs={[{ label: "About" }]}
        actions={
          <>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Collaborate With Us
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

      {/* Standardized Metrics Grid */}
      <section className="px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-black">
              {siteConfig.stats.projectsCompleted}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">
              {siteConfig.stats.projectsLabel}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-black">
              {siteConfig.stats.happyClients}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">
              {siteConfig.stats.happyClientsLabel}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-black">
              {siteConfig.stats.yearsExperience}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">
              {siteConfig.stats.yearsLabel}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-black">
              {siteConfig.stats.clientFocused}
            </div>
            <div className="text-xs font-bold text-gray-500 uppercase mt-1">
              {siteConfig.stats.clientFocusedLabel}
            </div>
          </div>
        </div>
      </section>

      {/* 1. OUR STORY SECTION */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 md:p-16 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Decorative Corner Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d4ff3f] border-2 border-black rounded-full text-xs font-black uppercase mb-6 shadow-[2px_2px_0px_0px_#000]">
            <FaRocket className="w-3.5 h-3.5" />
            Our Origins &amp; Mission
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight leading-tight">
                Why We Built IntegersDev in Gwalior
              </h2>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                IntegersDev was born out of a shared frustration with the web development agency status quo. Too many businesses in Central India and around the globe were being sold bloated, slow WordPress templates with clumsy plugins, hidden costs, and non-responsive customer service.
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                We believed businesses deserved something significantly better: <strong>sub-second Next.js page speeds</strong>, <strong>high-converting Neo-Brutalist UI/UX design</strong>, and <strong>direct communication with real engineers</strong> who take pride in the code they write.
              </p>
              <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
                From our early milestones engineering custom systems for local pioneers like Vastavikta, Divyanshi Travels, and smart cafe POS platforms, we have grown into a high-octane engineering studio delivering custom software, web platforms, and mobile apps for ambitious founders across India, the UK, the US, and the Middle East.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-black">
                <span className="flex items-center gap-1.5 bg-[#f8f9f5] border border-black/10 px-3 py-1.5 rounded-lg">
                  <FaCheck className="text-black" /> Founded &amp; Headquartered in Gwalior
                </span>
                <span className="flex items-center gap-1.5 bg-[#f8f9f5] border border-black/10 px-3 py-1.5 rounded-lg">
                  <FaCheck className="text-black" /> Zero Outsourcing — 100% In-House Collective
                </span>
              </div>
            </div>

            {/* Right Side: Key Pillars Highlights */}
            <div className="lg:col-span-5 bg-[#111111] text-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#d4ff3f]">
              <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-3">
                The IntegersDev Difference
              </span>
              <h3 className="text-2xl font-black mb-6">
                Engineers, Not Middlemen
              </h3>

              <div className="space-y-4 text-xs font-semibold text-gray-300">
                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-gray-800">
                  <span className="font-black text-[#d4ff3f] block mb-1">
                    ⚡ Cutting-Edge Stack
                  </span>
                  Next.js App Router, strict TypeScript, Tailwind CSS, Supabase, and React Native.
                </div>
                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-gray-800">
                  <span className="font-black text-[#d4ff3f] block mb-1">
                    🎯 Design That Converts
                  </span>
                  Bold, tactile Neo-Brutalism crafted to capture user attention and boost conversions.
                </div>
                <div className="p-3.5 rounded-xl bg-[#1c1c1c] border border-gray-800">
                  <span className="font-black text-[#d4ff3f] block mb-1">
                    🤝 Complete Transparency
                  </span>
                  Fixed sprint pricing, clear milestones, and complete GitHub repository handoff.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEET THE TEAM SECTION */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-3">
            <FaUsers className="w-3.5 h-3.5" />
            Core Collective
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black mb-4">
            Meet the Builders Behind IntegersDev
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            Four specialized craftsmen combining engineering rigor with design intuition to build software you are proud to show the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center mb-5 shadow-[2px_2px_0px_0px_#000]">
                  {member.icon}
                </div>
                <h3 className="text-2xl font-black text-black mb-1">{member.name}</h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {member.role}
                </p>
                <p className="text-xs font-medium text-gray-700 leading-relaxed mb-6">
                  {member.bio}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">
                  Key Toolset
                </span>
                <div className="flex flex-wrap gap-1">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[9px] font-black bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR VALUES SECTION */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] text-black border border-black rounded-full text-xs font-black uppercase mb-4">
              Philosophy &amp; Standards
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Our Non-Negotiable Engineering Values
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-300 font-medium">
              Every line of code we ship and every user interface we design is grounded in these foundational principles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, idx) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl border border-gray-800 bg-[#1a1a1a] flex flex-col justify-between hover:border-[#d4ff3f] transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#d4ff3f] flex items-center justify-center mb-4">
                    {v.icon}
                  </div>
                  <div className="text-[10px] font-black text-[#d4ff3f] uppercase tracking-wider mb-1">
                    Value 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{v.title}</h3>
                  <p className="text-xs text-gray-300 font-medium leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR 5-STEP PROCESS SECTION */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-3">
            <FaLaptopCode className="w-3.5 h-3.5" />
            Structured Delivery
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-black tracking-tight mb-4">
            Our 5-Step Engineering Process
          </h2>
          <p className="text-sm sm:text-base text-gray-700 font-medium leading-relaxed">
            From initial requirements scoping to live production deployment, we follow a rigorous agile sprint methodology that guarantees on-time milestone delivery.
          </p>
        </div>

        <div className="space-y-6">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-5 max-w-3xl">
                <div className="w-14 h-14 rounded-2xl bg-black text-[#d4ff3f] flex items-center justify-center font-black text-xl shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_#d4ff3f]">
                  {step.step}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-xs font-black uppercase tracking-wider text-black">
                      {step.title}
                    </span>
                    <span className="text-[10px] font-black uppercase bg-[#d4ff3f] text-black px-2 py-0.5 rounded-full border border-black">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Deliverables Checklist */}
              <div className="w-full lg:w-auto shrink-0 bg-[#f8f9f5] border border-black/10 rounded-2xl p-4 min-w-[280px]">
                <span className="text-[10px] font-black uppercase tracking-wider text-gray-500 block mb-2">
                  Key Sprint Deliverables
                </span>
                <ul className="space-y-1.5">
                  {step.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-xs font-bold text-gray-800"
                    >
                      <FaCheckCircle className="w-3.5 h-3.5 text-[#62d124] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Roots in Gwalior & Location Consistency */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-16">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f8f9f5] border border-black rounded-full text-xs font-black uppercase mb-3">
              <FaMapMarkerAlt className="text-red-500" />
              Rooted in Gwalior, Madhya Pradesh
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-black mb-3">
              Proudly Headquartered in Gwalior, India
            </h3>
            <p className="text-sm font-bold text-gray-800 mb-2">
              📍 {siteConfig.address.full}
            </p>
            <p className="text-xs sm:text-sm font-medium text-gray-700 leading-relaxed">
              We started IntegersDev to bring world-class design standards and cutting-edge software engineering to businesses in Gwalior, while serving innovative companies across India, the UK, the US, and the UAE.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform text-center"
            >
              Collaborate With Us
              <FaArrowRight className="w-3 h-3" />
            </Link>
            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-black hover:text-white transition-all text-center"
            >
              Get Studio Directions
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something Remarkable Together?"
        description="Reach out to Vinay, Aryan, Kuldeep & Love today. We are always ready to discuss ideas, architecture, and timelines."
      />
    </SiteLayout>
  );
}
