"use client";

import { useState, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LessonNavigator from "../../../lesson/[lessonId]/components/LessonNavigator";
import QuizQuestion from "./QuizQuestion";
import { BookOpen, Send, RotateCcw } from "lucide-react";
import Image from "next/image";
import DefaultLogo from "../../../../../../../../public/default-course-logo.svg";

export default function QuizClient({
  quiz,
  markdown,
}: {
  quiz: any;
  markdown: string;
}) {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const pathname = usePathname();
  const router = useRouter();

  const handleViewCourse = () => {
    // Splits the path and removes the last two segments (/lesson/lesson-id)
    const coursePath = pathname.split("/").slice(0, -2).join("/");
    router.push(coursePath);
  };

  // --- NEW RESTART LOGIC ---
  const handleRestart = () => {
    // 1. Clear all inputs
    setAnswers({});
    // 2. Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { intro, conclusion } = useMemo(() => {
    const parts = markdown.split(/:::/);
    return {
      intro:
        parts
          .find((p) => p.trim().startsWith("introduction"))
          ?.replace("introduction", "") || "",
      conclusion:
        parts
          .find((p) => p.trim().startsWith("conclusion"))
          ?.replace("conclusion", "") || "",
    };
  }, [markdown]);

  const sections = useMemo(() => {
    return [
      { id: "introduction", label: "Introduction" },
      { id: "guidelines", label: "Guidelines" },
      ...quiz.questions.map((q: any, i: number) => ({
        id: q.id,
        label: `Question ${i + 1}`,
      })),
      { id: "conclusion", label: "Conclusion" },
    ];
  }, [quiz]);

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex items-center gap-6">
        <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden">
          <Image
            src={DefaultLogo}
            alt="Course Logo"
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
            Quiz Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-tight">
            Course Name
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 min-w-0">
          <article className="prose prose-invert prose-lg max-w-none prose-h2:scroll-mt-24 prose-p:mt-0">
            <div id="introduction" className="scroll-mt-24">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{intro}</ReactMarkdown>
            </div>

            <div className="mt-12">
              {quiz.questions.map((q: any, index: number) => (
                <QuizQuestion
                  key={q.id}
                  id={q.id}
                  index={index}
                  question={q.question}
                  options={q.options}
                  selectedOption={answers[q.id] || null}
                  onSelect={(opt) => setAnswers({ ...answers, [q.id]: opt })}
                />
              ))}
            </div>

            <div
              id="conclusion"
              className="scroll-mt-24 border-t border-gray-800"
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {conclusion}
              </ReactMarkdown>
            </div>
          </article>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-6 w-full max-w-3xl">
              <button
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a4a] border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-base font-bold min-w-[160px]"
                onClick={handleViewCourse}
              >
                <BookOpen size={20} /> View Course
              </button>

              <button className="flex-grow md:flex-initial md:min-w-[240px] flex items-center justify-center gap-2 px-10 py-3 rounded-lg font-bold transition-all shadow-lg text-base bg-brand-teal text-white shadow-brand-teal/20 hover:scale-[1.02]">
                <Send size={20} /> Submit Quiz
              </button>

              <button
                onClick={handleRestart}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a4a] border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-base font-bold min-w-[160px]"
              >
                <RotateCcw size={20} /> Restart Quiz
              </button>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
            <p className="text-xl text-gray-200 mb-4">Quiz contents</p>
            <LessonNavigator sections={sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
