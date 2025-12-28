"use client";

import React, { useState } from "react";
import {
  Share2,
  AlertTriangle,
  Bookmark,
  Check,
  SquarePen,
  Trash2,
} from "lucide-react";
import Link from "next/link";

interface BlogCardProps {
  id: number | string;
  title: string;
  author: string;
  datePublished: string;
  dateEdited: string | null;
  likes: number;
  isBookmarked: boolean;
  description: string;
  isOwner?: boolean;
  onReport?: (id: string | number, title: string) => void;
  onDelete?: (id: string | number) => void;
}

export default function BlogCard({
  id,
  title,
  author,
  datePublished,
  dateEdited,
  likes,
  isBookmarked,
  description,
  isOwner = false,
  onReport,
  onDelete,
}: BlogCardProps) {
  const [bookmarkedStatus, setBookmarkedStatus] = useState(isBookmarked);
  const [isCopied, setIsCopied] = useState(false);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedStatus((prev) => !prev);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/blogs/${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy link");
    }
  };

  return (
    <div
      className="relative w-full max-w-[300px] h-[400px] bg-[#2F3F54] text-white rounded-lg shadow-xl p-6 pt-12 flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden text-left group
    before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[8px] before:bg-brand-gold before:z-10"
    >
      {/* Toolbar */}
      <div className="absolute top-6 right-4 flex items-center gap-3 z-20">
        {isOwner ? (
          <>
            <Link
              href={`/blogs/edit/${id}`}
              className="text-[#a3a3a3] hover:text-white transition-colors duration-200"
              title="Edit Blog"
            >
              <SquarePen size={20} />
            </Link>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete?.(id);
              }}
              className="text-[#a3a3a3] hover:text-red-500 transition-colors duration-200"
              title="Delete Blog"
            >
              <Trash2 size={20} />
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleBookmarkClick}
              className={`transition-colors duration-200 ${
                bookmarkedStatus
                  ? "text-white"
                  : "text-[#a3a3a3] hover:text-white"
              }`}
            >
              <Bookmark
                size={22}
                fill={bookmarkedStatus ? "currentColor" : "none"}
              />
            </button>
            <button
              onClick={handleShare}
              className="text-[#a3a3a3] hover:text-brand-teal transition-colors duration-200"
            >
              {isCopied ? (
                <Check size={20} className="text-brand-teal" />
              ) : (
                <Share2 size={20} />
              )}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReport?.(id, title);
              }}
              className="text-[#a3a3a3] hover:text-red-400 transition-colors"
            >
              <AlertTriangle size={20} />
            </button>
          </>
        )}
      </div>

      <div className="flex-grow flex flex-col min-h-0 mt-2">
        <h2 className="text-2xl font-bold leading-tight mb-3 pr-8 line-clamp-2 shrink-0">
          {title}
        </h2>

        <div className="flex flex-col gap-1 text-sm text-[#a3a3a3] font-medium mb-4 shrink-0">
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

        <p className="text-gray-300 text-base leading-relaxed line-clamp-4 overflow-hidden">
          {description}
        </p>
      </div>

      <Link
        href={`/blogs/${id}`}
        className="shrink-0 bg-brand-teal text-white text-center text-base font-medium px-6 py-3 rounded-lg shadow-md transition-all duration-200 hover:bg-brand-teal-dark active:scale-95 self-center mt-4 w-full"
      >
        Read Now
      </Link>
    </div>
  );
}
