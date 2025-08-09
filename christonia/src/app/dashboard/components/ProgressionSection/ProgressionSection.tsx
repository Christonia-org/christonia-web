import styles from './ProgressionSection.module.css'
import CourseCard from '../CourseCard/CourseCard';

export default function ProgressionSection() {
    return (
        <section className={styles.progressionSection}>
            <h1 className={styles.title}>Progression</h1>
            <div className={styles.courseContainer}>
                <CourseCard
                    courseName="Introduction to Web Development"
                    courseTrack="Front-End Fundamentals"
                    courseImageLink="/moon.svg"
                    lessonsCompleted={11}
                    totalLessons={20}
                    blogsPublished={1}
                    totalBlogs={3}
                    quizScore={49}
                    totalQuizScore={60}
                />
            </div>
        </section>
    );
}