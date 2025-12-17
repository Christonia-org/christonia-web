"use client";

import React from "react";
import Link from "next/link";

interface MyBlogCardProps {
  title: string;
  author: string;
  datePublished: string;
  dateEdited: string | null;
  likes: number;
  description: string;
}

export default function MyBlogCard({
  title,
  author,
  datePublished,
  dateEdited,
  likes,
  description,
}: MyBlogCardProps) {
  return (
    <div
      className="relative w-full max-w-[300px] h-[400px] bg-[#2F3F54] text-white rounded-lg shadow-xl p-6 pt-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden text-left group
      before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[10px] before:bg-brand-gold before:z-10"
    >
      {/* Action Icons (Edit / Delete) */}
      <div className="flex justify-end items-center gap-4 z-20">
        <Link
          href="#"
          className="w-[22px] h-[22px] bg-[#b6b6b6] hover:bg-white transition-colors duration-200"
          style={{
            maskImage: "url('/edit.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: "url('/edit.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
          aria-label="Edit Blog"
        />
        <Link
          href="#"
          className="w-[27px] h-[27px] bg-[#b6b6b6] hover:bg-red-500 transition-colors duration-200"
          style={{
            maskImage: "url('/garbage.svg')",
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: "url('/garbage.svg')",
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
          aria-label="Delete Blog"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col mt-2">
        <h2 className="text-xl md:text-2xl font-bold leading-tight mb-3 pr-4 line-clamp-2">
          {title}
        </h2>

        {/* Meta Data */}
        <div className="flex flex-col gap-1 text-sm text-[#a3a3a3] font-medium mb-4">
          <p>
            by <span className="text-white font-semibold">{author}</span>
          </p>
          <p>
            <span className="text-white">{datePublished}</span>
            {dateEdited && <span> (Edited on {dateEdited})</span>}
          </p>
          <p>
            <span className="text-white font-semibold">{likes}</span> Likes
          </p>
        </div>

        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      {/* Read Now Button */}
      <button className="bg-brand-teal text-white text-base font-medium px-6 py-2.5 rounded-lg shadow-md transition-colors duration-200 hover:bg-brand-teal-dark active:scale-95 self-center mt-4">
        Read Now
      </button>
    </div>
  );
}
