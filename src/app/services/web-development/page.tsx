import React from "react";
import Link from "next/link";
import {
  FaRocket,
  FaSearch,
  FaMobileAlt,
  FaShieldAlt,
  FaCode,
  FaDatabase,
  FaArrowRight,
  FaTools,
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

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Web Development Company in Gwalior | Next.js Websites | IntegersDev",
  description:
    "Leading web development company in Gwalior. IntegersDev builds custom Next.js websites, high-converting platforms & fullstack web apps. Request a free quote!",
  alternates: {
    canonical: "https://integersdev.in/services/web-development",
  },
  openGraph: {
    title: "Web Development Company in Gwalior | Next.js & Fullstack | IntegersDev",
    description:
      "Looking for the top web development company in Gwalior? IntegersDev engineers custom Next.js websites and high-converting web applications.",
    url: "https://integersdev.in/services/web-development",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Development Company in Gwalior - IntegersDev",
      },
    ],
  },
};

const whatsIncludedData: IncludedFeature[] = [
  {
    icon: <FaCode className="w-5 h-5 text-black" />,
    title: "Custom Next.js & React Fullstack Engineering",
    desc: "We build bespoke web platforms with clean TypeScript, Next.js 16 App Router, and React Server Components. No generic pre-packaged page templates or unoptimized bloated themes.",
    deliverables: [
      "Modular, type-safe Next.js component hierarchy",
      "Server-side rendering (SSR) & static pre-rendering (SSG)",
      "Zero client-bundle bloat for lightning-fast interactivity",
      "Clean git repository with complete version history",
    ],
  },
  {
    icon: <FaMobileAlt className="w-5 h-5 text-black" />,
    title: "Mobile-First Responsive UX & Layouts",
    desc: "More than 75% of your customers in Gwalior browse on smartphones. We design fluid viewports that adapt seamlessly from budget Android devices to large desktop Retina displays.",
    deliverables: [
      "Touch-optimized navigation drawers and gestures",
      "Fluid responsive typography scaled with Tailwind CSS",
      "Dynamic device viewport testing across iOS & Android",
      "Accessible WCAG AA contrast standards and readability",
    ],
  },
  {
    icon: <FaSearch className="w-5 h-5 text-black" />,
    title: "Native On-Page & Local Gwalior SEO Architecture",
    desc: "Your website is built from day one to dominate Google searches for commercial queries in Gwalior and across India. We structure clean code that search crawlers index effortlessly.",
    deliverables: [
      "Semantic HTML5 tags with optimal H1-H6 hierarchy",
      "Automated XML sitemaps and search crawler robots.txt",
      "Rich JSON-LD Schema markup for local businesses",
      "Dynamic OpenGraph social cards for WhatsApp & Twitter",
    ],
  },
  {
    icon: <FaRocket className="w-5 h-5 text-black" />,
    title: "Sub-Second Performance & Core Web Vitals",
    desc: "A one-second delay in page load cuts conversions by 7%. We tune every asset, style sheet, and script to consistently score 95+ on Google PageSpeed and pass Core Web Vitals.",
    deliverables: [
      "Modern WebP and AVIF next-gen image compression",
      "Smart route prefetching and incremental cache hydration",
      "Sub-0.8s Largest Contentful Paint (LCP) benchmarks",
      "Zero Cumulative Layout Shift (CLS) for stable scrolling",
    ],
  },
  {
    icon: <FaDatabase className="w-5 h-5 text-black" />,
    title: "Cloud Database & Secure API Integrations",
    desc: "Whether you need a dynamic booking portal, customer inquiry pipeline, or product catalog, we engineer secure backend APIs and cloud database connections.",
    deliverables: [
      "Scalable MongoDB or PostgreSQL cloud data pipelines",
      "Type-safe Server Actions with strict input sanitization",
      "Razorpay, Stripe & WhatsApp automated dispatch hooks",
      "Session management with encrypted authentication tokens",
    ],
  },
  {
    icon: <FaShieldAlt className="w-5 h-5 text-black" />,
    title: "Hardened Security, Analytics & 30-Day Hypercare",
    desc: "We protect your brand reputation with enterprise security headers, SSL encryption, continuous uptime monitoring, and a full month of post-launch warranty support.",
    deliverables: [
      "Free SSL/TLS certificate installation and HTTP/2 setup",
      "Google Analytics 4 & Search Console verification",
      "Automated CSRF protection & rate limiting on all forms",
      "30 days of complimentary bug fixes and content tweaks",
    ],
  },
];

const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Architecture & Discovery",
    desc: "We examine your commercial goals, local Gwalior competitors, customer demographics, and technical specifications to draft a precise sprint architecture roadmap.",
  },
  {
    step: "02",
    title: "Interactive UX Wireframing",
    desc: "Our design team creates clickable Figma wireframes and high-fidelity layouts, testing user funnels and brand aesthetics before writing a single line of production code.",
  },
  {
    step: "03",
    title: "Agile Next.js Build Sprint",
    desc: "Vinay, Aryan, Kuldeep & Love engineer your platform in Next.js and TypeScript, building reusable components, Server Actions, responsive views, and database models.",
  },
  {
    step: "04",
    title: "QA, SEO Audit & Cloud Launch",
    desc: "We perform cross-device browser testing, run Lighthouse performance audits, configure custom domain DNS, deploy to Vercel/AWS, and hand over 100% of the repository.",
  },
];

const techStackData: TechItem[] = [
  {
    name: "Next.js 16",
    category: "Framework",
    badge: "Core Stack",
    desc: "Hybrid App Router with server-side rendering for ultra-fast initial page loads.",
  },
  {
    name: "React 19",
    category: "Frontend UI",
    desc: "Modern component ecosystem delivering fluid UI transitions and state management.",
  },
  {
    name: "TypeScript",
    category: "Language",
    badge: "Type Safe",
    desc: "Strict type definitions eliminating runtime errors across client and server.",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    desc: "Utility-first responsive styles with zero unused CSS bundle overhead.",
  },
  {
    name: "Node.js",
    category: "Backend Engine",
    desc: "High-throughput server runtime powering APIs and background workers.",
  },
  {
    name: "MongoDB / SQL",
    category: "Database",
    desc: "Cloud document and relational stores with automated backups and schema indexing.",
  },
  {
    name: "Vercel / AWS",
    category: "Cloud Hosting",
    badge: "Edge Global",
    desc: "Global CDN distribution ensuring lightning speed for users in Gwalior and abroad.",
  },
  {
    name: "JSON-LD & Schema",
    category: "SEO Meta",
    desc: "Structured data engine powering rich Google search snippet displays.",
  },
];

const pricingTeaserData: PricingTeaser = {
  title: "Predictable Investment for Growing Businesses",
  badge: "Transparent Package",
  startingPrice: "$249 / ₹23,700",
  timeframe: "7 – 10 Days",
  warranty: "14 Days Post-Launch Warranty",
  description:
    "Everything you need to launch a competitive, high-converting digital storefront in Gwalior with zero hidden agency costs.",
  highlights: [
    "Full custom UI/UX design & responsive layouts",
    "Next.js App Router fullstack architecture",
    "Local SEO schema markup & Google indexing",
    "Inquiry capture form connected to MongoDB / email",
    "100% source code ownership & repository transfer",
    "14 days post-launch bug fix warranty",
  ],
  ctaText: "Explore Full Pricing & Retainer Plans",
  ctaHref: "/pricing",
};

const caseStudyData: RelatedCaseStudy = {
  title: "Vastavikta - Heritage Dining & Culinary Destination",
  client: "Vastavikta Hospitality",
  category: "Fullstack Web Platform",
  badge: "Live Client Platform",
  description:
    "A premier culinary destination platform requiring responsive multi-course menus, ambiance gallery showcases, table reservation workflows, and sub-second speed to attract high-value guests in Central India.",
  impact:
    "Achieved sub-0.8s load times, streamlined online table reservations, and verified green Core Web Vitals on mobile 4G/5G networks.",
  image: "/projects/vastavikta.png",
  stack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel", "Mobile-First UX"],
  liveUrl: "https://vastavikta-five.vercel.app/",
  portfolioHref: "/portfolio/vastavikta",
};

const faqData: FAQItem[] = [
  {
    question: "Why should we hire IntegersDev as our web development company in Gwalior?",
    answer:
      "Unlike traditional agencies that sell bloated WordPress templates that load in 5+ seconds, IntegersDev is a dedicated engineering studio led directly by developers (Vinay, Aryan, Kuldeep & Love). We build custom Next.js applications that load under 1 second, rank on Google Search for high-intent keywords, and feature bold Neo-Brutalist designs that stand out. You communicate directly with the creators building your code, not middlemen.",
    category: "Why IntegersDev",
  },
  {
    question: "How much does a custom website cost for a business in Gwalior?",
    answer:
      "Our standard production web development packages start at ₹23,700 ($249) for complete 5-to-7 page platforms including design, mobile responsiveness, SEO integration, and cloud deployment. For smaller MVP landing pages, packages begin at ₹12,250 ($129), while Turbo fullstack & mobile applications start at ₹42,750 ($449) on our /pricing page.",
    category: "Pricing & Cost",
  },
  {
    question: "How long does the entire web development process take from start to finish?",
    answer:
      "A typical custom website launches within 7 to 10 business days. Streamlined single-page landing pages and MVPs can be deployed in 3 to 5 days. For complex web applications with customer dashboards or database APIs, we work in 2-to-4 week agile sprints with weekly staging progress previews.",
    category: "Timelines",
  },
  {
    question: "Will my website rank on Google when users search for services in Gwalior?",
    answer:
      "Yes. Every platform we build includes native technical SEO: semantic HTML5 tags, dynamic Open Graph cards, automated XML sitemaps, robots.txt directives, and local business JSON-LD schema markup configured for Gwalior, Madhya Pradesh. Combined with Google Lighthouse scores above 95+, your site is engineered for maximum organic visibility.",
    category: "SEO & Visibility",
  },
  {
    question: "Do you provide source code ownership and post-launch maintenance?",
    answer:
      "Yes, 100%. Upon final project sign-off and milestone settlement, you receive complete administrative access and intellectual property ownership of the GitHub repository and cloud hosting accounts. We also include 30 days of complimentary post-launch support and offer flexible monthly retainers for ongoing feature expansion.",
    category: "Ownership & Support",
  },
];

const otherServicesData: OtherServiceLink[] = [
  {
    title: "UI/UX Design Studio",
    slug: "/services/ui-ux-design",
    badge: "Figma Ready",
    desc: "Interactive clickable prototypes, user journeys, design systems, and neo-brutalist visuals crafted to turn visitors into buyers.",
  },
  {
    title: "Mobile App Development",
    slug: "/services/mobile-app-development",
    badge: "iOS & Android",
    desc: "High-performance cross-platform applications built with React Native, offline database sync, and real-time push notifications.",
  },
  {
    title: "Next.js Development",
    slug: "/services/nextjs-development",
    badge: "App Router",
    desc: "Advanced Server Components, Turbopack compilation, Edge CDN caching, and Core Web Vitals optimization.",
  },
  {
    title: "Custom Software Solutions",
    slug: "/services/custom-software-development",
    badge: "Enterprise",
    desc: "Tailored operational dashboards, multi-role access controls (RBAC), and automated database workflows for unique business models.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Premier Agency Service"
      title="Web Development Company in"
      highlight="Gwalior"
      serviceType="Web Development"
      canonicalUrl="/services/web-development"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Web Development" },
      ]}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Get a Free Project Quote
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Explore Live Work
          </Link>
        </>
      }
      introHeading="Building High-Speed Websites That Turn Local Traffic into Long-Term Revenue"
      introText={
        <>
          <p>
            Partnering with the right <strong className="text-black">web development company in Gwalior</strong> is the decisive turning point between owning a static, forgotten digital brochure and operating an active customer acquisition engine. At <strong className="text-black">IntegersDev</strong>, we engineer custom, lightning-fast web applications designed specifically to establish local dominance across Gwalior, Madhya Pradesh, and scale seamlessly into competitive national markets.
          </p>
          <p>
            Instead of relying on sluggish, outdated WordPress templates that take four to seven seconds to load and crash during traffic surges, our engineering collective—Vinay, Aryan, Kuldeep, and Love—builds production-grade Next.js platforms. Every project features sub-second page loads, intuitive conversion funnels, robust security defenses, and clean semantic architecture. Whether you run a thriving restaurant, an educational institute, a retail brand, or a growing healthcare clinic, our custom websites deliver measurable commercial results.
          </p>
        </>
      }
      introStats={[
        { value: "0.8s", label: "Average First Paint" },
        { value: "95+", label: "Google PageSpeed Score" },
        { value: "100%", label: "Custom Code Ownership" },
        { value: "25+", label: "Projects Completed" },
      ]}
      whatsIncludedTitle="What's Included in Our Custom Web Development Services"
      whatsIncludedSubtitle="From architectural discovery to production cloud deployment, every deliverable is crafted for durability, search visibility, and maximum conversions."
      whatsIncluded={whatsIncludedData}
      processTitle="How We Engineer Your Web Application"
      processSubtitle="Our battle-tested four-phase sprint process guarantees total transparency, predictable milestones, and zero delivery delays."
      processSteps={processStepsData}
      techTitle="Modern Fullstack Engineering Stack"
      techSubtitle="We choose proven, cutting-edge frameworks that ensure sub-second rendering, tight security, and frictionless long-term maintainability."
      techStack={techStackData}
      pricingTeaser={pricingTeaserData}
      caseStudyTitle="Featured Client Platform Engineered by IntegersDev"
      caseStudy={caseStudyData}
      faqTitle="Web Development FAQs for Businesses in Gwalior"
      faqSubtitle="Straightforward answers about our engineering standards, pricing packages, milestone timelines, and client support."
      faqs={faqData}
      otherServicesTitle="Explore Our Related Digital Specialties"
      otherServices={otherServicesData}
      ctaBadge="Direct Consultation"
      ctaTitle="Ready to Hire the Top Web Development Company in Gwalior?"
      ctaDescription="Talk directly with Vinay, Aryan, Kuldeep & Love. We'll examine your project specifications, analyze your local competition, and provide an itemized fixed-price proposal within 24 hours."
    />
  );
}
