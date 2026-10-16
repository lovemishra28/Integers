import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FaStar, FaQuoteLeft, FaCheckCircle, FaExternalLinkAlt, FaAward, FaBolt, FaUsers, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import TestimonialForm from "@/components/TestimonialForm";
import { ReviewSchema } from "@/components/schema";
import { getApprovedReviews, ReviewItem } from "@/lib/reviews";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Client Testimonials & Reviews | IntegersDev",
  description:
    "Read authentic reviews and ratings from founders, local businesses, and product managers who built Next.js websites, mobile apps, and UI/UX design systems with IntegersDev in Gwalior.",
  alternates: {
    canonical: "https://integersdev.in/testimonials",
  },
  openGraph: {
    title: "Client Testimonials & Reviews | IntegersDev",
    description:
      "Read authentic client reviews and feedback from founders and businesses who partnered with IntegersDev in Gwalior.",
    url: "https://integersdev.in/testimonials",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "IntegersDev Client Testimonials" }],
  },
};

export default async function TestimonialsPage() {
  const reviews: ReviewItem[] = await getApprovedReviews();

  return (
    <SiteLayout>
      {/* Schema.org AggregateRating & Review Structured Data */}
      <ReviewSchema
        reviews={reviews.map((r) => ({
          author: r.name,
          role: r.role,
          quote: r.text,
          rating: r.rating || 5,
          datePublished: r.createdAt || "2024-06-01",
        }))}
        itemName="IntegersDev Web & App Development"
        itemType="LocalBusiness"
        itemUrl="https://integersdev.in/testimonials"
      />

      {/* 1. Header with Breadcrumbs */}
      <PageHeader
        badge="Verified Social Proof"
        title="What Founders &amp; Clients Say About"
        highlight="IntegersDev"
        description="Authentic feedback from business leaders, startup founders, and retail owners across Central India and beyond who trust us to engineer their digital presence."
        breadcrumbs={[{ label: "Testimonials" }]}
        actions={
          <div className="flex flex-wrap gap-4">
            <a
              href="#share-review"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
            >
              Share Your Feedback
              <FaArrowRight className="w-3 h-3" />
            </a>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform"
            >
              Explore Live Case Studies
            </Link>
          </div>
        }
      />

      {/* 2. Key Trust Metrics & Track Record */}
      <section className="py-6 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="flex items-center gap-2 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="w-4 h-4" />
              ))}
            </div>
            <div className="text-3xl font-black text-black">Verified</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Direct Client Reviews
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaAward />
            </div>
            <div className="text-3xl font-black text-black">100%</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Code Ownership Transferred
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaUsers />
            </div>
            <div className="text-3xl font-black text-black">20+</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Happy Clients &amp; Partners
            </div>
          </div>

          <div className="bg-white border-2 border-black rounded-2xl p-6 shadow-[4px_4px_0px_0px_#000]">
            <div className="w-8 h-8 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-sm mb-2">
              <FaBolt />
            </div>
            <div className="text-3xl font-black text-black">&lt; 1.0s</div>
            <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mt-1">
              Sub-second Speed Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Client Testimonials Grid */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-black bg-[#d4ff3f] border border-black px-3 py-1 rounded-full shadow-[1px_1px_0px_0px_#000] inline-block mb-2">
              Client Stories
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-black">
              Verified Reviews &amp; Partnerships
            </h2>
          </div>
          <p className="text-xs font-bold text-gray-500">
            Showing all {reviews.length} authentic client reviews
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={review._id || idx}
              className="bg-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_#000] flex flex-col justify-between hover:-translate-y-1.5 transition-all relative group"
            >
              <div>
                <FaQuoteLeft className="w-8 h-8 text-black/15 absolute top-6 right-6 pointer-events-none group-hover:text-[#d4ff3f] transition-colors" />

                {/* Trust Verification Pill */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-black bg-[#d4ff3f] border border-black px-2.5 py-0.5 rounded-full shadow-[1px_1px_0px_0px_#000]">
                    <FaCheckCircle className="w-2.5 h-2.5 text-black" />
                    {review.verifiedBadge || "Verified Client"}
                  </span>
                  {review.location && (
                    <span className="text-[10px] text-gray-500 font-bold flex items-center gap-1">
                      <FaMapMarkerAlt className="w-2.5 h-2.5 text-gray-400" />
                      {review.location}
                    </span>
                  )}
                </div>

                {/* Rating */}
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(Math.max(1, Math.min(5, review.rating || 5)))].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 drop-shadow-[0.5px_0.5px_0px_#000]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed mb-6">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Credibility Action Links: Direct Live Site and/or Case Study */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {review.liveUrl && (
                    <a
                      href={review.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-black bg-[#d4ff3f] border border-black px-3 py-1.5 rounded-full hover:bg-black hover:text-[#d4ff3f] transition-colors shadow-[1px_1px_0px_0px_#000]"
                    >
                      <span>Visit Live Site</span>
                      <FaExternalLinkAlt className="w-2.5 h-2.5" />
                    </a>
                  )}
                  {review.projectSlug && (
                    <Link
                      href={`/portfolio/${review.projectSlug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-black text-black bg-white border border-black px-3 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors shadow-[1px_1px_0px_0px_#000]"
                    >
                      <span>Case Study: {review.projectName || "Details"}</span>
                      <FaArrowRight className="w-2.5 h-2.5 -rotate-45" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Author Meta */}
              <div className="flex items-center gap-3 pt-5 border-t-2 border-black/10 mt-auto">
                <div className="w-11 h-11 rounded-full bg-[#d4ff3f] text-black font-black text-sm flex items-center justify-center border-2 border-black shrink-0">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-black text-sm text-black truncate">
                    {review.name}
                  </div>
                  <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide truncate">
                    {review.role || "Client"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Dedicated Review Submission Section (Standalone) */}
      <section id="share-review" className="py-12 px-6 sm:px-12 md:px-20 max-w-4xl mx-auto w-full scroll-mt-24">
        <TestimonialForm
          title="Have We Worked Together? Share Your Experience"
          subtitle="We welcome honest feedback from every client, founder, and collaborator to keep our engineering standards at the cutting edge."
        />
      </section>

      {/* 5. Bottom Call to Action */}
      <CTASection
        title="Ready to Build Software Clients Love?"
        description="Partner directly with our core engineering collective in Gwalior. Transparent fixed milestone pricing, sub-second load times, and custom code ownership."
        primaryBtnText="Get a Free Project Quote"
        primaryBtnHref="/contact"
      />
    </SiteLayout>
  );
}
