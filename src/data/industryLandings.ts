export interface IndustryPainPoint {
  title: string;
  description: string;
  stat?: string;
}

export interface IndustryFeature {
  title: string;
  badge: string;
  description: string;
  tech: string[];
}

export interface IndustryCaseStudy {
  title: string;
  client: string;
  category: string;
  summary: string;
  coverImage: string;
  slug?: string;
  liveUrl?: string;
  metrics: {
    metric: string;
    label: string;
  }[];
}

export interface IndustryLandingConfig {
  slug: string; // e.g. "website-for-restaurants"
  industryName: string; // e.g. "Restaurants & Fine Dining"
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
  painPoints: {
    heading: string;
    subheading: string;
    items: IndustryPainPoint[];
  };
  features: {
    heading: string;
    subheading: string;
    items: IndustryFeature[];
  };
  caseStudy: IndustryCaseStudy;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const INDUSTRY_LANDINGS: Record<string, IndustryLandingConfig> = {
  // =========================================================================
  // 1. RESTAURANTS & FOOD SERVICE
  // =========================================================================
  "website-for-restaurants": {
    slug: "website-for-restaurants",
    industryName: "Restaurants & Dining",
    meta: {
      title: "Website for Restaurants & Cafes | Custom Next.js Web Design | IntegersDev",
      description:
        "High-converting custom websites for restaurants, cafes & dining brands. Commission-free table reservations, digital menus, QR ordering, and local SEO.",
      canonical: "https://integersdev.in/website-for-restaurants",
    },
    hero: {
      badge: "Culinary & Dining Web Engineering",
      h1Title: "Custom High-Converting Websites for",
      h1Highlight: "Restaurants & Cafes",
      description:
        "Break free from 20-30% aggregator commissions and sluggish PDF menus. IntegersDev engineers bespoke Next.js restaurant websites with instant digital menus, 1-click table reservations, WhatsApp lead pipelines, and sub-second mobile performance that converts hungry browsers into loyal diners.",
    },
    painPoints: {
      heading: "The Commercial Bottlenecks Facing Modern Restaurateurs",
      subheading:
        "Most restaurants rely on clunky third-party directories or slow, bloated WordPress templates that cost them thousands in lost bookings every month.",
      items: [
        {
          title: "Brutal 15% – 30% Food Aggregator Commissions",
          description:
            "Third-party delivery apps eat a massive cut of your margin and give you zero ownership of customer email addresses or dining history.",
          stat: "Up to 30% Margin Cut",
        },
        {
          title: "Unreadable PDF Menus on Smartphones",
          description:
            "Mobile guests hate downloading heavy PDF menus and pinching to zoom. Many mobile users abandon restaurant sites when forced to navigate non-responsive menus.",
          stat: "High Mobile Bounce Rate",
        },
        {
          title: "Friction-Filled Manual Phone Reservations",
          description:
            "Requiring guests to call during noisy evening shifts leads to unanswered phones, misplaced bookings, and frustrated diners walking to competitors.",
          stat: "Lost Table Bookings",
        },
        {
          title: "Zero Google Local Pack Ranking",
          description:
            "Without restaurant schema markup, geotagged menus, and fast Core Web Vitals, your establishment gets buried beneath national food review portals.",
          stat: "Leading Barrier to Traffic",
        },
      ],
    },
    features: {
      heading: "High-Performance Features Engineered for Hospitality",
      subheading:
        "Everything your restaurant needs to maximize direct dining bookings, table turns, and brand prestige.",
      items: [
        {
          title: "Interactive Multi-Course Digital Menus",
          badge: "Zero-Lag Menus",
          description:
            "Categorized, search-friendly digital menus with dietary tags (Vegan, Jain, Gluten-Free), dish descriptions, spice levels, and live out-of-stock toggles.",
          tech: ["Next.js App Router", "Tailwind CSS", "Dynamic Tags"],
        },
        {
          title: "1-Click Direct Table Reservation Engine",
          badge: "Commission-Free",
          description:
            "Frictionless guest booking funnel that automatically sends instant WhatsApp confirmation to diners and reservation alerts to your front-of-house staff.",
          tech: ["WhatsApp Cloud API", "Instant SMS", "Email Webhooks"],
        },
        {
          title: "QR Table-Ordering & Contactless Bill Preview",
          badge: "Smart Dining",
          description:
            "Tabletop QR code integration allowing guests to view daily specials, request service, or review items from their smartphones without app downloads.",
          tech: ["QR Web App", "WebSockets", "Zero App Install"],
        },
        {
          title: "Sub-Second Food Photography Optimization",
          badge: "AVIF / WebP",
          description:
            "High-resolution gourmet photography compressed into next-gen AVIF formats with responsive next/image loaders, rendering mouthwatering dishes in under 600ms.",
          tech: ["Next/Image", "Edge Caching", "Lighthouse 95+"],
        },
        {
          title: "Restaurant & FoodEstablishment JSON-LD Schema",
          badge: "Google Local SEO",
          description:
            "Rich structured data embedding your cuisine types, price range, opening hours, geographic coordinates, and menu URLs for top Google Maps placement.",
          tech: ["Schema.org", "GeoCoordinates", "Rich Snippets"],
        },
        {
          title: "Multi-Outlet & Franchise Routing",
          badge: "Scale Ready",
          description:
            "Easily manage multiple restaurant locations with dedicated branch pages, localized timings, and customized booking routing under a unified brand.",
          tech: ["Dynamic Routing", "Location Selectors", "Unified CMS"],
        },
      ],
    },
    caseStudy: {
      title: "Vastavikta Heritage Dining Platform",
      client: "Vastavikta Hospitality",
      category: "Heritage Dining & Culinary Destination",
      summary:
        "IntegersDev designed and engineered a regal, high-contrast Next.js 16 web application featuring interactive multi-course menus, direct reservation pipelines, and sub-second load times that drove a +68% surge in direct table bookings.",
      coverImage: "/projects/vastavikta.png",
      slug: "vastavikta",
      liveUrl: "https://vastavikta-five.vercel.app/",
      metrics: [
        { metric: "Direct", label: "Online Reservations" },
        { metric: "< 0.6s", label: "Initial Page Paint" },
        { metric: "90+", label: "Lighthouse Performance" },
        { metric: "0%", label: "Aggregator Commission" },
      ],
    },
    faqs: [
      {
        question: "Can guests book tables directly on our website without third-party fees?",
        answer:
          "Yes! We build a direct, proprietary reservation funnel that connects straight to your email, WhatsApp, or POS. You keep 100% of the customer relationship and pay zero per-cover reservation commissions.",
      },
      {
        question: "How easy is it to update our menu prices and daily chef specials?",
        answer:
          "Very easy. We integrate a clean headless CMS or structured content dashboard where your kitchen or manager can update prices, toggle dishes off when sold out, and add seasonal specials in seconds without editing code.",
      },
      {
        question: "Will our restaurant website rank on Google Maps and local search queries?",
        answer:
          "Yes. Every restaurant platform we ship includes comprehensive Restaurant & FoodEstablishment JSON-LD schema, geotagged metadata, Google Maps directions integration, and fast Core Web Vitals to maximize local search discovery.",
      },
      {
        question: "Can we integrate online delivery and takeaway ordering?",
        answer:
          "Yes. We can integrate commission-free direct ordering with payment gateways like Razorpay, Stripe, or UPI, complete with automated order receipts dispatched to your kitchen printer or WhatsApp.",
      },
      {
        question: "What is your typical turnaround timeline for a restaurant website?",
        answer:
          "Our standard restaurant platform is typically designed, approved, and deployed live in 7 to 10 days, including custom photography optimization and menu data entry.",
      },
    ],
  },

  // =========================================================================
  // 2. TRAVEL AGENCIES & TOUR OPERATORS
  // =========================================================================
  "website-for-travel-agencies": {
    slug: "website-for-travel-agencies",
    industryName: "Travel & Tour Operators",
    meta: {
      title: "Website for Travel Agencies & Tour Operators | IntegersDev",
      description:
        "Custom high-speed websites for travel agencies, tour operators & vehicle rental companies. Interactive itineraries, WhatsApp lead funnels, and instant inquiries.",
      canonical: "https://integersdev.in/website-for-travel-agencies",
    },
    hero: {
      badge: "Travel & Tourism Engineering",
      h1Title: "Custom Web Development for",
      h1Highlight: "Travel Agencies & Tours",
      description:
        "Transform casual vacation dreamers into confirmed bookings. IntegersDev builds high-speed travel portals, tour package showcases, and fleet rental platforms with structured WhatsApp consultation triggers, mobile-first itineraries, and local SEO architecture that captures high-intent holiday seekers.",
    },
    painPoints: {
      heading: "Why Most Travel Agency Websites Fail to Convert",
      subheading:
        "Travelers research vacations on smartphones while multitasking. If your site is slow, vague, or forces lengthy contact forms, they book elsewhere.",
      items: [
        {
          title: "Endless Repetitive Phone Inquiries",
          description:
            "Spending hours answering basic questions about vehicle seating capacities, route inclusions, and pricing due to unclear website presentation.",
          stat: "3+ Hours Lost Daily",
        },
        {
          title: "Sluggish Layouts on Mobile Networks",
          description:
            "Tourists searching while traveling on 4G/5G connections abandon slow sites that take over 3 seconds to render vehicle and hotel photo galleries.",
          stat: "53% Mobile Bounce",
        },
        {
          title: "Missing Structured Lead Information",
          description:
            "Receiving vague inquiries ('Send details') that require multiple back-and-forth messages just to learn the customer's travel dates and headcount.",
          stat: "High Lead Friction",
        },
        {
          title: "Zero Search Visibility for Regional Tours",
          description:
            "Failing to rank for lucrative regional terms like 'caravan rental Gwalior', 'MP heritage tours', or 'tempo traveller hire' due to missing travel schema.",
          stat: "Lost Organic Market",
        },
      ],
    },
    features: {
      heading: "Features We Build for Modern Travel Operators",
      subheading:
        "Engineered specifically to streamline customer discovery and automate high-value booking inquiries.",
      items: [
        {
          title: "Dynamic Tour Package & Itinerary Showcases",
          badge: "Interactive Guides",
          description:
            "Day-by-day route breakdowns, inclusive/exclusive checklists, elevation maps, and high-res photo carousels of hotel stays and sightseeing stops.",
          tech: ["Next.js SSG", "Interactive Accordions", "Route Maps"],
        },
        {
          title: "One-Click Structured WhatsApp Consultation Funnel",
          badge: "High Conversion",
          description:
            "Automatically pre-fills the traveler's selected package, intended travel dates, vehicle preference, and group size directly into your WhatsApp chat.",
          tech: ["WhatsApp Business API", "Dynamic URI Builders"],
        },
        {
          title: "Caravan & Vehicle Fleet Specifications",
          badge: "Fleet Discovery",
          description:
            "Detailed vehicle cards showcasing seating/sleeping capacity, air conditioning, washroom amenities, luggage space, and transparent per-km rental tariffs.",
          tech: ["Fleet Matrix", "Interactive Filters", "Modal Previews"],
        },
        {
          title: "Advance Deposit & Booking Payment Gateways",
          badge: "Instant Payments",
          description:
            "Secure online collection of token booking deposits via UPI QR, credit cards, or net banking with instant PDF invoice receipts.",
          tech: ["Razorpay / Stripe", "Automated PDF Invoices"],
        },
        {
          title: "TravelAgency & TouristTrip Structured Schema",
          badge: "SEO Dominance",
          description:
            "Comprehensive schema markup telling Google your itineraries, destination coordinates, starting locations, and review ratings for top search placement.",
          tech: ["TouristTrip Schema", "LocalBusiness JSON-LD"],
        },
        {
          title: "Seasonal Pricing & Custom Quote Calculators",
          badge: "Dynamic Quoting",
          description:
            "Allow travelers to configure custom durations, pick-up locations, and optional vehicle amenities to receive an instant ballpark cost estimate.",
          tech: ["Client-Side Calculators", "Lead Capture Webhooks"],
        },
      ],
    },
    caseStudy: {
      title: "Divyanshi Travels Caravan Tour Platform",
      client: "Divyanshi Travels",
      category: "Regional Caravan & Custom Tour Operator",
      summary:
        "IntegersDev engineered a mobile-first tour discovery portal featuring interactive vehicle specifications, destination guides, and structured WhatsApp inquiry dispatch that generated over 50+ monthly organic booking leads.",
      coverImage: "/projects/divyanshi-travels.png",
      slug: "divyanshi-travels",
      liveUrl: "https://www.divyanshitravels.in/",
      metrics: [
        { metric: "Instant", label: "WhatsApp Inquiries" },
        { metric: "50+", label: "Monthly Booking Leads" },
        { metric: "< 0.8s", label: "Initial Paint Speed" },
        { metric: "Page 1", label: "Local Search Placement" },
      ],
    },
    faqs: [
      {
        question: "How does the WhatsApp booking integration work for our travel packages?",
        answer:
          "When a traveler clicks 'Inquire on WhatsApp' on any tour or vehicle page, our script dynamically pre-fills a personalized message with the exact package title, preferred dates, vehicle type, and guest count. You receive a hot, fully-qualified lead instantly.",
      },
      {
        question: "Can travelers view our packages easily on smartphones with poor connectivity?",
        answer:
          "Yes! We build with Next.js static pre-rendering (SSG) and modern WebP/AVIF image compression. Pages load in under 1 second even on spotty 4G networks, ensuring travelers on the move never face blank screens.",
      },
      {
        question: "Can we add new tour itineraries and seasonal packages ourselves?",
        answer:
          "Absolutely. We provide an intuitive content management interface where your team can create new tours, upload route photos, set seasonal prices, and archive old packages in minutes without needing a developer.",
      },
      {
        question: "How do you help our agency rank above aggregators on Google?",
        answer:
          "We embed specific `TravelAgency` and `TouristTrip` JSON-LD schema, configure fast Core Web Vitals, implement geographic landing keywords, and generate automated XML sitemaps to ensure Google recognizes your site as an authoritative local provider.",
      },
      {
        question: "Can we accept advance token booking payments online?",
        answer:
          "Yes. We integrate verified payment gateways (Razorpay, Stripe, Cashfree) supporting UPI, debit/credit cards, and net banking with automated payment confirmations and GST invoice generation.",
      },
    ],
  },

  // =========================================================================
  // 3. CLINICS & HEALTHCARE PRACTICES
  // =========================================================================
  "website-for-clinics": {
    slug: "website-for-clinics",
    industryName: "Clinics & Doctors",
    meta: {
      title: "Website for Clinics, Doctors & Hospitals | Healthcare Web Design | IntegersDev",
      description:
        "High-performance, secure websites for clinics, dental centers, and doctors. Seamless appointment booking, OPD schedules, doctor profiles & local SEO.",
      canonical: "https://integersdev.in/website-for-clinics",
    },
    hero: {
      badge: "Healthcare & Clinical Engineering",
      h1Title: "Patient-First Modern Websites for",
      h1Highlight: "Clinics & Doctors",
      description:
        "Build patient trust before they even step through your doors. IntegersDev crafts fast, accessible, and secure healthcare websites for private clinics, dental practices, diagnostic labs, and medical specialists. Featuring effortless appointment scheduling, live OPD rosters, and Google Local 3-Pack SEO.",
    },
    painPoints: {
      heading: "The Digital Frustrations Experienced by Medical Practices",
      subheading:
        "When patients are unwell or anxious, a slow, confusing website drives them straight to competing healthcare centers.",
      items: [
        {
          title: "Receptionist Telephone Bottlenecks",
          description:
            "Front-desk staff spend all morning answering repetitive calls about doctor timings, consultation fees, and clinic locations instead of caring for in-clinic patients.",
          stat: "50% Front Desk Time",
        },
        {
          title: "Outdated, Unsecure Web Presence",
          description:
            "Ancient HTTP sites without mobile responsiveness trigger browser security warnings, destroying patient confidence and violating healthcare compliance.",
          stat: "Patient Trust Loss",
        },
        {
          title: "Failing to Rank on 'Doctor Near Me' Searches",
          description:
            "Without MedicalClinic schema and local citations, your clinic is invisible to thousands of residents searching for healthcare in your immediate neighborhood.",
          stat: "Lost Patient Inflow",
        },
        {
          title: "Confusing Speciality & Treatment Information",
          description:
            "Patients cannot easily determine whether you treat their exact condition, leading to high drop-offs or mismatched consultations.",
          stat: "High Drop-Off Rates",
        },
      ],
    },
    features: {
      heading: "Clinical Features Engineered for Patient Confidence",
      subheading:
        "Designed to streamline patient intake, reduce front-desk workload, and project undeniable clinical credibility.",
      items: [
        {
          title: "Frictionless Patient Appointment Scheduling",
          badge: "24/7 Booking",
          description:
            "Allow patients to select their required doctor, choose an available date and time slot, and receive instant SMS and WhatsApp appointment reminders.",
          tech: ["Calendar Booking", "WhatsApp Reminders", "Slot Engine"],
        },
        {
          title: "Doctor Directory & Live OPD Timings Roster",
          badge: "Staff Profiles",
          description:
            "Dedicated doctor profile pages highlighting medical qualifications, specialties, years of clinical experience, consultation hours, and fee details.",
          tech: ["Dynamic Profiles", "Live Timings", "Filter by Speciality"],
        },
        {
          title: "Clinical Treatment & Speciality Showcases",
          badge: "Patient Education",
          description:
            "In-depth, accessible patient education guides explaining common procedures, recovery expectations, diagnostic packages, and preparation guidelines.",
          tech: ["WCAG 2.1 AA", "Accessible Typography", "FAQ Accordions"],
        },
        {
          title: "1-Tap Google Maps & Emergency Helplines",
          badge: "Urgent Care",
          description:
            "Prominent emergency contact buttons, direct ambulance dialers, and one-tap driving directions designed for anxious patients on mobile devices.",
          tech: ["Instant Click-to-Call", "Geolocation Maps", "Sticky Floating CTA"],
        },
        {
          title: "MedicalClinic & Physician JSON-LD Schema",
          badge: "Google Local 3-Pack",
          description:
            "Rich healthcare structured data registering your clinic's accepted insurance plans, medical specialties, doctor credentials, and opening hours with Google.",
          tech: ["MedicalBusiness Schema", "Physician Schema", "Rich Snippets"],
        },
        {
          title: "Verified Patient Reviews & Credentials Gallery",
          badge: "Trust Badges",
          description:
            "Showcase verified Google review ratings, NABH / ISO accreditations, sterilized clinic photos, and professional certifications to build instant confidence.",
          tech: ["Google Review Sync", "Accreditation Badges", "Virtual Tour"],
        },
      ],
    },
    caseStudy: {
      title: "Central India Healthcare & Diagnostic Portal",
      client: "Multi-Speciality Clinical Network",
      category: "Healthcare & Clinical Systems",
      summary:
        "IntegersDev engineered an ultra-fast, WCAG-accessible patient portal featuring automated doctor slot booking, test package directories, and Google Local Pack optimization that streamlined front desk operations.",
      coverImage: "/services/web-dev-showcase.png",
      metrics: [
        { metric: "Automated", label: "Patient Appointments" },
        { metric: "120+", label: "Monthly Online Bookings" },
        { metric: "WCAG AA", label: "Accessibility Standards" },
        { metric: "Top 3", label: "Local Maps Placement" },
      ],
    },
    faqs: [
      {
        question: "Can patients book appointments online directly on our clinic website?",
        answer:
          "Yes! We build automated appointment scheduling systems where patients choose their doctor, view available time slots, and receive instant WhatsApp and SMS confirmation tokens. Your front desk receives an instant dashboard update.",
      },
      {
        question: "Is patient inquiry data stored securely and confidentially?",
        answer:
          "Absolutely. We implement enterprise SSL encryption, strict data validation, sanitized input fields, and secure database connections with zero unauthorized third-party tracking cookies.",
      },
      {
        question: "How does our website help us rank on Google for local medical queries?",
        answer:
          "We configure rich `MedicalClinic` and `Physician` JSON-LD schemas, embed your exact geographic coordinates, optimize for neighborhood keywords, and structure your doctor profiles to dominate Google Local 3-Pack search results.",
      },
      {
        question: "Can we showcase different branches and multiple doctor schedules?",
        answer:
          "Yes. Our modular architecture supports multi-clinic practices, allowing patients to filter by location, specialty, or doctor name with branch-specific OPD timings and direct routing.",
      },
      {
        question: "What is the typical development timeline for a clinic website?",
        answer:
          "We typically deliver fully functional clinic websites with doctor profiles, appointment booking, and local SEO configuration in 7 to 10 days.",
      },
    ],
  },

  // =========================================================================
  // 4. SCHOOLS & EDUCATIONAL INSTITUTIONS
  // =========================================================================
  "website-for-schools": {
    slug: "website-for-schools",
    industryName: "Schools & Institutes",
    meta: {
      title: "Website for Schools & Educational Institutes | Web Design | IntegersDev",
      description:
        "Modern websites & admission portals for private schools, colleges, and academies. Online admission forms, academic calendars, fee charts & parent portals.",
      canonical: "https://integersdev.in/website-for-schools",
    },
    hero: {
      badge: "Academic & Institutional Engineering",
      h1Title: "Modern Websites & Admission Portals for",
      h1Highlight: "Schools & Institutes",
      description:
        "Turn admission season into a seamless, high-prestige digital experience. IntegersDev builds modern, accessible websites and online admission portals for private schools, CBSE/ICSE institutions, and academies. Featuring online registration forms, virtual campus tours, and dynamic academic noticeboards.",
    },
    painPoints: {
      heading: "Why Outdated School Websites Hurt Admissions",
      subheading:
        "Parents judge an educational institution's quality by its digital presentation. A dated, broken school website signals neglect.",
      items: [
        {
          title: "Chaotic Paper-Based Admission Inquiries",
          description:
            "Parents having to physically travel to campus in peak summer just to collect paper brochures and application forms that could be completed digitally.",
          stat: "High Parent Friction",
        },
        {
          title: "Unreadable PDF Circulars on Mobile",
          description:
            "Posting holiday schedules and exam timetables as scanned low-res PDFs that mobile-first parents cannot read, causing endless administrative calls.",
          stat: "Daily Admin Fatigue",
        },
        {
          title: "Failing to Showcase Modern Infrastructure",
          description:
            "Spending lakhs on smart classrooms, STEM labs, and sports complexes, but displaying them through tiny, blurry thumbnail photos from 2016.",
          stat: "Lost Student Enrollments",
        },
        {
          title: "Inaccessible Typography & Cluttered Layouts",
          description:
            "Disorganized menus with 50+ dropdown links that frustrate parents trying to quickly locate mandatory disclosure documents or fee schedules.",
          stat: "Frustrated Parents",
        },
      ],
    },
    features: {
      heading: "Academic Features Built for Educational Excellence",
      subheading:
        "Engineered to simplify admissions, celebrate student achievements, and keep parents informed.",
      items: [
        {
          title: "Frictionless Online Admission & Prospectus Portal",
          badge: "Admission Season",
          description:
            "Streamlined online application forms with birth certificate uploads, parent details, grade selection, and automated inquiry tracking.",
          tech: ["Multi-Step Form", "Document Upload", "Instant Lead Alert"],
        },
        {
          title: "Virtual Campus Tour & Facilities Showcase",
          badge: "Interactive Media",
          description:
            "High-resolution photographic showcases of smart classrooms, robotics labs, athletic fields, libraries, and transport fleets with fast image loading.",
          tech: ["Next/Image AVIF", "Fullscreen Galleries", "Video Embeds"],
        },
        {
          title: "Dynamic Academic Noticeboard & Circulars",
          badge: "Live Updates",
          description:
            "Instant web noticeboard where administrators can post date sheets, holiday alerts, and CBSE/ICSE mandatory disclosures with searchable tags.",
          tech: ["Instant Push Notice", "Searchable Tag Filters", "PDF Viewer"],
        },
        {
          title: "Curriculum & Co-Curricular Roadmaps",
          badge: "Academics",
          description:
            "Engaging visual representations of pedagogical frameworks, sports academies, STEM clubs, faculty credentials, and board exam toppers.",
          tech: ["Timeline Roadmaps", "Faculty Cards", "Topper Hall of Fame"],
        },
        {
          title: "School & EducationalOrganization Schema",
          badge: "Google Educational SEO",
          description:
            "Deep structured data registering your school's CBSE/ICSE affiliation number, student age grades, address, and accreditation with Google.",
          tech: ["School Schema", "EducationalOrg Schema", "Local Pack"],
        },
        {
          title: "Annual Calendar & Event Schedule Sync",
          badge: "Parent Utility",
          description:
            "Interactive monthly calendar highlighting sports days, parent-teacher meetings, exam windows, and cultural fests with Google Calendar sync.",
          tech: ["Interactive Calendar", "iCal / Google Sync", "Categorized Events"],
        },
      ],
    },
    caseStudy: {
      title: "Premier K-12 Academy Digital Portal",
      client: "Regional K-12 Educational Society",
      category: "K-12 Education & Institutional Portal",
      summary:
        "IntegersDev engineered a modern academic platform with online student registration, digital prospectus downloads, and dynamic circular feeds that increased online admission inquiries by +75% in its first enrollment sprint.",
      coverImage: "/services/web-dev-showcase.png",
      metrics: [
        { metric: "+75%", label: "Online Inquiries" },
        { metric: "100%", label: "Mobile Responsive" },
        { metric: "< 0.7s", label: "Page Load Time" },
        { metric: "Zero", label: "Paperwork Waste" },
      ],
    },
    faqs: [
      {
        question: "Can parents submit admission inquiries and upload documents online?",
        answer:
          "Yes! We build intuitive multi-step admission forms allowing parents to enter student details, choose class grades, upload birth certificates, and receive automated email/SMS confirmation with an application tracking token.",
      },
      {
        question: "How easily can school office staff update circulars and notices?",
        answer:
          "Staff can publish new circulars in under 60 seconds through an ultra-simple admin dashboard. Notices immediately appear on the homepage with an urgent 'New' badge and searchable tags.",
      },
      {
        question: "Does the website meet CBSE / ICSE mandatory public disclosure standards?",
        answer:
          "Yes. We create dedicated, compliant 'Mandatory Public Disclosure' sections with easily accessible affiliation copies, society registration papers, land certificates, and fee structure charts.",
      },
      {
        question: "Is the school website optimized for parents using basic smartphones?",
        answer:
          "Absolutely. Over 85% of parents access school websites via mobile phones. Our Next.js architecture guarantees sub-second page loads and crystal-clear text even on entry-level Android devices.",
      },
      {
        question: "Can you integrate online school fee payment options?",
        answer:
          "Yes. We can integrate secure school fee collection gateways supporting UPI, net banking, and debit cards with automated PDF fee receipt generation for parents.",
      },
    ],
  },

  // =========================================================================
  // 5. REAL ESTATE DEVELOPERS & BUILDERS
  // =========================================================================
  "website-for-real-estate": {
    slug: "website-for-real-estate",
    industryName: "Real Estate & Builders",
    meta: {
      title: "Website for Real Estate Developers, Builders & Realtors | IntegersDev",
      description:
        "High-conversion web platforms for real estate developers & luxury builders. Interactive master plans, floor plan selectors, site visit booking & ad funnels.",
      canonical: "https://integersdev.in/website-for-real-estate",
    },
    hero: {
      badge: "Real Estate & Property Engineering",
      h1Title: "High-Conversion Websites for",
      h1Highlight: "Real Estate Developers",
      description:
        "Stop burning lakhs on Google and Meta ads that land on sluggish, confusing property pages. IntegersDev crafts ultra-fast real estate landing platforms for builders, luxury township developers, and commercial brokers. Featuring interactive floor plan zoomers, site visit booking, and pre-qualified buyer pipelines.",
    },
    painPoints: {
      heading: "Why Real Estate Ad Spend Gets Wasted",
      subheading:
        "High-intent home buyers and investors evaluate multi-crore purchases. A slow or poorly designed mobile page instantly destroys buying intent.",
      items: [
        {
          title: "Burning Ad Spend on 4-Second Slow Landing Pages",
          description:
            "Running high-stakes Google and Meta ads that direct buyers to heavy, uncompressed builder websites causes over 55% of visitors to bounce before viewing the project.",
          stat: "55%+ Ad Spend Burn",
        },
        {
          title: "Low-Quality, Unqualified Inquiries",
          description:
            "Basic lead forms that collect phone numbers without filtering buyer budget, preferred unit configuration (2BHK / 3BHK / Villa), or purchase timeline.",
          stat: "Sales Team Fatigue",
        },
        {
          title: "Unreadable Floor Plans & Missing Amenities",
          description:
            "Buyers cannot zoom into architectural layouts or understand carpet area breakdowns, forcing them to rely on third-party property portal aggregators.",
          stat: "High Drop-Off Rates",
        },
        {
          title: "Zero RERA Compliance Visibility",
          description:
            "Failing to prominently showcase RERA registration numbers, approved layout certificates, and construction milestone photos creates buyer hesitation.",
          stat: "Buyer Trust Barrier",
        },
      ],
    },
    features: {
      heading: "Property Features Engineered for Maximum Sales Velocity",
      subheading:
        "Built to capture qualified luxury buyers, showcase architectural splendor, and book high-intent site visits.",
      items: [
        {
          title: "Interactive Master Plan & Floor Plan Zoomer",
          badge: "Visual Discovery",
          description:
            "High-resolution interactive layout viewers allowing buyers to click into specific towers, inspect 2BHK/3BHK floor configurations, and examine carpet areas.",
          tech: ["Zoomable Canvas", "SVG Overlays", "Unit Matrix"],
        },
        {
          title: "Pre-Qualified Site Visit Booking Funnel",
          badge: "High Intent",
          description:
            "Intelligent lead forms capturing preferred unit type, budget range, and scheduled site inspection dates with instant sales manager WhatsApp alerts.",
          tech: ["Lead Scoring", "Calendar Booking", "CRM Webhooks"],
        },
        {
          title: "Interactive Home Loan EMI & Cost Calculator",
          badge: "Financial Utility",
          description:
            "Instant mortgage calculator that lets buyers adjust down payments, loan tenures, and interest rates to calculate exact monthly EMI commitments.",
          tech: ["Client-Side EMI Engine", "Cost Breakdowns", "Loan Partners"],
        },
        {
          title: "Neighborhood Geolocation & Connectivity Map",
          badge: "Location Value",
          description:
            "Interactive maps showing accurate driving distances and times to airports, metro stations, premier schools, IT parks, and healthcare centers.",
          tech: ["Google Maps API", "Distance Matrix", "Transit Markers"],
        },
        {
          title: "Ultra-Fast 4K Architectural Photography CDN",
          badge: "Luxury Aesthetics",
          description:
            "Showcase 3D clubhouse renders, sample flat walkthroughs, and drone views compressed with edge caching to load instantly on any mobile device.",
          tech: ["AVIF / WebP Compression", "Cloudflare CDN", "Lighthouse 95+"],
        },
        {
          title: "RERA Compliance & Construction Milestones Gallery",
          badge: "Buyer Trust",
          description:
            "Prominent RERA badge displays, approved plan downloads, and monthly photo timelines documenting construction progress to build investor confidence.",
          tech: ["RERA Badges", "Construction Timeline", "PDF Downloads"],
        },
      ],
    },
    caseStudy: {
      title: "Luxury Residential Township Showcase",
      client: "Premier Real Estate Group",
      category: "Luxury Residential & Commercial Real Estate",
      summary:
        "IntegersDev engineered a conversion-optimized Next.js property platform with interactive floor plan selection, mortgage calculators, and pre-qualified site visit booking that reduced buyer acquisition cost by 38%.",
      coverImage: "/services/mobile-app-showcase.png",
      metrics: [
        { metric: "-38%", label: "Cost Per Qualified Lead" },
        { metric: "140+", label: "Monthly Site Visits Booked" },
        { metric: "< 0.8s", label: "Mobile Render Speed" },
        { metric: "100%", label: "RERA Verified Layout" },
      ],
    },
    faqs: [
      {
        question: "Can we use this website as a high-converting landing page for Google and Meta ads?",
        answer:
          "Yes! Our real estate platforms are engineered specifically for high-ROI ad performance. With sub-second load times, prominent sticky WhatsApp triggers, and qualified lead forms, they convert ad traffic far better than generic builder portals.",
      },
      {
        question: "How does the site visit booking funnel pre-qualify potential buyers?",
        answer:
          "Instead of a plain form, our interactive booking flow prompts the buyer for their unit preference (e.g. 2 BHK, 3 BHK, Penthouse), investment budget, and preferred site visit day. Your sales team receives a warm, pre-vetted lead instantly.",
      },
      {
        question: "Can buyers zoom into high-resolution floor plans on mobile screens?",
        answer:
          "Yes. We implement smooth pinch-to-zoom interactive floor plan viewers with clear dimensions, super-built-up vs carpet area breakdowns, and facing orientation tags.",
      },
      {
        question: "How do you ensure RERA compliance across project pages?",
        answer:
          "Every property page features a verified RERA registration block, QR verification codes, approved bank loan partners, and downloadable government approval certificates to ensure complete regulatory compliance.",
      },
      {
        question: "What is your turnaround timeline for a real estate project launch page?",
        answer:
          "For new project launches, we can deploy a high-converting single-property landing page in 5 to 7 days, complete with floor plans, 3D render galleries, and ad tracking pixels.",
      },
    ],
  },
};

export function getIndustryBySlug(slug: string): IndustryLandingConfig | undefined {
  return INDUSTRY_LANDINGS[slug];
}

export function getAllIndustrySlugs(): string[] {
  return Object.keys(INDUSTRY_LANDINGS);
}
