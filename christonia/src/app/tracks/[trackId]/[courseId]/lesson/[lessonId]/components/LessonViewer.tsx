import fs from "fs";
import path from "path";
import LessonContent from "./LessonContent";

export default async function LessonViewer() {
  const filePath = path.join(process.cwd(), "content", "test-lesson.md");

  let markdown = "";
  try {
    markdown = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    markdown =
      "## Lesson not found\nPlease check if the file exists in /content/test-lesson.md";
  }

  return <LessonContent initialMarkdown={markdown} />;
}
