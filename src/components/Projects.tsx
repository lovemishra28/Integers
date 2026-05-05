"use client";

import React from 'react';
import Image from 'next/image';
import { FaGlobe, FaMobileAlt, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import project1 from '@/assets/project1_thumbnail.jpg';
import project2 from '@/assets/project2_thumbnail.jpg';
import project3 from '@/assets/project3_thumbnail.jpg';

const projectIcons = {
  web: <FaGlobe className="w-6 h-6 text-black" />,
  mobile: <FaMobileAlt className="w-6 h-6 text-black" />,
  shop: <FaShoppingCart className="w-6 h-6 text-black" />,
  arrow: (
    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
      <FaArrowRight className="w-2.5 h-2.5 text-white" />
    </div>
  ),
};

export default function Projects() {
  const projectsList = [
    { 
      title: "Samvad", 
      category: "Next JS App", 
      image: project1,
      icon: 'web'
    },
    { 
      title: "Medighar", 
      category: "Web & Mobile Platform", 
      image: project2,
      icon: 'mobile'
    },
    { 
      title: "Joon", 
      category: "Next JS Ecommerce website", 
      image: project3,
      icon: 'shop'
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-white relative">
      
      <motion.div 
        className="flex flex-col items-center mb-16 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative">
           {/* Green blob behind header */}
           <div className="absolute -right-4 -top-4 w-12 h-12 bg-[#d4ff3f] rounded-full opacity-80 z-0 blur-sm"></div>
           <span className="text-sm font-bold text-[#62d124] block mb-2 text-center relative z-10">Work Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold font-sans text-black text-center max-w-2xl relative z-10">
          We Are Creating Something Different Layout
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {projectsList.map((project, index) => (
          <motion.div 
            key={index} 
            className="group cursor-pointer relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            
            {/* Image Container */}
            <div className={`aspect-square md:aspect-[4/2.5] w-full bg-[#d4ff3f] rounded-xl overflow-hidden relative flex flex-col justify-center p-4 border border-gray-100`}>
              
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>

              {/* White Info Box (Now positioned inside the image container) */}
              <div className="bg-white rounded-lg p-5 flex justify-between h-full w-full relative z-20 border-2 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f6ce] border border-black">
                      {projectIcons[project.icon]}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-sans text-black tracking-tight md:tracking-[0.02em] leading-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-[10px] md:text-xs text-gray-500 font-light uppercase tracking-[0.24em] md:tracking-[0.3em]">
                    {project.category}
                  </p>
                </div>
                
                {/* Green Arrow Button inside the white box */}
                <div className="self-start w-10 h-10 rounded-full bg-[#d4ff3f] border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center font-bold">
                  {projectIcons.arrow}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* The Bottom Horizontal Line and Button */}
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
        <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all flex-shrink-0">
          See More Projects
          <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
            <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </button>
      </motion.div>
    </section>
  );
}
