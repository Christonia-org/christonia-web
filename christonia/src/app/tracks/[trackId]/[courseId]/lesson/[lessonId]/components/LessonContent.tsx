"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import LessonNavigator from "../../../../../../../components/LessonNavigator";
import { BookOpen, CheckCircle, ChevronRight } from "lucide-react";
import DefaultLogo from "../../../../../../../../public/default-course-logo.svg";

export default function LessonContent({
  initialMarkdown,
}: {
  initialMarkdown: string;
}) {
  const [isComplete, setIsComplete] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleViewCourse = () => {
    // Splits the path and removes the last two segments (/lesson/lesson-id)
    const coursePath = pathname.split("/").slice(0, -2).join("/");
    router.push(coursePath);
  };

  const sections = useMemo(() => {
    const headerRegex = /^##\s+(.*)$/gm;
    const matches = Array.from(initialMarkdown.matchAll(headerRegex));
    return matches.map((match) => {
      const label = match[1].trim();
      const id = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { id, label };
    });
  }, [initialMarkdown]);

  const contentBlocks = useMemo(() => {
    return initialMarkdown.split(/:::/);
  }, [initialMarkdown]);

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
            Lesson Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-tight">
            Course Name
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-16">
        <div className="flex-1 min-w-0">
          <article
            className="prose prose-invert prose-lg max-w-none 
            prose-h2:mt-14 prose-h2:mb-8 prose-h2:scroll-mt-24 
            prose-h2:pb-2
            prose-p:mt-0 prose-p:mb-4
            prose-a:text-brand-teal hover:prose-a:underline"
          >
            {contentBlocks.map((block, index) => {
              const isAssignment = block.trim().startsWith("assignment");
              const cleanBlock = isAssignment
                ? block.replace("assignment", "").trim()
                : block;

              return (
                <div
                  key={index}
                  className={
                    isAssignment
                      ? "bg-[#1e2a4a] p-5 rounded-2xl border border-gray-700  [&_h2]:mt-0 [&_h2]:border-none"
                      : ""
                  }
                >
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      h2: ({ children, ...props }) => {
                        const label = String(children);
                        const id = label
                          .toLowerCase()
                          .replace(/[^\w\s-]/g, "")
                          .replace(/\s+/g, "-");
                        return (
                          <h2 id={id} {...props}>
                            {children}
                          </h2>
                        );
                      },
                    }}
                  >
                    {cleanBlock}
                  </ReactMarkdown>
                </div>
              );
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-6 w-full max-w-3xl">
              <button
                onClick={handleViewCourse}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a4a] border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-base font-bold min-w-[160px]"
              >
                <BookOpen size={20} />
                View Course
              </button>

              <button
                onClick={() => setIsComplete(!isComplete)}
                className={`flex-grow md:flex-initial md:min-w-[240px] flex items-center justify-center gap-2 px-10 py-3 rounded-lg font-bold transition-all shadow-lg text-base ${
                  isComplete
                    ? "bg-gray-700 text-gray-300 shadow-none"
                    : "bg-brand-teal text-white shadow-brand-teal/20 hover:scale-[1.02]"
                }`}
              >
                <CheckCircle size={20} />
                {isComplete ? "Lesson Complete" : "Mark Complete"}
              </button>

              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1e2a4a] border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-base font-bold min-w-[160px]">
                Next Lesson
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-28">
            <p className="text-xl text-gray-200 mb-4">Lesson contents</p>
            <LessonNavigator sections={sections} />
          </div>
        </aside>
      </div>
    </div>
  );
}
