interface CourseCardProps {
  courseName: string;
  courseTrack?: string | null;
  courseImageLink: string;
  lessonsCompleted: number;
  totalLessons: number;
  blogsPublished: number;
  totalBlogs: number;
  quizScore: number;
  totalQuizScore: number;
}