"use client";

import React from 'react';
import { FaCheck, FaCalendarAlt, FaDatabase } from 'react-icons/fa';
import { SiReact, SiNextdotjs, SiFigma } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Expertise() {
  const skills = [
    { 
      platform: "React Native", 
      location: "App Development", 
      role: "Cross-Platform Delivery", 
      desc: "Conveniently leverage modern frameworks to deliver fast, reliable apps for iOS and Android.", 
      active: false,
      icon: <SiReact className="w-6 h-6" />
    },
    { 
      platform: "Next.js", 
      location: "Web Development", 
      role: "SEO-Optimized Sites", 
      desc: "Building extremely fast, discoverable websites perfect for local restaurants and cafes.", 
      active: false,
      icon: <SiNextdotjs className="w-6 h-6" />
    },
    { 
      platform: "UI/UX Design", 
      location: "Prototyping", 
      role: "Clean & Minimalist", 
      desc: "Designing intuitive user flows and modern interfaces that keep customers engaged.", 
      active: true,
      icon: <SiFigma className="w-6 h-6" />
    },
    { 
      platform: "Backend Systems", 
      location: "Database Management", 
      role: "Secure & Scalable", 
      desc: "Robust data architectures to handle your local business operations smoothly.", 
      active: false,
      icon: <FaDatabase className="w-5 h-5" />
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-bold text-[#62d124] block mb-2">Our Capabilities</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-black">
            We Provide Modern Tech<br/>Solutions.
          </h2>
        </motion.div>
        
        {/* Fixed Toggle Buttons */}
        <motion.div 
          className="mb-4 flex flex-wrap gap-3 sm:gap-4 mt-6 md:mt-0"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button className="px-6 py-2.5 rounded-full border-2 border-black bg-[#d4ff3f] font-bold text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Services <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center text-[10px]"><FaCheck className="w-2.5 h-2.5" /></span>
          </button>
          <button className="px-6 py-2.5 rounded-full border-2 border-black bg-black text-white font-bold text-sm flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            Tech Stack <span className="w-4 h-4 rounded-full border border-white flex items-center justify-center text-[10px]"><FaCheck className="w-2.5 h-2.5" /></span>
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`p-6 sm:p-8 rounded-xl transition-all duration-300 relative group cursor-pointer border-2 flex flex-col h-full ${
              skill.active 
                ? 'bg-[#d4ff3f] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-white border-gray-200 hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
             <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full border-2 border-black flex items-center justify-center transition-colors ${skill.active ? 'bg-black text-[#d4ff3f]' : 'bg-gray-100 text-black group-hover:bg-black group-hover:text-[#d4ff3f]'}`}>
                  {skill.icon}
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg leading-tight">{skill.platform}</h4>
                  <p className="text-[10px] text-gray-500 font-bold flex items-center gap-1 uppercase mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 block"></span> {skill.location}
                  </p>
                </div>
             </div>

             <div className={`inline-block px-3 py-1 border-2 rounded text-[10px] font-bold uppercase tracking-wider mb-4 ${skill.active ? 'bg-transparent border-black text-black' : 'bg-gray-100 border-gray-200 text-gray-600'}`}>
               Expertise
             </div>

             <h3 className="text-xl font-bold font-sans text-black mb-3">
               {skill.role}
             </h3>

             <p className={`text-sm leading-relaxed font-medium mb-8 ${skill.active ? 'text-black/80' : 'text-gray-500'}`}>
               {skill.desc}
             </p>

             <div className="mt-auto flex items-center gap-2">
                <span className="w-6 h-6 rounded border-2 border-black bg-black text-[#d4ff3f] flex items-center justify-center text-xs"><FaCalendarAlt className="w-3 h-3" /></span>
                <span className="text-xs font-bold text-black">Available Now</span>
             </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
