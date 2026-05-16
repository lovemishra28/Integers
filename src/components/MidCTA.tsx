import React from 'react';
import Image from 'next/image';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import teamMember from '@/assets/team_member_footer.jpg';

export default function MidCTA() {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 md:px-16 max-w-7xl mx-auto bg-white flex flex-col lg:flex-row items-center gap-12 sm:gap-16">
      
      {/* Left Side - Graphics & Image */}
      <div className="w-full lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
        
        {/* Decorative Green Square */}
        <div className="absolute top-0 left-10 w-24 h-24 bg-[#eefadc] -z-10"></div>
        
        {/* Main Black Arch (Image Container) */}
        <div className="w-full sm:w-3/4 max-w-sm bg-[#141414] rounded-t-full p-3 aspect-[4/5] relative z-0 overflow-hidden border-2 border-black shadow-2xl">
           <div className="w-full h-full rounded-t-full overflow-hidden relative">
             <Image 
               src={teamMember} 
               alt="Team Member" 
               fill
               className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700" 
             />
           </div>
        </div>

        {/* Floating Orange Badge */}
        <div className="absolute bottom-12 -right-2 sm:-right-4 md:-right-8 bg-[#ff5e14] text-white p-4 sm:p-6 rounded-lg shadow-xl z-20 w-40 sm:w-48 border-2 border-black">
          <div className="text-4xl font-bold font-sans mb-1">New</div>
          <div className="text-xs font-bold uppercase tracking-wider">Creative Studio</div>
        </div>

        {/* Floating 5-Star Badge */}
        <div className="hidden sm:flex absolute top-1/4 -left-8 md:-left-12 bg-white px-4 py-3 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center gap-2 z-20">
          <span className="text-[#ff9d00] flex items-center justify-center w-6 h-6 bg-[#fff6e5] rounded-full">
            <FaStar className="w-3.5 h-3.5 text-[#ff9d00]" />
          </span>
          <span className="text-sm font-bold text-black">Redesign your business</span>
        </div>
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full lg:w-1/2">
        <div className="inline-block mb-4 relative">
           <div className="absolute -left-2 -top-2 w-8 h-8 bg-[#d4ff3f] rounded-full opacity-80 z-0"></div>
           <span className="text-sm font-bold text-gray-600 relative z-10">Contact Us</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans leading-[1.1] text-black mb-6">
          Contact Us Today Grow Your Business
        </h2>
        
        <p className="text-gray-500 font-medium mb-10 leading-relaxed max-w-md">
          We provide exactly the features local businesses need to maximize their digital presence. We build fast, secure, and beautiful platforms tailored for your brand.
        </p>
        
        <button className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
          Connect
          <span className="ml-2 bg-black text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px]">
            <FaArrowRight className="w-2.5 h-2.5" />
          </span>
        </button>
      </div>
    </section>
  );
}
