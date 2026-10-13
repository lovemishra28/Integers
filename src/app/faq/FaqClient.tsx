"use client";

import React, { useState } from "react";
import FAQAccordion from "@/components/FAQAccordion";
import { FaSearch } from "react-icons/fa";
import { FAQ_DATA, CategorizedFAQs } from "@/data/faqs";

export default function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", ...FAQ_DATA.map((c) => c.category)];

  // Filter items based on category and search query
  const filteredData = FAQ_DATA.map((group) => {
    const matchesCategory = selectedCategory === "All" || group.category === selectedCategory;
    if (!matchesCategory) return null;

    const filteredItems = group.items.filter((item) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
    });

    if (filteredItems.length === 0) return null;
    return {
      category: group.category,
      items: filteredItems,
    };
  }).filter(Boolean) as CategorizedFAQs[];

  return (
    <div className="space-y-10">
      {/* Search and Category Filters */}
      <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="relative mb-6">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions (e.g. Next.js, pricing, timeline, mobile, Gwalior)..."
            className="w-full pl-12 pr-4 py-3.5 bg-[#f8f9f5] border-2 border-black rounded-2xl text-sm font-medium text-black focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#d4ff3f] transition-all placeholder-gray-400"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer border-2 border-black ${
                  isSelected
                    ? "bg-[#d4ff3f] text-black shadow-[2px_2px_0px_0px_#000]"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Render Filtered FAQ Groups */}
      {filteredData.length > 0 ? (
        <div className="space-y-10">
          {filteredData.map((group) => (
            <div key={group.category} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-[#d4ff3f] border border-black"></span>
                <h2 className="text-xl sm:text-2xl font-black text-black">
                  {group.category}
                </h2>
              </div>
              <FAQAccordion items={group.items} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border-2 border-black rounded-3xl p-8">
          <p className="text-base font-bold text-gray-700 mb-2">No matching questions found.</p>
          <p className="text-xs text-gray-500">
            Try adjusting your search terms or ask us directly via our Contact page or WhatsApp.
          </p>
        </div>
      )}
    </div>
  );
}
