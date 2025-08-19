import ModuleComponent from "./components/ModuleComponent/ModuleComponent";
import { getCourseById } from "@/lib/mock/courses";
import Image from "next/image";
import SupportUsSection from "@/components/SupportUsSection/SupportUsSection";

export default function CoursePage({ params }: CoursePageProps) {
  const { courseId } = params;
  const course = getCourseById(courseId)!;
  console.log(course);
  return (
    <>
      <div>
        <Image
          src={course.imageLink || "/default-course-logo.svg"}
          alt="Course Logo"
          width={100}
          height={100}
        />
        <h1>{course.name}</h1>
        <h2>Overview</h2>
        <p>{course.description}</p>
        <div>
          {course.modules.map((module) => (
            <ModuleComponent key={module.id} module={module} />
          ))}
        </div>
      </div>
      <SupportUsSection />
    </>
  );
}
