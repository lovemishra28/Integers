import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaExternalLinkAlt,
  FaArrowRight,
  FaDownload,
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";
import type { Metadata } from "next";
import { getAllProjects } from "@/data/projects";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | IntegersDev",
  description:
    "Explore web development, UI/UX design, and mobile app case studies by IntegersDev in Gwalior. High-converting Next.js websites and custom digital solutions.",
  alternates: {
    canonical: "https://integersdev.in/portfolio",
  },
  openGraph: {
    title: "Portfolio & Case Studies | IntegersDev",
    description:
      "Explore web development, UI/UX design, and mobile app case studies by IntegersDev in Gwalior.",
    url: "https://integersdev.in/portfolio",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntegersDev Portfolio Case Studies",
      },
    ],
  },
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <SiteLayout>
      <PageHeader
        badge="Featured Client Work"
        title="Our Work &amp; Case"
        highlight="Studies"
        description="Every product we engineer is built for measurable business impact: sub-second load times, converting user flows, and memorable brand identities. Click any project to inspect its in-depth case study."
        breadcrumbs={[{ label: "Portfolio" }]}
        actions={
          <>
            <a
              href={siteConfig.brochureUrl}
              download="IntegersDev_Agency_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              <FaDownload className="w-3 h-3" />
              Download Agency Brochure (PDF)
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform"
            >
              Inquire For Your Project
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </>
        }
      />

      {/* Metrics Bar from siteConfig */}
      <section className="px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-12">
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-2 sm:grid-cols-4 gap-6 text-center sm:text-left">
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

      {/* Projects Grid driven by typed data */}
      <section className="py-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <Link
                href={`/portfolio/${project.slug}`}
                className="relative aspect-video w-full border-b-2 border-black bg-gray-100 overflow-hidden block group"
              >
                <Image
                  src={project.coverImage}
                  alt={`${project.title} - ${project.category} case study built by IntegersDev in Gwalior`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black text-[#d4ff3f] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border border-black shadow-[1px_1px_0px_0px_#fff]">
                    {project.badge}
                  </span>
                </div>
              </Link>

              {/* Project Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-bold text-gray-500 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-wider bg-gray-100 border border-gray-300 px-2 py-0.5 rounded text-gray-700">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-gray-400 font-semibold">{project.year}</span>
                  </div>

                  <Link href={`/portfolio/${project.slug}`} className="group">
                    <h2 className="text-2xl sm:text-3xl font-black text-black mb-2 group-hover:text-[#62d124] transition-colors">
                      {project.title}
                    </h2>
                  </Link>

                  <p className="text-xs font-bold text-gray-500 mb-3">{project.tagline}</p>

                  <p className="text-sm text-gray-700 font-medium leading-relaxed mb-4">
                    {project.summary}
                  </p>

                  {/* Impact Highlight */}
                  {project.results && project.results.length > 0 && (
                    <div className="bg-[#f8f9f5] p-3.5 rounded-2xl border border-gray-300 mb-5 flex items-center gap-3">
                      <div className="text-xl font-black text-black shrink-0 bg-[#d4ff3f] border border-black px-2.5 py-1 rounded-xl">
                        {project.results[0].metric}
                      </div>
                      <div className="text-xs font-bold text-gray-800">
                        {project.results[0].detail}
                      </div>
                    </div>
                  )}
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-black bg-gray-100 border border-gray-300 px-2.5 py-1 rounded-md text-gray-800"
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl bg-black text-[#d4ff3f] border-2 border-black font-black text-xs uppercase tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#d4ff3f] hover:text-black transition-colors"
                    >
                      Read Full Case Study
                      <FaArrowRight className="w-3 h-3" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-black border-2 border-black font-black text-xs uppercase tracking-wider hover:bg-gray-100 transition-colors"
                        title="Visit live platform"
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Want a Platform Like These for Your Business?"
        description="Let's engineer a solution that elevates your brand and scales your operations. Reach out to Vinay, Aryan, Kuldeep & Love today."
      />
    </SiteLayout>
  );
}
