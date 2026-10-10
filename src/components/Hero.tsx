"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
// Make sure this path is correct for your local setup!
import teamHero from "@/assets/team_memeber_hero.png"; 

export default function Hero() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const members = [
    { name: "Vinay", left: "12.5%" },
    { name: "Aryan", left: "37.5%" },
    { name: "Kuldeep", left: "62.5%" },
    { name: "Love", left: "87.5%" },
  ];

  return (
    <section className="relative pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-48 overflow-hidden bg-[#eefadc]">
      
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

      {/* Huge Outlined Background Text */}
      <motion.div 
        className="absolute top-20 sm:top-24 md:top-28 left-0 w-full text-center z-0 pointer-events-none mt-6 sm:mt-8 md:mt-12"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-[2.6rem] sm:text-[4.5rem] md:text-[14rem] font-bold leading-[0.8] font-sans uppercase tracking-wider text-transparent [-webkit-text-stroke:1px_#a5d677] sm:[-webkit-text-stroke:1.5px_#a5d677] md:[-webkit-text-stroke:3px_#a5d677]">
          INTEGERS
        </h1>
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 flex flex-col items-center mt-14 sm:mt-20 md:mt-32">
        
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
          <div className="absolute inset-0 pointer-events-none z-30 hidden sm:block">
            {members.map((member, idx) => (
              <div
                key={idx}
                style={{ left: member.left }}
                className={`absolute top-[10%] -translate-x-1/2 bg-black text-white px-4 md:px-6 py-1 md:py-2 rounded-full font-bold text-xs md:text-base font-sans uppercase transform transition-all duration-300 border-2 border-black shadow-[4px_4px_0px_0px_rgba(212,255,63,1)] ${
                  hoveredMember === member.name ? "opacity-100 -translate-y-4 scale-110" : "opacity-0 translate-y-0 scale-90"
                }`}
              >
                {member.name}
              </div>
            ))}
          </div>

          {/* The 16:9 Image Container */}
          <motion.div 
            className="w-full sm:w-[95%] md:w-full aspect-[4/5] lg:aspect-video relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-[#fefcf5] z-10"
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
              alt="Team members" 
              fill 
              className="object-contain md:object-cover object-center" 
              priority
            />

            {/* Hover Zones */}
            <div className="absolute inset-0 flex z-40">
              {members.map((member, idx) => (
                <div 
                  key={idx}
                  className="flex-1 h-full cursor-pointer"
                  onMouseEnter={() => setHoveredMember(member.name)}
                  onMouseLeave={() => setHoveredMember(null)}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Badge 1: Members */}
          <motion.div 
            className="hidden md:flex absolute top-1/4 -left-2 md:-left-12 bg-white rounded-full w-24 h-24 md:w-32 md:h-32 flex-col items-center justify-center border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 hover:scale-105 transition-transform"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          >
            <span className="font-bold text-xl md:text-3xl font-sans text-black leading-none">100%</span>
            <span className="text-[9px] md:text-xs uppercase font-bold text-black tracking-wider mt-1">Productivity</span>
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
                16+
              </div>
            </div>
            <span className="text-[10px] md:text-xs font-bold text-black uppercase tracking-wider">Happy Businesses</span>
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

