"use client";

import {
  Share2,
  Bookmark,
  AlertTriangle,
  ThumbsUp,
  Calendar,
  User,
} from "lucide-react";
import { useState } from "react";

interface BlogHeaderProps {
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  date: string;
  likes: number;
  tags: string[];
  isBookmarked: boolean;
  onReport: () => void;
  onShare: () => void;
}

export default function BlogHeader({
  title,
  description,
  author,
  date,
  likes,
  tags,
  isBookmarked,
  onReport,
  onShare,
}: BlogHeaderProps) {
  const [bookmarked, setBookmarked] = useState(isBookmarked);

  return (
    <div className="flex flex-col gap-8 mb-12">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-brand-teal/10 border border-brand-teal/30 text-brand-teal text-xs font-bold rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-6">
        <div className="flex flex-col gap-3 min-w-0">
          <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 font-medium leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-800">
        <div className="flex items-center gap-6 text-sm md:text-base text-gray-400">
          <div className="flex items-center gap-2">
            <User size={18} className="text-brand-teal" />
            <span className="text-white font-semibold">{author.name}</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
            <Calendar size={18} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 border-l border-gray-700 pl-6">
            <ThumbsUp size={18} />
            <span>{likes} Likes</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onShare}
            className="p-2.5 rounded-lg bg-[#1e2a4a] border border-gray-700 text-gray-300 hover:text-brand-teal hover:border-brand-teal transition-all"
            title="Share"
          >
            <Share2 size={20} />
          </button>

          <button
            onClick={() => setBookmarked(!bookmarked)}
            className={`p-2.5 rounded-lg border transition-all ${
              bookmarked
                ? "bg-brand-teal/20 border-brand-teal text-brand-teal"
                : "bg-[#1e2a4a] border-gray-700 text-gray-300 hover:text-white"
            }`}
            title="Bookmark"
          >
            <Bookmark size={20} fill={bookmarked ? "currentColor" : "none"} />
          </button>

          <button
            onClick={onReport}
            className="p-2.5 rounded-lg bg-[#1e2a4a] border border-gray-700 text-gray-300 hover:text-red-400 hover:border-red-400/50 transition-all"
            title="Report"
          >
            <AlertTriangle size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
