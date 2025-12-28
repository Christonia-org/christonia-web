"use client";

import Link from "next/link";
import { useState } from "react";
import {
  BookOpen,
  ClipboardCheck,
  NotebookPen,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface ModuleItemProps {
  title: string;
  link: string;
  isComplete: boolean;
  type: string;
}

export default function ModuleItem({
  title,
  link,
  isComplete: initialComplete,
  type,
}: ModuleItemProps) {
  const [complete, setComplete] = useState(initialComplete);

  // 1. Replaced static SVGs with Lucide Components
  const getTypeIcon = (type: string) => {
    switch (type) {
      case "lesson":
        return <BookOpen size={24} className="text-gray-400" />;
      case "quiz":
        return <ClipboardCheck size={24} className="text-gray-400" />;
      case "assignment":
        return <NotebookPen size={24} className="text-gray-400" />;
      default:
        return <BookOpen size={24} className="text-gray-400" />;
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setComplete(!complete);
  };

  return (
    <Link
      href={link}
      className="group flex items-center justify-between p-4 md:px-8 hover:bg-white/5 transition-colors w-full no-underline border-b border-white/5 last:border-none"
    >
      <div className="flex items-center gap-5 min-w-0 flex-1">
        <div className="shrink-0 group-hover:scale-110 transition-transform duration-300 ease-out">
          {getTypeIcon(type)}
        </div>

        <span className="text-gray-300 group-hover:text-white font-medium text-base md:text-lg truncate transition-colors">
          {title}
        </span>
      </div>

      <button
        onClick={handleToggle}
        className="shrink-0 ml-4 p-2 rounded-full hover:bg-white/10 transition-all active:scale-90 focus:outline-none z-10"
        aria-label="Toggle completion status"
      >
        {complete ? (
          <CheckCircle2
            size={26}
            className="text-brand-teal brightness-110 drop-shadow-[0_0_8px_rgba(20,184,166,0.3)] transition-all"
          />
        ) : (
          <Circle
            size={26}
            className="text-gray-400 opacity-40 group-hover:opacity-60 transition-opacity"
          />
        )}
      </button>
    </Link>
  );
}
