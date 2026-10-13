/**
 * Google Analytics 4 (GA4) & Conversion Tracking Helper
 * IntegersDev - Web Development Company in Gwalior
 * 
 * Provides type-safe event tracking, consent mode handling,
 * and developer console logs for debugging.
 */

// Extend global Window interface for gtag and dataLayer
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export type GAEventName =
  | "form_submission"
  | "generate_lead"
  | "whatsapp_click"
  | "phone_click"
  | "pricing_tier_select"
  | "select_item"
  | "cookie_consent_update";

interface BaseEventParams {
  [key: string]: any;
}

/**
 * Sends a custom or standard GA4 event via window.gtag.
 * Gracefully handles SSR environments and logs to console in development.
 */
export function trackEvent(
  action: GAEventName | string,
  params: BaseEventParams = {}
): void {
  if (typeof window === "undefined") return;

  const eventPayload = {
    ...params,
    page_location: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", action, eventPayload);
  }

  // Developer logging in development mode
  if (process.env.NODE_ENV !== "production") {
    console.log(
      `%c[GA4 Event] ${action}`,
      "color: #000; font-weight: 900; background: #d4ff3f; padding: 2px 6px; border: 1px solid #000; border-radius: 4px;",
      eventPayload
    );
  }
}

/**
 * Tracks lead / inquiry form submissions across the platform.
 */
export function trackFormSubmission(
  formName: string,
  metadata: Record<string, any> = {}
): void {
  trackEvent("form_submission", {
    form_name: formName,
    event_category: "Engagement",
    event_label: formName,
    ...metadata,
  });

  // Also trigger Google's standard recommended conversion event
  trackEvent("generate_lead", {
    form_name: formName,
    ...metadata,
  });
}

/**
 * Tracks clicks on WhatsApp inquiry and consultation links.
 */
export function trackWhatsAppClick(
  source: string,
  destinationUrl?: string
): void {
  trackEvent("whatsapp_click", {
    source,
    contact_method: "whatsapp",
    destination_url: destinationUrl || "https://wa.me/919981097501",
    event_category: "Contact",
    event_label: `WhatsApp from ${source}`,
  });
}

/**
 * Tracks clicks on direct phone call links (tel:).
 */
export function trackPhoneClick(
  source: string,
  phoneNumber?: string
): void {
  trackEvent("phone_click", {
    source,
    contact_method: "phone",
    phone_number: phoneNumber || "+91 9981097501",
    event_category: "Contact",
    event_label: `Phone Call from ${source}`,
  });
}

/**
 * Tracks when a user selects or configures a pricing tier.
 */
export function trackPricingTierSelection(
  tierName: string,
  price?: string | number,
  currency: string = "INR",
  billingCycle: string = "project"
): void {
  trackEvent("pricing_tier_select", {
    tier_name: tierName,
    price: price,
    currency: currency,
    billing_cycle: billingCycle,
    event_category: "Ecommerce",
    event_label: `Selected ${tierName} (${currency} ${price})`,
  });

  // Standard GA4 ecommerce item selection event
  const numPrice =
    typeof price === "number"
      ? price
      : parseFloat(String(price || 0).replace(/[^0-9.]/g, "")) || 0;

  trackEvent("select_item", {
    item_list_name: "Pricing Plans",
    items: [
      {
        item_id: tierName.toLowerCase().replace(/\s+/g, "_"),
        item_name: tierName,
        price: numPrice,
        currency: currency,
      },
    ],
  });
}

/**
 * Updates Google Analytics consent mode dynamically.
 */
export function updateAnalyticsConsent(granted: boolean): void {
  if (typeof window === "undefined") return;

  const status = granted ? "granted" : "denied";

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: status,
    });
  }

  try {
    localStorage.setItem("integers_cookie_consent", status);
  } catch (e) {
    // ignore localStorage exceptions
  }

  trackEvent("cookie_consent_update", {
    analytics_storage: status,
  });
}
