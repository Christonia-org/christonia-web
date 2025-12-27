"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreateBlogCard() {
  return (
    <Link
      href="/blogs/write"
      className="relative w-full max-w-[300px] h-[400px] bg-[#1e2a4a]/20 text-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden group border-2 border-dashed border-gray-600 hover:border-brand-teal"
    >
      <div className="flex flex-col items-center gap-6 text-center z-20">
        <div className="w-20 h-20 rounded-full bg-[#2F3F54] border border-gray-600 flex items-center justify-center group-hover:border-brand-teal group-hover:scale-110 transition-all duration-300">
          <Plus
            size={40}
            className="text-gray-400 group-hover:text-brand-teal transition-colors"
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold leading-tight mb-3 text-white">
            Write a Blog
          </h2>
          <p className="text-gray-400 text-base leading-relaxed px-2">
            Share your unique perspective and contribute to the Christonia
            community.
          </p>
        </div>
      </div>
    </Link>
  );
}
