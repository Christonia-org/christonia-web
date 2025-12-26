"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ThumbsUp, ThumbsDown, AlertTriangle } from "lucide-react";

interface BlogBodyProps {
  content: string;
  onReport: () => void;
}

export default function BlogBody({ content, onReport }: BlogBodyProps) {
  return (
    <div className="flex-1 min-w-0">
      <article
        className="prose prose-invert prose-lg max-w-none 
        prose-h2:mt-14 prose-h2:mb-8 prose-h2:scroll-mt-24 
        prose-h2:pb-2
        prose-p:mt-0 prose-p:mb-4
        prose-a:text-brand-teal hover:prose-a:underline
        prose-blockquote:border-l-brand-gold prose-blockquote:bg-[#1e2a4a]/30 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children, ...props }) => {
              const id = String(children)
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
          {content}
        </ReactMarkdown>
      </article>

      <div className="mt-16 p-8 bg-[#1e2a4a] border border-gray-700 rounded-2xl flex flex-col items-center gap-6 shadow-xl">
        <h3 className="text-xl md:text-2xl font-bold text-white">
          Did you like this blog?
        </h3>

        <div className="flex flex-wrap justify-center gap-4 w-full max-w-md">
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-brand-teal text-white rounded-lg font-bold hover:bg-brand-teal-dark transition-all active:scale-95">
            <ThumbsUp size={20} />
            Yes
          </button>

          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#2f3f54] border border-gray-600 text-gray-300 rounded-lg font-bold hover:bg-gray-700 transition-all active:scale-95">
            <ThumbsDown size={20} />
            No
          </button>
        </div>

        <button
          onClick={onReport}
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors mt-2"
        >
          <AlertTriangle size={16} />
          Report an issue with this content
        </button>
      </div>
    </div>
  );
}
