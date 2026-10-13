"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaGlobe, FaUser, FaEnvelope, FaPhone, FaArrowRight, FaLock, FaCheckCircle, FaSpinner } from "react-icons/fa";
import { submitWebsiteAuditAction } from "@/actions/contact";
import { trackFormSubmission } from "@/lib/analytics";

export default function AuditForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    let rawUrl = (formData.get("url") || "").toString().trim();
    if (rawUrl && !rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
      rawUrl = `https://${rawUrl}`;
      formData.set("url", rawUrl);
    }

    try {
      const result = await submitWebsiteAuditAction(formData);

      if (result.success) {
        // Track unified GA4 conversion event
        trackFormSubmission("free_website_audit_form", {
          auditedUrl: rawUrl,
          auditFocus: formData.get("auditFocus")?.toString() || "speed_and_seo",
        });

        // Navigate to dedicated thank-you page for conversion tracking
        const params = new URLSearchParams();
        if (result.url) params.set("url", result.url);
        if (result.name) params.set("name", result.name);

        router.push(`/free-website-audit/thank-you?${params.toString()}`);
      } else {
        setErrorMessage(result.error || "Failed to submit audit request. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err: any) {
      console.error("Audit form submission error", err);
      setErrorMessage("Network connection error. Please try again or reach out directly on WhatsApp.");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_0px_#000] text-black relative">
      <div className="mb-8">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase tracking-wider mb-3 shadow-[1px_1px_0px_0px_#000]">
          ⚡ 100% Free • 24h Turnaround
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black tracking-tight leading-tight">
          Request Your Free Audit
        </h2>
        <p className="text-sm font-medium text-gray-700 mt-2 leading-relaxed">
          Enter your website details below. Our senior engineering collective will run a comprehensive diagnostic and email your actionable report within 24 hours.
        </p>
      </div>

      {errorMessage && (
        <div
          className="p-4 mb-6 bg-red-50 border-2 border-red-500 rounded-2xl text-xs sm:text-sm font-bold text-red-800"
          role="alert"
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5" aria-label="Free Website Audit Form">
        {/* Website URL Input */}
        <div>
          <label htmlFor="audit-url" className="block text-xs font-black text-black uppercase tracking-wider mb-2">
            Website URL <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FaGlobe className="w-4 h-4 text-black" />
            </div>
            <input
              id="audit-url"
              type="text"
              name="url"
              required
              aria-required="true"
              placeholder="e.g. yourbusiness.com or https://example.com"
              className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9f5] border-2 border-black rounded-2xl text-sm font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4ff3f] transition-all"
            />
          </div>
          <p className="text-[11px] font-medium text-gray-500 mt-1.5">
            We analyze mobile responsiveness, Core Web Vitals, and SEO headers.
          </p>
        </div>

        {/* Full Name Input */}
        <div>
          <label htmlFor="audit-name" className="block text-xs font-black text-black uppercase tracking-wider mb-2">
            Your Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FaUser className="w-4 h-4 text-black" />
            </div>
            <input
              id="audit-name"
              type="text"
              name="name"
              required
              aria-required="true"
              autoComplete="name"
              placeholder="e.g. Vinay Sharma"
              className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9f5] border-2 border-black rounded-2xl text-sm font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4ff3f] transition-all"
            />
          </div>
        </div>

        {/* Business Email Input */}
        <div>
          <label htmlFor="audit-email" className="block text-xs font-black text-black uppercase tracking-wider mb-2">
            Email Address (Where to send report) <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FaEnvelope className="w-4 h-4 text-black" />
            </div>
            <input
              id="audit-email"
              type="email"
              name="email"
              required
              aria-required="true"
              autoComplete="email"
              placeholder="e.g. founder@yourcompany.com"
              className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9f5] border-2 border-black rounded-2xl text-sm font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4ff3f] transition-all"
            />
          </div>
          <p className="text-[11px] font-medium text-gray-500 mt-1.5">
            Zero spam. We will only send your audit report and recommendations.
          </p>
        </div>

        {/* Optional Phone / WhatsApp */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label htmlFor="audit-phone" className="block text-xs font-black text-black uppercase tracking-wider">
              Phone / WhatsApp Number
            </label>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Optional</span>
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <FaPhone className="w-4 h-4 text-black" />
            </div>
            <input
              id="audit-phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              placeholder="e.g. +91 99810 97501"
              className="w-full pl-11 pr-4 py-3.5 bg-[#f8f9f5] border-2 border-black rounded-2xl text-sm font-bold text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#d4ff3f] transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-sm uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_#000] hover:scale-[1.02] active:scale-[0.98] transition-transform disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <FaSpinner className="w-4 h-4 animate-spin" />
              <span>Analyzing &amp; Queueing Audit...</span>
            </>
          ) : (
            <>
              <span>Get My Free Website Audit</span>
              <FaArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>

        {/* Trust Badges Under Form */}
        <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-gray-600">
          <div className="flex items-center gap-1.5">
            <FaLock className="w-3 h-3 text-black" />
            <span>DPDPA 2023 Compliant</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FaCheckCircle className="w-3 h-3 text-black" />
            <span>No Sales Pressure Guarantee</span>
          </div>
        </div>
      </form>
    </div>
  );
}
