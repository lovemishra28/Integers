import React from "react";
import Link from "next/link";
import {
  FaPaintBrush,
  FaLayerGroup,
  FaEye,
  FaUsers,
  FaArrowRight,
  FaFigma,
  FaCheck,
  FaMobileAlt,
  FaVectorSquare,
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
  title: "UI UX Design Agency India | Figma Design Systems | IntegersDev",
  description:
    "Top UI UX design agency India. IntegersDev crafts intuitive web & mobile interfaces, clickable Figma prototypes & scalable design systems that convert visitors into revenue.",
  alternates: {
    canonical: "https://integersdev.in/services/ui-ux-design",
  },
  openGraph: {
    title: "UI UX Design Agency India | Figma & Prototypes | IntegersDev",
    description:
      "Premier UI UX design agency in India. High-converting user flows, interactive prototypes, and modern design systems engineered by IntegersDev.",
    url: "https://integersdev.in/services/ui-ux-design",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UI UX Design Agency India - IntegersDev",
      },
    ],
  },
};

const whatsIncludedData: IncludedFeature[] = [
  {
    icon: <FaLayerGroup className="w-5 h-5 text-black" />,
    title: "Scalable Figma Design Systems & Tokens",
    desc: "We construct organized component libraries with auto-layout, nested variants, shared color swatches, and typography styles that streamline frontend development.",
    deliverables: [
      "Master Figma component library with responsive auto-layout",
      "Standardized design tokens (spacing, radii, shadows, typography)",
      "Dark and light mode viewport variations",
      "Organized style guides ready for developer inspection",
    ],
  },
  {
    icon: <FaEye className="w-5 h-5 text-black" />,
    title: "Interactive Clickable Prototypes",
    desc: "Experience the real tactile sensation of your software before writing code. We create clickable wireframes with modal states, dropdowns, and fluid page transitions.",
    deliverables: [
      "Full user journey prototype linked in Figma Share",
      "Realistic micro-interactions, button hover states & drawers",
      "Interactive mobile gesture simulations (swipes, sheets)",
      "Stakeholder & investor presentation-ready walkthroughs",
    ],
  },
  {
    icon: <FaUsers className="w-5 h-5 text-black" />,
    title: "Human-Centric User Journeys & Wireframing",
    desc: "We analyze drop-off friction, onboarding bottlenecks, and conversion funnels to map out user flows that guide visitors toward purchase decisions without confusion.",
    deliverables: [
      "Low-fidelity structural wireframes for feedback sprints",
      "Customer journey mapping and task flow architecture",
      "Information architecture (IA) and menu hierarchy",
      "Checkout and signup funnel optimization audits",
    ],
  },
  {
    icon: <FaPaintBrush className="w-5 h-5 text-black" />,
    title: "Neo-Brutalist & High-Conversion Brand UI",
    desc: "Break free from cookie-cutter corporate sameness. We design with intentional high contrast, expressive typography, and tactile accents that make your brand unforgettable.",
    deliverables: [
      "Signature high-contrast brand aesthetics & color theory",
      "Custom vector icons and geometric layout elements",
      "Product badges, social trust markers & CTA pills",
      "Responsive hero banners and illustration handoff",
    ],
  },
  {
    icon: <FaMobileAlt className="w-5 h-5 text-black" />,
    title: "Multi-Platform Mobile & Web Viewports",
    desc: "Every screen is tailored to its native platform—following Apple iOS Human Interface Guidelines, Android Material 3, and wide desktop viewports.",
    deliverables: [
      "Native iOS touch targets, dynamic islands & safe areas",
      "Android adaptive app bar, bottom sheets & navigation rails",
      "Desktop viewports scaling up to 4K resolutions",
      "Responsive tablet breakpoints in portrait and landscape",
    ],
  },
  {
    icon: <FaCheck className="w-5 h-5 text-black" />,
    title: "WCAG Accessibility & Seamless Dev Handoff",
    desc: "We ensure minimum 4.5:1 contrast ratios, screen-reader clarity, and provide pixel-perfect CSS spacing values so your developers never have to guess.",
    deliverables: [
      "WCAG 2.1 Level AA color contrast verification",
      "Complete export package: SVG icons, WebP imagery & fonts",
      "Detailed developer handoff documentation & CSS specs",
      "Full ownership transfer of Figma master project files",
    ],
  },
];

const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "User Journey & Funnel Audit",
    desc: "Aryan and our design team dissect your product vision, target customer psychology, competitor benchmarks across India, and define core conversion targets.",
  },
  {
    step: "02",
    title: "Low-Fidelity Wireframe Blueprint",
    desc: "We sketch foundational screen layouts and information architecture, aligning on content hierarchy and user pathways before introducing visual styling.",
  },
  {
    step: "03",
    title: "High-Fidelity Figma Design System",
    desc: "We build your bespoke visual identity, crafting reusable component variants, typography scales, tactile button states, and cohesive color palettes.",
  },
  {
    step: "04",
    title: "Clickable Prototyping & Handoff",
    desc: "We connect screens into an interactive prototype, validate flows with usability testing, package design tokens, and conduct a live handoff session with developers.",
  },
];

const techStackData: TechItem[] = [
  {
    name: "Figma",
    category: "Design Suite",
    badge: "Primary Tool",
    desc: "Industry-standard collaborative vector design and component libraries.",
  },
  {
    name: "FigJam",
    category: "Discovery",
    desc: "User journey mapping, architecture diagramming, and brainstorm sprints.",
  },
  {
    name: "Design Tokens",
    category: "Architecture",
    badge: "Scalable",
    desc: "Standardized token aliases for effortless synchronization with Tailwind CSS.",
  },
  {
    name: "Apple HIG",
    category: "Guidelines",
    desc: "iOS Human Interface Guidelines compliance for native iPhone & iPad apps.",
  },
  {
    name: "Material 3",
    category: "Guidelines",
    desc: "Google Material Design specs for modern adaptive Android mobile interfaces.",
  },
  {
    name: "WCAG 2.1 AA",
    category: "Accessibility",
    badge: "Inclusive",
    desc: "Strict color contrast, readable type scales, and keyboard focus states.",
  },
  {
    name: "Auto-Layout 5",
    category: "Figma Feature",
    desc: "Fluid responsive constraints mimicking CSS flexbox and grid layouts.",
  },
  {
    name: "Vector Assets",
    category: "Graphics",
    desc: "SVG vector optimization for crisp rendering across all screen densities.",
  },
];

const pricingTeaserData: PricingTeaser = {
  title: "Bespoke UI/UX Design Packages",
  badge: "Fast MVP Sprints",
  startingPrice: "$129 / ₹12,250",
  timeframe: "3 – 5 Days",
  warranty: "7 Days Post-Launch Warranty",
  description:
    "Ideal for founders and product teams needing high-converting Figma prototypes, investor pitch decks, or a complete design system overhaul.",
  highlights: [
    "Full interactive clickable Figma prototype",
    "Reusable component library with auto-layout",
    "2 iterative feedback sprint cycles included",
    "Mobile & desktop responsive viewport designs",
    "Developer-ready asset exports & CSS token specs",
    "100% intellectual property & Figma file ownership",
  ],
  ctaText: "Explore Design Packages & Retainers",
  ctaHref: "/pricing",
};

const caseStudyData: RelatedCaseStudy = {
  title: "Omni-Channel Mobile Commerce UI & Design System",
  client: "Boutique Retail Group",
  category: "Mobile Design System",
  badge: "Figma Design System",
  description:
    "An end-to-end design system and interactive prototype for a boutique commerce mobile app, featuring gestural bottom sheets, tactile cart animations, and high-contrast dark mode viewports.",
  impact:
    "Delivered 35+ fully responsive screens, reduced developer implementation time by 40%, and achieved 100% WCAG AA accessibility compliance.",
  image: "/services/mobile-app-showcase.png",
  stack: ["Figma", "Auto-Layout", "Design Tokens", "iOS HIG", "Material 3"],
  portfolioHref: "/portfolio/omni-channel-commerce",
};

const faqData: FAQItem[] = [
  {
    question: "Why should we choose IntegersDev as our UI UX design agency in India?",
    answer:
      "IntegersDev bridges the gap between creative visual artistry and real-world engineering constraints. Led by Aryan, our design team builds with frontend implementation in mind—structuring Figma files with auto-layout, token variables, and clean components that map 1:1 to React and Tailwind CSS. We don't just create pretty mockups; we craft conversion-focused systems that convert visitors into revenue and are easy for your engineers to build.",
    category: "Agency Distinction",
  },
  {
    question: "Do I get full ownership of the Figma source files?",
    answer:
      "Yes. You receive 100% editor access and complete intellectual property ownership of all Figma master files, wireframes, vector assets, and design token documentation immediately upon milestone completion.",
    category: "Deliverables & IP",
  },
  {
    question: "How many revisions and feedback cycles are included in your design packages?",
    answer:
      "Our standard UI/UX packages include 2 to 3 collaborative feedback sprint cycles. We present interactive prototypes, incorporate your team's feedback directly inside Figma comments, and refine until the layout aligns perfectly with your brand vision.",
    category: "Revisions",
  },
  {
    question: "Do you design for both web applications and native mobile apps?",
    answer:
      "Yes. We design unified design systems that support responsive desktop web browsers, progressive web apps (PWAs), and native iOS & Android smartphones adhering strictly to Apple Human Interface Guidelines and Google Material 3.",
    category: "Platform Support",
  },
  {
    question: "Can your team also code the designs into a live website?",
    answer:
      "Absolutely. IntegersDev is a fullstack design and engineering studio. After completing your Figma design system, Vinay, Kuldeep & Love can seamlessly develop the platform using Next.js, React, and Tailwind CSS without any miscommunication between design and code.",
    category: "End-to-End Build",
  },
];

const otherServicesData: OtherServiceLink[] = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    badge: "Core Service",
    desc: "Turn your Figma designs into lightning-fast Next.js websites with sub-second page speeds and local SEO.",
  },
  {
    title: "Mobile App Development",
    slug: "/services/mobile-app-development",
    badge: "iOS & Android",
    desc: "Cross-platform mobile applications engineered with React Native, fluid gestures, and offline data sync.",
  },
  {
    title: "Next.js Development",
    slug: "/services/nextjs-development",
    badge: "App Router",
    desc: "Specialized Server Components, Turbopack builds, and Edge CDN deployment for maximum Core Web Vitals.",
  },
  {
    title: "Custom Software Solutions",
    slug: "/services/custom-software-development",
    badge: "Enterprise",
    desc: "Custom SaaS dashboards, role-based admin portals, and automated database pipelines for operational scale.",
  },
];

export default function UiUxDesignPage() {
  return (
    <ServicePageTemplate
      badge="Creative UI/UX Studio"
      title="UI UX Design Agency in"
      highlight="India"
      serviceType="UI/UX Design"
      canonicalUrl="/services/ui-ux-design"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "UI/UX Design" },
      ]}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Request a Design Quote
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            View Design Prototypes
          </Link>
        </>
      }
      introHeading="Crafting Tactile, Conversion-Driven Digital Experiences That Eliminate User Friction"
      introText={
        <>
          <p>
            As a premier <strong className="text-black">UI UX design agency in India</strong>, <strong className="text-black">IntegersDev</strong> transforms complex software into intuitive, captivating digital journeys. We believe exceptional user interface design goes far beyond visual surface polish—it is about structuring human psychology, minimizing cognitive friction, and guiding casual visitors into committed customers.
          </p>
          <p>
            Led by Aryan, our design studio combines bold Neo-Brutalist distinction with rigorous interaction architecture. We build comprehensive Figma design systems, interactive clickable prototypes, and conversion funnels for startups, cafes, mobile commerce brands, and enterprise software teams across India and globally. Every component is engineered with real frontend implementation constraints in mind, ensuring your engineering team can build it without friction.
          </p>
        </>
      }
      introStats={[
        { value: "35+", label: "Design Systems Built" },
        { value: "40%", label: "Faster Dev Handoff" },
        { value: "100%", label: "Figma Source Ownership" },
        { value: "WCAG", label: "AA Contrast Verified" },
      ]}
      whatsIncludedTitle="What's Included in Our UI/UX Design Engagements"
      whatsIncludedSubtitle="From raw napkin sketches to developer-ready Figma libraries, we deliver complete design assets with zero guesswork."
      whatsIncluded={whatsIncludedData}
      processTitle="Our Four-Sprint Design Process"
      processSubtitle="A proven iterative methodology combining deep user research, wireframing, and interactive feedback cycles."
      processSteps={processStepsData}
      techTitle="Design Tools, Guidelines & Token Standards"
      techSubtitle="We leverage industry-leading collaborative tools and international accessibility guidelines to ensure pixel-perfect delivery."
      techStack={techStackData}
      pricingTeaser={pricingTeaserData}
      caseStudyTitle="Featured UI/UX Design Case Study"
      caseStudy={caseStudyData}
      faqTitle="UI/UX Design FAQs for Founders & Product Teams"
      faqSubtitle="Everything you need to know about our design deliverables, revision policy, and engineering handoff."
      faqs={faqData}
      otherServicesTitle="Explore Our Engineering Capabilities"
      otherServices={otherServicesData}
      ctaBadge="Creative Collaboration"
      ctaTitle="Ready to Elevate Your Brand with a Top UI UX Design Agency in India?"
      ctaDescription="Book a free 30-minute design consultation with Aryan and the IntegersDev creative team. We'll audit your current interface and provide a clear roadmap for your prototype."
    />
  );
}
