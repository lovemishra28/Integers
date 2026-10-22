export const siteConfig = {
  name: "IntegersDev",
  tagline: "Web Development Company in Gwalior | Next.js & UI/UX",
  url: "https://www.integersdev.in",
  email: "contact@integersdev.in",
  phone: "+91 9981097501",
  phoneClean: "+919981097501",
  whatsappUrl: "https://wa.me/919981097501",

  // -------------------------------------------------------------
  // SOCIAL PROFILES & SAME-AS URLS
  // -------------------------------------------------------------
  socials: [
    "https://x.com/integers_dev",
    "https://www.instagram.com/integers.dev/",
    "https://github.com/Integers-dev",
    "https://wa.me/919981097501",
  ],
  socialLinks: {
    twitter: "https://x.com/integers_dev",
    instagram: "https://www.instagram.com/integers.dev/",
    github: "https://github.com/Integers-dev",
    whatsapp: "https://wa.me/919981097501",
  },

  // -------------------------------------------------------------
  // ANALYTICS & SEARCH ENGINE VERIFICATION
  // Replace via environment variables or default fallbacks
  // -------------------------------------------------------------
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  googleSiteVerification:
    process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",

  // -------------------------------------------------------------
  // SINGLE SOURCE OF TRUTH FOR ADDRESS & PHYSICAL LOCATION
  // Formatted identically across all pages, schema, and footers
  // -------------------------------------------------------------
  address: {
    street: "City Center, Patel Nagar",
    city: "Gwalior",
    state: "Madhya Pradesh",
    postalCode: "474011",
    country: "India",
    full: "City Center, Patel Nagar, Gwalior, Madhya Pradesh 474011, India",
    display: "City Center, Patel Nagar, Gwalior, MP 474011, India",
    geo: {
      latitude: 26.2183,
      longitude: 78.1828,
    },
  },
  location: "City Center, Patel Nagar, Gwalior, Madhya Pradesh 474011, India",

  // -------------------------------------------------------------
  // WORKING HOURS & OPERATIONAL SCHEDULE
  // -------------------------------------------------------------
  workingHours: {
    days: "Monday – Saturday",
    hours: "9:30 AM – 7:30 PM IST",
    sunday: "Closed (Emergency Server & DevOps Support Only)",
    display: "Mon – Sat: 9:30 AM – 7:30 PM IST",
    responseTime: "2 – 4 business hours (< 24 hours guaranteed)",
  },

  mapUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114542.44186178304!2d78.10667367807662!3d26.21415510656094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c5d1792291fb%3A0xff4fb56d65bc3adb!2sGwalior%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin",
  mapDirectionsUrl: "https://maps.google.com/?q=Gwalior,+Madhya+Pradesh+474011",
  brochureUrl: "/IntegersDev_Agency_Brochure.pdf",
  portfolioUrl: "/portfolio",

  // -------------------------------------------------------------
  // SINGLE SOURCE OF TRUTH FOR ALL AGENCY STATS & METRICS
  // Update numbers here to reflect consistently across the site
  // -------------------------------------------------------------
  stats: {
    happyClients: "20+",
    happyClientsLabel: "Happy Clients",
    projectsCompleted: "25+",
    projectsLabel: "Projects Completed",
    yearsExperience: "2+",
    yearsLabel: "Years Experience",
    clientFocused: "100%",
    clientFocusedLabel: "Client Focused",
    productivity: "100%",
    productivityLabel: "Productivity",
  },

  // -------------------------------------------------------------
  // CORE ENGINEERING & DESIGN COLLECTIVE
  // -------------------------------------------------------------
  team: [
    {
      name: "Vinay",
      role: "Fullstack Architecture & Cloud Engineering",
      bio: "Leads backend systems, Next.js Server Components, cloud caching, distributed database design, and sub-second load optimizations.",
      skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Cloud Infra"],
    },
    {
      name: "Aryan",
      role: "UI/UX & Visual Experience Design",
      bio: "Crafts high-converting Neo-Brutalist design systems, Figma component architectures, fluid micro-interactions, and conversion funnels.",
      skills: ["Figma", "Design Systems", "Prototyping", "Design Tokens", "Micro-Interactions"],
    },
    {
      name: "Kuldeep",
      role: "Frontend Engineering & Web Performance",
      bio: "Specializes in Web Vitals optimization, pixel-perfect responsive layouts, accessible semantic markup, and cross-device smoothness.",
      skills: ["React", "Tailwind CSS", "Framer Motion", "Responsive Web", "SEO Architecture"],
    },
    {
      name: "Love",
      role: "Software Engineering & System Optimization",
      bio: "Focuses on complex application state modeling, database query optimizations, third-party API orchestrations, and rigorous QA coverage.",
      skills: ["Fullstack JS", "REST / GraphQL", "MongoDB", "Auth & Security", "Performance"],
    },
  ],
};
