import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string;
  centered?: boolean;
}

export default function SectionHeader({ label, title, centered = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'flex flex-col items-center text-center' : ''}`}>
      <div className="flex items-center gap-2 mb-4 relative">
        <div className="absolute -left-2 top-0 w-6 h-6 bg-brand-lime rounded-tl-full rounded-bl-full rounded-tr-full opacity-50 z-0"></div>
        <span className="text-sm font-semibold capitalize text-brand-dark z-10 relative">
          {label}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold font-sans leading-tight text-brand-dark max-w-2xl">
        {title}
      </h2>
    </div>
  );
}
