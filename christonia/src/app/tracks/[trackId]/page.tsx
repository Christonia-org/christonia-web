import { getTrackById } from "@/lib/mock/tracks";
import { getCourses } from "@/lib/mock/courses";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default function TrackCoursesPage({ params }: TrackCoursesPageProps) {
  const { trackId } = params;

  const track = getTrackById(trackId);
  const courses = getCourses();

  if (!track) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <h1>{track.name}</h1>
      <p>{track.description}</p>
      <div className={styles.coursesContainer}>
        {courses.map((course) => (
          <div key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
