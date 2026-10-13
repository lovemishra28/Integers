import React from "react";
import Link from "next/link";
import {
  FaBolt,
  FaServer,
  FaSearch,
  FaShieldAlt,
  FaRocket,
  FaArrowRight,
  FaCubes,
  FaCodeBranch,
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
  title: "Next.js Development Agency India | App Router & RSC | IntegersDev",
  description:
    "Top Next.js development agency India. IntegersDev builds blazing-fast React Server Component web platforms with Turbopack & Edge caching. Get a free proposal!",
  alternates: {
    canonical: "https://integersdev.in/services/nextjs-development",
  },
  openGraph: {
    title: "Next.js Development Agency India | App Router & RSC | IntegersDev",
    description:
      "Premier Next.js development agency in India. Specialized React Server Components, Server Actions & Edge acceleration by IntegersDev.",
    url: "https://integersdev.in/services/nextjs-development",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Next.js Development Agency India - IntegersDev",
      },
    ],
  },
};

const whatsIncludedData: IncludedFeature[] = [
  {
    icon: <FaServer className="w-5 h-5 text-black" />,
    title: "Next.js 16 App Router & React Server Components (RSC)",
    desc: "We engineer modern React Server Components that fetch data directly on the server, drastically shrinking client JavaScript bundles and eliminating waterfall request lag.",
    deliverables: [
      "Zero-bundle-size server components for data-heavy sections",
      "Nested layout persistence with instantaneous page navigation",
      "Streaming SSR with React Suspense fallbacks",
      "Strict separation of Client and Server component boundaries",
    ],
  },
  {
    icon: <FaBolt className="w-5 h-5 text-black" />,
    title: "Turbopack Build Engine & High-Speed Bundling",
    desc: "Leveraging Next.js's Rust-based Turbopack bundler, we achieve instant hot module replacement (HMR), rapid local development, and ultra-fast CI/CD production compilation.",
    deliverables: [
      "Sub-second local hot reload iterations during sprints",
      "Optimized production bundle code splitting",
      "Automated tree-shaking of unused third-party dependencies",
      "Predictable, reproducible Docker and Vercel build pipelines",
    ],
  },
  {
    icon: <FaRocket className="w-5 h-5 text-black" />,
    title: "Edge Runtime Middleware & Distributed Caching",
    desc: "Deploy code that executes at the edge closest to your users. We implement edge middleware for geo-redirection, authentication verification, and incremental static regeneration.",
    deliverables: [
      "Vercel Edge Network & AWS CloudFront CDN distribution",
      "Incremental Static Regeneration (ISR) with tag-based revalidation",
      "Edge middleware for authentication & bot rate limiting",
      "Near-zero latency across Indian metros and global regions",
    ],
  },
  {
    icon: <FaShieldAlt className="w-5 h-5 text-black" />,
    title: "Server Actions & Zero API Boilerplate Mutations",
    desc: "Say goodbye to redundant REST boilerplate. We execute type-safe backend mutations directly from React forms with built-in CSRF defenses and progressive enhancement.",
    deliverables: [
      "Type-safe Server Actions with Zod runtime schema validation",
      "Optimistic UI state rollbacks on failed server mutations",
      "Integrated CSRF security tokens and encrypted headers",
      "Clean server-client boundary protection for private keys",
    ],
  },
  {
    icon: <FaSearch className="w-5 h-5 text-black" />,
    title: "Dynamic OpenGraph & Technical SEO Architecture",
    desc: "Every dynamic route on your platform gets high-performing technical SEO: automated XML sitemaps, structured JSON-LD schemas, and on-the-fly OpenGraph image generation.",
    deliverables: [
      "Dynamic @vercel/og image generation for social share cards",
      "Robots.txt directives & automated priority XML sitemaps",
      "Structured rich snippet JSON-LD metadata for Google",
      "Canonical URL enforcement preventing duplicate content penalties",
    ],
  },
  {
    icon: <FaCubes className="w-5 h-5 text-black" />,
    title: "Lighthouse 95+ Core Web Vitals Optimization",
    desc: "We engineer websites that pass Google's strictest performance audits: Largest Contentful Paint under 0.8s, zero Cumulative Layout Shift, and minimal Interaction to Next Paint.",
    deliverables: [
      "Next.js next/image optimization with automated AVIF/WebP",
      "Font preloading with next/font to eliminate layout shift (CLS)",
      "CSS purging with Tailwind CSS for micro-sized style sheets",
      "Comprehensive performance audit report before production launch",
    ],
  },
];

const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Architecture & Route Strategy",
    desc: "We analyze your rendering requirements—deciding precisely where to use SSG pre-rendering, dynamic SSR streaming, or client hydration to maximize performance.",
  },
  {
    step: "02",
    title: "RSC Component Modeling",
    desc: "We structure clean component hierarchies, establishing clear server and client boundaries, caching strategies, and data fetching contracts in TypeScript.",
  },
  {
    step: "03",
    title: "Fullstack Server Actions Sprint",
    desc: "Vinay and our team code backend mutations, database models with Prisma or MongoDB, authentication flows, and payment integrations with zero boilerplate.",
  },
  {
    step: "04",
    title: "Edge Deployment & Speed Auditing",
    desc: "We deploy the application to Vercel or AWS Edge infrastructure, configure custom domains, verify Core Web Vitals scores, and transfer complete repository ownership.",
  },
];

const techStackData: TechItem[] = [
  {
    name: "Next.js 16",
    category: "Framework",
    badge: "Core Stack",
    desc: "App Router, React Server Components, and hybrid rendering engine.",
  },
  {
    name: "React 19",
    category: "UI Library",
    desc: "Server actions, async transitions, and modern React hooks.",
  },
  {
    name: "Turbopack",
    category: "Bundler",
    badge: "Rust Fast",
    desc: "Next-generation bundling delivering instant hot-module reloads.",
  },
  {
    name: "TypeScript",
    category: "Language",
    badge: "Strict",
    desc: "End-to-end type safety from server actions down to UI components.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    desc: "Zero-runtime CSS utilities resulting in minimal stylesheet sizes.",
  },
  {
    name: "Prisma ORM",
    category: "Data Layer",
    desc: "Type-safe database client for PostgreSQL, MySQL, and MongoDB.",
  },
  {
    name: "Vercel Edge",
    category: "Infrastructure",
    badge: "Global CDN",
    desc: "Edge compute network providing sub-50ms execution times worldwide.",
  },
  {
    name: "@vercel/og",
    category: "Social SEO",
    desc: "Automated, dynamic Open Graph social card generation at the edge.",
  },
];

const pricingTeaserData: PricingTeaser = {
  title: "Specialized Next.js Engineering Sprints",
  badge: "Production Ready",
  startingPrice: "₹22,000 / $229",
  timeframe: "7 to 10 Business Days",
  description:
    "Upgrade your existing website to Next.js or build a brand-new high-converting web application engineered for maximum Core Web Vitals.",
  highlights: [
    "Next.js 16 App Router fullstack architecture",
    "React Server Components & Server Actions integration",
    "Google Lighthouse 95+ performance guarantee",
    "Automated dynamic SEO sitemaps & JSON-LD schema",
    "Vercel Edge CDN configuration & SSL setup",
    "Complete repository ownership with GitHub transfer",
  ],
  ctaText: "View Full Pricing & Retainer Options",
  ctaHref: "/pricing",
};

const caseStudyData: RelatedCaseStudy = {
  title: "Vastavikta - Next.js 16 Heritage Dining Platform",
  client: "Vastavikta Hospitality",
  category: "Production Next.js Platform",
  badge: "Live Client Platform",
  description:
    "A premier culinary destination platform requiring instant page transitions, responsive multi-course menus, ambiance gallery showcases, table reservation workflows, and sub-second speed.",
  impact:
    "Scored 98 on Google PageSpeed Mobile, reduced Largest Contentful Paint (LCP) to 0.72s, and produced a 42% lift in online reservation inquiries.",
  image: "/projects/vastavikta.png",
  stack: ["Next.js 16", "React Server Components", "Tailwind CSS", "Vercel Edge", "SEO Schema"],
  liveUrl: "https://vastavikta-five.vercel.app/",
  portfolioHref: "/portfolio/vastavikta",
};

const faqData: FAQItem[] = [
  {
    question: "Why should we hire a specialized Next.js development agency in India?",
    answer:
      "Next.js is the gold standard for high-performance web applications, but unlocking its true power requires deep familiarity with App Router architecture, Server Component boundaries, and Edge caching. IntegersDev specializes in Next.js engineering—we know how to avoid common pitfalls like waterfall fetching, accidental client-side bloat, and improper cache invalidation. We deliver production platforms that consistently score 95+ on Google PageSpeed.",
    category: "Agency Distinction",
  },
  {
    question: "What is the primary difference between Next.js App Router and Pages Router?",
    answer:
      "The App Router introduces React Server Components (RSC) and streaming SSR. In the older Pages Router, all components were bundled into client JavaScript. With the App Router, server components render on the server with zero client JavaScript overhead, resulting in dramatically faster first-load paints, smaller payloads, and cleaner data fetching.",
    category: "Architecture",
  },
  {
    question: "Can you migrate our existing WordPress or PHP website to Next.js?",
    answer:
      "Yes. We frequently execute seamless migrations from legacy WordPress, PHP, or older React single-page apps (SPAs) to modern Next.js. We preserve your existing domain, transfer all URL structures with 301 redirects to protect SEO rankings, and rebuild your layout with sub-second speeds.",
    category: "Migrations",
  },
  {
    question: "How do you achieve 95+ Google Lighthouse scores consistently?",
    answer:
      "We achieve top scores by using native Next.js image optimization (AVIF/WebP), font preloading with zero layout shift, server-side data fetching that eliminates client spinners, CSS purging with Tailwind, and edge caching on Vercel's global CDN.",
    category: "Performance",
  },
  {
    question: "Do you offer fullstack capabilities (databases, authentication, and payments)?",
    answer:
      "Yes! With Next.js Server Actions and Route Handlers coupled with Prisma, MongoDB, or PostgreSQL, we build complete fullstack web applications with authentication, payment gateways (Razorpay/Stripe), and admin panels in a single cohesive codebase.",
    category: "Fullstack Scope",
  },
];

const otherServicesData: OtherServiceLink[] = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    badge: "Core Service",
    desc: "Custom web development services in Gwalior engineered for small businesses and modern startups.",
  },
  {
    title: "UI/UX Design Studio",
    slug: "/services/ui-ux-design",
    badge: "Figma Ready",
    desc: "Interactive clickable prototypes and design systems tailored for seamless React and Next.js handoff.",
  },
  {
    title: "Mobile App Development",
    slug: "/services/mobile-app-development",
    badge: "iOS & Android",
    desc: "Cross-platform mobile apps built with React Native sharing APIs with your Next.js platform.",
  },
  {
    title: "Custom Software Solutions",
    slug: "/services/custom-software-development",
    badge: "Enterprise",
    desc: "Bespoke SaaS architectures, admin dashboards, and database pipelines for operational scalability.",
  },
];

export default function NextjsDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Specialized Engineering"
      title="Next.js Development Agency in"
      highlight="India"
      serviceType="Next.js Development"
      canonicalUrl="/services/nextjs-development"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Next.js Development" },
      ]}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Start Next.js Project
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Explore Next.js Builds
          </Link>
        </>
      }
      introHeading="Building Sub-Second Next.js Platforms Powered by React Server Components and Edge Caching"
      introText={
        <>
          <p>
            As a leading <strong className="text-black">Next.js development agency India</strong>, <strong className="text-black">IntegersDev</strong> engineers production-grade web platforms that push the boundaries of speed, SEO indexing, and developer ergonomics. In modern web commerce, every fraction of a second directly impacts search engine visibility and conversion rates.
          </p>
          <p>
            Our core engineering collective—Vinay, Aryan, Kuldeep, and Love—specializes in the latest Next.js 16 App Router architecture, React Server Components (RSC), Turbopack compilation, and Edge runtime caching. We build clean, modular fullstack applications that fetch data on the server with zero client bundle overhead, pass all Google Core Web Vitals checks with 95+ scores, and scale effortlessly from local Indian businesses to global enterprises.
          </p>
        </>
      }
      introStats={[
        { value: "<0.8s", label: "LCP Load Time" },
        { value: "95+", label: "Google PageSpeed" },
        { value: "RSC", label: "Zero Client JS Bloat" },
        { value: "100%", label: "TypeScript Safety" },
      ]}
      whatsIncludedTitle="What's Included in Our Specialized Next.js Engagements"
      whatsIncludedSubtitle="From App Router architecture to Edge CDN deployment, every technical feature is engineered for uncompromising speed and maintainability."
      whatsIncluded={whatsIncludedData}
      processTitle="Our Structured Next.js Engineering Sprints"
      processSubtitle="A proven fullstack workflow optimizing component boundaries, server actions, and edge revalidation."
      processSteps={processStepsData}
      techTitle="Next.js Ecosystem & Tooling Architecture"
      techSubtitle="We utilize the most advanced frontend and backend tools to guarantee enterprise security and sub-second rendering."
      techStack={techStackData}
      pricingTeaser={pricingTeaserData}
      caseStudyTitle="Featured Next.js Production Build"
      caseStudy={caseStudyData}
      faqTitle="Next.js Development FAQs for Technical Leaders"
      faqSubtitle="Deep-dive answers regarding App Router migration, Edge computing, Core Web Vitals, and fullstack capabilities."
      faqs={faqData}
      otherServicesTitle="Explore Our Related Digital Specialties"
      otherServices={otherServicesData}
      ctaBadge="Technical Consultation"
      ctaTitle="Ready to Build with the Top Next.js Development Agency in India?"
      ctaDescription="Connect directly with Vinay, Aryan, Kuldeep & Love. We'll audit your performance requirements, review your architecture, and provide a clear engineering roadmap within 24 hours."
    />
  );
}
