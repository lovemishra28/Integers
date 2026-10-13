import React from "react";
import Link from "next/link";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaComments,
  FaDirections,
  FaCalendarCheck,
} from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import SiteLayout from "@/components/SiteLayout";
import PageHeader from "@/components/PageHeader";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Web Development Studio in Gwalior | IntegersDev",
  description:
    "Get in touch with IntegersDev in Gwalior, Madhya Pradesh. Contact Vinay, Aryan, Kuldeep & Love for custom web development, UI/UX design, or mobile apps. Call +91 9981097501.",
  alternates: {
    canonical: "https://integersdev.in/contact",
  },
  openGraph: {
    title: "Contact Us | IntegersDev - Web Development Studio in Gwalior",
    description:
      "Start your next web or mobile project with IntegersDev in Gwalior. Free initial consultation and fast proposals.",
    url: "https://integersdev.in/contact",
    siteName: "IntegersDev",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact IntegersDev" }],
  },
};

const contactFaqs = [
  {
    question: "How quickly will I receive a reply from IntegersDev?",
    answer:
      "We typically respond to inquiries within 2 to 4 business hours, and never more than 24 hours. For urgent questions or same-day discussion, you can reach out directly on WhatsApp at +91 9981097501.",
  },
  {
    question: "Do you offer free technical consultations before signing?",
    answer:
      "Yes! We provide a free 30-minute discovery consultation where we assess your requirements, recommend the best tech stack (Next.js, React Native, PostgreSQL, Supabase), and outline realistic milestone timelines and fixed-price budgets.",
  },
  {
    question: "Can we sign a Non-Disclosure Agreement (NDA) first?",
    answer:
      "Of course. If you have proprietary intellectual property, trade secrets, or confidential business flows, we are happy to review and sign your NDA prior to detailed technical discussions.",
  },
  {
    question: "Can we meet in person in Gwalior?",
    answer:
      `Yes, our engineering studio is located at ${siteConfig.address.full}. We welcome in-person meetings for clients in Gwalior and Madhya Pradesh by appointment, and conduct high-bandwidth video calls (Google Meet / Zoom) for clients across India and globally.`,
  },
  {
    question: "What are your standard working hours and timezone?",
    answer:
      `Our operational studio hours are ${siteConfig.workingHours.days}, from ${siteConfig.workingHours.hours}. On Sundays, we are closed for scheduled development, while retaining 24/7 on-call monitoring for critical production servers and client outages.`,
  },
];

import { FAQPageSchema } from "@/components/schema";

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* Schema.org FAQPage Structured Data */}
      <FAQPageSchema faqs={contactFaqs} />

      <PageHeader
        badge="Direct Communications"
        title="Let's Build Something Great"
        highlight="Together"
        description="Have a new project idea, need an existing site modernized, or want to discuss a dedicated engineering sprint? We'd love to hear from you."
        breadcrumbs={[{ label: "Contact" }]}
      />

      {/* Main Contact Section */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Contact Info, Working Hours & Reassurances */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Channel Card */}
            <div className="bg-[#111111] text-white border-2 border-black rounded-3xl p-8 shadow-[6px_6px_0px_0px_#d4ff3f]">
              <span className="text-[#d4ff3f] text-xs font-black uppercase tracking-wider block mb-3">
                Direct Channels
              </span>
              <h2 className="text-2xl font-black mb-6">
                Get in Touch With {siteConfig.name}
              </h2>

              <div className="space-y-5">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-[#d4ff3f] shrink-0">
                    <FaEnvelope className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">
                      Email Us
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-base font-bold hover:text-[#d4ff3f] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-[#d4ff3f] shrink-0">
                    <FaPhoneAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">
                      Call Directly
                    </span>
                    <a
                      href={`tel:${siteConfig.phoneClean}`}
                      className="text-base font-bold hover:text-[#d4ff3f] transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-[#25D366] shrink-0">
                    <FaWhatsapp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">
                      Instant WhatsApp
                    </span>
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold hover:text-[#25D366] transition-colors"
                    >
                      Chat with Developers ({siteConfig.phone}) →
                    </a>
                  </div>
                </div>

                {/* Full Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-[#d4ff3f] shrink-0">
                    <FaMapMarkerAlt className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-wider block">
                      Full Studio Address
                    </span>
                    <p className="text-sm font-bold text-gray-200 leading-snug">
                      {siteConfig.address.full}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-3">
                  Connect On Social
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://x.com/integers_dev?s=11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-white hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition-all"
                    aria-label="X (Twitter)"
                  >
                    <FaXTwitter className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/integers.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#1c1c1c] border border-gray-700 flex items-center justify-center text-white hover:border-[#d4ff3f] hover:text-[#d4ff3f] transition-all"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-7 shadow-[4px_4px_0px_0px_#000]">
              <div className="flex items-center gap-2 text-xs font-black uppercase text-[#62d124] tracking-wider mb-2">
                <FaClock className="w-3.5 h-3.5 text-black" />
                Working Hours
              </div>
              <h3 className="text-xl font-black text-black mb-4">
                Operational Schedule
              </h3>

              <div className="space-y-3 text-xs font-bold">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">{siteConfig.workingHours.days}</span>
                  <span className="text-black font-black bg-[#d4ff3f] px-2.5 py-1 rounded-md border border-black">
                    {siteConfig.workingHours.hours}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="text-gray-700">Sunday</span>
                  <span className="text-gray-500 font-semibold text-[11px]">
                    Emergency Support Only
                  </span>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <span className="text-gray-700">Avg. Response Time</span>
                  <span className="text-black font-black">
                    {siteConfig.workingHours.responseTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Engineer Trust Badges */}
            <div className="bg-white border-2 border-black rounded-3xl p-6 shadow-[4px_4px_0px_0px_#000] space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4ff3f] border border-black flex items-center justify-center text-black shrink-0">
                  <FaCalendarCheck className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-black">
                  Fast Turnaround: Itemized quotes delivered within 24 hours
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4ff3f] border border-black flex items-center justify-center text-black shrink-0">
                  <FaShieldAlt className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-black">
                  Strict NDA Protection signed prior to detailed reviews
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#d4ff3f] border border-black flex items-center justify-center text-black shrink-0">
                  <FaComments className="w-3.5 h-3.5" />
                </div>
                <div className="text-xs font-bold text-black">
                  Direct conversation with developers (Vinay, Aryan, Kuldeep &amp; Love)
                </div>
              </div>
            </div>
          </div>

          {/* Right: The Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Embedded Google Map Section */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto w-full">
        <div className="bg-white border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4ff3f] border border-black rounded-full text-xs font-black uppercase mb-2">
                <FaMapMarkerAlt className="text-red-500" />
                Studio Location
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-black">
                Find Us in Gwalior, Madhya Pradesh
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-gray-600 mt-1">
                {siteConfig.address.full}
              </p>
            </div>

            <a
              href={siteConfig.mapDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black hover:bg-[#d4ff3f] hover:text-black transition-all shadow-[2px_2px_0px_0px_#000]"
            >
              <FaDirections className="w-3.5 h-3.5" />
              Open in Google Maps
            </a>
          </div>

          {/* Map Embed Frame */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-black relative">
            <iframe
              title="IntegersDev Location in Gwalior, Madhya Pradesh"
              src={siteConfig.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-150 contrast-105"
            />
          </div>
        </div>
      </section>

      {/* Frequently Asked Contact Questions */}
      <section className="py-12 px-6 sm:px-12 md:px-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <span className="text-xs font-black uppercase text-[#62d124] tracking-wider block mb-1">
            Questions &amp; Answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-black">
            Contact &amp; Onboarding FAQs
          </h2>
          <p className="mt-2 text-sm text-gray-600 font-medium">
            Common questions regarding proposals, NDAs, meetings in Gwalior, and response times.
          </p>
        </div>
        <FAQAccordion items={contactFaqs} />
      </section>
    </SiteLayout>
  );
}
