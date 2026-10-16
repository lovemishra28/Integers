"use client";

import React, { useState } from 'react';
import {
  FaArrowRight,
  FaCheck,
  FaCircle,
  FaBolt,
  FaShieldAlt,
  FaSyncAlt,
  FaWhatsapp,
  FaEnvelope,
  FaTimes,
  FaClock,
  FaLock
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { trackPricingTierSelection, trackWhatsAppClick } from '@/lib/analytics';

type BillingCycle = 'project' | 'retainer';
type Currency = 'USD' | 'INR';

import { PRICING_TIERS, PricingTier } from '@/data/pricing';

const PLANS = PRICING_TIERS;

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('project');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [selectedPlanId, setSelectedPlanId] = useState<string>('standard');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate plan price based on billing cycle
  const calculatePlanPrice = (plan: PricingTier) => {
    const isRetainer = billingCycle === 'retainer';
    const discount = isRetainer ? 0.8 : 1;

    const totalUSD = Math.round(plan.basePriceUSD * discount);
    const totalINR = Math.round(plan.basePriceINR * discount);

    return {
      totalUSD,
      totalINR,
      originalBaseUSD: plan.basePriceUSD,
      originalBaseINR: plan.basePriceINR,
      discountSavingsUSD: isRetainer ? Math.round(plan.basePriceUSD * 0.2) : 0,
      discountSavingsINR: isRetainer ? Math.round(plan.basePriceINR * 0.2) : 0
    };
  };

  const selectedPlan = PLANS.find(p => p.id === selectedPlanId) || PLANS[1];
  const selectedPriceData = calculatePlanPrice(selectedPlan);

  // Handle CTA action (Open details modal and track GA4 event)
  const handleSelectPlan = (planId: string) => {
    setSelectedPlanId(planId);
    setIsModalOpen(true);

    const targetPlan = PLANS.find(p => p.id === planId) || selectedPlan;
    const pData = calculatePlanPrice(targetPlan);
    trackPricingTierSelection(
      targetPlan.name,
      currency === 'USD' ? pData.totalUSD : pData.totalINR,
      currency,
      billingCycle
    );
  };

  // Scroll down to contact form and populate message
  const handleProceedToContact = () => {
    setIsModalOpen(false);
    const contactElem = document.getElementById('contact-form') || document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });

      // Prepopulate textarea
      setTimeout(() => {
        const textarea = document.querySelector('textarea[name="message"]') as HTMLTextAreaElement;
        if (textarea) {
          const summary = `Hi IntegersDev team, I'm interested in the ${selectedPlan.name} plan (${billingCycle === 'retainer' ? 'Monthly Retainer' : 'One-time Project'} at ${currency === 'USD' ? `$${selectedPriceData.totalUSD}` : `₹${selectedPriceData.totalINR.toLocaleString('en-IN')}`}). Let's discuss requirements!`;
          textarea.value = summary;
          textarea.focus();
        }
      }, 700);
    }
  };

  // WhatsApp instant message URL
  const getWhatsAppUrl = () => {
    const msg = encodeURIComponent(
      `Hi IntegersDev! I'd like to book the ${selectedPlan.name} plan (${billingCycle === 'retainer' ? 'Monthly Retainer' : 'One-Time Project'} at ${currency === 'USD' ? `$${selectedPriceData.totalUSD}` : `₹${selectedPriceData.totalINR.toLocaleString('en-IN')}`}). Can we chat?`
    );
    return `https://wa.me/919981097501?text=${msg}`;
  };

  const handleWhatsAppChat = () => {
    const url = getWhatsAppUrl();
    trackWhatsAppClick(`Pricing Modal: ${selectedPlan.name} Plan`, url);
    if (typeof window !== 'undefined') {
      const win = window.open(url, '_blank');
      if (!win) {
        window.location.href = url;
      }
    }
  };

  return (
    <section id="pricing" className="scroll-mt-24 pt-8 md:pt-12 pb-16 md:pb-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto bg-[#f8f9f5] relative overflow-hidden">
      {/* Background Decorative Ambient Blobs */}
      <div className="absolute top-12 left-10 w-72 h-72 bg-[#d4ff3f] rounded-full opacity-25 blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#d4ff3f] rounded-full opacity-20 blur-3xl pointer-events-none z-0"></div>

      {/* Header Area */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs sm:text-sm font-bold text-black block mb-2">Pricing Tables</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-sans text-black tracking-tight leading-[1.1]">
            The Features To<br className="hidden sm:inline" />{" "}
            <span className="relative inline-block mt-1">
              Boost Your Business
              <span className="absolute left-0 bottom-1.5 w-full h-2.5 sm:h-3 bg-[#d4ff3f] -z-10 -rotate-1 opacity-80"></span>
            </span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm sm:text-base text-gray-600 font-medium max-w-xl">
            Choose a fixed sprint or flexible monthly retainer. Click cards to select your ideal tier.
          </p>
        </motion.div>

        {/* Interactive Controls Bar: Billing Toggle & Currency Switcher */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 bg-white p-1.5 sm:p-2 rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {/* Billing Cycle Switch */}
          <div className="flex items-center justify-center bg-gray-100 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setBillingCycle('project')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'project'
                  ? 'bg-black text-white shadow-sm'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              One-Time Project
            </button>
            <button
              onClick={() => setBillingCycle('retainer')}
              className={`flex-1 sm:flex-initial text-center px-2.5 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[11px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                billingCycle === 'retainer'
                  ? 'bg-[#d4ff3f] text-black font-black shadow-sm'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Monthly Retainer
              <span className="bg-black text-[#d4ff3f] text-[9px] px-1.5 py-0.5 rounded-full font-black animate-pulse">
                -20%
              </span>
            </button>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center justify-center border-t-2 sm:border-t-0 sm:border-l-2 border-gray-200 pt-1.5 sm:pt-0 sm:pl-3 w-full sm:w-auto">
            <div className="flex bg-gray-100 p-1 rounded-xl w-full sm:w-auto justify-center">
              <button
                onClick={() => setCurrency('USD')}
                className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'USD'
                    ? 'bg-black text-[#d4ff3f]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                $ USD
              </button>
              <button
                onClick={() => setCurrency('INR')}
                className={`flex-1 sm:flex-initial text-center px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  currency === 'INR'
                    ? 'bg-black text-[#d4ff3f]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                ₹ INR
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Pricing Cards Layout: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
        {/* Left Column: Custom Enterprise & Consultation Hub */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white p-5 sm:p-7 rounded-3xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between relative overflow-hidden"
        >
          {/* Corner Ribbon */}
          <div className="absolute top-0 right-0 bg-[#d4ff3f] text-black text-[10px] font-black uppercase px-4 py-1 rounded-bl-xl border-l-2 border-b-2 border-black">
            Bespoke
          </div>

          <div>
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-[11px] font-bold text-green-800 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              2 Sprint Slots Open
            </div>

            <h3 className="text-2xl font-black text-black leading-tight mb-3">
              Need a Custom Architecture?
            </h3>
            <p className="text-xs text-gray-600 font-semibold leading-relaxed mb-6">
              Have complex integrations, enterprise microservices, legacy migrations or high-volume platforms? Let's tailor an exact milestone roadmap.
            </p>

            {/* Custom Perks List */}
            <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <FaCheck className="w-3 h-3 text-black" />
                <span>NDA & Complete IP Transfer</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <FaCheck className="w-3 h-3 text-black" />
                <span>Dedicated Fullstack Lead</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <FaCheck className="w-3 h-3 text-black" />
                <span>Flexible Escrow Milestones</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-800">
                <FaClock className="w-3 h-3 text-black" />
                <span>Average Response: &lt; 2 Hours</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                setSelectedPlanId('turbo');
                setIsModalOpen(true);
              }}
              className="inline-flex items-center justify-center w-full px-5 py-3 rounded-2xl font-bold text-xs bg-black text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(212,255,63,1)] hover:translate-y-[-2px] active:translate-y-[1px] hover:shadow-[5px_5px_0px_0px_rgba(212,255,63,1)] transition-all cursor-pointer"
            >
              Book Scope Discovery Call
              <span className="ml-2 bg-[#d4ff3f] text-black rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
                →
              </span>
            </button>
          </div>
        </motion.div>

        {/* Right 3 Columns: Interactive Pricing Tier Cards */}
        {PLANS.map((plan, index) => {
          const isSelected = selectedPlanId === plan.id;
          const priceData = calculatePlanPrice(plan);

          const formattedPrice =
            currency === 'USD'
              ? priceData.totalUSD.toLocaleString('en-US')
              : priceData.totalINR.toLocaleString('en-IN');

          const secondaryEst =
            currency === 'USD'
              ? `≈ ₹${priceData.totalINR.toLocaleString('en-IN')} INR`
              : `≈ $${priceData.totalUSD.toLocaleString('en-US')} USD`;

          return (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPlanId(plan.id)}
              className={`rounded-3xl p-5 sm:p-7 transition-all duration-300 relative flex flex-col justify-between cursor-pointer select-none ${
                isSelected
                  ? 'bg-[#d4ff3f] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] lg:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:-translate-y-3 z-20 scale-[1.01] sm:scale-[1.02]'
                  : 'bg-white border-2 border-black/15 shadow-[3px_3px_0px_0px_rgba(0,0,0,0.06)] hover:border-black hover:shadow-[6px_6px_0px_0px_rgba(212,255,63,1)] hover:-translate-y-1.5 z-10'
              }`}
            >
              {/* Header Badges */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full border ${
                    isSelected
                      ? 'bg-black text-[#d4ff3f] border-black'
                      : plan.popular
                      ? 'bg-black text-white border-black'
                      : 'bg-gray-100 text-gray-800 border-gray-300'
                  }`}
                >
                  {isSelected ? "★ ACTIVE CHOICE" : plan.badge}
                </span>

                <div className="flex flex-wrap items-center gap-1.5">
                  {/* Delivery Timeline Pill */}
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                      isSelected ? 'bg-black/10 text-black' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <FaClock className="w-2.5 h-2.5" />
                    {plan.deliveryTime}
                  </span>

                  {/* Warranty Pill */}
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md flex items-center gap-1 ${
                      isSelected ? 'bg-black/10 text-black' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    <FaShieldAlt className="w-2.5 h-2.5" />
                    {plan.warranty}
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-black text-black tracking-tight">{plan.name}</h4>
                    <p className={`text-xs mt-1 leading-snug font-semibold ${
                      isSelected ? 'text-black/80' : 'text-gray-500'
                    }`}>
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Circular Quick Action Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelectPlan(plan.id);
                    }}
                    title="Select and configure plan"
                    className={`w-9 h-9 rounded-full border-2 border-black flex items-center justify-center font-bold transition-transform hover:scale-110 active:scale-95 cursor-pointer ${
                      isSelected ? 'bg-black text-[#d4ff3f]' : 'bg-[#d4ff3f] text-black'
                    }`}
                  >
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Price Display */}
                <div className="my-5 sm:my-6 pt-4 border-t border-black/10">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-black/5 text-black border border-black/10">
                      Starting from
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-black text-xl sm:text-2xl text-black">
                      {currency === 'USD' ? '$' : '₹'}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`${plan.id}-${formattedPrice}-${currency}-${billingCycle}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-black font-sans text-black tracking-tighter"
                      >
                        {formattedPrice}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-xs font-bold text-black uppercase ml-1">
                      {currency}
                      <span className="block text-[10px] text-black/60 font-medium lowercase">
                        {billingCycle === 'retainer' ? '/ month' : '/ project'}
                      </span>
                    </span>
                  </div>

                  {/* Discount / Secondary breakdown */}
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    {billingCycle === 'retainer' && (
                      <span className="text-[10px] font-black bg-black text-[#d4ff3f] px-2 py-0.5 rounded-full">
                        Saved 20% (-{currency === 'USD' ? `$${priceData.discountSavingsUSD}` : `₹${priceData.discountSavingsINR}`})
                      </span>
                    )}

                    <span className="text-[10px] font-bold text-black/50 ml-auto">
                      {secondaryEst}
                    </span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="mb-3">
                  <div className="text-xs font-black uppercase tracking-wider text-black mb-3 flex items-center justify-between">
                    <span>What's Included:</span>
                    <span className="text-[10px] font-bold text-black/60">{plan.features.length} Features</span>
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-2.5 text-xs font-bold transition-all rounded-lg p-1 ${
                          isSelected
                            ? 'text-black hover:bg-black/10'
                            : 'text-gray-700 hover:text-black hover:bg-gray-50'
                        }`}
                      >
                        <span
                          className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[9px] border ${
                            isSelected
                              ? 'bg-black text-[#d4ff3f] border-black'
                              : 'bg-[#d4ff3f] text-black border-black'
                          }`}
                        >
                          <FaCheck className="w-2 h-2" />
                        </span>
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button at Bottom of Card */}
              <div className="mt-6 pt-4 border-t border-black/10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectPlan(plan.id);
                  }}
                  className={`w-full py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-black text-[#d4ff3f] border-2 border-black shadow-[3px_3px_0px_0px_rgba(255,255,255,0.8)] hover:translate-y-[-2px] active:translate-y-[1px]'
                      : 'bg-black text-white border-2 border-black hover:bg-[#d4ff3f] hover:text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[1px]'
                  }`}
                >
                  {isSelected ? `Configure ${plan.name} Tier` : `Select ${plan.name}`}
                  <FaArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Trust & Guarantee Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 relative z-10">
        <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#d4ff3f] flex items-center justify-center font-bold flex-shrink-0">
            <FaShieldAlt className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-black text-black">100% Code Ownership</h5>
            <p className="text-[10px] text-gray-500 font-semibold">GitHub repo & Figma transferred</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#d4ff3f] flex items-center justify-center font-bold flex-shrink-0">
            <FaBolt className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-black text-black">Fast Sprint Turnaround</h5>
            <p className="text-[10px] text-gray-500 font-semibold">On-time milestone delivery</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#d4ff3f] flex items-center justify-center font-bold flex-shrink-0">
            <FaSyncAlt className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-black text-black">Revision Warranty</h5>
            <p className="text-[10px] text-gray-500 font-semibold">Polished till you love it</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-gray-200 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-black text-[#d4ff3f] flex items-center justify-center font-bold flex-shrink-0">
            <FaLock className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-black text-black">No Hidden Fees</h5>
            <p className="text-[10px] text-gray-500 font-semibold">Transparent itemized scope</p>
          </div>
        </div>
      </div>

      {/* Additional Notes Box */}
      <motion.div
        className="mt-8 p-6 bg-black/5 rounded-2xl border-2 border-dashed border-gray-300"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h4 className="text-sm font-black text-black mb-2 flex items-center gap-2">
          <FaCircle className="w-2.5 h-2.5 text-black" /> Additional Project Notes
        </h4>
        <ul className="space-y-1.5 text-xs text-gray-600 font-semibold">
          <li className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
            Domain registration, dedicated hosting, and third-party API tokens will be <strong className="text-black">charged separately (client-side)</strong>.
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black flex-shrink-0"></span>
            Custom fullstack architectural scopes, high-concurrency microservices, or custom native modules are estimated via discovery call.
          </li>
        </ul>
      </motion.div>

      {/* Interactive Plan Configuration Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white border-2 border-black rounded-3xl p-5 sm:p-7 md:p-8 max-w-lg w-full relative z-10 shadow-[8px_8px_0px_0px_#d4ff3f] max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <FaTimes className="w-3.5 h-3.5" />
              </button>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-[11px] font-black uppercase mb-3">
                Selected Tier
              </div>

              <h3 className="text-2xl font-black text-black">
                {selectedPlan.name} Plan Scope
              </h3>
              <p className="text-xs text-gray-500 font-semibold mb-6">
                Delivery: <strong className="text-black">{selectedPlan.deliveryTime}</strong> • Warranty: <strong className="text-black">{selectedPlan.warranty}</strong> • Model: <strong className="text-black">{billingCycle === 'retainer' ? 'Monthly Retainer' : 'One-time Project'}</strong>
              </p>

              {/* Price Breakdown Box */}
              <div className="bg-gray-50 border-2 border-black/10 rounded-2xl p-4 mb-6 space-y-2.5">
                <div className="flex justify-between text-xs font-bold text-gray-700">
                  <span>Starting from ({selectedPlan.name} Tier)</span>
                  <span className="font-black text-black">
                    {currency === 'USD' ? `$${selectedPlan.basePriceUSD}` : `₹${selectedPlan.basePriceINR.toLocaleString('en-IN')}`}
                  </span>
                </div>

                {billingCycle === 'retainer' && (
                  <div className="flex justify-between text-xs font-bold text-green-700">
                    <span>Retainer Discount (20%)</span>
                    <span>
                      -{currency === 'USD' ? `$${selectedPriceData.discountSavingsUSD}` : `₹${selectedPriceData.discountSavingsINR.toLocaleString('en-IN')}`}
                    </span>
                  </div>
                )}

                <div className="border-t-2 border-black/10 pt-2.5 flex justify-between items-baseline">
                  <span className="text-sm font-black text-black">Estimated Total</span>
                  <div className="text-right">
                    <span className="text-2xl font-black font-sans text-black">
                      {currency === 'USD' ? `$${selectedPriceData.totalUSD}` : `₹${selectedPriceData.totalINR.toLocaleString('en-IN')}`}
                    </span>
                    <span className="block text-[10px] text-gray-500 font-bold">
                      {currency === 'USD'
                        ? `≈ ₹${selectedPriceData.totalINR.toLocaleString('en-IN')} INR`
                        : `≈ $${selectedPriceData.totalUSD} USD`}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleProceedToContact}
                  className="w-full py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black shadow-[3px_3px_0px_0px_rgba(212,255,63,1)] hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                  Pre-fill Contact Form & Send Brief
                </button>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl font-bold text-xs uppercase tracking-wider bg-[#25D366] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] active:translate-y-[1px] transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
                >
                  <FaWhatsapp className="w-4 h-4 text-black" />
                  Instant WhatsApp Consultation (+91 9981097501)
                </a>
              </div>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-xs font-bold text-gray-500 hover:text-black underline cursor-pointer"
                >
                  Continue exploring plans
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
