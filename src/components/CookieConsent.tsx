"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaCookieBite, FaShieldAlt, FaTimes, FaCheck } from "react-icons/fa";
import { updateAnalyticsConsent } from "@/lib/analytics";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Check if user already gave or denied consent
    try {
      const stored = localStorage.getItem("integers_cookie_consent");
      if (!stored) {
        // Small delay so it doesn't flicker or block initial first paint
        const timer = setTimeout(() => {
          setIsVisible(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      // If localStorage is unavailable, do not force banner
    }
  }, []);

  const handleAcceptAll = () => {
    updateAnalyticsConsent(true);
    setIsVisible(false);
    setHasInteracted(true);
  };

  const handleEssentialOnly = () => {
    updateAnalyticsConsent(false);
    setIsVisible(false);
    setHasInteracted(true);
  };

  if (!isVisible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie and Privacy Consent Notice"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="bg-white border-2 border-black rounded-3xl p-5 sm:p-6 shadow-[8px_8px_0px_0px_#000] text-black relative">
        {/* Top Header Badge */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[#d4ff3f] border border-black flex items-center justify-center text-black font-black text-sm shadow-[1px_1px_0px_0px_#000]">
              <FaCookieBite className="w-4 h-4" />
            </span>
            <span className="font-black text-sm uppercase tracking-wider text-black">
              Cookie &amp; Privacy Notice
            </span>
          </div>

          <button
            onClick={handleEssentialOnly}
            aria-label="Dismiss cookie notice (essential cookies only)"
            className="text-gray-400 hover:text-black transition-colors p-1"
          >
            <FaTimes className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Notice Body */}
        <p className="text-xs text-gray-700 font-medium leading-relaxed mb-4">
          We use privacy-friendly Google Analytics to monitor page performance, Core Web Vitals, and inquiry funnels. No third-party ad profiling cookies are used. Learn more in our{" "}
          <Link
            href="/privacy-policy"
            className="text-black font-bold underline hover:text-[#d4ff3f]"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
          <button
            type="button"
            onClick={handleAcceptAll}
            className="flex-1 py-2.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000] hover:translate-y-[-1px] active:translate-y-[1px] transition-transform flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <FaCheck className="w-3 h-3" />
            Accept All
          </button>

          <button
            type="button"
            onClick={handleEssentialOnly}
            className="flex-1 py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-white text-gray-700 border-2 border-black/30 hover:border-black hover:text-black transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <FaShieldAlt className="w-3 h-3" />
            Essential Only
          </button>
        </div>
      </div>
    </aside>
  );
}
