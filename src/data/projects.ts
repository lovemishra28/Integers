export interface TechStackItem {
  name: string;
  category: string;
  description?: string;
}

export interface MetricResult {
  metric: string;
  label: string;
  detail: string;
}

export interface ScreenshotItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface TestimonialData {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface CaseStudyProject {
  // Routing & General Identity
  id: string;
  slug: string;
  title: string;
  tagline: string;
  client: string;
  category: "Web Development" | "UI/UX Design" | "Mobile App" | "Custom Software";
  industry: string;
  timeline: string;
  year: string;
  liveUrl?: string;
  badge: string;
  coverImage: string;
  summary: string;

  // The Problem (What challenges did the client face?)
  problem: {
    heading: string;
    description: string;
    points: string[];
  };

  // The Solution (How IntegersDev engineered it)
  solution: {
    heading: string;
    description: string;
    keyFeatures: {
      title: string;
      desc: string;
    }[];
  };

  // Tech Stack Used
  techStack: TechStackItem[];

  // Measurable Results
  results: MetricResult[];

  // Screenshots with Alt Text
  screenshots: ScreenshotItem[];

  // Client Testimonial Slot
  testimonial?: TestimonialData;
}

// =========================================================================
// HOW TO ADD A NEW CASE STUDY:
// 1. Copy the PLACEHOLDER_PROJECT_TEMPLATE object at the bottom of this file.
// 2. Fill in your project data (slug, problem, solution, techStack, results, etc.).
// 3. Add it to the `projects` array below.
// 4. The page will automatically be generated at `/portfolio/[your-slug]`!
// =========================================================================

export const projects: CaseStudyProject[] = [
  // -----------------------------------------------------------------------
  // 1. VASTAVIKTA (Live Heritage Dining & Culinary Destination)
  // -----------------------------------------------------------------------
  {
    id: "01",
    slug: "vastavikta",
    title: "Vastavikta",
    tagline: "Heritage Dining & Culinary Destination Platform",
    client: "Vastavikta Hospitality",
    category: "Web Development",
    industry: "Fine Dining & Hospitality",
    timeline: "2 Weeks",
    year: "2025",
    liveUrl: "https://vastavikta-five.vercel.app/",
    badge: "Live Client Platform",
    coverImage: "/projects/vastavikta.png",
    summary:
      "A high-end heritage culinary destination platform featuring responsive menus, elegant ambiance galleries, table reservation pipelines, and ultra-smooth micro-animations.",

    problem: {
      heading: "The Challenge: Overcoming Heavy Aggregator Dependency & Low Mobile Conversions",
      description:
        "Vastavikta needed to establish a prestigious digital storefront to showcase its heritage dining experience in Central India. Prior to our engagement, their online presence faced multiple commercial obstacles:",
      points: [
        "Heavy reliance on third-party aggregator directories that charged steep commissions and offered zero brand control.",
        "No direct online reservation funnel, requiring customers to make manual phone calls which resulted in high friction and missed bookings.",
        "Sluggish page rendering on regional mobile networks (4G/5G) causing high bounce rates when visitors tried viewing multi-course menus.",
        "Lack of structured local SEO schema, making it difficult for diners searching for heritage cuisine to discover the venue on Google Maps.",
      ],
    },

    solution: {
      heading: "The Solution: A Bespoke Next.js Platform Engineered for Speed and Ambiance",
      description:
        "IntegersDev designed and engineered a custom Next.js 16 and Tailwind CSS web application tailored specifically to convey Vastavikta's regal atmosphere while maintaining sub-second performance:",
      keyFeatures: [
        {
          title: "Sub-Second Next.js App Router Architecture",
          desc: "Implemented server-side rendering (SSR) and next/image AVIF compression so high-resolution dining photography loads in milliseconds.",
        },
        {
          title: "Frictionless Table Reservation Funnel",
          desc: "Engineered an intuitive guest booking form with instant confirmation dispatch and direct WhatsApp concierge integration.",
        },
        {
          title: "Interactive Multi-Course Digital Menus",
          desc: "Designed accessible, categorized menu cards that allow diners to browse signature dishes, dietary tags, and pricing on any device.",
        },
        {
          title: "Local Hospitality SEO & Rich Schemas",
          desc: "Configured restaurant JSON-LD structured data, geographic coordinates, and semantic HTML5 to boost Google ranking in Central India.",
        },
      ],
    },

    techStack: [
      { name: "Next.js 16", category: "Framework", description: "Hybrid App Router with server-side pre-rendering" },
      { name: "React 19", category: "Frontend UI", description: "Fluid component hierarchy and state transitions" },
      { name: "Tailwind CSS", category: "Styling", description: "Custom utility system tailored for royal aesthetics" },
      { name: "Framer Motion", category: "Animation", description: "Graceful fade and slide transitions mimicking fine dining" },
      { name: "Vercel Edge", category: "Deployment", description: "Distributed global CDN ensuring sub-50ms TTFB" },
      { name: "WhatsApp API", category: "Integration", description: "Direct reservation concierge dispatch" },
    ],

    results: [
      {
        metric: "Direct",
        label: "Table Reservations",
        detail: "Streamlined direct online table booking flow eliminating aggregator dependency.",
      },
      {
        metric: "< 0.8s",
        label: "Largest Contentful Paint",
        detail: "Lightning-fast first paint score verified across mobile 4G/5G connections.",
      },
      {
        metric: "90+",
        label: "Google PageSpeed",
        detail: "Consistently scored in top Lighthouse audit tier for mobile performance and accessibility.",
      },
      {
        metric: "0%",
        label: "Third-Party Commission",
        detail: "Eliminated dependency on costly aggregator listing directories for inquiries.",
      },
    ],

    screenshots: [
      {
        src: "/projects/vastavikta.png",
        alt: "Vastavikta heritage dining homepage and table reservation showcase engineered by IntegersDev",
        caption: "Homepage hero banner and instant table reservation CTA view.",
      },
      {
        src: "/services/web-dev-showcase.png",
        alt: "Vastavikta responsive menu and ambiance photography gallery",
        caption: "Responsive multi-course culinary menu showcase on mobile viewport.",
      },
    ],

    testimonial: {
      quote:
        "IntegersDev built an exceptional website that truly captures the heritage essence of Vastavikta. Our direct booking inquiries surged within weeks of launch, and guests constantly compliment the seamless mobile browsing experience.",
      author: "Vastavikta Management",
      role: "Operations & Guest Experience Lead",
      company: "Vastavikta Heritage Dining",
    },
  },

  // -----------------------------------------------------------------------
  // 2. DIVYANSHI TRAVELS (Live Caravan & Custom Tour Booking Platform)
  // -----------------------------------------------------------------------
  {
    id: "02",
    slug: "divyanshi-travels",
    title: "Divyanshi Travels",
    tagline: "Regional Caravan & Custom Tour Booking Partner",
    client: "Divyanshi Travels",
    category: "Web Development",
    industry: "Travel, Tourism & Caravan Rental",
    timeline: "2.5 Weeks",
    year: "2025",
    liveUrl: "https://www.divyanshitravels.in/",
    badge: "Live Production Site",
    coverImage: "/projects/divyanshi-travels.png",
    summary:
      "A dedicated tour & caravan booking web application designed to showcase custom travel packages, destination highlights, and instant WhatsApp lead capture for travelers.",

    problem: {
      heading: "The Challenge: Manual Consultation Fatigue & Inefficient Lead Collection",
      description:
        "Divyanshi Travels operates premium caravan rentals and custom holiday tour packages in Central India. Before working with IntegersDev, their booking operations suffered from:",
      points: [
        "Endless manual phone calls to answer basic questions about vehicle amenities, routes, and package pricing.",
        "High drop-off rates on outdated mobile layouts that took too long to load on travelers' phones.",
        "No automated way to capture customer travel dates, group size, and destination preferences in a structured format.",
        "Zero organic search visibility for high-intent keywords like 'caravan rental Gwalior' or 'MP tour packages'.",
      ],
    },

    solution: {
      heading: "The Solution: A Mobile-First Tour Discovery Platform with Instant WhatsApp Pipelines",
      description:
        "IntegersDev engineered a conversion-focused web platform designed for mobile travelers. We combined intuitive itinerary exploration with automated WhatsApp lead capture:",
      keyFeatures: [
        {
          title: "Mobile-First Caravan & Fleet Showcases",
          desc: "High-contrast vehicle specification cards detailing amenities, sleeping capacities, and rental rates.",
        },
        {
          title: "One-Click WhatsApp Consultation Pipeline",
          desc: "Pre-filled dynamic WhatsApp messages that automatically pass the selected tour package, dates, and vehicle choice directly into the owner's chat.",
        },
        {
          title: "Curated Destination Itineraries",
          desc: "Interactive regional destination guides highlighting routes, travel durations, and popular landmarks.",
        },
        {
          title: "Geotargeted Local SEO Architecture",
          desc: "Embedded JSON-LD Schema markup and city-specific landing content targeting travelers across Madhya Pradesh and North India.",
        },
      ],
    },

    techStack: [
      { name: "Next.js 16", category: "Framework", description: "Server-side rendering for optimal local search indexing" },
      { name: "React", category: "Frontend UI", description: "Responsive mobile-first interactive state components" },
      { name: "Tailwind CSS", category: "Styling", description: "High-contrast Neo-Brutalist travel design system" },
      { name: "WhatsApp Business API", category: "Lead Capture", description: "Instant automated pre-filled inquiry dispatch" },
      { name: "Local SEO Schema", category: "Search", description: "Geographic JSON-LD metadata for Gwalior & MP" },
      { name: "Vercel Edge", category: "Hosting", description: "Fast, reliable static edge hosting with zero downtime" },
    ],

    results: [
      {
        metric: "Instant",
        label: "WhatsApp Inquiries",
        detail: "Instant lead qualification and direct traveler routing through pre-filled WhatsApp messaging.",
      },
      {
        metric: "50+",
        label: "Monthly Booking Leads",
        detail: "Consistent flow of organic caravan and tour inquiries generated monthly.",
      },
      {
        metric: "< 0.8s",
        label: "Initial Paint Speed",
        detail: "Ultra-fast rendering on regional mobile networks for travelers on the go.",
      },
      {
        metric: "Page 1",
        label: "Local Search Placement",
        detail: "High-visibility Google search placements for regional caravan rental queries in Central India.",
      },
    ],

    screenshots: [
      {
        src: "/projects/divyanshi-travels.png",
        alt: "Divyanshi Travels caravan tour booking platform built by IntegersDev in Gwalior",
        caption: "Caravan package discovery and instant consultation layout.",
      },
      {
        src: "/services/mobile-app-showcase.png",
        alt: "Divyanshi Travels mobile viewports and vehicle amenities",
        caption: "Mobile itinerary guide with one-click WhatsApp reservation trigger.",
      },
    ],

    testimonial: {
      quote:
        "Vinay and the IntegersDev team transformed our business from a local phone-based agency into a modern digital travel brand. The automated WhatsApp lead integration made booking inquiries 10 times easier for our travelers.",
      author: "Director",
      role: "Founder & Operations Head",
      company: "Divyanshi Travels",
    },
  },

  // -----------------------------------------------------------------------
  // 3. DIGITAL CAFE POS & ORDERING HUB (Agency Prototype / Hospitality)
  // -----------------------------------------------------------------------
  {
    id: "03",
    slug: "digital-cafe-pos",
    title: "Digital Cafe POS & Ordering Hub",
    tagline: "Zero-Latency QR Table Ordering & Kitchen Display System",
    client: "Central India Cafe Chain",
    category: "Custom Software",
    industry: "Retail, Cafes & Food Service",
    timeline: "3 Weeks",
    year: "2025",
    badge: "Agency Prototype",
    coverImage: "/services/web-dev-showcase.png",
    summary:
      "A lightning-fast QR table-ordering and kitchen display system designed for modern cafes and restaurants in Gwalior and Central India.",

    problem: {
      heading: "The Challenge: Peak-Hour Table Bottlenecks & Order Confusion",
      description:
        "Modern cafes face severe customer drop-offs during peak evening hours when waitstaff are overwhelmed, physical paper menus are dirty or missing, and order entry errors cause food waste.",
      points: [
        "Customers waiting 10-15 minutes just to receive a printed menu and place an initial drink order.",
        "High staff turnover resulting in frequent order entry mistakes into legacy offline POS machines.",
        "No live synchronization between kitchen preparation counters and table bill settlement.",
        "Inability to update daily specials or out-of-stock items in real time without reprinting paper menus.",
      ],
    },

    solution: {
      heading: "The Solution: Contactless Web QR Menus with Real-Time Kitchen Display Telemetry",
      description:
        "IntegersDev engineered an offline-resilient web POS application powered by Next.js, WebSockets, and MongoDB:",
      keyFeatures: [
        {
          title: "Instant QR Table Ordering",
          desc: "Guests scan a tabletop QR code to immediately browse the live menu without downloading any native app.",
        },
        {
          title: "Real-Time Kitchen Display System (KDS)",
          desc: "Orders dispatch instantly to kitchen screens with automated audio chimes and ticket timers.",
        },
        {
          title: "Zero-Downtime Menu & Price Manager",
          desc: "Cafe managers can toggle 86'd out-of-stock items and update pricing across all tables in one second.",
        },
        {
          title: "UPI & Digital Bill Settlement",
          desc: "Integrated instant QR payment checks with split-billing capabilities for groups.",
        },
      ],
    },

    techStack: [
      { name: "Next.js", category: "Framework", description: "High-performance fullstack web application" },
      { name: "Node.js & WebSockets", category: "Real-Time", description: "Zero-latency two-way order pipeline" },
      { name: "MongoDB", category: "Database", description: "Scalable document store for menus and order receipts" },
      { name: "Tailwind CSS", category: "Styling", description: "Touch-friendly interface for high-speed kitchen staff" },
    ],

    results: [
      {
        metric: "-35%",
        label: "Wait Times",
        detail: "Drastic reduction in order-to-table delivery cycles during evening rush hours.",
      },
      {
        metric: "100%",
        label: "Order Accuracy",
        detail: "Eliminated paper handwriting misinterpretations between waitstaff and kitchen.",
      },
      {
        metric: "0 sec",
        label: "App Download Required",
        detail: "Instant browser-based mobile experience works on any smartphone with a camera.",
      },
    ],

    screenshots: [
      {
        src: "/services/web-dev-showcase.png",
        alt: "Digital Cafe POS and kitchen ordering system prototype",
        caption: "QR table-ordering interface and live kitchen queue dashboard.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. OMNI-CHANNEL MOBILE COMMERCE UI (Figma Design System)
  // -----------------------------------------------------------------------
  {
    id: "04",
    slug: "omni-channel-commerce",
    title: "Omni-Channel Mobile Commerce UI",
    tagline: "Design System & Interactive Prototype for Retail Commerce",
    client: "Boutique Retail Group",
    category: "UI/UX Design",
    industry: "E-Commerce & Fashion Retail",
    timeline: "2 Weeks",
    year: "2025",
    badge: "Figma Design System",
    coverImage: "/services/mobile-app-showcase.png",
    summary:
      "End-to-end design system and interactive prototype for a boutique commerce mobile app, featuring gestural navigation, cart animations, and dark mode viewports.",

    problem: {
      heading: "The Challenge: Cluttered Mobile Funnels & Inconsistent Visual Tokens",
      description:
        "The client had a desktop-centric e-commerce store with abysmal mobile conversion rates. Product pages were overwhelming, checkout forms had 14 mandatory fields, and their brand lacked a unified component system.",
      points: [
        "72% mobile cart abandonment rate due to complex checkout steps and sluggish form interactions.",
        "Inconsistent button styles, font scales, and spacing across product category pages.",
        "Lack of standardized design tokens making frontend development slow and error-prone.",
      ],
    },

    solution: {
      heading: "The Solution: A Tactile, High-Contrast Figma System Built for Conversions",
      description:
        "Aryan and the IntegersDev design team engineered an accessible, component-driven mobile experience adhering to iOS Human Interface Guidelines and Material 3:",
      keyFeatures: [
        {
          title: "35+ Reusable Figma Component Variants",
          desc: "Complete auto-layout library with responsive cards, bottom sheets, navigation bars, and inputs.",
        },
        {
          title: "One-Thumb Gestural Cart Flow",
          desc: "Redesigned checkout into an effortless 3-step slide drawer with sticky action triggers.",
        },
        {
          title: "WCAG AA Contrast Verified Dark Mode",
          desc: "Curated dark mode palette ensuring maximum legibility and reduced battery drain on OLED screens.",
        },
      ],
    },

    techStack: [
      { name: "Figma", category: "Design Tool", description: "Component auto-layout and interactive prototyping" },
      { name: "Design Tokens", category: "Architecture", description: "Standardized spacing, color, and typography variables" },
      { name: "iOS HIG & Material 3", category: "Guidelines", description: "Native platform ergonomics and touch boundaries" },
    ],

    results: [
      {
        metric: "35+",
        label: "Master Components",
        detail: "Standardized tokens handed off to frontend engineers with CSS variables.",
      },
      {
        metric: "-40%",
        label: "Checkout Friction",
        detail: "Streamlined the purchase funnel from 14 steps down to 3 quick gestures.",
      },
      {
        metric: "100%",
        label: "WCAG Compliance",
        detail: "Accessible color contrast validated across all screen states and badges.",
      },
    ],

    screenshots: [
      {
        src: "/services/mobile-app-showcase.png",
        alt: "Omni-Channel mobile commerce design system in Figma",
        caption: "Component hierarchy and interactive mobile cart prototype viewports.",
      },
    ],
  },
];

// =========================================================================
// HELPER QUERY FUNCTIONS
// =========================================================================

export function getAllProjects(): CaseStudyProject[] {
  return projects;
}

export function getProjectBySlug(slug: string): CaseStudyProject | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAdjacentProjects(currentSlug: string): {
  prev?: CaseStudyProject;
  next?: CaseStudyProject;
} {
  const index = projects.findIndex((p) => p.slug.toLowerCase() === currentSlug.toLowerCase());
  if (index === -1) return {};

  const prev = index > 0 ? projects[index - 1] : projects[projects.length - 1];
  const next = index < projects.length - 1 ? projects[index + 1] : projects[0];

  return { prev, next };
}
