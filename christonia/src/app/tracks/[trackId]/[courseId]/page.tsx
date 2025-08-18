import ModuleComponent from "./components/ModuleComponent/ModuleComponent";
import { getCourseById } from "@/lib/mock/courses";

export default function CoursePage({ params }: CoursePageProps) {
  const { courseId } = params;
  const course = getCourseById(courseId)!;
  console.log(course);
  return (
    <>
      <div>
        <h1>Course</h1>
        <div>
          {course.modules.map((module) => (
            <ModuleComponent key={module.id} module={module} />
          ))}
        </div>
      </div>
    </>
  );
}
