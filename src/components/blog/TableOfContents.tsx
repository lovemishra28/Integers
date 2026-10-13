"use client";

import React from "react";
import { FaListUl } from "react-icons/fa";
import { TableOfContentItem } from "@/lib/blog";

interface TableOfContentsProps {
  headings: TableOfContentItem[];
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav
      aria-label="Table of contents"
      className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-[6px_6px_0px_0px_#000] mb-8"
    >
      <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-black/10">
        <div className="w-7 h-7 rounded-full bg-[#d4ff3f] border border-black flex items-center justify-center text-black text-xs">
          <FaListUl className="w-3.5 h-3.5" />
        </div>
        <h2 className="font-black text-sm uppercase tracking-wider text-black">
          Table of Contents
        </h2>
      </div>

      <ul className="space-y-2.5 text-xs sm:text-sm font-bold text-gray-700">
        {headings.map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className={`${item.level === 3 ? "pl-4 text-xs font-semibold text-gray-600" : ""}`}
          >
            <a
              href={`#${item.id}`}
              className="hover:text-black hover:translate-x-1 inline-flex items-center gap-1.5 transition-all text-gray-800 hover:text-[#000]"
            >
              <span className="text-[#d4ff3f] text-base leading-none select-none">•</span>
              <span className="hover:underline">{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
