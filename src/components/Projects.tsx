"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaUtensils, FaCaravan, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  url: string;
  image: string;
  icon: React.ReactNode;
}

const projectsList: ProjectItem[] = [
  {
    id: "01",
    title: "Vastavikta",
    category: "Luxury Heritage Dining",
    url: "https://vastavikta-five.vercel.app/",
    image: "/projects/vastavikta.png",
    icon: <FaUtensils className="w-5 h-5 text-black" />,
  },
  {
    id: "02",
    title: "Divyanshi Travels",
    category: "Travel & Caravan Partner",
    url: "https://www.divyanshitravels.in/",
    image: "/projects/divyanshi-travels.png",
    icon: <FaCaravan className="w-5 h-5 text-black" />,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="pt-12 pb-24 px-8 md:px-16 max-w-7xl mx-auto bg-white relative">
      {/* ----------------- SECTION HEADER ----------------- */}
      <motion.div
        className="flex flex-col items-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
          {/* Green blob behind header */}
          <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#d4ff3f] rounded-full opacity-80 z-0 blur-sm pointer-events-none"></div>
          <span className="text-sm font-bold text-[#62d124] block mb-2 text-center relative z-10">
            Work Projects
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-black text-center max-w-2xl relative z-10">
          We Are Creating Something Different Layout
        </h2>
      </motion.div>

      {/* ----------------- PROJECTS GRID (EQUAL SIZE, CLEAR UNBLURRED, MINIMAL TEXT) ----------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 max-w-6xl mx-auto">
        {projectsList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="w-full"
          >
            {/* Clickable Card Linking Directly to Live Site */}
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer block relative w-full aspect-[16/10] rounded-2xl overflow-hidden border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 p-5 sm:p-6 bg-gray-100 flex flex-col justify-between"
            >
              {/* Crystal Clear Website Screenshot (No Blur) */}
              <Image
                src={project.image}
                alt={`${project.title} - ${project.category} website engineered by IntegersDev in Gwalior`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-500 z-0"
              />

              {/* Crisp Contrast Gradient (Clean & Transparent - No Blur) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none z-10" />

              {/* Top Row: Neo-Brutalist Icon Badge & Circular Live Arrow */}
              <div className="relative z-20 flex items-center justify-between">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl border-2 border-black bg-[#d4ff3f] text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold">
                  {project.icon}
                </div>

                <div className="w-10 h-10 rounded-full bg-[#d4ff3f] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold text-black group-hover:bg-black group-hover:text-white transition-all">
                  <FaExternalLinkAlt className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Info Box: Transparent Frosted Neo-Brutalist Bar with Minimal Text */}
              <div className="relative z-20 bg-black/50 backdrop-blur-md p-4 sm:p-5 rounded-xl border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between gap-4 group-hover:bg-black/70 group-hover:border-[#d4ff3f] transition-all">
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-xs font-bold text-[#d4ff3f] uppercase tracking-widest block mb-0.5 truncate">
                    {project.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-sans text-white tracking-tight leading-tight truncate group-hover:text-[#d4ff3f] transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Visit Site Pill Button */}
                <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-bold text-xs bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:translate-y-[-2px] group-hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shrink-0">
                  Visit Site
                  <FaArrowRight className="w-2.5 h-2.5 -rotate-45" />
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* ----------------- BOTTOM HORIZONTAL LINE & BUTTON ----------------- */}
      <motion.div
        className="mt-16 flex items-center gap-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Horizontal Line taking up remaining space */}
        <div className="flex-grow h-[2px] bg-black"></div>

        {/* Right-aligned Button */}
        <Link
          href={siteConfig.portfolioUrl}
          className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all flex-shrink-0 cursor-pointer"
        >
          See More Projects
          <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
            <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
