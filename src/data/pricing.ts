export interface PricingTier {
  id: "basic" | "standard" | "turbo" | "enterprise";
  name: string;
  tagline: string;
  badge: string;
  popular?: boolean;
  basePriceUSD: number;
  basePriceINR: number;
  priceDisplayUSD: string;
  priceDisplayINR: string;
  retainerPriceUSD: number;
  retainerPriceINR: number;
  retainerDisplayUSD: string;
  retainerDisplayINR: string;
  deliveryTime: string;
  warranty: string;
  features: string[];
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Ideal for early MVPs, landing pages & design validation",
    badge: "Fast MVP",
    popular: false,
    basePriceUSD: 129,
    basePriceINR: 12250,
    priceDisplayUSD: "$129",
    priceDisplayINR: "₹12,250",
    retainerPriceUSD: 103,
    retainerPriceINR: 9800,
    retainerDisplayUSD: "$103 / mo",
    retainerDisplayINR: "₹9,800 / mo",
    deliveryTime: "3 – 5 Days",
    warranty: "7 Days Post-Launch Warranty",
    features: [
      "Custom Figma UI/UX Design Creation",
      "2 Iterative Design Revisions",
      "Mobile Responsive Viewports",
      "Figma Source File Handoff",
      "7 Days Post-Launch Bug Fix Warranty",
    ],
  },
  {
    id: "standard",
    name: "Standard",
    tagline: "Complete production frontend & backend ready to convert",
    badge: "Most Popular",
    popular: true,
    basePriceUSD: 249,
    basePriceINR: 23700,
    priceDisplayUSD: "$249",
    priceDisplayINR: "₹23,700",
    retainerPriceUSD: 199,
    retainerPriceINR: 18960,
    retainerDisplayUSD: "$199 / mo",
    retainerDisplayINR: "₹18,960 / mo",
    deliveryTime: "7 – 10 Days",
    warranty: "14 Days Post-Launch Warranty",
    features: [
      "Full Next.js / React Frontend Development",
      "Complete Backend & Database Integration",
      "Interactive Lead Forms & Validation",
      "90+ Lighthouse Performance & SEO",
      "Production Cloud Deployment Setup",
      "14 Days Post-Launch Bug Fix Warranty",
    ],
  },
  {
    id: "turbo",
    name: "Turbo",
    tagline: "End-to-end fullstack platform built for serious scale & traffic",
    badge: "Scale & App",
    popular: false,
    basePriceUSD: 449,
    basePriceINR: 42750,
    priceDisplayUSD: "$449",
    priceDisplayINR: "₹42,750",
    retainerPriceUSD: 359,
    retainerPriceINR: 34200,
    retainerDisplayUSD: "$359 / mo",
    retainerDisplayINR: "₹34,200 / mo",
    deliveryTime: "2 – 3 Weeks",
    warranty: "30 Days Priority Warranty",
    features: [
      "Full Web & Mobile App Dev (PWA/Hybrid)",
      "Advanced Cloud DB & API Integrations",
      "Custom Admin / CMS Dashboard",
      "Priority Sprint Delivery & Monitoring",
      "30 Days Priority Post-Launch Warranty",
    ],
  },
];

export const ENTERPRISE_TIER = {
  id: "enterprise" as const,
  name: "Enterprise",
  tagline: "Bespoke digital architecture, multi-tenant systems & dedicated engineering",
  badge: "Custom Scale",
  priceDisplayUSD: "Custom Quote",
  priceDisplayINR: "Custom Quote",
  deliveryTime: "Milestone Sprints",
  warranty: "60 – 90 Days SLA Guarantee",
};
