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
                    courseImageLink="/moon.svg" // You might want to update this image path
                    lessonsCompleted={11}
                    totalLessons={20}
                    blogsPublished={1}
                    totalBlogs={3}
                    quizScore={49}
                    totalQuizScore={60}
                />
                <CourseCard
                    courseName="Advanced JavaScript Concepts"
                    courseTrack="Front-End Mastery"
                    courseImageLink="/moon.svg" // Dummy image path
                    lessonsCompleted={8}
                    totalLessons={15}
                    blogsPublished={2}
                    totalBlogs={4}
                    quizScore={75}
                    totalQuizScore={80}
                />
                <CourseCard
                    courseName="Data Science with Python"
                    courseTrack="Back-End Development"
                    courseImageLink="/moon.svg" // Dummy image path
                    lessonsCompleted={25}
                    totalLessons={25} // This card will show 100% completion
                    blogsPublished={5}
                    totalBlogs={5}
                    quizScore={90}
                    totalQuizScore={90}
                />
            </div>
        </section>
    );
}
