"use client";

import React from 'react';
import { FaArrowRight, FaCheck, FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "79",
      active: false,
      features: [
        "UI Design Creation",
        "2 Design Revisions",
        "Clean & Modern Interface"
      ]
    },
    {
      name: "Standard",
      price: "129",
      active: true,
      features: [
        "Full Frontend Dev",
        "Basic Backend Setup",
        "Forms & Booking Integration",
        "Responsive UI Design"
      ]
    },
    {
      name: "Turbo",
      price: "229",
      active: false,
      features: [
        "Full Web & Mobile App Dev",
        "Advanced Fullstack Dev",
        "Scalable & Production Ready",
        "Custom Business Features"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5] relative">
      {/* Header Area with Green Blob */}
      <motion.div 
        className="relative mb-12"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute -left-6 -top-6 w-32 h-32 bg-[#d4ff3f] rounded-full opacity-30 blur-2xl z-0 pointer-events-none"></div>
        <div className="relative z-10">
          <span className="text-sm font-bold text-[#000000] block mb-2">Pricing Tables</span>
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-black max-w-lg">
            The Features To Boost Your Business
          </h2>
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-6 items-start mt-20 md:mt-32">
        {/* Custom Plan Card - The Base Step */}
        <motion.div 
          className="w-full lg:w-1/4 bg-white p-8 rounded-2xl border-none shadow-sm flex flex-col justify-center lg:mt-32 relative z-0"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <button className="inline-flex items-center justify-center w-full px-6 py-3 rounded-full font-bold text-sm bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(212,255,63,1)] hover:translate-y-[2px] hover:shadow-none transition-all mb-8">
            Know More
            <span className="ml-2 bg-transparent text-white rounded-full w-4 h-4 flex items-center justify-center border border-white text-[10px]">
              →
            </span>
          </button>
          
          <h3 className="text-2xl font-bold font-sans text-black mb-4">
            Want to know more?
          </h3>
          <p className="text-xs text-gray-500 font-bold leading-relaxed">
            Connect with us to discuss your unique business requirements and get a tailored solution.
          </p>
        </motion.div>

        {/* Pricing Tiers Grid - Stepping Up */}
        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => {
            // Staircase logic: Index 0 (Basic) is lower, Index 2 (Turbo) is highest
            const staircaseClasses = [
              "lg:mt-24", // Basic
              "lg:mt-12", // Standard
              "lg:mt-0"   // Turbo
            ][index];

            return (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 rounded-2xl transition-all duration-300 relative ${staircaseClasses} ${
                  plan.active 
                    ? 'bg-[#d4ff3f] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] z-10 scale-105' 
                    : 'bg-white border-none shadow-sm hover:shadow-md'
                }`}
              >
                {/* Circular Arrow Button */}
                <div className={`absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-black flex items-center justify-center font-bold text-lg ${
                  plan.active ? 'bg-black text-white' : 'bg-[#d4ff3f] text-black'
                }`}>
                  <FaArrowRight className="w-4 h-4" />
                </div>

                <h4 className="text-lg font-bold text-black mb-4">{plan.name}</h4>
                
                {/* Pricing Typography */}
                <div className="flex items-start gap-1 mb-8">
                  <span className="font-bold text-xl mt-2 text-black">$</span>
                  <span className="text-6xl font-black font-sans text-black tracking-tighter">{plan.price}</span>
                  <span className="text-sm font-bold mt-auto mb-2 text-black">USD</span>
                </div>

                <div className="mb-4 text-sm font-bold text-black">What's Included :</div>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-[13px] text-gray-700 font-bold">
                      <span className="w-1.5 h-1.5 rounded-full bg-gray-400 block flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Additional Notes */}
      <motion.div 
        className="mt-16 p-8 bg-black/5 rounded-2xl border-2 border-dashed border-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h4 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
          <FaCircle className="w-3 h-3 text-[#000000]" /> Additional Notes
        </h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#000000] flex-shrink-0"></span>
            Domain name, hosting, and third-party services will be <strong className="text-black">charged separately (client-side)</strong>
          </li>
          <li className="flex items-start gap-3 text-sm text-gray-600 font-medium">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#000000] flex-shrink-0"></span>
            Custom requirements may affect pricing
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
