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
  metadataBase: new URL("https://www.integersdev.in/"),
  title: "IntegersDev | Web Development Agency",
  description:
    "IntegersDev builds modern websites and delivers web development and UI/UX design services for businesses.",
  applicationName: "IntegersDev",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the Poppins font and font-sans so Tailwind uses it */}
      <body className={`${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
