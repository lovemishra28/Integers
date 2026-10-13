"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#f8f9f5] text-black font-sans selection:bg-[#d4ff3f] selection:text-black">
      <Navbar />
      <main className="flex-1 w-full overflow-x-clip">{children}</main>
      <Footer />
    </div>
  );
}
