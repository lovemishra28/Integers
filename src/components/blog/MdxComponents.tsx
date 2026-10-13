import React from "react";
import Link from "next/link";
import { slugifyHeading } from "@/lib/blog";

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (React.isValidElement(children)) {
    return getTextContent((children.props as { children?: React.ReactNode }).children);
  }
  return "";
}

export const mdxComponents = {
  h2: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextContent(children);
    const id = slugifyHeading(text);
    return (
      <h2
        id={id}
        className="text-2xl sm:text-3xl font-black text-black tracking-tight mt-10 mb-4 pt-4 border-t border-black/10 scroll-mt-24 flex items-center gap-2 group"
        {...props}
      >
        <span className="flex-1">{children}</span>
        <a
          href={`#${id}`}
          className="text-gray-300 group-hover:text-black transition-colors text-lg opacity-0 group-hover:opacity-100 select-none"
          aria-label={`Jump to ${text}`}
        >
          #
        </a>
      </h2>
    );
  },
  h3: ({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
    const text = getTextContent(children);
    const id = slugifyHeading(text);
    return (
      <h3
        id={id}
        className="text-xl sm:text-2xl font-black text-black tracking-tight mt-8 mb-3 scroll-mt-24 flex items-center gap-2 group"
        {...props}
      >
        <span className="flex-1">{children}</span>
        <a
          href={`#${id}`}
          className="text-gray-300 group-hover:text-black transition-colors text-base opacity-0 group-hover:opacity-100 select-none"
          aria-label={`Jump to ${text}`}
        >
          #
        </a>
      </h3>
    );
  },
  p: ({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="text-sm sm:text-base text-gray-800 leading-relaxed font-medium mb-5" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 mb-6 text-sm sm:text-base text-gray-800 font-medium" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="list-decimal pl-6 space-y-2 mb-6 text-sm sm:text-base text-gray-800 font-medium" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="border-l-4 border-black bg-[#f8f9f5] pl-6 pr-4 py-4 my-6 rounded-r-2xl font-bold italic text-gray-800 shadow-[2px_2px_0px_0px_#000]"
      {...props}
    >
      {children}
    </blockquote>
  ),
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="bg-[#111111] text-gray-100 p-5 rounded-2xl border-2 border-black overflow-x-auto shadow-[4px_4px_0px_0px_#000] my-6 text-xs sm:text-sm font-mono leading-relaxed"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code
          className="font-mono text-xs bg-[#f0f0ed] text-black font-bold px-1.5 py-0.5 rounded border border-black/20"
          {...props}
        >
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  table: ({ children, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="overflow-x-auto my-6 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000]">
      <table className="w-full text-left text-xs sm:text-sm border-collapse" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="bg-[#d4ff3f] text-black font-black p-3.5 border-b-2 border-black" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="p-3.5 border-b border-black/10 font-medium text-gray-800 bg-white" {...props}>
      {children}
    </td>
  ),
  a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    if (href && (href.startsWith("http") || href.startsWith("https"))) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold underline decoration-2 underline-offset-2 hover:bg-[#d4ff3f] transition-colors"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href || "#"}
        className="text-black font-bold underline decoration-2 underline-offset-2 hover:bg-[#d4ff3f] transition-colors"
        {...props}
      >
        {children}
      </Link>
    );
  },
  hr: () => <hr className="my-10 border-t-2 border-black/10" />,
};
