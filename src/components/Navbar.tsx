"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Navbar() {
  const { scrollY } = useScroll();
  
  // Transform values based on scroll
  const width = useTransform(scrollY, [0, 100], ["90%", "100%"]);
  const maxWidth = useTransform(scrollY, [0, 100], ["1280px", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const top = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]);
  const borderBottom = useTransform(scrollY, [0, 100], ["1px solid rgba(0,0,0,0.1)", "1px solid rgba(0,0,0,0.1)"]);
  const shadow = useTransform(scrollY, [0, 100], ["0 24px 80px -48px rgba(0,0,0,0.35)", "0 4px 20px -10px rgba(0,0,0,0.1)"]);

  return (
    <motion.div 
      className="fixed left-1/2 -translate-x-1/2 z-50 px-0"
      style={{
        width,
        maxWidth,
        top,
      }}
    >
      <motion.nav 
        className="flex items-center justify-between py-4 px-6 md:px-10 w-full backdrop-blur-xl border border-black/10"
        style={{
          borderRadius,
          backgroundColor,
          boxShadow: shadow,
        }}
      >
        <div className="text-2xl font-bold font-sans flex items-center gap-2 text-black">
          <span className="w-6 h-6 bg-[#d4ff3f] rounded-tl-lg rounded-br-lg rounded-tr-sm rounded-bl-sm block border-2 border-black"></span>
          Integers
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-black">
          <Link href="/" className="nav-link hover:text-[#d4ff3f] transition-colors">Home</Link>
          <Link href="#services" className="nav-link hover:text-[#d4ff3f] transition-colors">Services</Link>
          <Link href="#projects" className="nav-link hover:text-[#d4ff3f] transition-colors">Work</Link>
          <Link href="#reviews" className="nav-link hover:text-[#d4ff3f] transition-colors">Reviews</Link>
          <Link href="#pricing" className="nav-link hover:text-[#d4ff3f] transition-colors">Pricing</Link>
          <Link href="#contact" className="nav-link hover:text-[#d4ff3f] transition-colors">Contact</Link>
        </div>

        <div className="hidden md:block">
          <Link href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 rounded-3xl font-bold text-sm transition-transform hover:scale-105 active:scale-95 bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Let's Talk
            <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              <FaArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
