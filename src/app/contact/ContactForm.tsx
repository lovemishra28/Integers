"use client";

import React, { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { FaCheck, FaPaperPlane, FaWhatsapp, FaBolt, FaTimes } from "react-icons/fa";
import { submitContactForm } from "@/actions/contact";
import { siteConfig } from "@/config/site";
import { trackFormSubmission } from "@/lib/analytics";

const PLAN_INFO: Record<string, { name: string; price: string; badge: string }> = {
  basic: { name: "Basic Plan", price: "$129 / ₹12,250", badge: "Fast MVP" },
  standard: { name: "Standard Plan", price: "$249 / ₹23,700", badge: "Most Popular" },
  turbo: { name: "Turbo Plan", price: "$449 / ₹42,750", badge: "Scale & App" },
  enterprise: { name: "Enterprise Plan", price: "Custom Quote", badge: "Bespoke" },
};

function ContactFormInner() {
  const searchParams = useSearchParams();
  const rawPlan = searchParams.get("plan")?.toLowerCase() || "";
  const [selectedPlan, setSelectedPlan] = useState<string>(rawPlan);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (rawPlan) {
      setSelectedPlan(rawPlan);
      const info = PLAN_INFO[rawPlan] || {
        name: rawPlan.charAt(0).toUpperCase() + rawPlan.slice(1) + " Plan",
        price: "",
        badge: "Selected",
      };
      if (messageInputRef.current && !messageInputRef.current.value) {
        messageInputRef.current.value = `Hi IntegersDev team, I'm interested in getting started with the ${info.name}${info.price ? ` (${info.price})` : ""}. Let's discuss requirements!`;
      }
    }
  }, [rawPlan]);

  const currentPlanInfo = selectedPlan
    ? PLAN_INFO[selectedPlan] || {
        name: selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1) + " Plan",
        price: "",
        badge: "Selected Tier",
      }
    : null;

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = formRef.current;
    if (!form) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        trackFormSubmission("contact_page_form", {
          service: formData.get("service")?.toString() || (selectedPlan ? `Plan: ${selectedPlan}` : "Bespoke Project"),
          hasBudget: Boolean(formData.get("budget")),
        });
        setSuccess(true);
        form.reset();
      } else {
        setErrorMessage(result.error || "Failed to send message. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage("Network connection error. Please try again or reach out directly on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[8px_8px_0px_0px_#d4ff3f] relative">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-4">
        Direct Project Intake
      </div>
      <h2 className="text-2xl sm:text-3xl font-black text-black mb-6">
        Send Us a Message
      </h2>

      {currentPlanInfo && (
        <div className="mb-6 p-4 bg-[#f8f9f5] border-2 border-black rounded-2xl flex items-center justify-between gap-3 shadow-[3px_3px_0px_0px_#000]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center text-xs font-black text-black shrink-0">
              <FaBolt className="w-3.5 h-3.5 text-black" />
            </div>
            <div>
              <div className="text-xs font-black text-black flex items-center gap-2">
                <span>{currentPlanInfo.name}</span>
                <span className="text-[10px] bg-black text-[#d4ff3f] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">
                  {currentPlanInfo.badge}
                </span>
              </div>
              {currentPlanInfo.price && (
                <div className="text-[11px] font-bold text-gray-600 mt-0.5">
                  Starting from {currentPlanInfo.price}
                </div>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              setSelectedPlan("");
              if (messageInputRef.current) {
                messageInputRef.current.value = "";
              }
            }}
            className="text-[11px] font-black text-gray-500 hover:text-black flex items-center gap-1 px-2.5 py-1 rounded-lg border border-black/20 hover:border-black transition-colors cursor-pointer"
            title="Clear selected plan"
          >
            <FaTimes className="w-2.5 h-2.5" /> Clear
          </button>
        </div>
      )}

      {success ? (
        <div className="bg-[#d4ff3f] text-black p-8 rounded-2xl font-bold text-center space-y-3 border-2 border-black shadow-[4px_4px_0px_0px_#000]">
          <div className="text-4xl">🎉</div>
          <h3 className="text-xl font-black">Message Sent Successfully!</h3>
          <p className="text-xs sm:text-sm font-semibold text-gray-900 max-w-md mx-auto">
            Thank you for reaching out. Vinay or Aryan will review your brief and get back to you within 24 hours.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="px-6 py-2.5 bg-black text-white text-xs rounded-full font-black uppercase tracking-wider hover:scale-105 transition-transform"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {selectedPlan && <input type="hidden" name="plan" value={selectedPlan} />}

          {errorMessage && (
            <div className="bg-red-50 border-2 border-red-500 text-red-700 text-xs p-3.5 rounded-xl font-bold">
              {errorMessage}
            </div>
          )}

          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-gray-600 mb-2">
              Your Name <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                required
                placeholder="First Name"
                className="w-full bg-[#f8f9f5] border-2 border-black rounded-xl px-4 py-3 text-sm text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
              />
              <input
                type="text"
                name="lastName"
                required
                placeholder="Last Name"
                className="w-full bg-[#f8f9f5] border-2 border-black rounded-xl px-4 py-3 text-sm text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-gray-600 mb-2">
                Work Email <span className="text-gray-400 font-normal lowercase">(for proposal pdf)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="you@company.com"
                className="w-full bg-[#f8f9f5] border-2 border-black rounded-xl px-4 py-3 text-sm text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-[11px] font-black uppercase tracking-wider text-gray-600 mb-2">
                Phone / WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <div className="w-16 bg-[#f8f9f5] border-2 border-black rounded-xl flex items-center justify-center text-xs font-black text-black">
                  🇮🇳 +91
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="99810 97501"
                  className="flex-1 bg-[#f8f9f5] border-2 border-black rounded-xl px-4 py-3 text-sm text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-black uppercase tracking-wider text-gray-600 mb-2">
              Project Brief &amp; Requirements <span className="text-red-500">*</span>
            </label>
            <textarea
              ref={messageInputRef}
              name="message"
              required
              rows={5}
              placeholder="Tell us about what you want to build (website, MVP, redesign, timeline, target audience)..."
              className="w-full bg-[#f8f9f5] border-2 border-black rounded-xl px-4 py-3 text-sm text-black font-medium focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400 resize-none"
            ></textarea>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
            >
              {isSubmitting ? "Submitting Brief..." : "Submit Project Inquiry"}
              <FaPaperPlane className="w-3 h-3" />
            </button>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#d4ff3f] transition-all"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              Prefer WhatsApp?
            </a>
          </div>

          <p className="text-[11px] font-bold text-gray-500 pt-2">
            🔒 We respect your privacy. No spam. Direct response within 24 hours.
          </p>
        </form>
      )}
    </div>
  );
}

export default function ContactForm() {
  return (
    <Suspense
      fallback={
        <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-10 shadow-[8px_8px_0px_0px_#d4ff3f] animate-pulse min-h-[460px] flex items-center justify-center">
          <div className="text-xs font-black uppercase text-gray-400">Loading Inquiry Form...</div>
        </div>
      }
    >
      <ContactFormInner />
    </Suspense>
  );
}
