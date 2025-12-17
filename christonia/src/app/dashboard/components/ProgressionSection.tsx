import ProgressCourseCard from "./ProgressCourseCard";

export default function ProgressionSection() {
  return (
    <section className="flex flex-col items-center w-full gap-8 md:gap-12 font-sans">
      <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white text-center">
        Progression
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full lg:w-[90%] justify-items-center">
        <ProgressCourseCard
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
        <ProgressCourseCard
          courseName="Advanced JavaScript Concepts"
          courseTrack="Front-End Mastery"
          courseImageLink="/moon.svg"
          lessonsCompleted={8}
          totalLessons={15}
          blogsPublished={2}
          totalBlogs={4}
          quizScore={75}
          totalQuizScore={80}
        />
        <ProgressCourseCard
          courseName="Data Science with Python"
          courseTrack="Back-End Development"
          courseImageLink="/moon.svg"
          lessonsCompleted={25}
          totalLessons={25}
          blogsPublished={5}
          totalBlogs={5}
          quizScore={90}
          totalQuizScore={90}
        />
      </div>
    </section>
  );
}
