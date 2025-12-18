"use client";

import React, { useState } from "react";

interface BlogCardProps {
  title: string;
  author: string;
  datePublished: string;
  dateEdited: string | null;
  likes: number;
  isBookmarked: boolean;
  description: string;
}

export default function BlogCard({
  title,
  author,
  datePublished,
  dateEdited,
  likes,
  isBookmarked,
  description,
}: BlogCardProps) {
  const [bookmarkedStatus, setBookmarkedStatus] = useState(isBookmarked);

  const handleBookmarkClick = () => {
    setBookmarkedStatus((prevStatus) => !prevStatus);
  };

  return (
    <div
      className="relative w-full max-w-[300px] h-[400px] bg-[#2F3F54] text-white rounded-lg shadow-xl p-6 pt-8 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden text-left group
      before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:height-[10px] before:bg-brand-gold before:z-10"
    >
      {/* Bookmark Icon */}
      <button
        onClick={handleBookmarkClick}
        className={`absolute top-6 right-4 cursor-pointer transition-colors duration-200 z-20 ${
          bookmarkedStatus ? "text-white" : "text-[#a3a3a3] hover:text-white"
        }`}
        aria-label="Toggle Bookmark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={bookmarkedStatus ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          {bookmarkedStatus && <path d="M9 10l2 2l4-4" stroke="#2F3F54"></path>}
        </svg>
      </button>

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-2xl font-bold leading-tight mb-3 pr-8 line-clamp-2">
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

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>

      {/* Read Now Button */}
      <button className="bg-brand-teal text-white text-base font-medium px-6 py-3 rounded-lg shadow-md transition-colors duration-200 hover:bg-brand-teal-dark active:scale-95 self-center mt-4">
        Read Now
      </button>
    </div>
  );
}
