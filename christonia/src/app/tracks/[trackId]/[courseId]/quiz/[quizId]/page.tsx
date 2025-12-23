import fs from "fs";
import path from "path";
import QuizClient from "./components/QuizClient";
import getQuiz from "@/lib/mock/mock-quiz"; // Adjust path to your mock data

interface QuizPageProps {
  params: {
    trackId: string;
    courseId: string;
    quizId: string;
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  // 1. Fetch Question Data from DB (Mock for now)
  const quizData = getQuiz();

  // 2. Fetch Markdown Content (Intro/Conclusion) from S3/Filesystem
  // We use the quizId to find the specific .md file
  const filePath = path.join(
    process.cwd(),
    "content",
    `${await params.quizId}.md`
  );
  const fallbackFilePath = path.join(process.cwd(), "content", `test-quiz.md`);

  let markdownContent = "";
  try {
    markdownContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    // Fallback if the file doesn't exist yet
    markdownContent = fs.readFileSync(fallbackFilePath, "utf8");
  }

  return <QuizClient quiz={quizData} markdown={markdownContent} />;
}
