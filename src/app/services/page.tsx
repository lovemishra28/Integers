import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCode, FaPaintBrush, FaMobileAlt, FaBolt, FaCubes, FaArrowRight, FaCheck } from "react-icons/fa";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Web, Mobile & UI/UX Development Services | IntegersDev",
  description:
    "Explore our complete service offerings in Gwalior: Next.js web development, bespoke UI/UX architecture, mobile apps & custom software solutions.",
  alternates: {
    canonical: "https://integersdev.in/services",
  },
  openGraph: {
    title: "Web, Mobile & UI/UX Development Services | IntegersDev",
    description:
      "Explore high-performance digital services built by IntegersDev in Gwalior, India.",
    url: "https://integersdev.in/services",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Digital Services" }],
  },
};

const serviceCards = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "High-Speed Fullstack Web Applications",
    description:
      "Production-ready web platforms engineered with Next.js, React, TypeScript and scalable cloud databases. Optimized for sub-second speeds, SEO indexing, and conversion.",
    deliverables: ["Next.js App Router codebase", "Responsive Tailwind CSS layout", "Database schema & API", "Lighthouse 95+ score"],
    image: "/services/web-dev-showcase.png",
    icon: <FaCode className="w-5 h-5 text-black" />,
    badge: "Most Popular",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    tagline: "Intuitive Interfaces & Design Systems",
    description:
      "Human-centric user experience flows, clickable Figma prototypes, and comprehensive design systems built to turn casual visitors into committed customers.",
    deliverables: ["Figma design source files", "Interactive clickable prototypes", "Typography & token systems", "Asset exports & developer handoff"],
    image: "/services/uiux-showcase.png",
    icon: <FaPaintBrush className="w-5 h-5 text-black" />,
    badge: "Figma Ready",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    tagline: "Cross-Platform iOS & Android Apps",
    description:
      "Sleek, fluid mobile applications designed for real everyday users. Smooth gestures, offline data persistence, and app store compliance.",
    deliverables: ["Cross-platform app architecture", "Fluid gesture micro-interactions", "Push notifications & Auth", "App Store submission guidance"],
    image: "/services/mobile-app-showcase.png",
    icon: <FaMobileAlt className="w-5 h-5 text-black" />,
    badge: "iOS & Android",
  },
  {
    slug: "nextjs-development",
    title: "Next.js Development",
    tagline: "Server-Side Rendering & Edge Acceleration",
    description:
      "Specialized Next.js engineering leveraging Turbopack, App Router, React Server Components (RSC), and Edge runtime for maximum performance and Google Core Web Vitals.",
    deliverables: ["App Router architecture", "Server Actions integration", "Dynamic OpenGraph generation", "Edge caching & CDN setup"],
    image: "/services/web-dev-showcase.png",
    icon: <FaBolt className="w-5 h-5 text-black" />,
    badge: "Specialized Stack",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Solutions",
    tagline: "Tailored Architecture & Business Tools",
    description:
      "Custom business dashboards, internal telemetry portals, third-party API orchestrations, and automated pipelines designed to solve unique organizational problems.",
    deliverables: ["Role-based access controls (RBAC)", "Custom MongoDB / SQL pipelines", "Automated third-party webhooks", "Ongoing support & training"],
    image: "/services/custom-solutions-showcase.png",
    icon: <FaCubes className="w-5 h-5 text-black" />,
    badge: "Enterprise Grade",
  },
];

import { ServiceSchema } from "@/components/schema";

export default function ServicesPage() {
  return (
    <SiteLayout>
      <ServiceSchema
        name="Digital Engineering & UI/UX Design Services - IntegersDev"
        description="Comprehensive web development, UI/UX design, Next.js engineering, mobile app development, and custom enterprise software solutions in Gwalior, India."
        serviceType="Digital Engineering & Web Development"
        url="/services"
      />
      <PageHeader
        badge="Engineering & Design Studio"
        title="Digital Services Engineered for"
        highlight="Scale & Speed"
        description="We combine engineering precision with bold, neo-brutalist design aesthetics. Explore our specialized services built for startups, cafes, local businesses, and modern enterprises."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCards.map((service) => (
            <div
              key={service.slug}
              className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1.5 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Artwork Preview */}
                <div className="relative aspect-[16/10] w-full border-b-2 border-black bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={`${service.title} - IntegersDev agency services in Gwalior`}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#d4ff3f] text-black border border-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-[1px_1px_0px_0px_#000]">
                      {service.badge}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                      {service.icon}
                    </span>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-black">
                        {service.title}
                      </h2>
                      <p className="text-xs font-bold text-gray-500">{service.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="border-t border-black/10 pt-4 mb-6">
                    <span className="text-[10px] font-black uppercase tracking-wider text-gray-400 block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs font-bold text-gray-800">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-[8px] text-black shrink-0">
                            <FaCheck />
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-black text-[#d4ff3f] border-2 border-black font-black text-xs uppercase tracking-wider hover:bg-[#d4ff3f] hover:text-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  Explore {service.title}
                  <FaArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Need a Custom Engineered Solution?"
        description="Whether you need an MVP in 5 days or a fullscale platform redesign, Vinay, Aryan, Kuldeep & Love are ready to build it."
      />
    </SiteLayout>
  );
}
