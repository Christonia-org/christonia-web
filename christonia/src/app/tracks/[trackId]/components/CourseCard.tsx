"use client";

import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  name: string;
  imageLink?: string;
  description: string;
  link: string;
  progress: number;
}

export default function CourseCard({
  name,
  imageLink,
  description,
  link,
  progress,
}: CourseCardProps) {
  const size = 96;
  const strokeWidth = 6;
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="group bg-[#222e3e] text-white rounded-lg p-6 md:px-12 md:py-8 w-full max-w-[1200px] border border-gray-500 transition-all duration-300 hover:scale-[1.01] hover:border-brand-teal shadow-lg flex flex-col">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6 self-start md:self-center">
          <div
            className="relative shrink-0 overflow-visible"
            style={{ width: size, height: size }}
          >
            <div className="absolute inset-0 rounded-full bg-[#1e293b] overflow-hidden">
              <div className="relative w-full h-full transition-opacity duration-300 group-hover:opacity-10 group-hover:blur-sm">
                <Image
                  src={imageLink || "/default-course-logo.svg"}
                  alt={`${name} Logo`}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="absolute inset-0 flex flex-col items-center justify-center font-bold text-[10px] md:text-base text-brand-teal opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <span>{progress}%</span>
                <span className="text-[12px]">Complete</span>
              </span>
            </div>

            <svg
              className="absolute inset-0 -rotate-90 pointer-events-none overflow-visible"
              width={size}
              height={size}
              viewBox={`0 0 ${size} ${size}`}
            >
              <circle
                cx={center}
                cy={center}
                r={radius}
                className="stroke-gray-600 fill-transparent"
                strokeWidth={strokeWidth}
              />
              <circle
                cx={center}
                cy={center}
                r={radius}
                className="stroke-brand-teal fill-transparent transition-all duration-700 ease-out"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold m-0">{name}</h2>
        </div>

        <div className="w-full md:w-auto">
          <Link
            href={link}
            className="block text-center bg-transparent border border-gray-500 hover:bg-[#34495e] hover:border-white text-white px-8 py-3 rounded-md font-semibold text-lg transition-all"
          >
            Open Course
          </Link>
        </div>
      </div>

      <hr className="border-none h-px bg-gray-600 my-6 md:my-8" />

      <p className="text-gray-400 text-base md:text-lg leading-relaxed m-0">
        {description}
      </p>
    </div>
  );
}
