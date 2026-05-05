import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  withArrow?: boolean;
}

export default function Button({ children, href, className = '', withArrow = false }: ButtonProps) {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 active:scale-95";
  const colorStyle = "bg-brand-lime text-brand-dark border border-brand-dark";

  const content = (
    <>
      {children}
      {withArrow && (
        <span className="ml-3 bg-brand-dark text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
          <FaArrowRight className="w-3 h-3" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyle} ${colorStyle} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`${baseStyle} ${colorStyle} ${className}`}>
      {content}
    </button>
  );
}
