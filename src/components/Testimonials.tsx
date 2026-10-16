import React from "react";
import Link from "next/link";
import {
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaCheckCircle,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { ReviewItem, VERIFIED_PORTFOLIO_REVIEWS } from "@/data/reviews";
import TestimonialSubmitModal from "./TestimonialSubmitModal";

interface TestimonialsProps {
  initialReviews?: ReviewItem[];
  showSubmitModal?: boolean;
}

/**
 * Server-rendered Testimonials component.
 * Ensures all reviews are delivered directly in initial server HTML
 * for zero layout shift, instant crawlability, and maximum credibility.
 */
export default function Testimonials({
  initialReviews = VERIFIED_PORTFOLIO_REVIEWS,
  showSubmitModal = true,
}: TestimonialsProps) {
  const reviews = initialReviews.length > 0 ? initialReviews : VERIFIED_PORTFOLIO_REVIEWS;

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 px-6 sm:px-12 md:px-20 bg-[#111111] text-white relative overflow-hidden flex flex-col items-center scroll-mt-12"
    >
      {/* Decorative Brand Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4ff3f] rounded-full opacity-10 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#d4ff3f] rounded-full opacity-10 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 relative max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#d4ff3f]/40 text-[#d4ff3f] rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[1px_1px_0px_0px_#000]">
            <FaShieldAlt className="w-3 h-3 text-[#d4ff3f]" />
            Verified Client Endorsements &amp; Proof
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-white tracking-tight leading-[1.15]">
            Trusted by Business Owners &amp; Modern Brands
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Real feedback from verified partners who launched custom Next.js websites, high-converting platforms, and mobile applications with our Gwalior engineering collective.
          </p>

          {/* Key Trust Stats Bar */}
          <div className="flex items-center gap-4 sm:gap-6 mt-8 flex-wrap justify-center text-xs font-black">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3" />
                ))}
              </span>
              <span className="text-white">Verified Client Endorsements</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300 flex items-center gap-1.5">
              <span className="text-[#d4ff3f]">⚡</span> Sub-Second Edge Delivery
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300 flex items-center gap-1.5">
              <span className="text-[#d4ff3f]">✓</span> 100% Direct Client Deliverables
            </div>
          </div>
        </div>

        {/* Social Proof Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative w-full mb-12">
          {reviews.map((review, idx) => {
            const initial = review.name ? review.name.charAt(0).toUpperCase() : "C";
            const liveLink = review.liveUrl || (review.projectSlug ? `/portfolio/${review.projectSlug}` : null);

            return (
              <div
                key={review._id || idx}
                className="relative flex flex-col bg-white/5 border border-white/10 hover:border-[#d4ff3f]/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Quote Mark */}
                <FaQuoteLeft className="w-8 h-8 text-[#d4ff3f]/20 absolute top-6 right-6 pointer-events-none group-hover:text-[#d4ff3f]/40 transition-colors" />

                {/* Trust Verification Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-[#d4ff3f] bg-[#d4ff3f]/10 border border-[#d4ff3f]/30 px-2 py-0.5 rounded-full">
                    <FaCheckCircle className="w-2.5 h-2.5" />
                    {review.verifiedBadge || "Verified Client"}
                  </span>
                  {review.location && (
                    <span className="text-[10px] text-gray-400 font-bold flex items-center gap-1">
                      <FaMapMarkerAlt className="w-2.5 h-2.5 text-gray-500" />
                      {review.location.split(",")[0]}
                    </span>
                  )}
                </div>

                {/* 5-Star Rating */}
                <div className="flex text-yellow-400 mb-4 gap-1">
                  {[...Array(Math.max(1, Math.min(5, review.rating || 5)))].map((_, i) => (
                    <FaStar key={i} className="w-3.5 h-3.5" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6 flex-grow">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Verified Live Link */}
                {liveLink && (
                  <div className="mb-4 pt-3 border-t border-white/5">
                    {review.liveUrl ? (
                      <a
                        href={review.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4ff3f] hover:underline"
                      >
                        <span>Visit Live Site</span>
                        <FaExternalLinkAlt className="w-2.5 h-2.5" />
                      </a>
                    ) : (
                      <Link
                        href={liveLink}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4ff3f] hover:underline"
                      >
                        <span>View Project Case Study</span>
                        <FaArrowRight className="w-2.5 h-2.5" />
                      </Link>
                    )}
                  </div>
                )}

                {/* Author Information */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#d4ff3f] text-black font-black text-xs flex items-center justify-center border-2 border-black shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
                    {initial}
                  </div>
                  <div className="min-w-0">
                    <div className="font-black text-sm text-white truncate">
                      {review.name}
                    </div>
                    <div className="text-[11px] font-bold text-gray-400 truncate">
                      {review.role}
                    </div>
                    {review.company && (
                      <div className="text-[10px] font-semibold text-[#d4ff3f]/80 truncate">
                        {review.company}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Controls: View All Testimonials & Write Review Modal Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:scale-105 active:scale-95 transition-transform"
          >
            Explore All Client Reviews
            <FaArrowRight className="w-3 h-3" />
          </Link>

          {showSubmitModal && <TestimonialSubmitModal />}
        </div>
      </div>
    </section>
  );
}
