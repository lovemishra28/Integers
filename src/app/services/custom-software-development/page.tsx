import React from "react";
import Link from "next/link";
import {
  FaCubes,
  FaDatabase,
  FaLock,
  FaSyncAlt,
  FaArrowRight,
  FaChartLine,
  FaServer,
  FaShieldAlt,
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
  title: "Custom Software Development in Gwalior | SaaS & Portals | IntegersDev",
  description:
    "Custom software development company in Gwalior. IntegersDev engineers bespoke SaaS apps, internal admin portals, RBAC systems & automated databases. Request a proposal!",
  alternates: {
    canonical: "https://integersdev.in/services/custom-software-development",
  },
  openGraph: {
    title: "Custom Software Development in Gwalior | SaaS & Portals | IntegersDev",
    description:
      "Premier custom software development studio in Gwalior. Bespoke web portals, database systems & operational dashboards by IntegersDev.",
    url: "https://integersdev.in/services/custom-software-development",
    siteName: "IntegersDev",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development in Gwalior - IntegersDev",
      },
    ],
  },
};

const whatsIncludedData: IncludedFeature[] = [
  {
    icon: <FaLock className="w-5 h-5 text-black" />,
    title: "Role-Based Access Control (RBAC) & Enterprise Security",
    desc: "We engineer strict granular permissions for Superadmins, Staff, and Customers with session management, two-factor authentication (2FA), and immutable audit logs.",
    deliverables: [
      "Custom permission matrix with multi-role user groups",
      "Encrypted session handling & JWT token rotation",
      "Two-factor authentication (2FA) via authenticator app / SMS",
      "Comprehensive administrative action audit logs",
    ],
  },
  {
    icon: <FaDatabase className="w-5 h-5 text-black" />,
    title: "Scalable Cloud Database & Schema Modeling",
    desc: "Replace fragile spreadsheets with robust relational or document databases. We design normalized schemas on PostgreSQL and MongoDB optimized for high-volume read/write queries.",
    deliverables: [
      "Normalized database schema architecture & indexing",
      "Automated daily cloud backups with point-in-time recovery",
      "Zero-downtime database migration scripts",
      "Query performance tuning for sub-50ms database responses",
    ],
  },
  {
    icon: <FaCubes className="w-5 h-5 text-black" />,
    title: "Custom SaaS MVPs & Multi-Tenant Infrastructure",
    desc: "Turn your unique product concept into an investable, operational SaaS platform. We architect tenant data isolation, subscription checkout, and automated onboarding.",
    deliverables: [
      "Multi-tenant data isolation architecture",
      "Razorpay, Stripe & automated recurring subscription billing",
      "Self-service customer onboarding & organization workspaces",
      "Custom domain mapping for multi-tenant white-label portals",
    ],
  },
  {
    icon: <FaChartLine className="w-5 h-5 text-black" />,
    title: "Real-Time Telemetry & Operational Dashboards",
    desc: "Empower your management and staff with unified analytics portals that centralize business orders, tickets, performance metrics, and automated PDF export reports.",
    deliverables: [
      "Interactive data visualizations with fluid charts and filters",
      "Automated GST invoice & financial PDF document generation",
      "Live order pipelines & operational throughput monitors",
      "Custom CSV / Excel data export and import pipelines",
    ],
  },
  {
    icon: <FaSyncAlt className="w-5 h-5 text-black" />,
    title: "Third-Party API Orchestration & Automated Webhooks",
    desc: "Connect your core business engine to payment gateways, WhatsApp notification dispatchers, SMS gateways, CRMs, and accounting suites without manual data entry.",
    deliverables: [
      "Reliable webhook handlers with automated retry logic",
      "WhatsApp Cloud API & SMS transactional notification triggers",
      "Payment gateway reconciliation & instant refund processing",
      "Custom RESTful and GraphQL integration endpoints",
    ],
  },
  {
    icon: <FaShieldAlt className="w-5 h-5 text-black" />,
    title: "Rigorous QA, Code Auditing & Ongoing Retainers",
    desc: "Every system undergoes end-to-end integration testing, input sanitization against SQL injections, and comes with ongoing maintenance options to support your growth.",
    deliverables: [
      "Automated unit and integration test coverage",
      "Protection against SQLi, XSS, and CSRF vulnerabilities",
      "Dedicated staging environment for client feature approval",
      "Ongoing monthly retainer support and server monitoring",
    ],
  },
];

const processStepsData: ProcessStep[] = [
  {
    step: "01",
    title: "Workflow Mapping & Data Modeling",
    desc: "Love and our engineering team dissect your manual business operations, identify operational bottlenecks, and design clean database entities and user permission matrices.",
  },
  {
    step: "02",
    title: "Interactive System Wireframing",
    desc: "Aryan designs the complete software portal in Figma, mapping admin data tables, action modals, filter bars, and operational views to ensure frictionless usability.",
  },
  {
    step: "03",
    title: "Fullstack Sprint Engineering",
    desc: "Vinay and Kuldeep build your platform using TypeScript, Next.js, Node.js, and PostgreSQL/MongoDB, connecting business logic, authentication, and external APIs.",
  },
  {
    step: "04",
    title: "Security Auditing & Cloud Deployment",
    desc: "We perform penetration testing, run load simulations, deploy to secure cloud servers, conduct staff training, and hand over 100% of the repository and database keys.",
  },
];

const techStackData: TechItem[] = [
  {
    name: "Node.js",
    category: "Backend Runtime",
    badge: "Scalable",
    desc: "High-throughput asynchronous engine processing business workflows.",
  },
  {
    name: "TypeScript",
    category: "Language",
    badge: "Strict",
    desc: "End-to-end type safety across database schemas, APIs, and portal UI.",
  },
  {
    name: "PostgreSQL",
    category: "Relational DB",
    desc: "Rock-solid ACID-compliant database for transactions and relations.",
  },
  {
    name: "MongoDB",
    category: "Document DB",
    desc: "Flexible, high-scale document store for dynamic product and event logs.",
  },
  {
    name: "Prisma ORM",
    category: "Data Layer",
    desc: "Type-safe database modeling with automated migration pipelines.",
  },
  {
    name: "Redis",
    category: "Cache & Queue",
    desc: "Sub-millisecond in-memory caching and background job task queues.",
  },
  {
    name: "Next.js Fullstack",
    category: "Frontend & API",
    badge: "Modern",
    desc: "Production dashboard UI with React Server Components & Server Actions.",
  },
  {
    name: "Docker",
    category: "DevOps",
    desc: "Containerized reproducible deployment across cloud environments.",
  },
];

const pricingTeaserData: PricingTeaser = {
  title: "Milestone-Based Custom Software Proposals",
  badge: "Bespoke Architecture",
  startingPrice: "₹35,000 / $399",
  timeframe: "2 to 4 Weeks",
  description:
    "Tailored engineering roadmaps with clear milestone deliverables, escrow payments, and complete source code ownership upon launch.",
  highlights: [
    "Full custom database schema & architectural blueprint",
    "Role-based access control (RBAC) admin dashboard",
    "Third-party payment & WhatsApp notification pipelines",
    "Interactive analytics dashboard & PDF reporting engine",
    "100% intellectual property & code ownership transfer",
    "30 days of post-launch hypercare & staff onboarding",
  ],
  ctaText: "Explore Custom Pricing & Estimator",
  ctaHref: "/pricing",
};

const caseStudyData: RelatedCaseStudy = {
  title: "Digital Cafe POS & Real-Time Ordering Hub",
  client: "Central India Cafe Chain",
  category: "Custom Web Application",
  badge: "Agency Prototype",
  description:
    "A lightning-fast QR table-ordering, kitchen display system (KDS), and inventory telemetry hub designed for modern cafes and restaurants in Gwalior and Central India.",
  impact:
    "Delivered zero-latency menu updates, offline cache resilience, automated kitchen order ticket (KOT) dispatches, and streamlined customer checkout.",
  image: "/services/web-dev-showcase.png",
  stack: ["Next.js", "MongoDB", "Node.js", "WebSockets", "Tailwind CSS"],
  portfolioHref: "/portfolio/digital-cafe-pos",
};

const faqData: FAQItem[] = [
  {
    question: "Who owns the custom software source code and intellectual property?",
    answer:
      "You do—100%. Upon final project milestone completion, all custom source code repositories, database schemas, API keys, and deployment scripts are transferred directly to your organization. IntegersDev never locks you into proprietary platforms or recurring agency license fees.",
    category: "IP & Ownership",
  },
  {
    question: "How do you handle sensitive data security and automated backups?",
    answer:
      "We implement defense-in-depth security: SSL/TLS encryption for all data in transit, AES-256 encryption at rest, secure password hashing with bcrypt, strict environment secret segregation, and automated daily cloud database snapshots with instant restore capabilities.",
    category: "Data Security",
  },
  {
    question: "Can your custom software scale as our business handles tens of thousands of users?",
    answer:
      "Yes. We design with scalability from day one: normalized database indexes, connection pooling with Prisma, Redis caching for frequent queries, and stateless server actions that scale horizontally on modern cloud infrastructure (Vercel, AWS, or DigitalOcean).",
    category: "Scalability",
  },
  {
    question: "Can you connect our custom software with Indian payment gateways and WhatsApp?",
    answer:
      "Yes, we have deep experience integrating Indian business services including Razorpay, PayU, Cashfree, UPI QR flows, automated GST invoicing, and official WhatsApp Cloud API dispatchers for instant customer notifications.",
    category: "Integrations",
  },
  {
    question: "Do you offer post-launch support and feature expansions?",
    answer:
      "Yes. Every build includes 30 days of complimentary post-launch hypercare warranty. Afterward, we offer flexible monthly retainer arrangements for server monitoring, security patching, database optimization, and ongoing feature sprints.",
    category: "Ongoing Support",
  },
];

const otherServicesData: OtherServiceLink[] = [
  {
    title: "Web Development",
    slug: "/services/web-development",
    badge: "Core Service",
    desc: "Custom high-speed Next.js websites engineered for local businesses and modern startups in Gwalior.",
  },
  {
    title: "UI/UX Design Studio",
    slug: "/services/ui-ux-design",
    badge: "Figma Ready",
    desc: "Intuitive administrative flows, clickable wireframes, and design systems built for complex software.",
  },
  {
    title: "Mobile App Development",
    slug: "/services/mobile-app-development",
    badge: "iOS & Android",
    desc: "Cross-platform mobile applications built with React Native connected to your custom software backend.",
  },
  {
    title: "Next.js Development",
    slug: "/services/nextjs-development",
    badge: "App Router",
    desc: "Server-side rendering, Edge CDN caching, and high-performance frontend engineering.",
  },
];

export default function CustomSoftwareDevelopmentPage() {
  return (
    <ServicePageTemplate
      badge="Enterprise & SaaS Engineering"
      title="Custom Software Development in"
      highlight="Gwalior & India"
      serviceType="Custom Software Development"
      canonicalUrl="/services/custom-software-development"
      breadcrumbs={[
        { label: "Services", href: "/services" },
        { label: "Custom Software Development" },
      ]}
      actions={
        <>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            Request Software Proposal
            <FaArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-white text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:scale-105 active:scale-95 transition-transform"
          >
            See Systems Built
          </Link>
        </>
      }
      introHeading="Building Bespoke Software Platforms Tailored Specifically to Your Operational Workflows"
      introText={
        <>
          <p>
            Off-the-shelf software and bloated generic tools inevitably force your team into clumsy manual workarounds, fragmented spreadsheets, and expensive per-seat monthly license fees. At <strong className="text-black">IntegersDev</strong>, our <strong className="text-black">custom software development</strong> services engineer exact, purpose-built systems tailored specifically around your company's operational DNA.
          </p>
          <p>
            Whether you need a specialized multi-tenant SaaS MVP, an internal administrative portal with granular role-based permissions (RBAC), an automated inventory and ordering hub, or a complex third-party API pipeline, our engineering collective—Vinay, Aryan, Kuldeep, and Love—builds robust, secure software from our studio in Gwalior, Madhya Pradesh. We engineer normalized cloud databases, automate repetitive workflows, and hand over 100% of the custom source code upon launch.
          </p>
        </>
      }
      introStats={[
        { value: "100%", label: "Code & IP Ownership" },
        { value: "RBAC", label: "Multi-Role Security" },
        { value: "<50ms", label: "Indexed DB Queries" },
        { value: "24/7", label: "Uptime Monitoring" },
      ]}
      whatsIncludedTitle="What's Included in Our Custom Software Engagements"
      whatsIncludedSubtitle="From database modeling to automated billing webhooks, every feature is engineered for operational durability and data security."
      whatsIncluded={whatsIncludedData}
      processTitle="Our Four-Sprint Custom Engineering Roadmap"
      processSubtitle="A structured fullstack delivery process guaranteeing predictable milestones, regular staging demos, and zero technical debt."
      processSteps={processStepsData}
      techTitle="Enterprise Fullstack Technology Stack"
      techSubtitle="We choose robust backend frameworks, ACID-compliant databases, and secure APIs designed to scale for years to come."
      techStack={techStackData}
      pricingTeaser={pricingTeaserData}
      caseStudyTitle="Featured Custom Software Case Study"
      caseStudy={caseStudyData}
      faqTitle="Custom Software Development FAQs"
      faqSubtitle="Answers to critical questions regarding source code ownership, database security, scalability, and integrations."
      faqs={faqData}
      otherServicesTitle="Explore Our Related Digital Specialties"
      otherServices={otherServicesData}
      ctaBadge="Technical Scoping"
      ctaTitle="Ready to Replace Clunky Tools with Custom Engineered Software?"
      ctaDescription="Book a private technical consultation with Vinay, Aryan, Kuldeep & Love. We'll examine your operational bottleneck and engineer a clear project proposal within 24 hours."
    />
  );
}
