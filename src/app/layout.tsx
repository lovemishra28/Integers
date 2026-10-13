import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://integersdev.in"),
  title: {
    default: "Web Development Company in Gwalior | Next.js & UI/UX | IntegersDev",
    template: "%s",
  },
  description:
    "Top web development company in Gwalior, India. IntegersDev crafts custom Next.js sites, UI/UX & mobile apps to grow your brand. Contact us for a free quote!",
  alternates: {
    canonical: "/",
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
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      siteConfig.googleSiteVerification,
  },
};

import { siteConfig } from "@/config/site";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/schema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsListener from "@/components/analytics/AnalyticsListener";
import CookieConsent from "@/components/CookieConsent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      {/* Apply the Poppins font and font-sans so Tailwind uses it */}
      <body className={`${poppins.variable} font-sans`}>
        <GoogleAnalytics />
        <AnalyticsListener />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}

