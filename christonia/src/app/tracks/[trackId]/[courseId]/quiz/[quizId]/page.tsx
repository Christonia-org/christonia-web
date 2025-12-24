import fs from "fs";
import path from "path";
import QuizClient from "./components/QuizClient";
import getQuiz from "@/lib/mock/mock-quiz";

interface QuizPageProps {
  params: {
    trackId: string;
    courseId: string;
    quizId: string;
  };
}

export default async function QuizPage({ params }: QuizPageProps) {
  const quizData = getQuiz();

  const { quizId } = await params;

  const filePath = path.join(process.cwd(), "content", `${quizId}.md`);
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
