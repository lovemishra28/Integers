import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheck,
  FaCalendarAlt,
  FaBuilding,
  FaTag,
  FaQuoteLeft,
  FaDownload,
} from "react-icons/fa";
import {
  getAllProjects,
  getProjectBySlug,
  getAllProjectSlugs,
  getAdjacentProjects,
} from "@/data/projects";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { ReviewSchema } from "@/components/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | IntegersDev",
      description: "The requested case study could not be found.",
    };
  }

  const title = `${project.title} - Case Study | IntegersDev`;
  const description = `${project.summary} Engineered by IntegersDev in Gwalior, India.`;
  const url = `https://www.integersdev.in/portfolio/${project.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "IntegersDev",
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - ${project.category} case study by IntegersDev`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [project.coverImage],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <SiteLayout>
      {/* Schema.org Review for verified client testimonials */}
      {project.testimonial && (
        <ReviewSchema
          review={{
            author: project.testimonial.author,
            role: project.testimonial.role,
            company: project.testimonial.company,
            quote: project.testimonial.quote,
          }}
          itemName={`${project.title} Web Platform`}
          itemType="Service"
          itemUrl={`https://www.integersdev.in/portfolio/${project.slug}`}
        />
      )}

      {/* 1. Header with Breadcrumbs */}
      <PageHeader
        badge={project.badge}
        title={project.title}
        highlight={project.category}
        description={project.summary}
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.title },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
              >
                Visit Live Platform
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
            <a
              href={siteConfig.brochureUrl}
              download="IntegersDev_Agency_Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
            >
              <FaDownload className="w-3 h-3" />
              Download Brochure (PDF)
            </a>
          </div>
        }
      />

      {/* 2. Project Metadata Overview Bar */}
      <section className="py-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full -mt-4">
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5 mb-1">
              <FaBuilding className="text-black" /> Client
            </span>
            <div className="text-sm sm:text-base font-black text-black">{project.client}</div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5 mb-1">
              <FaTag className="text-black" /> Industry
            </span>
            <div className="text-sm sm:text-base font-black text-black">{project.industry}</div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5 mb-1">
              <FaCalendarAlt className="text-black" /> Timeline
            </span>
            <div className="text-sm sm:text-base font-black text-black">{project.timeline}</div>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase text-gray-500 tracking-wider flex items-center gap-1.5 mb-1">
              ✓ Category
            </span>
            <div className="text-sm sm:text-base font-black text-black">{project.category}</div>
          </div>
        </div>
      </section>

      {/* 3. Hero Artwork Showcase */}
      <section className="py-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0px_0px_#d4ff3f] relative aspect-[16/9] w-full bg-gray-100">
          <Image
            src={project.coverImage}
            alt={`${project.title} - ${project.category} case study engineered by IntegersDev in Gwalior`}
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            priority
            className="object-cover object-top"
          />
        </div>
      </section>

      {/* 4. The Problem & The Solution Grid */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Problem Card */}
          <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 border border-black rounded-full text-xs font-black uppercase text-red-800 mb-4">
                The Challenge
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-black mb-4 leading-tight">
                {project.problem.heading}
              </h2>
              <p className="text-sm text-gray-700 font-medium leading-relaxed mb-6">
                {project.problem.description}
              </p>

              <ul className="space-y-3">
                {project.problem.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-gray-800">
                    <span className="w-5 h-5 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] shrink-0 font-black mt-0.5">
                      ✕
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[6px_6px_0px_0px_#d4ff3f] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] text-black border border-black rounded-full text-xs font-black uppercase mb-4 shadow-[1px_1px_0px_0px_#fff]">
                The Solution
              </div>
              <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
                {project.solution.heading}
              </h2>
              <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6">
                {project.solution.description}
              </p>

              <div className="space-y-4">
                {project.solution.keyFeatures.map((feat, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-[#1c1c1c] border border-gray-800">
                    <div className="flex items-center gap-2 text-sm font-black text-[#d4ff3f] mb-1">
                      <FaCheck className="w-3.5 h-3.5" />
                      <h3>{feat.title}</h3>
                    </div>
                    <p className="text-xs text-gray-300 font-medium leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Measurable Results */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#d4ff3f]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
              Validated Metrics
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              Key Project Outcomes &amp; Impact
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 border-black bg-[#f8f9f5] shadow-[4px_4px_0px_0px_#000] text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-black mb-1">
                    {res.metric}
                  </div>
                  <div className="text-xs font-black uppercase text-gray-500 tracking-wider mb-3">
                    {res.label}
                  </div>
                </div>
                <p className="text-xs font-semibold text-gray-700 leading-relaxed border-t border-gray-300 pt-3">
                  {res.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Technology Stack Used */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Engineering Toolset
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Technologies Behind This Build
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {project.techStack.map((tech, i) => (
            <div
              key={i}
              className="bg-white border-2 border-black rounded-2xl p-4 shadow-[3px_3px_0px_0px_#000] text-center"
            >
              <span className="text-[9px] font-black uppercase tracking-wider text-gray-500 bg-gray-100 border border-gray-300 px-2 py-0.5 rounded block mb-2 mx-auto w-max">
                {tech.category}
              </span>
              <h3 className="text-sm font-black text-black mb-1">{tech.name}</h3>
              {tech.description && (
                <p className="text-[10px] text-gray-600 font-medium leading-tight">
                  {tech.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. Screenshots Gallery with Descriptive Alt Text */}
      {project.screenshots && project.screenshots.length > 0 && (
        <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
              Visual Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-black">
              Interface Screenshots &amp; Workflows
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((screen, i) => (
              <div
                key={i}
                className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#000]"
              >
                <div className="relative aspect-[16/10] w-full border-b-2 border-black bg-gray-100">
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {screen.caption && (
                  <div className="p-4 bg-[#f8f9f5] text-xs font-bold text-gray-700">
                    📸 {screen.caption}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. Client Testimonial Slot */}
      {project.testimonial && (
        <section className="py-12 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto w-full">
          <div className="bg-[#d4ff3f] border-2 border-black rounded-3xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_#000] relative">
            <FaQuoteLeft className="w-10 h-10 text-black/20 absolute top-6 right-6" />
            <span className="text-[10px] font-black uppercase text-black bg-white border border-black px-3 py-1 rounded-full inline-block mb-4 shadow-[1px_1px_0px_0px_#000]">
              Client Feedback
            </span>
            <blockquote className="text-lg sm:text-2xl font-black text-black leading-snug mb-6">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>

            <div className="flex items-center gap-3 pt-4 border-t border-black/20">
              <div className="w-10 h-10 rounded-full bg-black text-[#d4ff3f] flex items-center justify-center font-black text-sm border-2 border-black">
                {project.testimonial.author.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-black text-black">{project.testimonial.author}</div>
                <div className="text-xs font-bold text-gray-800">
                  {project.testimonial.role} • {project.testimonial.company}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 9. Adjacent Case Study Navigation (Prev / Next) */}
      <section className="py-10 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="border-t-2 border-black pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="w-full sm:w-auto inline-flex items-center gap-3 p-4 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#d4ff3f] transition-all"
            >
              <FaArrowLeft className="w-3.5 h-3.5 text-black" />
              <div>
                <span className="text-[10px] font-black uppercase text-gray-500 block">Previous Project</span>
                <span className="text-sm font-black text-black">{prev.title}</span>
              </div>
            </Link>
          ) : <div />}

          <Link
            href="/portfolio"
            className="text-xs font-black uppercase tracking-wider text-black underline hover:text-[#62d124]"
          >
            View All Projects
          </Link>

          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="w-full sm:w-auto inline-flex items-center justify-between gap-3 p-4 rounded-2xl bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#d4ff3f] transition-all"
            >
              <div className="text-right">
                <span className="text-[10px] font-black uppercase text-gray-500 block">Next Project</span>
                <span className="text-sm font-black text-black">{next.title}</span>
              </div>
              <FaArrowRight className="w-3.5 h-3.5 text-black" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* 10. Reusable Lead Capture CTA */}
      <CTASection
        badge="Build Your Success Story"
        title="Want Similar Results for Your Business?"
        description="Partner directly with Vinay, Aryan, Kuldeep & Love. We will evaluate your product vision and architect a high-performing digital solution."
        primaryBtnText="Start Your Project"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
