import {
  trackEvent,
  trackFormSubmission,
  trackWhatsAppClick,
  trackPhoneClick,
  trackPricingTierSelection,
  updateAnalyticsConsent,
} from '../src/lib/analytics.ts';

const capturedEvents = [];

// Mock browser environment
globalThis.window = {
  location: {
    href: 'https://integersdev.in/pricing',
    pathname: '/pricing',
  },
  gtag: function(type, action, params) {
    capturedEvents.push({ type, action, params });
  },
};

globalThis.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null; },
  setItem(key, val) { this.store[key] = val; },
};

console.log('Testing Analytics Trackers:');

// 1. Form submissions
trackFormSubmission('contact_page_form', { service: 'Next.js Development', hasBudget: true });
trackFormSubmission('free_website_audit_form', { auditedUrl: 'https://example.com' });

// 2. WhatsApp click
trackWhatsAppClick('Hero Consultation Button', 'https://wa.me/919981097501?text=Hello');

// 3. Phone click
trackPhoneClick('Footer Phone Link', '+919981097501');

// 4. Pricing tier selection
trackPricingTierSelection('Standard', 249, 'USD', 'project');

// 5. Consent update
updateAnalyticsConsent(true);

console.log(`\nCaptured ${capturedEvents.length} GA4 Calls:`);
capturedEvents.forEach((ev, i) => {
  console.log(`[${i + 1}] Type: ${ev.type} | Action: ${ev.action}`);
  console.log('    Params:', JSON.stringify(ev.params));
});
