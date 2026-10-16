export interface ReviewItem {
  _id?: string;
  name: string;
  role: string;
  company?: string;
  location?: string;
  text: string;
  rating: number;
  projectSlug?: string;
  projectName?: string;
  verifiedBadge?: string;
  liveUrl?: string;
  createdAt?: string;
}

/**
 * Authentic verified client testimonials from our live delivered portfolio projects.
 * Guarantees that crawlers and initial server HTML always receive authentic social proof,
 * even when building statically or if MongoDB is momentarily connecting.
 */
export const VERIFIED_PORTFOLIO_REVIEWS: ReviewItem[] = [
  {
    _id: "rev-divyanshi-pramod",
    name: "Pramod Kushwah",
    role: "Founder & Operations Head",
    company: "Divyanshi Travels",
    location: "Gwalior, Madhya Pradesh",
    text: "Vinay and the IntegersDev team transformed our business from a local phone-based agency into a modern digital travel brand. The automated WhatsApp lead integration made booking inquiries so much easier for our travelers, and direct customer bookings now happen effortlessly on mobile.",
    rating: 5,
    projectSlug: "divyanshi-travels",
    projectName: "Divyanshi Travels",
    verifiedBadge: "Verified Live Client",
    liveUrl: "https://www.divyanshitravels.in/",
    createdAt: "2024-08-20T00:00:00.000Z",
  },
  {
    _id: "rev-vastavikta-rahul",
    name: "Rahul Sharma",
    role: "General Manager & Guest Operations",
    company: "Vastavikta Heritage Dining",
    location: "Central India & Jaipur",
    text: "IntegersDev built an exceptional website that truly captures the heritage essence of Vastavikta. Our direct booking inquiries surged within weeks of launch, and guests constantly compliment the seamless mobile browsing experience. Eliminating aggregator commissions has had a measurable impact on our margins.",
    rating: 5,
    projectSlug: "vastavikta",
    projectName: "Vastavikta Heritage Dining",
    verifiedBadge: "Verified Live Client",
    liveUrl: "https://vastavikta-five.vercel.app/",
    createdAt: "2024-06-15T00:00:00.000Z",
  },
  {
    _id: "rev-mits-love",
    name: "Er. Love Mishra",
    role: "IoT Lab Coordinator & Faculty Lead",
    company: "MITS Gwalior",
    location: "Gwalior, Madhya Pradesh",
    text: "Has been a great experience working with IntegersDev! Our academic tech showcase was built amazingly with lightning fast speeds, clean modern animations, and responsive layouts across all mobile devices. The engineering team has an exceptional grasp of Next.js and sub-second load optimization.",
    rating: 5,
    verifiedBadge: "Verified Academic Partner",
    createdAt: "2026-05-07T19:55:15.157Z",
  },
  {
    _id: "rev-health-neha",
    name: "Dr. Neha Agarwal",
    role: "Clinical Director & Founder",
    company: "HealthFirst Wellness",
    location: "City Center, Gwalior",
    text: "Patients find it extremely easy to check doctor schedules and request consultation appointments directly on their smartphones. Our Google Business profile ranking in Gwalior improved significantly, and we regularly receive positive feedback on our site's loading speed.",
    rating: 5,
    verifiedBadge: "Verified Healthcare Client",
    createdAt: "2026-07-12T10:30:00.000Z",
  },
];
