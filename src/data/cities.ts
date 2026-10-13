export interface CityIndustry {
  title: string;
  badge: string;
  painPoint: string;
  solution: string;
  techStack: string[];
}

export interface CityFAQ {
  question: string;
  answer: string;
}

export interface CityLocalContext {
  heading: string;
  intro: string;
  challenges: {
    title: string;
    description: string;
  }[];
  opportunity: string;
}

export interface CityConfig {
  slug: string;
  cityName: string;
  state: string;
  regionRole: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  meta: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    badge: string;
    h1Title: string;
    h1Highlight: string;
    description: string;
  };
  localContext: CityLocalContext;
  industriesServed: CityIndustry[];
  localAdvantage: {
    title: string;
    description: string;
    points: {
      title: string;
      desc: string;
    }[];
  };
  relatedCaseStudySlug: string;
  pricingTeaser: {
    startingUSD: string;
    startingINR: string;
    delivery: string;
  };
  faqs: CityFAQ[];
}

export const CITIES_DATA: CityConfig[] = [
  // =========================================================================
  // 1. GWALIOR
  // =========================================================================
  {
    slug: "web-development-company-gwalior",
    cityName: "Gwalior",
    state: "Madhya Pradesh",
    regionRole: "Heritage, Regional Healthcare & Emerging Education Hub of Central India",
    coordinates: {
      latitude: 26.2183,
      longitude: 78.1828,
    },
    meta: {
      title: "Top Web Development Company in Gwalior | Next.js & UI/UX Studio | IntegersDev",
      description:
        "Leading web development company in Gwalior. IntegersDev builds custom Next.js websites, high-converting platforms & mobile apps. In-person meetings in City Center.",
      canonical: "https://integersdev.in/web-development-company-gwalior",
    },
    hero: {
      badge: "Headquartered in Gwalior",
      h1Title: "Top Web Development Company in",
      h1Highlight: "Gwalior",
      description:
        "Headquartered at City Center, Gwalior, IntegersDev is the dedicated engineering collective that local brands, medical institutes, travel operators, and growing businesses trust. We replace slow, generic WordPress themes with custom Next.js platforms, intuitive UI/UX design, and sub-second load times engineered for Central India's digital economy.",
    },
    localContext: {
      heading: "Why Gwalior Businesses Are Upgrading Beyond Outdated Templates",
      intro:
        "Over 80% of consumer and business searches in Gwalior now occur on mobile devices over 4G and 5G connections. When potential customers search for caravan rentals near Gwalior Fort, coaching centers in Phoolbagh, diagnostic labs near Morar, or stone exporters in Lashkar, they expect immediate page loads. Generic website builders loaded with 30+ plugins fail Core Web Vitals, driving local customers straight to national aggregators.",
      challenges: [
        {
          title: "Sluggish Mobile Loading on Regional Networks",
          description:
            "Standard multi-purpose WordPress themes load 3MB to 5MB of bloated JavaScript. On regional mobile devices, this causes 4 to 7-second delays and high bounce rates.",
        },
        {
          title: "Zero Google Local Pack & Map Visibility",
          description:
            "Most regional agencies fail to implement geographic schema markup (JSON-LD), causing local Gwalior businesses to get buried beneath national directory portals.",
        },
        {
          title: "Faceless Subcontracting & Communication Silos",
          description:
            "Businesses in Gwalior frequently suffer from agencies that outsource coding to distant third parties, leading to miscommunications, delayed revisions, and broken promises.",
        },
      ],
      opportunity:
        "By building your digital platform on modern Next.js App Router and clean TypeScript, your business achieves 90+ Google Lighthouse performance, ranks higher on commercial searches, and converts local traffic into paying customers.",
    },
    industriesServed: [
      {
        title: "Tourism, Travel & Caravan Rentals",
        badge: "Hospitality & Leisure",
        painPoint:
          "High reliance on phone inquiries, missing interactive booking calendars, and low search visibility for tours around Gwalior, Orchha, and Chambal.",
        solution:
          "Custom Next.js booking engines with interactive vehicle catalogs, real-time availability sync, and instant WhatsApp booking triggers (as built for Divyanshi Travels).",
        techStack: ["Next.js", "TypeScript", "WhatsApp API", "Razorpay"],
      },
      {
        title: "Education, Coaching & Skill Institutes",
        badge: "EdTech & Academics",
        painPoint:
          "Manual admission inquiries, clunky student registration forms, and PDF brochures that fail to load on mobile browsers.",
        solution:
          "Streamlined student enrollment portals, interactive course roadmaps, automated SMS/email alerts, and student testimonial carousels.",
        techStack: ["React", "Tailwind CSS", "MongoDB", "Email Webhooks"],
      },
      {
        title: "Healthcare, Hospitals & Diagnostic Centers",
        badge: "Medical & Clinical",
        painPoint:
          "Patients struggling to book diagnostic appointments, locate doctor schedules, or view lab test packages on mobile devices.",
        solution:
          "HIPAA/patient-friendly appointment scheduling portals, doctor profile directories, and instant test booking with location directions.",
        techStack: ["Next.js SSR", "PostgreSQL", "Cloudflare CDN", "Clean UI"],
      },
      {
        title: "Natural Stone, Tile & Marble Manufacturers",
        badge: "Manufacturing & B2B Export",
        painPoint:
          "Static PDF product sheets that international B2B buyers in the Gulf and Europe cannot easily search or filter by finish and dimension.",
        solution:
          "High-resolution digital product showrooms with material specification filters, quote cart functionality, and international multi-currency pricing.",
        techStack: ["Next.js SSG", "Headless CMS", "AWS S3", "B2B Quoting"],
      },
    ],
    localAdvantage: {
      title: "The IntegersDev Gwalior Advantage",
      description:
        "We are not a remote agency working from thousands of miles away. We live and engineer right here in Gwalior.",
      points: [
        {
          title: "In-Person Collaborative Sprints",
          desc: "Meet Vinay, Aryan, Kuldeep & Love directly in Gwalior for discovery workshops, wireframing reviews, and deployment walk-throughs.",
        },
        {
          title: "Engineered for Central Indian Audiences",
          desc: "UI/UX interfaces designed with clear bilingual typography (Hindi & English), intuitive WhatsApp CTAs, and fast UPI payment gateways.",
        },
        {
          title: "100% Code & IP Ownership",
          desc: "Complete GitHub repository and Figma source transfers upon sign-off. Zero recurring software licenses or proprietary lock-ins.",
        },
        {
          title: "Direct Engineer Access (No Account Managers)",
          desc: "You have a direct line to the software engineers coding your platform, ensuring rapid feedback cycles and immediate bug fixes.",
        },
      ],
    },
    relatedCaseStudySlug: "divyanshi-travels",
    pricingTeaser: {
      startingUSD: "$129",
      startingINR: "₹12,250",
      delivery: "3 – 5 Days Turnaround",
    },
    faqs: [
      {
        question: "Can we meet your team in person in Gwalior before starting?",
        answer:
          "Yes! Our studio is located at City Center, Patel Nagar, Gwalior. We welcome in-person discovery meetings where we can discuss your technical requirements, review wireframes, and outline milestones over coffee.",
      },
      {
        question: "Why should a Gwalior business choose Next.js over a cheap WordPress site?",
        answer:
          "Traditional WordPress themes come bloated with third-party plugins that create security vulnerabilities and slow down page loads to 4–6 seconds. IntegersDev builds with Next.js and TypeScript, delivering sub-second load times, 90+ Lighthouse scores, automated SEO schema, and unmatched conversion rates.",
      },
      {
        question: "How do you help our Gwalior business rank on Google Local searches?",
        answer:
          "Every web project includes geographic structured data (LocalBusiness JSON-LD schema), targeted geographic title tags, Open Graph cards, automated XML sitemaps, and Core Web Vitals optimization to help you dominate local Google Search and Google Maps packs.",
      },
      {
        question: "Do you build bilingual (Hindi & English) websites for regional customers?",
        answer:
          "Yes. We frequently build websites and customer portals with seamless Hindi and English language toggles, localized font rendering, and culturally resonant UI micro-interactions.",
      },
      {
        question: "What is your typical project delivery timeline for Gwalior businesses?",
        answer:
          "Our Basic MVP sprint takes 3 to 5 days, our Standard production fullstack build takes 7 to 10 days, and complex custom software platforms take 2 to 3 weeks with structured milestone check-ins.",
      },
    ],
  },

  // =========================================================================
  // 2. INDORE
  // =========================================================================
  {
    slug: "web-development-company-indore",
    cityName: "Indore",
    state: "Madhya Pradesh",
    regionRole: "Commercial Capital, Startup Epicenter & D2C Innovation Hub of MP",
    coordinates: {
      latitude: 22.7196,
      longitude: 75.8577,
    },
    meta: {
      title: "Web Development Company in Indore | Next.js & UI/UX | IntegersDev",
      description:
        "Premier web development company for Indore startups, D2C brands & enterprises. High-speed Next.js web applications, UI/UX systems & mobile apps. Request a quote!",
      canonical: "https://integersdev.in/web-development-company-indore",
    },
    hero: {
      badge: "Engineering for Indore Startups",
      h1Title: "High-Performance Web Development in",
      h1Highlight: "Indore",
      description:
        "Indore is the undisputed commercial engine and startup capital of Central India. From Super Corridor SaaS innovators to D2C food brands and Vijay Nagar enterprises, IntegersDev delivers high-speed Next.js web applications, cutting-edge UI/UX design, and robust cloud architectures built to scale with Indore's aggressive growth pace.",
    },
    localContext: {
      heading: "Scaling Indore's Digital Ecosystem with Modern Web Architecture",
      intro:
        "With Crystal IT Park expanding, the Super Corridor attracting national tech investments, and homegrown Indore brands scaling nationally across quick commerce and D2C, businesses in Indore face fierce competition. A generic brochure site won't cut it. Modern consumers and enterprise buyers demand instant page speeds, silky-smooth checkout funnels, and real-time backend synchronization.",
      challenges: [
        {
          title: "High-Traffic Flash Sale & Order Spikes",
          description:
            "Indore D2C and consumer brands experience traffic surges during marketing campaigns that crash traditional shared-hosting websites.",
        },
        {
          title: "Fierce Ad-Driven Customer Acquisition Costs (CAC)",
          description:
            "Every 100ms delay in mobile landing page loading drops checkout conversion by 7%. Slow sites waste valuable Instagram and Google Ad budgets.",
        },
        {
          title: "Complex Multi-Platform Data Integration Needs",
          description:
            "Growing Indore startups need tight integrations between web frontends, warehouse management software (WMS), ERPs, and logistics APIs (Shiprocket, Delhivery).",
        },
      ],
      opportunity:
        "IntegersDev empowers Indore businesses with headless Next.js frontends, edge-cached serverless APIs, and resilient database architectures that maintain 99.99% uptime through viral marketing campaigns.",
    },
    industriesServed: [
      {
        title: "Fast-Growing Tech Startups & SaaS",
        badge: "Super Corridor & Tech Parks",
        painPoint:
          "Needing to ship an investor-ready MVP in under 2 weeks with clean code, scalable authentication, and Stripe/Razorpay subscription billing.",
        solution:
          "Full-stack Next.js web apps with Clerk/Supabase auth, interactive user dashboards, and automated recurring billing infrastructure.",
        techStack: ["Next.js App Router", "TypeScript", "Supabase", "Stripe / Razorpay"],
      },
      {
        title: "D2C Brands, Namkeen & Food Ventures",
        badge: "E-Commerce & Food Tech",
        painPoint:
          "Slow Shopify themes with clunky checkouts that fail to convert mobile buyers across Tier-1 and Tier-2 Indian cities.",
        solution:
          "Headless e-commerce storefronts with 1-click UPI checkout, dynamic pin code serviceability checking, and automated WhatsApp order tracking.",
        techStack: ["Next.js", "Tailwind CSS", "Shopify Headless", "Shiprocket API"],
      },
      {
        title: "Textile, Garment & Apparel Manufacturers",
        badge: "B2B Trade & Apparel",
        painPoint:
          "Inability to showcase seasonal fabric lookbooks and bulk purchase tiers to national garment wholesalers effectively online.",
        solution:
          "B2B ordering portals with tiered wholesaler pricing, sample request workflows, and instant PDF invoice generation.",
        techStack: ["React", "Node.js", "PostgreSQL", "Cloudinary Media"],
      },
      {
        title: "Logistics, Warehousing & Fleet Operators",
        badge: "Supply Chain & Transport",
        painPoint:
          "Manual dispatch calls, slow quote generation for freight, and zero real-time consignment visibility for corporate shippers.",
        solution:
          "Custom logistics portals with instant freight rate calculators, GPS tracking integrations, and automated proof-of-delivery uploads.",
        techStack: ["React Native", "Next.js", "Mapbox", "Redis Queue"],
      },
    ],
    localAdvantage: {
      title: "Why Indore Businesses Choose IntegersDev",
      description:
        "We combine metro-grade engineering rigor with regional accessibility and competitive pricing.",
      points: [
        {
          title: "Sub-Second Performance for Maximum Ad ROI",
          desc: "We ensure landing pages load under 0.8 seconds, ensuring every rupee spent on Google and Meta ads converts at maximum efficiency.",
        },
        {
          title: "Rapid 7–10 Day Production Sprints",
          desc: "Indore moves fast. Our agile sprint methodology gets your full-stack platform from Figma wireframe to live production in days, not months.",
        },
        {
          title: "Scalable Cloud Architecture",
          desc: "Built on Vercel, Supabase, and AWS serverless primitives designed to handle tens of thousands of concurrent users without server crashes.",
        },
        {
          title: "Complete Intellectual Property Transfer",
          desc: "Full code ownership and clean documentation that your internal engineering team or future investors can easily audit and scale.",
        },
      ],
    },
    relatedCaseStudySlug: "omni-channel-commerce",
    pricingTeaser: {
      startingUSD: "$129",
      startingINR: "₹12,250",
      delivery: "7 – 10 Days Standard Delivery",
    },
    faqs: [
      {
        question: "How does IntegersDev support startups and businesses in Indore?",
        answer:
          "We partner with Indore startups, D2C brands, and established enterprises across Vijay Nagar, AB Road, and Super Corridor. We conduct regular video syncs, provide dedicated Slack channels, and travel to Indore for key architecture and milestone reviews.",
      },
      {
        question: "Can you rebuild our slow Shopify or WordPress store into a custom fast site?",
        answer:
          "Yes! We specialize in headless migrations. We keep your existing product database and order history while replacing the slow frontend with a custom Next.js storefront that loads in under 1 second.",
      },
      {
        question: "Do you integrate Indian payment gateways like Razorpay, Cashfree, and PhonePe?",
        answer:
          "Absolutely. We have extensive experience integrating Razorpay, Cashfree, PhonePe, and PayU with automated webhooks, UPI QR codes, credit card EMI, and instant payment reconciliation.",
      },
      {
        question: "How do you ensure our Indore platform can handle flash sale traffic spikes?",
        answer:
          "We architect with Next.js edge caching, static generation (SSG), and auto-scaling serverless databases (PostgreSQL/Supabase with connection pooling). Even during massive viral campaigns, your platform remains fast and stable.",
      },
      {
        question: "Can we start with an MVP and scale to a mobile app later?",
        answer:
          "Yes! Because our architecture uses strict TypeScript and modular APIs, we can launch your web platform first and seamlessly build matching iOS and Android React Native apps sharing the exact same backend.",
      },
    ],
  },

  // =========================================================================
  // 3. BHOPAL
  // =========================================================================
  {
    slug: "web-development-company-bhopal",
    cityName: "Bhopal",
    state: "Madhya Pradesh",
    regionRole: "State Administrative Capital, Industrial Hub & Higher Education Center",
    coordinates: {
      latitude: 23.2599,
      longitude: 77.4126,
    },
    meta: {
      title: "Web Development Company in Bhopal | Next.js & UI/UX | IntegersDev",
      description:
        "Top web development company in Bhopal. High-security Next.js websites, custom software, UI/UX design & mobile apps for institutions, solar & industry.",
      canonical: "https://integersdev.in/web-development-company-bhopal",
    },
    hero: {
      badge: "Serving Capital Region & MP",
      h1Title: "Premier Web Development Company in",
      h1Highlight: "Bhopal",
      description:
        "As the administrative capital and educational epicenter of Madhya Pradesh, Bhopal demands digital software that combines exceptional aesthetic polish with enterprise-grade data security. IntegersDev crafts bespoke Next.js web applications, government vendor portals, higher-ed platforms, and green tech software built for organizations that cannot compromise on quality.",
    },
    localContext: {
      heading: "Modernizing Bhopal's Institutional & Industrial Web Presence",
      intro:
        "From Mandideep and Govindpura industrial manufacturing corridors to Arera Colony corporate headquarters and leading research universities around MP Nagar, Bhopal's business landscape is rapidly adopting digital workflows. Outdated PHP websites with vulnerable plugins pose severe cybersecurity risks, while clunky interfaces fail modern compliance and accessibility benchmarks.",
      challenges: [
        {
          title: "Cybersecurity Vulnerabilities in Legacy Portals",
          description:
            "Many regional Bhopal organizations still rely on unpatched PHP scripts vulnerable to SQL injection, XSS attacks, and spam bots.",
        },
        {
          title: "Non-Compliance with Accessibility & Speed Standards",
          description:
            "Institutional and corporate portals frequently fail WCAG accessibility standards and flunk Core Web Vitals, frustrating users on mobile devices.",
        },
        {
          title: "Rigid Systems Unable to Integrate Modern APIs",
          description:
            "Legacy software cannot easily talk to modern cloud services, WhatsApp business notifications, or automated document generation tools.",
        },
      ],
      opportunity:
        "By partnering with IntegersDev, Bhopal enterprises and institutions gain modern, strictly-typed Next.js software with enterprise-grade security, automated testing, and compliance-ready accessibility.",
    },
    industriesServed: [
      {
        title: "Clean Energy, Solar & Environmental Ventures",
        badge: "Renewable Energy & ESG",
        painPoint:
          "Lack of interactive solar ROI calculators and poor lead generation for commercial rooftop installations across MP.",
        solution:
          "Dynamic solar cost/savings calculators, commercial project case study galleries, and automated lead scoring pipelines.",
        techStack: ["Next.js", "TypeScript", "Interactive Canvas", "HubSpot Sync"],
      },
      {
        title: "Universities, Colleges & Technical Academies",
        badge: "Higher Education & Research",
        painPoint:
          "Cluttered academic websites where prospective students struggle to find syllabus details, accreditation documents, or admission deadlines.",
        solution:
          "Clean, accessible university portals with intuitive course finders, virtual campus tours, and high-converting admission application flows.",
        techStack: ["Next.js", "Tailwind CSS", "Sanity CMS", "WCAG 2.1 AA"],
      },
      {
        title: "Industrial Manufacturing & Mandideep Exporters",
        badge: "Heavy Engineering & Manufacturing",
        painPoint:
          "Outdated digital presence that fails to project engineering credibility when bidding for large corporate and international supply contracts.",
        solution:
          "Corporate web applications with ISO compliance showcases, 3D interactive machinery specifications, and secure client tender portals.",
        techStack: ["React", "Three.js / Canvas", "PostgreSQL", "Cloudflare"],
      },
      {
        title: "Real Estate, Township Developers & Architecture",
        badge: "Infrastructure & Property",
        painPoint:
          "Slow-loading floor plan images, missing 360-degree tour integration, and low conversion rates on luxury property inquiries.",
        solution:
          "Immersive property showcases with interactive master plans, floor plan selectors, mortgage EMI calculators, and instant site visit booking.",
        techStack: ["Next.js App Router", "Framer Motion", "Google Maps API", "CRM Sync"],
      },
    ],
    localAdvantage: {
      title: "The IntegersDev Difference in Bhopal",
      description:
        "We build clean, robust digital products engineered for long-term organizational durability.",
      points: [
        {
          title: "Enterprise-Grade Security Standards",
          desc: "OWASP-compliant architecture with sanitized inputs, secure session tokens, strict CSRF mitigation, and automated vulnerability scanning.",
        },
        {
          title: "Audited WCAG Accessibility Compliance",
          desc: "Semantic HTML5 elements, full keyboard navigation support, high-contrast Neo-Brutalism, and screen-reader accessibility.",
        },
        {
          title: "Direct Access to Core Engineering Team",
          desc: "Work directly with Vinay, Aryan, Kuldeep & Love throughout development sprints with clear weekly video demos and sprint logs.",
        },
        {
          title: "Full Code Transfer & Zero Vendor Lock-in",
          desc: "You receive clean, documented GitHub codebases and complete administrative control over all hosting environments.",
        },
      ],
    },
    relatedCaseStudySlug: "vastavikta",
    pricingTeaser: {
      startingUSD: "$129",
      startingINR: "₹12,250",
      delivery: "3 – 10 Days Milestone Delivery",
    },
    faqs: [
      {
        question: "How does IntegersDev collaborate with clients in Bhopal?",
        answer:
          "We work closely with corporate leaders, educational directors, and entrepreneurs in Bhopal via structured weekly milestone reviews, dedicated WhatsApp/Slack project channels, and scheduled in-person meetings in Bhopal for major technical discovery sessions.",
      },
      {
        question: "Are your websites compliant with data privacy and security guidelines?",
        answer:
          "Yes. We follow strict OWASP security guidelines, implement modern HTTPS/TLS with HSTS headers, secure API authorization tokens, and ensure zero unvetted third-party plugin vulnerabilities.",
      },
      {
        question: "Can you help our institution migrate away from an old, unmaintained PHP portal?",
        answer:
          "Yes, legacy portal migrations are one of our core specialties. We audit your existing data, migrate user records and content cleanly, and build a high-speed Next.js frontend with modern headless CMS management.",
      },
      {
        question: "Do you offer post-launch maintenance and server monitoring in Bhopal?",
        answer:
          "Yes. We include a complimentary 14 to 30-day bug warranty with every project and offer flexible Monthly Retainers (with a 20% discount) for continuous feature releases, security updates, and performance monitoring.",
      },
      {
        question: "Can you build customized internal management dashboards for our team?",
        answer:
          "Absolutely. In addition to public-facing websites, we build secure admin panels, role-based staff portals (RBAC), and automated reporting dashboards tailored to your exact operational workflows.",
      },
    ],
  },
];

// Helper functions for easy querying and dynamic SSG params
export function getAllCitySlugs(): string[] {
  return CITIES_DATA.map((city) => city.slug);
}

export function getCityBySlug(slug: string): CityConfig | undefined {
  return CITIES_DATA.find((city) => city.slug === slug);
}
