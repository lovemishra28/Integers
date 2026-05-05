import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: "Integers | Web Agency",
  description: "Web Development & UI/UX Design by Integers.",
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
