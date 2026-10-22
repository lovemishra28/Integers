import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCalendarAlt, FaUser, FaClock, FaArrowLeft, FaTag, FaShareAlt } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote/rsc";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { ArticleSchema } from "@/components/schema";
import { getAllBlogSlugs, getPostBySlug, getRelatedPosts } from "@/lib/blog";
import TableOfContents from "@/components/blog/TableOfContents";
import AuthorBox from "@/components/blog/AuthorBox";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { mdxComponents } from "@/components/blog/MdxComponents";

import { siteConfig } from "@/config/site";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | IntegersDev",
      description: "The requested engineering publication or article could not be located.",
      robots: { index: false, follow: false },
    };
  }

  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const description =
    post.frontmatter.description?.trim() ||
    "Read in-depth engineering guides, technical breakdowns, and web development insights from IntegersDev in Gwalior.";

  const coverImage = post.frontmatter.coverImage || "/og-image.png";
  const absoluteImageUrl = coverImage.startsWith("http")
    ? coverImage
    : `${siteConfig.url}${coverImage.startsWith("/") ? "" : "/"}${coverImage}`;

  return {
    title: `${post.frontmatter.title} | IntegersDev Blog`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${post.frontmatter.title} | IntegersDev`,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.frontmatter.title} | IntegersDev`,
      description,
      site: "@integers_dev",
      creator: "@integers_dev",
      images: [absoluteImageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, post.frontmatter.tags, 3);
  const canonicalUrl = `${siteConfig.url}/blog/${post.slug}`;
  const description =
    post.frontmatter.description?.trim() ||
    "Read in-depth engineering guides, technical breakdowns, and web development insights from IntegersDev in Gwalior.";
  const coverImage = post.frontmatter.coverImage || "/og-image.png";
  const absoluteImageUrl = coverImage.startsWith("http")
    ? coverImage
    : `${siteConfig.url}${coverImage.startsWith("/") ? "" : "/"}${coverImage}`;

  return (
    <SiteLayout>
      {/* 1. Schema.org Article / BlogPosting Structured Data */}
      <ArticleSchema
        title={post.frontmatter.title}
        description={description}
        datePublished={post.frontmatter.date}
        authorName={post.authorDetails.name}
        authorRole={post.authorDetails.role}
        url={canonicalUrl}
        imageUrl={absoluteImageUrl}
        keywords={post.frontmatter.tags}
      />

      {/* 2. Page Header with Breadcrumbs */}
      <PageHeader
        badge={post.frontmatter.tags[0] || "Insight"}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.frontmatter.title },
        ]}
      />

      {/* 3. Main Article Body with ToC, MDX Content & Sidebar */}
      <div className="py-10 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        {/* Top Meta Details Bar */}
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mb-10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-bold text-gray-700">
            <span className="flex items-center gap-1.5 bg-[#f8f9f5] border border-black/15 px-3 py-1.5 rounded-full">
              <FaCalendarAlt className="text-black" />
              {post.frontmatter.date}
            </span>
            <span className="flex items-center gap-1.5 bg-[#f8f9f5] border border-black/15 px-3 py-1.5 rounded-full">
              <FaClock className="text-black" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 bg-[#f8f9f5] border border-black/15 px-3 py-1.5 rounded-full">
              <FaUser className="text-black" />
              {post.authorDetails.name} • {post.authorDetails.role}
            </span>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
          >
            <FaArrowLeft className="w-3 h-3" />
            All Articles
          </Link>
        </div>

        {/* Content Grid: Article + Sticky Desktop Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Article Column (8 cols) */}
          <article className="lg:col-span-8 bg-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#000]">
            
            {/* Tags Pill Row */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              <span className="text-xs font-black text-gray-500 uppercase tracking-wider flex items-center gap-1">
                <FaTag className="w-2.5 h-2.5" /> Tags:
              </span>
              {post.frontmatter.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-black bg-[#d4ff3f] text-black border border-black shadow-[1px_1px_0px_0px_#000]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Mobile / Tablet Inline Table of Contents */}
            <div className="block lg:hidden">
              <TableOfContents headings={post.headings} />
            </div>

            {/* Rendered MDX Content */}
            <div className="prose prose-neutral max-w-none">
              <MDXRemote source={post.content} components={mdxComponents} />
            </div>

            {/* Author Box */}
            <AuthorBox author={post.authorDetails} />

            {/* Share / Discuss Footer */}
            <div className="pt-6 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs font-bold text-gray-500">
                Found this helpful? Share with founders and engineering peers.
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
              >
                Discuss This Article
              </Link>
            </div>
          </article>

          {/* Sticky Desktop Sidebar (4 cols) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
            {/* Table of Contents */}
            <TableOfContents headings={post.headings} />

            {/* Quick Author Card */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#000]">
              <span className="text-[10px] font-black uppercase tracking-wider text-black bg-[#d4ff3f] border border-black px-2.5 py-0.5 rounded-full inline-block mb-3">
                Author Insight
              </span>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center font-black text-sm text-black">
                  {post.authorDetails.name.charAt(0)}
                </div>
                <div>
                  <div className="font-black text-sm text-black">{post.authorDetails.name}</div>
                  <div className="text-[11px] font-bold text-gray-500">{post.authorDetails.role}</div>
                </div>
              </div>
              <p className="text-xs text-gray-700 font-medium leading-relaxed mb-4">
                {post.authorDetails.bio}
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-black text-white hover:bg-[#d4ff3f] hover:text-black border-2 border-black transition-colors"
              >
                Book a Technical Call →
              </Link>
            </div>

            {/* Quick Estimate Card */}
            <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-6 shadow-[6px_6px_0px_0px_#d4ff3f]">
              <div className="text-sm font-black mb-2">Building Something Similar?</div>
              <p className="text-xs text-gray-300 font-medium mb-4 leading-relaxed">
                Get a fixed milestone estimate and sub-second architecture roadmap from IntegersDev.
              </p>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-1.5 text-xs font-black text-[#d4ff3f] hover:underline"
              >
                Explore Pricing Plans →
              </Link>
            </div>
          </aside>

        </div>

        {/* 4. Related Posts Section */}
        <RelatedPosts posts={relatedPosts} />
      </div>

      {/* 5. CTA at the End */}
      <CTASection
        title="Ready to Build Software That Performs?"
        description="Talk with Vinay, Aryan, Kuldeep & Love at IntegersDev. Fast Next.js builds, conversion-focused UI/UX design systems, and transparent fixed milestone pricing in Gwalior."
        primaryBtnText="Start Your Project"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
