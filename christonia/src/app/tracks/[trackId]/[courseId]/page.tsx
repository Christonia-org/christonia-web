import ModuleComponent from "./components/ModuleComponent/ModuleComponent";
import { getCourseById } from "@/lib/mock/courses";
import Image from "next/image";
import SupportUsSection from "@/components/SupportUsSection";
import styles from "./page.module.css";

export default function CoursePage({ params }: CoursePageProps) {
  const { courseId } = params;
  const course = getCourseById(courseId)!;
  console.log(course);
  return (
    <>
      <div className={styles.page}>
        <Image
          src={course.imageLink || "/default-course-logo.svg"}
          alt="Course Logo"
          width={100}
          height={100}
        />
        <h1 className={styles.courseName}>{course.name}</h1>
        <h2 className={styles.overviewTitle}>Overview</h2>
        <p className={styles.overviewDescription}>{course.description}</p>
        <div className={styles.modulesContainer}>
          {course.modules.map((module) => (
            <ModuleComponent key={module.id} module={module} />
          ))}
        </div>
      </div>
      <SupportUsSection />
    </>
  );
}
