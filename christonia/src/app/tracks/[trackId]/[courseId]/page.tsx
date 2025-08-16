interface CoursePageProps {
  params: {
    trackId: string;
    courseId: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  return (
    <>
      <div>
        <h1>Course</h1>
        <div></div>
      </div>
    </>
  );
}
