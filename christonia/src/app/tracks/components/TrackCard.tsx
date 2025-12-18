"use client";

import Image from "next/image";
import Link from "next/link";

interface TrackCardProps {
  id: string;
  name: string;
  imageLink?: string;
  description: string;
  link: string;
  courseCount: number;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function TrackCard({
  name,
  imageLink,
  description,
  link,
  courseCount,
  id,
  isSelected,
  onSelect,
}: TrackCardProps) {
  return (
    <div
      className={`bg-[#2f3f54] text-white rounded-lg p-7 w-full h-full border flex flex-col transition-all duration-300 hover:-translate-y-1.5 shadow-lg
        ${
          isSelected
            ? "border-brand-teal ring-1 ring-brand-teal"
            : "border-gray-500"
        }`}
    >
      <div className="relative w-full flex justify-center mb-4">
        <div className="w-[90px] h-[90px] flex items-center justify-center">
          <Image
            src={imageLink || "/default-course-logo.svg"}
            alt={`${name} Track Logo`}
            width={90}
            height={90}
            className="object-contain"
          />
        </div>

        {isSelected && (
          <span className="absolute top-0 right-0 bg-brand-teal text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-tighter shadow-md translate-x-7 -translate-y-7">
            Selected
          </span>
        )}
      </div>

      <div className="flex justify-between items-center w-full mt-4 text-gray-400 font-medium">
        <p className="text-lg">Track</p>
        <p className="text-sm">
          {courseCount} {courseCount === 1 ? "Course" : "Courses"}
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-1 mb-3 self-start">{name}</h2>
      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-4 grow">
        {description}
      </p>

      <div className="flex justify-center gap-4 w-full mt-auto">
        {isSelected ? (
          <Link
            href={link}
            className="w-full text-center bg-brand-teal hover:bg-brand-teal-dark text-white py-2.5 rounded-md font-semibold transition-colors"
          >
            Open
          </Link>
        ) : (
          <>
            <button
              className="flex-1 bg-brand-teal hover:bg-brand-teal-dark text-white py-2.5 rounded-md font-semibold transition-colors active:scale-95"
              onClick={() => onSelect(id)}
            >
              Select
            </button>
            <Link
              href={link}
              className="flex-1 text-center bg-transparent border border-gray-500 hover:bg-[#34495e] text-white py-2.5 rounded-md font-semibold transition-colors"
            >
              View
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
