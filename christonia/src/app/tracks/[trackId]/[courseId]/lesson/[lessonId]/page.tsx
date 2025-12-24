import LessonViewer from "./components/LessonViewer";

interface LessonsPageProps {
  params: {
    trackId: string;
    courseId: string;
    lessonId: string;
  };
}

export default async function LessonsPage({ params }: LessonsPageProps) {
  const { trackId, courseId, lessonId } = await params;
  return (
    <LessonViewer trackId={trackId} courseId={courseId} lessonId={lessonId} />
  );
}
