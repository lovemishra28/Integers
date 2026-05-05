import React from 'react';

export default function Services() {
  const servicesList = [
    { title: "Web UI/UX Design", active: false, iconColor1: "bg-red-400", iconColor2: "bg-blue-400" },
    { title: "Web Development", active: false, iconColor1: "bg-teal-400", iconColor2: "bg-red-400" },
    { title: "Mobile App Design", active: true, iconColor1: "bg-yellow-400", iconColor2: "bg-transparent" }, // Active card
    { title: "Custom Solutions", active: false, iconColor1: "bg-purple-500", iconColor2: "bg-transparent" },
  ];

  return (
    <section id="services" className="py-24 px-8 md:px-16 max-w-7xl mx-auto bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 relative">
        
        {/* Header with the green circular blob from the design */}
        <div className="relative">
          <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#d4ff3f] rounded-full opacity-80 z-0 blur-sm"></div>
          <div className="relative z-10">
            <span className="text-sm font-bold text-gray-600 block mb-2">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight text-black max-w-lg">
              The process that makes your life easier.
            </h2>
          </div>
        </div>

        {/* Updated Button matching the design's brutalist style */}
        <div className="mb-4 mt-6 md:mt-0">
          <button className="inline-flex items-center justify-center px-6 py-2.5 rounded-full font-bold text-sm bg-[#d4ff3f] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:shadow-none transition-all">
            Our Brochure 
            <span className="ml-2 bg-transparent text-black rounded-full w-4 h-4 flex items-center justify-center border border-black text-[10px]">
              ↓
            </span>
          </button>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicesList.map((service, index) => (
          <div 
            key={index} 
            // The active card gets the solid lime green, thick border, and shadow
            className={`p-8 rounded-xl transition-all duration-300 relative group cursor-pointer ${
              service.active 
                ? 'bg-[#d4ff3f] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                : 'bg-white border border-gray-100 shadow-sm hover:border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
            }`}
          >
            {/* Top right arrow */}
            <div className={`absolute top-6 right-6 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${service.active ? 'border-black bg-black text-white' : 'border-gray-200 text-black group-hover:border-black group-hover:bg-black group-hover:text-white'}`}>
              ↗
            </div>

            {/* Overlapping CSS Icons */}
            <div className="flex -space-x-3 mb-16 relative z-10">
              <div className={`w-8 h-8 rounded-md ${service.iconColor1} border-2 border-black`}></div>
              <div className={`w-8 h-8 rounded-md ${service.iconColor2} border-2 border-black bg-white/50 backdrop-blur-sm mt-2`}></div>
            </div>

            <h3 className="text-xl font-bold font-sans text-black mb-4">
              {service.title}
            </h3>
            <p className={`text-xs font-medium leading-relaxed ${service.active ? 'text-black' : 'text-gray-500'}`}>
              We build highly functional and scalable solutions tailored for local cafes, restaurants, and retail outlets.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
