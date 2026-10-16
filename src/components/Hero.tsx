"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
// Make sure this path is correct for your local setup!
import teamHero from "@/assets/team_memeber_hero.png"; 
import { siteConfig } from "@/config/site"; 

export default function Hero() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const members = [
    { name: "Vinay", left: "12.5%" },
    { name: "Aryan", left: "37.5%" },
    { name: "Kuldeep", left: "62.5%" },
    { name: "Love", left: "87.5%" },
  ];

  return (
    <section className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-24 md:pb-48 overflow-hidden bg-[#eefadc]">
      
      {/* Decorative Background Elements */}
      <motion.div 
        className="absolute top-32 left-10 md:left-24 opacity-60 pointer-events-none hidden md:block z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <svg viewBox="0 0 120 100" className="w-20 h-20" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round">
          <path d="M10,50 Q25,10 40,50 T70,50 T100,50" />
          <circle cx="95" cy="20" r="8" fill="#d4ff3f" stroke="none" />
        </svg>
      </motion.div>

      <motion.div 
        className="absolute top-48 right-10 md:right-32 w-24 h-24 opacity-70 pointer-events-none hidden md:block z-0 transform rotate-12"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 0.7, rotate: 12 }}
        transition={{ duration: 1.2 }}
      >
        <svg viewBox="0 0 120 120" className="w-full h-full">
          <circle cx="40" cy="40" r="20" fill="#f56565" stroke="black" strokeWidth="3" />
          <circle cx="80" cy="50" r="15" fill="#4299e1" stroke="black" strokeWidth="3" />
          <circle cx="60" cy="80" r="25" fill="#48bb78" stroke="black" strokeWidth="3" />
        </svg>
      </motion.div>

      {/* Huge Outlined Background Text - Decorative Watermark */}
      <motion.div 
        className="absolute top-20 sm:top-24 md:top-28 left-0 w-full text-center z-0 pointer-events-none mt-6 sm:mt-8 md:mt-12 opacity-30 md:opacity-40"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          aria-hidden="true"
          className="text-[2.2rem] sm:text-[3.8rem] md:text-[11.5rem] font-bold leading-[0.8] font-sans uppercase tracking-wider text-transparent [-webkit-text-stroke:1px_#a5d677] sm:[-webkit-text-stroke:1.5px_#a5d677] md:[-webkit-text-stroke:3px_#a5d677] select-none"
        >
          INTEGERSDEV
        </div>
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center mt-4 sm:mt-6 md:mt-8">
        
        {/* Keyword-Rich H1 Headline */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 relative z-20 px-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border-2 border-black text-[10px] sm:text-xs font-black uppercase tracking-wider mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 rounded-full bg-[#62d124]"></span>
            Gwalior • MP • Web &amp; Mobile Agency
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-sans text-black tracking-tight leading-[1.12]">
            Web Development Company in Gwalior{" "}
            <span className="inline-block bg-[#d4ff3f] px-2 sm:px-3 py-0.5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rounded-xl -rotate-1 mt-1 sm:mt-0">
              for Growing Businesses
            </span>
          </h1>
          <p className="mt-4 text-xs sm:text-sm md:text-base font-bold text-gray-700 max-w-2xl mx-auto">
            High-converting Next.js websites, UI/UX design &amp; custom solutions engineered by{" "}
            <span className="text-black font-black underline decoration-2 decoration-[#62d124]">
              Vinay, Aryan, Kuldeep &amp; Love
            </span>
            .
          </p>
        </motion.div>
        
        <div className="relative w-full max-w-4xl flex flex-col items-center">
          
          {/* Connecting Strings (SVG Layer) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
            {members.map((member, idx) => (
              <path
                key={idx}
                d={`M ${member.left} 20% Q ${member.left} 60%, 50% 100%`}
                fill="none"
                stroke="#62d124"
                strokeWidth="4"
                strokeDasharray="8 8"
                className={`transition-all duration-500 ease-in-out ${hoveredMember === member.name ? "opacity-100" : "opacity-0"}`}
              />
            ))}
          </svg>

          {/* Name Capsules */}
          <div className="absolute inset-0 pointer-events-none z-30">
            {members.map((member, idx) => (
              <div
                key={idx}
                style={{ left: member.left }}
                className={`absolute top-[6%] sm:top-[10%] -translate-x-1/2 bg-black text-white px-2.5 sm:px-4 md:px-6 py-0.5 sm:py-1 md:py-2 rounded-full font-bold text-[10px] sm:text-xs md:text-base font-sans uppercase transform transition-all duration-300 border sm:border-2 border-black shadow-[2px_2px_0px_0px_rgba(212,255,63,1)] sm:shadow-[4px_4px_0px_0px_rgba(212,255,63,1)] ${
                  hoveredMember === member.name ? "opacity-100 -translate-y-2 sm:-translate-y-4 scale-105 sm:scale-110" : "opacity-0 translate-y-0 scale-90"
                }`}
              >
                {member.name}
              </div>
            ))}
          </div>

          {/* The 16:9 Image Container */}
          <motion.div 
            className="w-full sm:w-[95%] md:w-full aspect-video relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#fefcf5] z-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              WebkitMaskImage: 'none',
              maskImage: 'none',
            }}
          >
            <Image 
              src={teamHero} 
              alt="IntegersDev team of web developers and designers in Gwalior - Vinay, Aryan, Kuldeep, and Love" 
              fill 
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              className="object-cover object-center" 
              priority
            />

            {/* Hover & Tap Zones */}
            <div className="absolute inset-0 flex z-40">
              {members.map((member, idx) => (
                <div 
                  key={idx}
                  className="flex-1 h-full cursor-pointer select-none"
                  onMouseEnter={() => setHoveredMember(member.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                  onClick={() => setHoveredMember((prev) => (prev === member.name ? null : member.name))}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Badge 1: Productivity */}
          <motion.div 
            className="hidden md:flex absolute top-1/4 -left-2 md:-left-12 bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex-col items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <span className="font-bold text-xl md:text-3xl font-sans text-black leading-none">
              {siteConfig.stats.productivity}
            </span>
            <span className="text-[9px] md:text-xs uppercase font-bold text-black tracking-wider mt-1">
              {siteConfig.stats.productivityLabel}
            </span>
          </motion.div>

          {/* Floating Badge 2: Happy Clients */}
          <motion.div 
            className="hidden md:flex absolute bottom-1/4 -right-2 md:-right-10 bg-white py-3 px-4 md:px-6 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-col items-center gap-2 z-20 rotate-6 hover:rotate-0 transition-transform"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#f56565] border-2 border-black"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#ed8936] border-2 border-black"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#6b46c1] border-2 border-black"></div>
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#3182ce] border-2 border-black flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white">
                {siteConfig.stats.happyClients}
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">
              {siteConfig.stats.happyClientsLabel}
            </span>
          </motion.div>
        </div>

        {/* The Black Nameplate Pill */}
        <motion.div 
          className="mt-[-1.25rem] bg-black text-white px-6 sm:px-8 md:px-12 py-3 md:py-4 rounded-full font-bold text-base sm:text-xl md:text-3xl font-sans uppercase transform -rotate-2 shadow-[6px_6px_0px_0px_rgba(212,255,63,1)] z-30 relative border-2 border-black border-t-white/20"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          OUR TEAM
        </motion.div>

        <div className="mt-4 w-full max-w-3xl md:hidden px-1">
          <div className="rounded-full border-2 border-black bg-black text-white px-4 py-2 text-center text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-[4px_4px_0px_0px_rgba(212,255,63,1)] overflow-hidden">
            <div className="animate-marquee flex whitespace-nowrap w-max">
              {[1, 2].map((group) => (
                <div key={group} className="flex items-center">
                  <span className="mx-3 text-white">Web Development</span>
                  <span className="text-[#d4ff3f]">•</span>
                  <span className="mx-3 text-white">UI/UX Design</span>
                  <span className="text-[#d4ff3f]">•</span>
                  <span className="mx-3 text-white">App Development</span>
                  <span className="text-[#d4ff3f]">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slanted Marquee Banner */}
      <motion.div 
        className="hidden md:flex absolute bottom-4 sm:bottom-6 left-0 w-[120%] sm:w-[110%] -left-[10%] sm:-left-[5%] bg-black text-white py-3 sm:py-4 md:py-5 transform -rotate-2 shadow-2xl z-40 overflow-hidden border-y-2 border-black"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="animate-marquee flex whitespace-nowrap w-max">
          {[1, 2, 3].map((group) => (
            <div key={group} className="flex items-center text-sm sm:text-lg md:text-2xl font-bold font-sans uppercase">
              <span className="mx-3 sm:mx-4 md:mx-8 text-white">Web Development</span> <span className="text-[#d4ff3f]">—</span>
              <span className="mx-3 sm:mx-4 md:mx-8 text-white">UI/UX Design</span> <span className="text-[#d4ff3f]">—</span>
              <span className="mx-3 sm:mx-4 md:mx-8 text-white">App Development</span> <span className="text-[#d4ff3f]">—</span>
              <span className="mx-3 sm:mx-4 md:mx-8 text-[#d4ff3f]">2026</span> <span className="text-[#d4ff3f]">—</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

