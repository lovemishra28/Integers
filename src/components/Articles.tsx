import React from 'react';
import Image from 'next/image';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';
import article1 from '@/assets/article1_thumbnail.jpg';
import article2 from '@/assets/article2_thumbnail.jpg';
import article3 from '@/assets/article3_thumbnail.jpg';

export default function Articles() {
  const articles = [
    {
      category: "UI/UX Design",
      title: "Why local cafes in Gwalior need a digital storefront.",
      date: "October 29, 2025",
      author: "Team Member",
      tagColor: "bg-gray-100 text-gray-600",
      image: article1
    },
    {
      category: "SEO Marketing",
      title: "How to rank your retail outlet on Google Maps.",
      date: "October 29, 2025",
      author: "Team Member",
      tagColor: "bg-[#d4ff3f] text-black",
      image: article2
    },
    {
      category: "Products Design",
      title: "Building scalable apps for restaurant deliveries.",
      date: "October 29, 2025",
      author: "Team Member",
      tagColor: "bg-blue-50 text-blue-600",
      image: article3
    }
  ];

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5]">
      {/* Header with Green Blob */}
      <div className="flex flex-col items-center mb-16 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-[#d4ff3f] rounded-full opacity-40 blur-2xl z-0 pointer-events-none"></div>
        <span className="text-sm font-bold text-[#62d124] block mb-2 relative z-10">News & Article</span>
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-black text-center max-w-xl relative z-10 leading-tight">
          Take A Look At Our Articles & Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
            {/* Image Placeholder */}
            <div className="aspect-[4/3] w-full bg-gray-200 relative overflow-hidden">
              <Image 
                src={article.image} 
                alt={article.title} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              
              {/* Red Box for the 3rd item as seen in the original design */}
              {index === 2 && (
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#e60023] flex items-center justify-center text-white text-[10px] font-bold leading-none p-2 text-center z-10">
                  HOME<br/>BOX
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="p-6">
              {/* Fixed Colored Tags */}
              <div className={`inline-block px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase tracking-wider mb-4 ${article.tagColor}`}>
                {article.category}
              </div>
              
              <h3 className="text-xl font-bold font-sans text-black mb-6 leading-snug transition-colors group-hover:text-[#62d124]">
                {article.title}
              </h3>

              <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wide">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#ff5e14]">
                    <FaCalendarAlt className="w-3 h-3" />
                  </div> 
                  {article.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#f0f0f0] flex items-center justify-center text-[#62d124]">
                    <FaUser className="w-3 h-3" />
                  </div> 
                  {article.author}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
