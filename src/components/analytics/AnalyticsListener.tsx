"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  trackWhatsAppClick,
  trackPhoneClick,
  trackPricingTierSelection,
} from "@/lib/analytics";

/**
 * Global Analytics Delegated Event Listener
 * Catches sitewide clicks on WhatsApp, Phone (tel:), and Pricing tier elements
 * without requiring manual listeners on every individual component.
 */
export default function AnalyticsListener() {
  const pathname = usePathname();

  // 1. Track virtual pageviews on client-side route changes
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [pathname]);

  // 2. Global delegated click listener for WhatsApp, Phone, and Pricing
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      // Find closest anchor tag or interactive button
      const anchor = target.closest("a");
      const button = target.closest("button");
      const trackableElement = target.closest("[data-track-plan]");

      // Check for WhatsApp links
      if (anchor && anchor.href) {
        const href = anchor.href;

        if (href.includes("wa.me") || href.includes("whatsapp.com")) {
          const sourceText =
            anchor.getAttribute("aria-label") ||
            anchor.innerText?.trim() ||
            anchor.title ||
            "WhatsApp Link";
          trackWhatsAppClick(
            `${sourceText} (${pathname})`,
            href
          );
        }

        // Check for Phone (tel:) links
        if (href.startsWith("tel:")) {
          const phoneNum = href.replace("tel:", "").trim();
          const sourceText =
            anchor.getAttribute("aria-label") ||
            anchor.innerText?.trim() ||
            "Phone Link";
          trackPhoneClick(
            `${sourceText} (${pathname})`,
            phoneNum
          );
        }
      }

      // Check for explicit data-track-plan attributes
      if (trackableElement) {
        const planName = trackableElement.getAttribute("data-track-plan") || "Plan";
        const planPrice = trackableElement.getAttribute("data-track-price") || "";
        const currency = trackableElement.getAttribute("data-track-currency") || "INR";
        const cycle = trackableElement.getAttribute("data-track-cycle") || "project";
        trackPricingTierSelection(planName, planPrice, currency, cycle);
      }
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [pathname]);

  return null;
}
