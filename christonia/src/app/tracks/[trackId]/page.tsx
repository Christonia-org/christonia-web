import { getTrackById } from "@/lib/mock/tracks";
import { getCourses } from "@/lib/mock/courses";
import { notFound } from "next/navigation";
import CourseCard from "./components/CourseCard";
import SupportUsSection from "@/components/SupportUsSection";

interface TrackCoursesPageProps {
  params: Promise<{
    trackId: string;
  }>;
}

export default async function TrackCoursesPage({
  params,
}: TrackCoursesPageProps) {
  const { trackId } = await params;

  const track = getTrackById(trackId);
  const courses = getCourses();

  if (!track) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col gap-8 px-6 py-8 md:px-24 md:py-12 text-white min-h-screen font-sans max-w-[1400px] mx-auto">
        <header className="flex flex-col gap-4 w-full">
          <h1 className="text-4xl md:text-5xl font-bold m-0">
            The {track.name} Track
          </h1>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed m-0 w-full">
            {track.description}
          </p>
        </header>

        <div className="flex flex-col gap-10 mt-4 mb-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              imageLink={course.imageLink}
              description={course.description}
              link={`/tracks/${trackId}/${course.id}`}
              progress={0}
            />
          ))}
        </div>
      </div>

      <SupportUsSection />
    </>
  );
}
