import React from "react";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaClock, FaArrowRight, FaTag, FaBookOpen } from "react-icons/fa";
import type { Metadata } from "next";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog & Technical Insights | Web Development & UI/UX | IntegersDev",
  description:
    "Engineering guides, Next.js tutorials, local business SEO benchmarks for Gwalior, and modern UI/UX design insights from the IntegersDev engineering collective.",
  alternates: {
    canonical: "https://www.integersdev.in/blog",
  },
  openGraph: {
    title: "Blog & Technical Insights | IntegersDev",
    description:
      "Engineering insights, Next.js guides, and UI/UX best practices from IntegersDev in Gwalior.",
    url: "https://www.integersdev.in/blog",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Technical Insights | Web Development & UI/UX | IntegersDev",
    description:
      "Engineering guides, Next.js tutorials, local business SEO benchmarks for Gwalior, and modern UI/UX design insights from the IntegersDev engineering collective.",
    site: "@integers_dev",
    creator: "@integers_dev",
    images: ["/og-image.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Extract unique tags across all posts
  const allTags = Array.from(
    new Set(posts.flatMap((p) => p.frontmatter.tags))
  );

  return (
    <SiteLayout>
      <PageHeader
        badge="Technical Publications"
        title="Engineering Guides &amp;"
        highlight="Digital Insights"
        description="Practical Next.js tutorials, UI/UX breakdowns, and local business growth strategies written by Vinay, Aryan, Kuldeep &amp; Love at IntegersDev in Gwalior."
        breadcrumbs={[{ label: "Blog" }]}
      />

      {/* Main Articles Section */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        {/* Topic Tags Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-2 pb-6 border-b-2 border-black/10">
          <span className="text-xs font-black uppercase tracking-wider text-gray-500 mr-2 flex items-center gap-1.5">
            <FaTag className="w-3 h-3 text-black" /> Topics:
          </span>
          {allTags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:bg-[#d4ff3f] transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Featured Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_#000] hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
            >
              <div className="p-7 sm:p-8">
                {/* Primary Tag & Reading Time */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#d4ff3f] text-black border border-black shadow-[1px_1px_0px_0px_#000]">
                    {post.frontmatter.tags[0] || "Article"}
                  </span>
                  <span className="text-xs font-bold text-gray-500 flex items-center gap-1">
                    <FaClock className="w-3 h-3 text-black" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-black text-black mb-3 leading-snug group-hover:text-black">
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.frontmatter.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mb-6">
                  {post.frontmatter.description}
                </p>

                {/* Tags preview */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.frontmatter.tags.slice(1, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-bold text-gray-500 uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Read Article Footer */}
              <div className="p-7 sm:p-8 pt-0 border-t border-black/10 flex items-center justify-between text-xs font-bold text-gray-600">
                <div className="flex items-center gap-2.5 pt-4">
                  <div className="w-7 h-7 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-xs font-black text-black">
                    {post.authorDetails.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black text-black leading-tight">
                      {post.authorDetails.name}
                    </div>
                    <div className="text-[10px] text-gray-500">
                      {post.frontmatter.date}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="pt-4 text-black font-black hover:text-black inline-flex items-center gap-1.5 transition-transform group-hover:translate-x-1"
                >
                  Read Article
                  <FaArrowRight className="w-3 h-3 text-black" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA at Bottom */}
      <CTASection
        title="Have a Complex Engineering Challenge?"
        description="Talk directly with Vinay, Aryan, Kuldeep & Love. Fast Next.js builds, custom UI/UX design systems, and transparent milestone contracts in Gwalior."
        primaryBtnText="Start a Project Discussion"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
