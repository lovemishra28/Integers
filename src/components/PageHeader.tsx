import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { BreadcrumbSchema } from "@/components/schema";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export default function PageHeader({
  badge,
  title,
  highlight,
  description,
  breadcrumbs,
  actions,
}: PageHeaderProps) {
  return (
    <section className="pt-28 sm:pt-36 md:pt-40 pb-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
      {/* Schema.org BreadcrumbList Structured Data */}
      <BreadcrumbSchema items={breadcrumbs} />

      {/* Breadcrumbs Visual Navigation */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs font-bold text-gray-500 flex-wrap">
            <li>
              <Link href="/" className="hover:text-black transition-colors">
                Home
              </Link>
            </li>
            {breadcrumbs.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <FaChevronRight className="w-2.5 h-2.5 text-gray-400" />
                {item.href ? (
                  <Link href={item.href} className="hover:text-black transition-colors">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-black">{item.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Main Header Card */}
      <div className="bg-white border-2 border-black rounded-3xl p-8 sm:p-12 md:p-14 shadow-[8px_8px_0px_0px_#d4ff3f] relative overflow-hidden">
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-4 shadow-[1px_1px_0px_0px_#000]">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-black tracking-tight leading-[1.12] mb-5">
          {title}{" "}
          {highlight && (
            <span className="inline-block bg-[#d4ff3f] px-2.5 sm:px-3.5 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl -rotate-1 mt-1 sm:mt-0">
              {highlight}
            </span>
          )}
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 max-w-3xl leading-relaxed">
          {description}
        </p>

        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  );
}
