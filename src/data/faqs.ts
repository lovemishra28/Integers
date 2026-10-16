export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface CategorizedFAQs {
  category: string;
  items: FAQItem[];
}

export const FAQ_DATA: CategorizedFAQs[] = [
  {
    category: "General & Agency",
    items: [
      {
        question: "Who is IntegersDev and where are you based?",
        answer:
          "IntegersDev is a modern web development and digital engineering agency based in Gwalior, Madhya Pradesh, India. Our core team consists of Vinay, Aryan, Kuldeep, and Love, combining fullstack engineering, neo-brutalist UI/UX, and mobile development.",
        category: "General",
      },
      {
        question: "Do you only work with clients in Gwalior or globally?",
        answer:
          "While we are proudly rooted in Gwalior, we partner with startups, local retailers, and international businesses across India, the Middle East, Europe, and North America. All meetings and sprints are conducted smoothly via Google Meet, Slack, and WhatsApp.",
        category: "General",
      },
      {
        question: "What makes IntegersDev different from standard agencies?",
        answer:
          "We avoid generic, sluggish WordPress templates. Every project is custom engineered using Next.js and modern TypeScript, achieving sub-second load times, distinct neo-brutalist visual identities, and direct access to the actual developers building your software.",
        category: "General",
      },
    ],
  },
  {
    category: "Web & Next.js Development",
    items: [
      {
        question: "Why do you specialize in Next.js?",
        answer:
          "Next.js offers hybrid Server-Side Rendering (SSR) and Static Site Generation (SSG) with React Server Components. This delivers instant page loads, 95+ Google PageSpeed scores, and superior search engine indexing compared to traditional client-rendered single-page apps.",
        category: "Web Development",
      },
      {
        question: "Will my website be SEO-optimized for Google search?",
        answer:
          "Yes. Every website is built with semantic HTML5 tags, dynamic Open Graph social share cards, automated XML sitemaps, structured schema markup (JSON-LD), and fast Core Web Vitals to maximize search visibility.",
        category: "Web Development",
      },
      {
        question: "Can I edit and update website content myself after launch?",
        answer:
          "Yes! We can integrate headless CMS platforms (such as Sanity, Strapi, or MongoDB admin dashboards) allowing non-technical team members to update blogs, menu items, or products effortlessly.",
        category: "Web Development",
      },
    ],
  },
  {
    category: "UI/UX & Design Systems",
    items: [
      {
        question: "What is your design process?",
        answer:
          "Our process begins with user journey mapping and low-fidelity wireframing, followed by high-fidelity Figma components, clickable prototypes, and design token handoff. We involve you at every stage for review and feedback.",
        category: "UI/UX Design",
      },
      {
        question: "Do I get full ownership of the Figma design files?",
        answer:
          "Yes, you receive complete ownership and editor access to all Figma source files, vector assets, and design system components.",
        category: "UI/UX Design",
      },
    ],
  },
  {
    category: "Mobile Apps & Custom Software",
    items: [
      {
        question: "Do you build iOS and Android apps with a single codebase?",
        answer:
          "Yes, using React Native, we engineer apps that run natively on both iOS and Android with 60fps fluid performance, native device APIs, push notifications, and offline data caching.",
        category: "Mobile Apps",
      },
      {
        question: "Can you build custom SaaS dashboards and admin portals?",
        answer:
          "Absolutely. We build role-based access control (RBAC) portals, custom analytics dashboards, billing webhooks with Razorpay/Stripe, and automated notification pipelines.",
        category: "Custom Software",
      },
    ],
  },
  {
    category: "Pricing, Timelines & Guarantees",
    items: [
      {
        question: "How much does a custom project cost?",
        answer:
          "Our packages start at $129 (₹12,250) for the Basic tier (3–5 days delivery, 7 days warranty), $249 (₹23,700) for the Standard tier (7–10 days delivery, 14 days warranty), and $449 (₹42,750) for the Turbo tier (2–3 weeks delivery, 30 days priority warranty). Check our /pricing page for full feature breakdowns and monthly retainer options.",
        category: "Pricing",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Our Basic MVP sprint takes 3 to 5 days, our Standard production fullstack build takes 7 to 10 days, and our Turbo fullstack platform sprint takes 2 to 3 weeks with structured milestone check-ins.",
        category: "Timelines",
      },
      {
        question: "What is your payment milestone structure?",
        answer:
          "We typically split payments into milestones: 40% upfront deposit to initiate design and architecture, 30% upon approval of the staging preview, and 30% upon final production deployment and code transfer.",
        category: "Pricing",
      },
    ],
  },
];

export const ALL_FAQS: FAQItem[] = FAQ_DATA.flatMap((category) => category.items);
