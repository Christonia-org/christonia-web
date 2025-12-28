import fs from "fs";
import path from "path";
import LessonContent from "./LessonContent";

interface LessonViewerProps {
  trackId: string;
  courseId: string;
  lessonId: string;
}

export default async function LessonViewer({
  trackId,
  courseId,
  lessonId,
}: LessonViewerProps) {
  const filePath = path.join(process.cwd(), "content", `${await lessonId}.md`);
  const fallbackFilePath = path.join(
    process.cwd(),
    "content",
    "test-lesson.md"
  );

  let markdown = "";
  try {
    markdown = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    markdown = fs.readFileSync(fallbackFilePath, "utf8");
  }

  return <LessonContent initialMarkdown={markdown} />;
}
