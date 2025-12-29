import ModuleComponent from "./components/ModuleComponent";
import { getCourseById } from "@/lib/mock/courses";
import Image from "next/image";
import SupportUsSection from "@/components/SupportUsSection";

interface CoursePageProps {
  params: Promise<{
    trackId: string;
    courseId: string;
  }>;
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { courseId, trackId } = await params;
  const course = getCourseById(courseId)!;

  return (
    <>
      <div className="flex flex-col items-center px-6 py-10 md:px-24 md:py-16 text-white min-h-screen font-sans max-w-[1200px] mx-auto">
        <div className="shrink-0 mb-6">
          <Image
            src={course.imageLink || "/default-course-logo.svg"}
            alt={`${course.name} Logo`}
            width={100}
            height={100}
            className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">
          {course.name}
        </h1>

        <div className="w-full flex flex-col gap-3 mb-12">
          <h2 className="text-xl md:text-2xl font-semibold text-white self-start">
            Overview
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed m-0">
            {course.description}
          </p>
        </div>

        <div className="w-full flex flex-col gap-4 mb-8">
          {course.modules.map((module) => (
            <ModuleComponent
              key={module.id}
              module={module}
              trackId={trackId}
              courseId={courseId}
            />
          ))}
        </div>
      </div>

      <SupportUsSection />
    </>
  );
}
