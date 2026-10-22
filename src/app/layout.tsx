import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: '--font-poppins',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { siteConfig } from "@/config/site";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/schema";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import AnalyticsListener from "@/components/analytics/AnalyticsListener";
import CookieConsent from "@/components/CookieConsent";

const rawGoogleVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
  siteConfig.googleSiteVerification ||
  "";

const validGoogleVerification =
  rawGoogleVerification &&
  !rawGoogleVerification.includes("example-token") &&
  !rawGoogleVerification.includes("google-site-verification-token")
    ? rawGoogleVerification
    : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url || "https://www.integersdev.in"),
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
    url: siteConfig.url || "https://www.integersdev.in",
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
  ...(validGoogleVerification
    ? {
        verification: {
          google: validGoogleVerification,
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      {/* Apply the Poppins font and font-sans so Tailwind uses it */}
      <body className={`${poppins.variable} font-sans`} suppressHydrationWarning>
        <GoogleAnalytics />
        <AnalyticsListener />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
