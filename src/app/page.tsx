import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import MidCTA from "@/components/MidCTA";
import Footer from "@/components/Footer";
import { getApprovedReviews } from "@/lib/reviews";

const PricingTeaser = dynamic(() => import("@/components/PricingTeaser"));
const Expertise = dynamic(() => import("@/components/Expertise"));
const Articles = dynamic(() => import("@/components/Articles"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Web Development Agency in Gwalior | Next.js, UI/UX & Apps | IntegersDev",
  description:
    "Top web development company in Gwalior, India. IntegersDev crafts custom Next.js sites, UI/UX & mobile apps to grow your brand. Contact us for a free quote!",
  alternates: {
    canonical: "https://integersdev.in",
  },
  openGraph: {
    title: "Web Development Company in Gwalior | Next.js & UI/UX | IntegersDev",
    description:
      "Top web development company in Gwalior, India. IntegersDev crafts custom Next.js sites, UI/UX & mobile apps to grow your brand. Contact us for a free quote!",
    url: "https://integersdev.in",
    siteName: "IntegersDev",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IntegersDev - Web Development Company in Gwalior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Company in Gwalior | Next.js & UI/UX | IntegersDev",
    description:
      "Top web development company in Gwalior, India. IntegersDev crafts custom Next.js sites, UI/UX & mobile apps to grow your brand. Contact us for a free quote!",
    site: "@integers_dev",
    creator: "@integers_dev",
    images: ["/og-image.png"],
  },
};

export default async function Home() {
  const reviews = await getApprovedReviews();

  return (
    <main className="min-h-screen overflow-x-clip w-full max-w-full">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <PricingTeaser />
      <Expertise />
      <MidCTA />
      <Articles />
      <Testimonials initialReviews={reviews} />
      <Footer />
    </main>
  );
}
