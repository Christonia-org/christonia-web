"use client";

import Link from "next/link";
import Image from "next/image";

interface FoundationsCourseCardProps {
  name: string;
  imageLink?: string;
  description: string;
  link: string;
  id: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function FoundationsCourseCard({
  name,
  imageLink,
  description,
  link,
  id,
  isSelected,
  onSelect,
}: FoundationsCourseCardProps) {
  return (
    <div
      className={`bg-[#2f3f54] text-white rounded-lg p-6 md:px-12 md:py-8 w-full max-w-[1200px] border transition-all duration-300 shadow-lg
        ${
          isSelected
            ? "border-brand-teal ring-1 ring-brand-teal"
            : "border-gray-500"
        }`}
    >
      {/* Card Header: Responsive layout from Col to Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Side: Logo, Title, and "Selected" Badge */}
        <div className="flex items-center gap-4 md:gap-5 self-start md:self-center w-full md:w-auto">
          <div className="shrink-0">
            <Image
              src={imageLink || "/default-course-logo.svg"}
              alt="Foundations Course Logo"
              width={90}
              height={90}
              className="w-[60px] h-[60px] md:w-[90px] md:h-[90px] object-contain"
            />
          </div>

          {/* Title Container: flex-wrap prevents the badge from clipping on small screens */}
          <div className="flex flex-wrap items-center gap-2 md:gap-4 min-w-0">
            <h2 className="text-xl md:text-3xl font-semibold m-0 truncate">
              {name}
            </h2>
            {isSelected && (
              <span className="bg-brand-teal text-white text-[9px] md:text-xs font-bold px-2 py-1 rounded uppercase tracking-wider whitespace-nowrap shadow-sm">
                Selected
              </span>
            )}
          </div>
        </div>

        {/* Right Side: Action Buttons */}
        <div className="flex gap-3 w-full md:w-auto">
          {isSelected ? (
            <Link
              href={link}
              className="flex-1 md:flex-none text-center bg-brand-teal hover:bg-brand-teal-dark text-white px-4 md:px-10 py-3 rounded-md font-semibold text-lg transition-colors shadow-md"
            >
              Open
            </Link>
          ) : (
            <>
              <button
                className="flex-1 md:flex-none bg-brand-teal hover:bg-brand-teal-dark text-white px-4 md:px-10 py-3 rounded-md font-semibold text-lg transition-colors truncate shadow-md active:scale-95"
                onClick={() => onSelect(id)}
              >
                Select
              </button>
              <Link
                href={link}
                className="flex-1 md:flex-none text-center bg-transparent border border-gray-500 hover:bg-[#34495e] text-white px-4 md:px-10 py-3 rounded-md font-semibold text-lg transition-colors shadow-md"
              >
                View
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Decorative Divider */}
      <hr className="border-none h-px bg-gray-600 my-6 md:my-8" />

      {/* Description Section */}
      <p className="text-gray-300 text-base md:text-lg leading-relaxed m-0 italic md:not-italic">
        {description}
      </p>
    </div>
  );
}
