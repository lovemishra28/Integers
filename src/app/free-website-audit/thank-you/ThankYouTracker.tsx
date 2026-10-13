"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ThankYouTracker() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url") || "";
  const name = searchParams.get("name") || "";

  useEffect(() => {
    if (typeof window !== "undefined") {
      // 1. Google Analytics 4 standard lead generation conversion event
      if ((window as any).gtag) {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-CONVERSION_ID",
          event_category: "Audit",
          event_label: url,
          value: 1.0,
        });
        (window as any).gtag("event", "generate_lead", {
          currency: "INR",
          value: 1.0,
          lead_source: "/free-website-audit",
          website_url: url,
        });
      }

      // 2. Google Tag Manager dataLayer event push
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "audit_conversion",
          audit_url: url,
          lead_name: name,
          conversion_time: new Date().toISOString(),
        });
      }
    }
  }, [url, name]);

  return null;
}
