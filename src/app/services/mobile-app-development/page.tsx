import React from "react";
import Link from "next/link";
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaBell,
  FaWifi,
  FaRocket,
  FaArrowRight,
  FaShieldAlt,
  FaDatabase,
  FaFingerprint,
} from "react-icons/fa";
import type { Metadata } from "next";
import ServicePageTemplate, {
  IncludedFeature,
  ProcessStep,
  TechItem,
  PricingTeaser,
  RelatedCaseStudy,
  OtherServiceLink,
} from "@/components/ServicePageTemplate";
import { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "App Development Company Gwalior | iOS & Android Apps | IntegersDev",
  description:
    "Top app development company Gwalior. IntegersDev builds high-performance React Native iOS & Android apps with offline sync & push notifications. Get a free quote!",
  alternates: {
    canonical: "https://integersdev.in/services/mobile-app-development",
  },
  openGraph: {
    title: "App Development Company Gwalior | iOS & Android | IntegersDev",
    description:
      "Premier app development company in Gwalior. High-speed cross-platform mobile apps engineered by IntegersDev.",
    url: "https://integersdev.in/services/mobile-app-development",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "App Development Company Gwalior - IntegersDev",
      },
    ],
  },
};

const whatsIncludedData: IncludedFeature[] = [
  {
    icon: <FaMobileAlt className="w-5 h-5 text-black" />,
    title: "Cross-Platform React Native Engineering",
    desc: "Single high-performance codebase delivering native 60fps animations on both Apple iOS and Google Android, cutting development timelines and maintenance budgets in half.",
    deliverables: [
      "Unified TypeScript React Native application codebase",
      "Native bridge components for camera, GPS & biometrics",
      "Modular state architecture powered by Redux Toolkit / Zustand",
      "Pixel-perfect viewports for smartphones, foldables & tablets",
    ],
  },
  {
    icon: <FaWifi className="w-5 h-5 text-black" />,
    title: "Offline-First Data Storage & Local Persistence",
    desc: "Your customers shouldn't lose access when mobile data drops. We engineer resilient local databases with SQLite and WatermelonDB that sync automatically upon reconnection.",
    deliverables: [
      "Local relational database modeling with SQLite / WatermelonDB",
      "Background bi-directional data synchronization pipelines",
      "Optimistic UI updates for zero-lag button interactions",
      "Encrypted device storage for user tokens and cache",
    ],
  },
  {
    icon: <FaBell className="w-5 h-5 text-black" />,
    title: "Automated Push Notifications & Contextual Deep Links",
    desc: "Drive recurring retention and sales with instant push alerts. We integrate Firebase Cloud Messaging (FCM) and OneSignal with deep links directly into specific in-app screens.",
    deliverables: [
      "Firebase Cloud Messaging (FCM) & APNs certificate setup",
      "Automated transactional notification triggers (orders, updates)",
      "Universal deep link routing from WhatsApp, SMS, and email",
      "User notification permission management & preference centers",
    ],
  },
  {
    icon: <FaRocket className="w-5 h-5 text-black" />,
    title: "App Store & Google Play Store Submission",
    desc: "Navigating App Store review guidelines can be challenging. We manage developer certificates, privacy manifests, test builds, and compliance until your app is live.",
    deliverables: [
      "Apple Developer & Google Play Console account setup guidance",
      "Release bundle compilation (AAB for Android, IPA for iOS)",
      "TestFlight beta testing invitations & Play internal tracks",
      "App Store optimization (ASO) descriptions, tags & screenshots",
    ],
  },
  {
    icon: <FaDatabase className="w-5 h-5 text-black" />,
    title: "Unified Web & Mobile Backend Synchronization",
    desc: "We ensure your mobile app shares the exact same database and API infrastructure as your web platform, so user accounts, inventories, and orders stay in real-time sync.",
    deliverables: [
      "RESTful API endpoints with JWT session authentication",
      "Real-time WebSocket event dispatching for live order updates",
      "Razorpay, Stripe & UPI payment gateway integrations",
      "Rate-limited cloud backend deployed on Vercel or Node.js",
    ],
  },
  {
    icon: <FaFingerprint className="w-5 h-5 text-black" />,
    title: "Hardware Integration & Native Biometrics",
    desc: "Take full advantage of modern smartphone capabilities: Face ID, Touch ID, background GPS location tracking, QR barcode scanning, and push vibrations.",
    deliverables: [
      "Face ID & fingerprint biometric login mechanisms",
      "Live GPS geotagging and distance calculations",
      "Camera & image compression for customer photo uploads",
      "Haptic vibration micro-feedback on touch interactions",
    ],
  },
];

const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Feature Scoping & API Spec",
    desc: "We define your mobile app's core user stories, database schemas, third-party API dependencies, and offline requirements tailored for your Gwalior customer base.",
  },
  {
    step: "02",
    title: "Mobile UI/UX Design System",
    desc: "Aryan designs interactive mobile screens following iOS Human Interface Guidelines and Material 3, mapping bottom sheets, gestural drawers, and tab navigation.",
  },
  {
    step: "03",
    title: "React Native Core Build Sprint",
    desc: "Our engineering team develops the cross-platform application in TypeScript, integrating state models, push handlers, secure storage, and cloud API endpoints.",
  },
  {
    step: "04",
    title: "Store Submission & Launch Hypercare",
    desc: "We execute multi-device hardware testing, generate signed production builds, guide Apple/Google store compliance reviews, and monitor crash logs post-launch.",
  },
];

const techStackData: TechItem[] = [
  {
    name: "React Native",
    category: "Framework",
    badge: "Cross-Platform",
    desc: "Native 60fps performance on both iOS and Android with a single codebase.",
  },
  {
    name: "TypeScript",
    category: "Language",
    badge: "Type Safe",
    desc: "Predictable type contracts across mobile screens, API calls, and local storage.",
  },
  {
    name: "SQLite / WatermelonDB",
    category: "Local DB",
    desc: "Ultra-fast offline database persistence with reactive UI data binding.",
  },
  {
    name: "Firebase (FCM)",
    category: "Push Alerts",
    desc: "Reliable cross-platform push notifications and analytics telemetry.",
  },
  {
    name: "Redux Toolkit",
    category: "State Engine",
    desc: "Predictable global application state management with automated caching.",
  },
  {
    name: "Apple TestFlight",
    category: "iOS Testing",
    desc: "Seamless beta distribution for client stakeholders and test users.",
  },
  {
    name: "Play Console",
    category: "Android Store",
    badge: "Official",
    desc: "Staged rollouts, crash telemetry, and automated internal testing tracks.",
  },
  {
    name: "Node.js / REST",
    category: "Cloud Backend",
    desc: "Scalable backend endpoints sharing data with your web application.",
  },
];

const pricingTeaserData: PricingTeaser = {
  title: "Cross-Platform Mobile App Development Packages",
  badge: "iOS & Android",
  startingPrice: "₹28,000 / $299",
  timeframe: "3 to 4 Weeks",
  description:
    "Launch your business onto the Apple App Store and Google Play Store with a single, maintainable React Native codebase.",
  highlights: [
    "Native iOS & Android application builds",
    "Interactive mobile UI/UX design prototype in Figma",
    "Offline data caching & SQLite local storage",
    "Firebase push notifications & deep link setup",
    "App Store & Google Play submission management",
    "30 days of post-launch bug warranty & monitoring",
  ],
  ctaText: "View Full Pricing & Mobile Retainers",
  ctaHref: "/pricing",
};

const caseStudyData: RelatedCaseStudy = {
  title: "Divyanshi Travels - Regional Tour & Caravan Platform",
  client: "Divyanshi Travels",
  category: "Mobile-First Booking Web App",
  badge: "Live Production App",
  description:
    "A dedicated travel and caravan booking mobile application designed to showcase custom destination itineraries, fleet availability, and instant WhatsApp customer capture for travelers in Central India.",
  impact:
    "Streamlined regional caravan booking inquiries, delivered sub-second mobile page loads on 4G networks, and automated consultation workflows.",
  image: "/projects/divyanshi-travels.png",
  stack: ["React Native", "Next.js", "Mobile First UX", "SEO Architecture", "WhatsApp API"],
  liveUrl: "https://www.divyanshitravels.in/",
  portfolioHref: "/portfolio/divyanshi-travels",
};

const faqData: FAQItem[] = [
  {
    question: "Why should we choose IntegersDev as our app development company in Gwalior?",
    answer:
      "IntegersDev is Gwalior's leading modern mobile application engineering studio. Instead of outdated hybrid wrappers like Cordova or expensive dual native codebases (Swift + Kotlin), we engineer with React Native. This provides true 60fps native performance, sleek gestures, and shared business logic for both iOS and Android. You collaborate directly with our core engineering team (Vinay, Aryan, Kuldeep & Love) with complete code transparency.",
    category: "Agency Distinction",
  },
  {
    question: "Can one mobile app work on both iPhone and Android devices?",
    answer:
      "Yes! Our React Native architecture compiles into native iOS and Android binaries. Your customers enjoy platform-specific design conventions (such as Apple's gesture navigation and Android's Material 3 back button handling) while your business maintains a single unified codebase.",
    category: "Cross-Platform",
  },
  {
    question: "Do you guarantee approval on the Apple App Store and Google Play Store?",
    answer:
      "Yes. We configure all required privacy manifests, content ratings, cryptographic signing certificates, and App Store Review Guideline checklists. We work directly with you until your app is officially approved and live for public download.",
    category: "Store Approval",
  },
  {
    question: "Will the mobile app work when the user doesn't have an active internet connection?",
    answer:
      "Yes, we build with offline-first architecture using local SQLite or WatermelonDB caching. Users can browse catalogs, draft inquiries, view saved receipts, and access previously downloaded content even in areas with spotty network coverage.",
    category: "Offline Resilience",
  },
  {
    question: "Can our mobile app share the exact same user accounts and database as our website?",
    answer:
      "Absolutely. We engineer unified REST and GraphQL cloud backends. When a user updates their profile, places an order, or makes a payment on the mobile app, the changes reflect instantly on your web application and admin dashboard.",
    category: "Backend Sync",
  },
];

const otherServicesData: OtherServiceLink[] = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    badge: "Core Service",
    desc: "Build a high-converting Next.js website that matches your mobile app's brand and shares database APIs.",
  },
  {
    title: "UI/UX Design Studio",
    slug: "/services/ui-ux-design",
    badge: "Figma Ready",
    desc: "Interactive mobile prototypes, gesture micro-interactions, and design systems for iOS and Android.",
  },
  {
    title: "Next.js Development",
    slug: "/services/nextjs-development",
    badge: "App Router",
    desc: "Server-side rendering, Edge CDN caching, and high-performance web dashboards for your mobile backend.",
  },
  {
    title: "Custom Software Solutions",
    slug: "/services/custom-software-development",
    badge: "Enterprise",
    desc: "Custom operational software, admin panels, and database pipelines to manage your mobile app users.",
  },
];

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Mobile Engineering Studio"
      title="App Development Company in"
      highlight="Gwalior"
      serviceType="Mobile App Development"
      canonicalUrl="/services/mobile-app-development"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Mobile App Development" },
      ]}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Discuss Your Mobile App Idea
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Explore App Case Studies
          </Link>
        </>
      }
      introHeading="Engineering High-Retention iOS and Android Applications for Ambitious Businesses"
      introText={
        <>
          <p>
            When choosing an <strong className="text-black">app development company Gwalior</strong>, your business needs a technical partner that understands both native smartphone ergonomics and robust cloud scalability. At <strong className="text-black">IntegersDev</strong>, we engineer fast, intuitive, and reliable mobile applications for iOS and Android that customers love using every day.
          </p>
          <p>
            We eliminate the unnecessary expense of maintaining separate iOS and Android engineering teams. Using modern React Native and TypeScript, our collective—Vinay, Aryan, Kuldeep, and Love—delivers fluid 60fps native performance, offline database persistence, real-time push notifications, and seamless hardware integrations. Whether you need a customer ordering app for a cafe, a logistics tracking portal, or an on-demand service platform in Gwalior and Central India, we handle your mobile roadmap from architecture to App Store approval.
          </p>
        </>
      }
      introStats={[
        { value: "60 FPS", label: "Native Fluidity" },
        { value: "2-in-1", label: "iOS & Android Codebase" },
        { value: "100%", label: "Store Approval Guidance" },
        { value: "Offline", label: "SQLite Sync Support" },
      ]}
      whatsIncludedTitle="What's Included in Our Mobile App Development Services"
      whatsIncludedSubtitle="End-to-end mobile engineering covering responsive layouts, push automation, offline data stores, and official store deployments."
      whatsIncluded={whatsIncludedData}
      processTitle="Our Four-Phase Mobile Development Roadmap"
      processSubtitle="From initial feature specification to certified production releases on the Apple App Store and Google Play Console."
      processSteps={processStepsData}
      techTitle="Mobile Frameworks & Cloud Toolset"
      techSubtitle="We use cross-platform technologies trusted by industry leaders to ensure fast iteration and rock-solid native reliability."
      techStack={techStackData}
      pricingTeaser={pricingTeaserData}
      caseStudyTitle="Featured Mobile Application Case Study"
      caseStudy={caseStudyData}
      faqTitle="Mobile App Development FAQs for Businesses in Gwalior"
      faqSubtitle="Answers to common questions regarding cross-platform tech, store publishing, offline architecture, and backend sync."
      faqs={faqData}
      otherServicesTitle="Explore Our Related Digital Specialties"
      otherServices={otherServicesData}
      ctaBadge="Mobile Strategy Call"
      ctaTitle="Ready to Partner with the Top App Development Company in Gwalior?"
      ctaDescription="Schedule a direct discovery call with Vinay, Aryan, Kuldeep & Love. We'll evaluate your mobile feature specifications and provide an itemized timeline within 24 hours."
    />
  );
}
