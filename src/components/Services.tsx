"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPenNib, FaCode, FaMobileAlt, FaCubes, FaArrowRight, FaTimes, FaCheckCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badgeText: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  deliverables: string[];
  slug: string;
}

const servicesList: ServiceItem[] = [
  {
    id: "01",
    title: "Web UI/UX Design",
    subtitle: "Interface & Experience",
    badgeText: "Figma UI",
    slug: "/services/ui-ux-design",
    description: "Designing intuitive, engaging and user-friendly digital experiences that turn visitors into loyal customers.",
    image: "/services/uiux-showcase.png",
    icon: <FaPenNib className="w-5 h-5" />,
    features: [
      "Wireframing & Interactive Prototypes",
      "Figma Design Systems & Components",
      "User Journey & UX Flows",
      "Modern Web & Mobile Interfaces"
    ],
    deliverables: ["Figma source files", "Design system tokens", "Interactive prototypes", "Asset exports"]
  },
  {
    id: "02",
    title: "Web Development",
    subtitle: "Frontend & Fullstack",
    badgeText: "Next.js",
    slug: "/services/web-development",
    description: "Building fast, responsive and scalable web applications tailored specifically for modern businesses and cafes.",
    image: "/services/web-dev-showcase.png",
    icon: <FaCode className="w-5 h-5" />,
    features: [
      "High-Performance Next.js & React Apps",
      "Pixel-Perfect Tailwind CSS Layouts",
      "SEO, Accessibility & Speed Optimization",
      "API & Database Integration"
    ],
    deliverables: ["Production-ready code", "GitHub repository", "Automated deployment", "Documentation"]
  },
  {
    id: "03",
    title: "Mobile App Design",
    subtitle: "iOS & Android",
    badgeText: "iOS & Android",
    slug: "/services/mobile-app-development",
    description: "Creating beautiful, functional and scalable mobile applications crafted for real everyday users.",
    image: "/services/mobile-app-showcase.png",
    icon: <FaMobileAlt className="w-5 h-5" />,
    features: [
      "iOS & Android Guideline Alignment",
      "Fluid Micro-Interactions & Gestures",
      "Intuitive Onboarding & Dashboards",
      "App Store & Google Play Ready Assets"
    ],
    deliverables: ["Complete App UI flow", "Figma prototype", "Asset library", "Store presentation mockups"]
  },
  {
    id: "04",
    title: "Custom Solutions",
    subtitle: "Tailored Architecture",
    badgeText: "Custom Stack",
    slug: "/services/custom-software-development",
    description: "Tailored digital systems, custom workflows, API integrations and scalable platforms for unique business challenges.",
    image: "/services/custom-solutions-showcase.png",
    icon: <FaCubes className="w-5 h-5" />,
    features: [
      "Custom SaaS & Business Dashboards",
      "Third-Party API Integrations & Automations",
      "High-Converting Landing Pages",
      "Scalable Cloud Architecture"
    ],
    deliverables: ["Custom software architecture", "Scalable infrastructure", "Ongoing feature support", "Training & handoff"]
  },
];

const statsData = [
  { value: siteConfig.stats.projectsCompleted, label: siteConfig.stats.projectsLabel },
  { value: siteConfig.stats.happyClients, label: siteConfig.stats.happyClientsLabel },
  { value: siteConfig.stats.yearsExperience, label: siteConfig.stats.yearsLabel },
  { value: siteConfig.stats.clientFocused, label: siteConfig.stats.clientFocusedLabel },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="pt-24 pb-12 px-8 md:px-16 max-w-7xl mx-auto bg-white relative">
      {/* ----------------- SECTION HEADER ----------------- */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-10">
        {/* Header with signature brand lime blob */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#d4ff3f] rounded-full opacity-80 z-0 blur-sm pointer-events-none"></div>
          <div className="relative z-10">
            <span className="text-sm font-bold text-[#62d124] block mb-2">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight text-black max-w-lg">
              The process that makes your life easier.
            </h2>
          </div>
        </div>

        {/* Updated Button matching the design's brutalist style */}
        <div className="mt-6 md:mt-0">
          <a
            href={siteConfig.brochureUrl}
            download="IntegersDev_Agency_Brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all cursor-pointer"
          >
            Our Brochure
            <span className="ml-2 bg-transparent text-black rounded-full w-4 h-4 flex items-center justify-center border border-black text-[10px]">
              ↓
            </span>
          </a>
        </div>
      </div>

      {/* ----------------- SERVICES CARDS (SAME SIZE, TRANSPARENT LOOK, ONE CLEAN TEXT) ----------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {servicesList.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => setSelectedService(service)}
            className="group cursor-pointer relative"
          >
            {/* Card Container with Uniform Aspect Ratio (All Same Size) */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between p-5 md:p-6 bg-gray-100">
              
              {/* Card Background Image (Full Visible Artwork) */}
              <Image
                src={service.image}
                alt={`${service.title} - IntegersDev web development agency in Gwalior`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center group-hover:scale-108 transition-transform duration-500 z-0"
                loading="lazy"
              />

              {/* Smooth Gradient Overlay for Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-black/30 group-hover:from-black/90 transition-colors z-10 pointer-events-none" />

              {/* Top Row: Neo-Brutalist Icon Badge & Circular Arrow */}
              <div className="relative z-20 flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-[#d4ff3f] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold text-lg group-hover:bg-black group-hover:text-[#d4ff3f] transition-colors">
                  {service.icon}
                </div>

                <div className="w-10 h-10 rounded-full border-2 border-black bg-white text-black group-hover:bg-[#d4ff3f] group-hover:text-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold text-sm">
                  <FaArrowRight className="w-3.5 h-3.5 -rotate-45" />
                </div>
              </div>

              {/* Bottom Transparent Container with One Clean Text Only */}
              <div className="relative z-20 bg-black/50 backdrop-blur-md rounded-xl p-4 md:p-5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black/70 group-hover:border-[#d4ff3f] transition-all">
                <h3 className="text-xl md:text-2xl font-bold font-sans text-white tracking-tight leading-snug group-hover:text-[#d4ff3f] transition-colors">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ----------------- BOTTOM METRICS BAR ----------------- */}
      <motion.div
        className="mt-16 pt-10 border-t-2 border-black flex flex-col md:flex-row items-center justify-between gap-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 lg:gap-16 w-full mr-0 md:mr-10">
          {statsData.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-extrabold text-black font-sans tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Right Action Button */}
        <Link
          href="/services"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all flex-shrink-0 cursor-pointer"
        >
          View All Services
          <span className="ml-2 w-5 h-5 rounded-full bg-black text-white flex items-center justify-center text-[10px]">
            <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </Link>
      </motion.div>

      {/* ----------------- SERVICE DETAILS MODAL ----------------- */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl bg-white rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-2 border-black overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b-2 border-black flex items-start justify-between bg-[#f8f9f5]">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    {selectedService.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black bg-[#d4ff3f] px-2.5 py-0.5 rounded-full border border-black inline-block mb-1">
                      {selectedService.badgeText}
                    </span>
                    <h3 className="text-2xl font-bold font-sans text-black">
                      {selectedService.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedService(null)}
                  className="w-10 h-10 rounded-full border-2 border-black bg-white hover:bg-black hover:text-white text-black flex items-center justify-center transition-colors cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  aria-label="Close modal"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto space-y-6">
                {/* Full Image Preview */}
                <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] bg-gray-100">
                  <Image
                    src={selectedService.image}
                    alt={`${selectedService.title} - IntegersDev digital solutions in Gwalior`}
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="text-sm font-medium text-gray-700 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Features & Deliverables */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  <div className="p-4 rounded-xl border-2 border-black bg-[#faffea]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3">
                      What We Deliver
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-gray-800">
                          <FaCheckCircle className="text-black mt-0.5 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border-2 border-black bg-white">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-black mb-3">
                      Project Deliverables
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.deliverables.map((deliv, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs font-semibold text-gray-800">
                          <span className="w-2 h-2 rounded-full bg-[#d4ff3f] border border-black mt-1 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 bg-[#f8f9f5] border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href={selectedService.slug}
                  onClick={() => setSelectedService(null)}
                  className="text-xs font-bold text-black hover:underline flex items-center gap-1.5"
                >
                  Explore Dedicated Page →
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setSelectedService(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all"
                >
                  Start a Project in {selectedService.title} ↗
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
