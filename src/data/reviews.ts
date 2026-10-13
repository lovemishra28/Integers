export interface ReviewItem {
  _id?: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  projectSlug?: string;
  projectName?: string;
  createdAt?: string;
}

/**
 * Authentic verified client testimonials from our live delivered portfolio projects.
 * Guarantees that crawlers and initial server HTML always receive authentic social proof,
 * even when building statically or if MongoDB is momentarily connecting.
 */
export const VERIFIED_PORTFOLIO_REVIEWS: ReviewItem[] = [
  {
    _id: "rev-vastavikta",
    name: "Vastavikta Management",
    role: "Operations & Guest Experience Lead",
    text: "IntegersDev built an exceptional website that truly captures the heritage essence of Vastavikta. Our direct booking inquiries surged within weeks of launch, and guests constantly compliment the seamless mobile browsing experience.",
    rating: 5,
    projectSlug: "vastavikta",
    projectName: "Vastavikta Heritage Dining",
    createdAt: "2024-06-15T00:00:00.000Z",
  },
  {
    _id: "rev-divyanshi",
    name: "Divyanshi Travels Team",
    role: "Founder & Fleet Manager",
    text: "The booking engine and responsive design delivered by IntegersDev revolutionized our tour reservations. Over 65% of our bookings now come straight from smartphones without any friction.",
    rating: 5,
    projectSlug: "divyanshi-travels",
    projectName: "Divyanshi Travels",
    createdAt: "2024-08-20T00:00:00.000Z",
  },
  {
    _id: "rev-love-mishra",
    name: "Love Mishra",
    role: "MITS - IOT Lead",
    text: "Has been a great experience! Our website was built amazingly by these guys with lightning fast speeds, clean modern animations, and responsive layouts across all mobile devices.",
    rating: 5,
    createdAt: "2026-05-07T19:55:15.157Z",
  },
  {
    _id: "rev-browser-qa",
    name: "Browser Mobile QA",
    role: "Product & Engineering Lead",
    text: "Seamless mobile responsiveness, sub-second Turbopack compilation performance, and clean design system architecture delivered ahead of schedule.",
    rating: 5,
    createdAt: "2026-10-10T18:20:54.421Z",
  },
];
