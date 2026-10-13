"use client";

import React, { useState, useRef } from "react";
import { FaStar, FaCheck, FaPaperPlane } from "react-icons/fa";
import { trackFormSubmission } from "@/lib/analytics";

interface TestimonialFormProps {
  onSuccess?: () => void;
  title?: string;
  subtitle?: string;
}

export default function TestimonialForm({
  onSuccess,
  title = "Share Your Experience",
  subtitle = "Have we collaborated on a web, mobile, or UI/UX project? We value your direct feedback to help us continually elevate our craft.",
}: TestimonialFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [userRating, setUserRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    const name = formData.get("name")?.toString().trim();
    const role = formData.get("role")?.toString().trim() || "Client";
    const text = formData.get("text")?.toString().trim();
    const rating = Number(userRating) || 5;

    if (!name || !text) {
      setSubmitError("Please fill in your name and review experience.");
      setIsSubmitting(false);
      return;
    }

    const payload = { name, role, rating, text };

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        trackFormSubmission("testimonial_review_form", {
          rating,
          role,
        });
        setSubmitSuccess(true);
        form.reset();
        setUserRating(5);
        setHoverRating(0);
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setSubmitError(result.error || "Failed to submit review. Please try again.");
      }
    } catch (error: any) {
      console.error("Failed to submit review", error);
      setSubmitError("Network connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 shadow-[8px_8px_0px_0px_#000] text-black">
      <div className="max-w-2xl mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[1px_1px_0px_0px_#000]">
          <FaPaperPlane className="w-2.5 h-2.5" /> Client Feedback
        </span>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm font-medium text-gray-700 mt-2 leading-relaxed">
          {subtitle}
        </p>
      </div>

      {submitSuccess ? (
        <div className="p-8 bg-[#d4ff3f]/30 border-2 border-black rounded-2xl text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#d4ff3f] text-black border-2 border-black flex items-center justify-center mx-auto text-xl font-black">
            <FaCheck />
          </div>
          <h4 className="text-xl font-black text-black">Thank You for Your Feedback!</h4>
          <p className="text-sm font-bold text-gray-800 max-w-md mx-auto">
            Your review has been submitted successfully and added to our client testimonials.
          </p>
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black hover:scale-105 active:scale-95 transition-transform"
          >
            Submit Another Review
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {submitError && (
            <div className="bg-red-500/10 border-2 border-red-500 text-red-700 p-4 rounded-xl text-xs font-bold">
              ⚠️ {submitError}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 text-black text-sm font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
                placeholder="e.g. Sarah Jenkins"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
                Role &amp; Company
              </label>
              <input
                type="text"
                name="role"
                className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 text-black text-sm font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
                placeholder="e.g. Founder at TechNest"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
              Your Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 items-center flex-wrap">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => {
                    setUserRating(star);
                    setHoverRating(0);
                  }}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 focus:outline-none cursor-pointer transition-transform hover:scale-110 active:scale-95"
                  aria-label={`Rate ${star} stars`}
                >
                  <FaStar
                    className={`w-7 h-7 transition-colors ${
                      (hoverRating || userRating) >= star
                        ? "text-yellow-400 drop-shadow-[1px_1px_0px_#000]"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
              <span className="text-xs font-black text-gray-700 ml-2">
                {hoverRating || userRating} / 5 Stars
              </span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-black mb-2 uppercase tracking-wider">
              Describe Your Experience <span className="text-red-500">*</span>
            </label>
            <textarea
              name="text"
              required
              rows={4}
              className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 text-black text-sm font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400 resize-none"
              placeholder="How did IntegersDev help your brand? Mention project speed, design quality, communications, or business results..."
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform disabled:opacity-50 cursor-pointer"
          >
            {isSubmitting ? "Submitting Review..." : "Submit Client Testimonial"}
            <FaPaperPlane className="w-3 h-3" />
          </button>
        </form>
      )}
    </div>
  );
}
