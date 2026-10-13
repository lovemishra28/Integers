import React from "react";
import Link from "next/link";
import { FaArrowRight, FaUserCheck } from "react-icons/fa";
import { AuthorDetails } from "@/lib/blog";

interface AuthorBoxProps {
  author: AuthorDetails;
}

export default function AuthorBox({ author }: AuthorBoxProps) {
  return (
    <aside
      aria-label={`About the author ${author.name}`}
      className="bg-[#f8f9f5] border-2 border-black rounded-3xl p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000] mt-12 mb-8"
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-start sm:items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-[#d4ff3f] border-2 border-black flex items-center justify-center font-black text-xl text-black shadow-[2px_2px_0px_0px_#000] shrink-0">
            {author.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-white border border-black rounded-full text-[10px] font-black uppercase tracking-wider mb-1">
              <FaUserCheck className="w-2.5 h-2.5" /> Core Team Member
            </div>
            <h3 className="text-lg sm:text-xl font-black text-black">
              {author.name}
            </h3>
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              {author.role} • IntegersDev
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-black text-xs uppercase tracking-wider bg-black text-[#d4ff3f] border-2 border-black shadow-[3px_3px_0px_0px_#000] hover:scale-105 active:scale-95 transition-transform shrink-0"
        >
          Discuss With {author.name}
          <FaArrowRight className="w-2.5 h-2.5" />
        </Link>
      </div>

      <p className="text-xs sm:text-sm text-gray-700 font-medium leading-relaxed mt-4 pt-4 border-t border-black/10">
        {author.bio}
      </p>
    </aside>
  );
}
