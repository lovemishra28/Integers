"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft, FaArrowRight, FaTimes, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { ReviewItem, VERIFIED_PORTFOLIO_REVIEWS } from "@/data/reviews";
import TestimonialForm from "./TestimonialForm";

interface TestimonialsProps {
  initialReviews?: ReviewItem[];
  showSubmitModal?: boolean;
}

export default function Testimonials({
  initialReviews = VERIFIED_PORTFOLIO_REVIEWS,
  showSubmitModal = true,
}: TestimonialsProps) {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReviewSubmitted = () => {
    // Optionally fetch newly approved reviews or keep modal state clean
    setIsModalOpen(false);
  };

  return (
    <section
      id="reviews"
      className="py-20 md:py-28 px-6 sm:px-12 md:px-20 bg-[#111111] text-white relative overflow-hidden flex flex-col items-center scroll-mt-12"
    >
      {/* Decorative Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#d4ff3f] rounded-full opacity-10 blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#d4ff3f] rounded-full opacity-10 blur-[100px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 relative max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1a1a1a] border border-[#d4ff3f]/40 text-[#d4ff3f] rounded-full text-xs font-black uppercase tracking-wider mb-4 shadow-[1px_1px_0px_0px_#000]">
            <FaCheckCircle className="w-3 h-3 text-[#d4ff3f]" />
            Client Endorsements &amp; Proof
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-white tracking-tight leading-[1.15]">
            Trusted by Founders, Local Businesses &amp; Modern Brands
          </h2>
          <p className="text-sm sm:text-base font-medium text-gray-400 mt-4 max-w-2xl leading-relaxed">
            Real feedback from partners who launched custom Next.js websites, UI/UX design systems, and mobile platforms with our Gwalior engineering collective.
          </p>

          {/* Key Stats Bar */}
          <div className="flex items-center gap-6 mt-8 flex-wrap justify-center text-xs font-black">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
              <span className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-3 h-3" />
                ))}
              </span>
              <span className="text-white">5.0 Average Rating</span>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300">
              ⚡ 100% Core Web Vitals Pass
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-gray-300">
              🎯 25+ Completed Sprints
            </div>
          </div>
        </div>

        {/* Social Proof Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative w-full mb-12">
          {reviews.map((review, idx) => (
            <div
              key={review._id || idx}
              className="relative flex flex-col bg-white/5 border border-white/10 hover:border-[#d4ff3f]/60 rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Quote Mark */}
              <FaQuoteLeft className="w-8 h-8 text-[#d4ff3f]/30 absolute top-6 right-6 pointer-events-none group-hover:text-[#d4ff3f]/60 transition-colors" />

              {/* Star Rating */}
              <div className="flex text-yellow-400 mb-4 gap-1">
                {[...Array(Math.max(1, Math.min(5, review.rating || 5)))].map((_, i) => (
                  <FaStar key={i} className="w-3.5 h-3.5" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-sm text-gray-300 font-medium leading-relaxed mb-6 flex-grow">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Verified Case Study Link if available */}
              {review.projectSlug && (
                <Link
                  href={`/portfolio/${review.projectSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4ff3f] mb-5 hover:underline"
                >
                  <span>Explore {review.projectName || "Project"}</span>
                  <FaExternalLinkAlt className="w-2.5 h-2.5" />
                </Link>
              )}

              {/* Author Meta */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#d4ff3f] text-black font-black text-xs flex items-center justify-center border-2 border-black shrink-0">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="font-black text-sm text-white truncate">
                    {review.name}
                  </div>
                  <div className="text-[11px] font-bold text-gray-400 truncate uppercase tracking-wider">
                    {review.role || "Client"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Controls: View All Testimonials & Write Review Modal Trigger */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full pt-4">
          <Link
            href="/testimonials"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:scale-105 active:scale-95 transition-transform"
          >
            Explore Full Testimonials Page
            <FaArrowRight className="w-3 h-3" />
          </Link>

          {showSubmitModal && (
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-transparent text-white border-2 border-gray-700 hover:border-[#d4ff3f] hover:text-[#d4ff3f] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              Share Your Feedback
            </button>
          )}
        </div>
      </div>

      {/* Review Submission Modal (keeps the social proof grid clean and uninterrupted) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black text-white hover:bg-[#d4ff3f] hover:text-black flex items-center justify-center border-2 border-black transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>
              <TestimonialForm
                onSuccess={handleReviewSubmitted}
                title="Share Your Client Experience"
                subtitle="Your review will be verified and added to our testimonials section."
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
