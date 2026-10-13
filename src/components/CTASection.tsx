import React from "react";
import Link from "next/link";
import { FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/config/site";

interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
}

export default function CTASection({
  badge = "Let's Collaborate",
  title = "Ready to Build a High-Performance Digital Product?",
  description = "Partner with Vinay, Aryan, Kuldeep & Love at IntegersDev. We deliver production-grade Next.js platforms, mobile applications, and intuitive UI/UX design.",
  primaryBtnText = "Start Your Project",
  primaryBtnHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="py-16 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
      <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 sm:p-14 shadow-[8px_8px_0px_0px_#d4ff3f] text-center relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-10 w-48 h-48 bg-[#d4ff3f]/10 rounded-full blur-[80px] pointer-events-none"></div>

        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] text-black border border-black rounded-full text-[11px] font-black uppercase mb-4 shadow-[1px_1px_0px_0px_#fff]">
            {badge}
          </span>

          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight tracking-tight">
            {title}
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-medium mb-8 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryBtnHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_#fff] hover:scale-105 active:scale-95 transition-transform"
            >
              {primaryBtnText}
              <FaArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-wider bg-[#1c1c1c] text-white border-2 border-gray-700 hover:border-[#d4ff3f] hover:text-[#d4ff3f] hover:scale-105 active:scale-95 transition-all"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              Quick WhatsApp Chat
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-xs font-bold text-gray-400">
            📍 Based in Gwalior, Madhya Pradesh • Collaborating with founders across India &amp; globally
          </div>
        </div>
      </div>
    </section>
  );
}
