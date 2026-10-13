"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border-2 border-black rounded-2xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white shadow-[6px_6px_0px_0px_#d4ff3f]"
                : "bg-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px]"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 font-black text-base sm:text-lg text-black cursor-pointer"
              aria-expanded={isOpen}
            >
              <span>{item.question}</span>
              <span
                className={`w-8 h-8 rounded-full border-2 border-black flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-[#d4ff3f] rotate-180" : "bg-gray-100"
                }`}
              >
                <FaChevronDown className="w-3 h-3" />
              </span>
            </button>

            {isOpen && (
              <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-gray-700 font-medium leading-relaxed border-t border-black/10">
                <p>{item.answer}</p>
                {item.category && (
                  <span className="inline-block mt-3 px-2.5 py-0.5 bg-gray-100 rounded-md text-[10px] font-black uppercase text-gray-500 border border-gray-300">
                    Category: {item.category}
                  </span>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
