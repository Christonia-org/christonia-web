import { getTrackById } from "@/lib/mock/tracks";
import { getCourses } from "@/lib/mock/courses";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import CourseCard from "./components/CourseCard/CourseCard";
import SupportUsSection from "@/components/SupportUsSection/SupportUsSection";

export default function TrackCoursesPage({ params }: TrackCoursesPageProps) {
  const { trackId } = params;

  const track = getTrackById(trackId);
  const courses = getCourses();

  if (!track) {
    notFound();
  }

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.trackName}>The {track.name} Track</h1>
        <p className={styles.description}>{track.description}</p>
        <div className={styles.coursesContainer}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              name={course.name}
              imageLink={course.imageLink}
              description={course.description}
              link={`/tracks/${trackId}/${course.link}`}
              progress={0}
              id={course.id}
            />
          ))}
        </div>
      </div>
      <SupportUsSection />
    </>
  );
}
