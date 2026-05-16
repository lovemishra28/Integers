"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '@/assets/INTEGERS.png';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isOpen, setIsOpen] = useState(false);
  
  // Transform values based on scroll
  const width = useTransform(scrollY, [0, 100], ["90%", "100%"]);
  const maxWidth = useTransform(scrollY, [0, 100], ["1280px", "100%"]);
  const borderRadius = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const top = useTransform(scrollY, [0, 100], ["24px", "0px"]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.8)"]);
  const shadow = useTransform(scrollY, [0, 100], ["0 24px 80px -48px rgba(0,0,0,0.35)", "0 4px 20px -10px rgba(0,0,0,0.1)"]);

  return (
    <motion.div 
      className="fixed left-1/2 -translate-x-1/2 z-50 px-3 sm:px-0"
      style={{
        width,
        maxWidth,
        top,
      }}
    >
      <motion.nav 
        className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 md:px-10 w-full backdrop-blur-xl border border-black/10"
        style={{
          borderRadius,
          backgroundColor,
          boxShadow: shadow,
        }}
      >
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold font-sans flex items-center gap-3 text-black tracking-tighter">
          <Image 
            src={logo} 
            alt="Integers Logo" 
            height={48} 
            className="h-9 sm:h-10 md:h-12 w-auto object-contain rounded-xl"
            priority
          />
          
        </Link>

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
            Let&apos;s Talk
            <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
              <FaArrowRight className="w-2.5 h-2.5" />
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-black bg-[#d4ff3f] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
            <span className="block h-0.5 w-5 bg-black" />
          </span>
        </button>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -8, pointerEvents: isOpen ? 'auto' : 'none' }}
        className="md:hidden mt-3 rounded-[1.5rem] border border-black/10 bg-white/95 backdrop-blur-xl shadow-[0_16px_50px_-30px_rgba(0,0,0,0.45)] overflow-hidden"
      >
        <div className="grid gap-1 p-3 text-sm font-bold text-black">
          <Link href="/" className="rounded-2xl px-4 py-3 hover:bg-black hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="#services" className="rounded-2xl px-4 py-3 hover:bg-black hover:text-white" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#projects" className="rounded-2xl px-4 py-3 hover:bg-black hover:text-white" onClick={() => setIsOpen(false)}>Work</Link>
          <Link href="#reviews" className="rounded-2xl px-4 py-3 hover:bg-black hover:text-white" onClick={() => setIsOpen(false)}>Reviews</Link>
          <Link href="#pricing" className="rounded-2xl px-4 py-3 hover:bg-black hover:text-white" onClick={() => setIsOpen(false)}>Pricing</Link>
          <Link href="#contact" className="rounded-2xl px-4 py-3 bg-[#d4ff3f] border-2 border-black" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
