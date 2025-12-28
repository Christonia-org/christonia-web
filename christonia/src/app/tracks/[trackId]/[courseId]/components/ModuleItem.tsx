"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  const typeIcons: Record<string, string> = {
    lesson: "/lesson-icon.svg",
    quiz: "/quiz-icon.svg",
    assignment: "/blog-assignment-icon.svg",
  };

  const statusIcon = complete
    ? "/complete-lesson.svg"
    : "/incomplete-lesson.svg";
  const categoryIcon = typeIcons[type] || "/lesson-icon.svg";

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setComplete(!complete);
  };

  return (
    <Link
      href={link}
      className="group flex items-center justify-between p-4 md:px-8 hover:bg-white/5 transition-colors w-full no-underline"
    >
      <div className="flex items-center gap-4 min-w-0 flex-1">
        <div className="shrink-0 group-hover:scale-110 transition-transform duration-200">
          <Image
            src={categoryIcon}
            width={30}
            height={30}
            alt={`${type} icon`}
          />
        </div>

        <span className="text-gray-200 group-hover:text-white font-medium text-base md:text-lg truncate">
          {title}
        </span>
      </div>

      <button
        onClick={handleToggle}
        className="shrink-0 ml-4 hover:opacity-80 active:scale-90 transition-all focus:outline-none z-10"
        aria-label="Toggle completion status"
      >
        <Image
          src={statusIcon}
          width={30}
          height={30}
          alt="Status Icon"
          className={`transition-all duration-200 ${
            complete ? "brightness-110" : "opacity-40"
          }`}
        />
      </button>
    </Link>
  );
}
