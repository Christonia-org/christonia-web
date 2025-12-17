"use client";

import Image from "next/image";

interface ProgressCourseCardProps {
  courseName: string;
  courseTrack?: string | null;
  courseImageLink: string;
  lessonsCompleted: number;
  totalLessons: number;
  blogsPublished: number;
  totalBlogs: number;
  quizScore: number;
  totalQuizScore: number;
}

export default function ProgressCourseCard({
  courseName,
  courseTrack,
  courseImageLink,
  lessonsCompleted,
  totalLessons,
  blogsPublished,
  totalBlogs,
  quizScore,
  totalQuizScore,
}: ProgressCourseCardProps) {
  const completionPercentage = Math.min(
    ((lessonsCompleted / totalLessons) * 0.6 +
      (blogsPublished / totalBlogs) * 0.4) *
      100,
    100
  );

  return (
    <div className="bg-[#2F3F54] rounded-xl overflow-hidden w-full max-w-[550px] text-white shadow-xl flex flex-col pb-4 font-sans">
      <div className="h-[10px] bg-brand-gold mb-5" />

      <div className="flex flex-col sm:flex-row items-center px-5 pb-5 text-center sm:text-left">
        <div className="w-[70px] h-[70px] rounded-full border-[3px] border-[#ECC94B] overflow-hidden sm:mr-4 mb-4 sm:mb-0 shrink-0">
          <Image
            src={courseImageLink || "/placeholder.svg"}
            alt={courseName}
            width={70}
            height={70}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-xl md:text-2xl font-bold leading-tight">
            {courseName}
          </h2>
          <p className="text-sm md:text-base text-[#BCBCBC] font-bold mt-1">
            Track: {courseTrack || "None"}
          </p>
        </div>
      </div>

      <div className="relative bg-[#BCBCBC] rounded-full h-[25px] mx-5 mb-5 flex items-center justify-center overflow-hidden">
        <div
          className="bg-brand-gold h-full transition-all duration-500 absolute left-0 top-0"
          style={{ width: `${completionPercentage}%` }}
        />
        <p className="relative z-10 font-bold text-sm md:text-base drop-shadow-md">
          {completionPercentage.toFixed(0)}% Complete
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-stretch px-5 gap-0 sm:h-[200px]">
        <div className="flex flex-col justify-center flex-[2]">
          <div className="py-2">
            <p className="text-3xl md:text-[2.5rem] font-bold text-[#E8C23C] leading-none mb-1">
              {lessonsCompleted} / {totalLessons}
            </p>
            <p className="text-sm md:text-lg font-bold text-[#BFBFBF]">
              Lessons Completed
            </p>
          </div>

          <div className="h-[6px] bg-[#BFBFBF] w-full my-3" />

          <div className="py-2">
            <p className="text-3xl md:text-[2.5rem] font-bold text-[#E8C23C] leading-none mb-1">
              {blogsPublished} / {totalBlogs}
            </p>
            <p className="text-sm md:text-lg font-bold text-[#BFBFBF]">
              Blogs Published
            </p>
          </div>
        </div>

        <div className="hidden sm:block w-[6px] bg-[#BFBFBF] mx-4 self-stretch" />

        <div className="flex flex-col items-center justify-center flex-[3] py-6 sm:py-0">
          <p className="text-white font-bold text-xl md:text-2xl mb-4">
            Total Quiz Score:
          </p>
          <p className="text-white text-4xl md:text-[4.25rem] font-bold bg-brand-gold px-6 py-4 rounded-xl leading-none shadow-lg">
            {quizScore} / {totalQuizScore}
          </p>
        </div>
      </div>
    </div>
  );
}
