"use client";

import { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Code,
  AlertCircle,
  CheckCircle2,
  Table,
  Quote,
  Minus,
  CheckSquare,
} from "lucide-react";

interface Props {
  markdown: string;
  setMarkdown: (value: string) => void;
  metadata: {
    title: string;
    description: string;
  };
}

export default function BlogWriterCore({
  markdown,
  setMarkdown,
  metadata,
}: Props) {
  const [hasH1, setHasH1] = useState(false);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem("christonia_draft_content");
    if (saved) setMarkdown(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("christonia_draft_content", markdown);
    setHasH1(/^#\s+/m.test(markdown));
  }, [markdown]);

  const injectSyntax = (before: string, after: string = "") => {
    const el = textAreaRef.current;
    if (!el) return;

    const start = el.selectionStart;
    const end = el.selectionEnd;
    const text = el.value;
    const selection = text.substring(start, end);

    const newText =
      text.substring(0, start) +
      before +
      selection +
      after +
      text.substring(end);
    setMarkdown(newText);

    setTimeout(() => {
      el.focus();
      el.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  const insertTable = () => {
    const tableTemplate = `\n| Header | Header |\n| :--- | :--- |\n| Content | Content |\n| Content | Content |\n`;
    injectSyntax(tableTemplate);
  };

  return (
    <div className="flex flex-col flex-grow min-h-[700px] rounded-xl overflow-hidden border border-gray-700 bg-[#1c2127] shadow-2xl">
      <div className="flex items-center py-3 px-6 border-b border-gray-700 bg-[#2F3F54] sticky top-0 z-10 overflow-x-auto">
        <div className="flex items-center gap-3 pr-5 border-r border-gray-500/50">
          <button
            onClick={() => injectSyntax("**", "**")}
            className="toolbar-btn"
            title="Bold"
          >
            <Bold size={19} />
          </button>
          <button
            onClick={() => injectSyntax("_", "_")}
            className="toolbar-btn"
            title="Italic"
          >
            <Italic size={19} />
          </button>
        </div>

        <div className="flex items-center gap-3 px-5 border-r border-gray-500/50">
          <button
            onClick={() => injectSyntax("\n## ")}
            className="toolbar-btn text-sm font-bold"
            title="H2 text-white"
          >
            H2
          </button>
          <button
            onClick={() => injectSyntax("\n### ")}
            className="toolbar-btn text-sm font-bold"
            title="H3"
          >
            H3
          </button>
          <button
            onClick={() => injectSyntax("\n#### ")}
            className="toolbar-btn text-sm font-bold opacity-70"
            title="H4"
          >
            H4
          </button>
          <button
            onClick={() => injectSyntax("\n##### ")}
            className="toolbar-btn text-sm font-bold opacity-50"
            title="H5"
          >
            H5
          </button>
        </div>

        <div className="flex items-center gap-3 px-5 border-r border-gray-500/50">
          <button
            onClick={() => injectSyntax("\n* ")}
            className="toolbar-btn"
            title="Bullet List"
          >
            <List size={19} />
          </button>
          <button
            onClick={() => injectSyntax("\n1. ")}
            className="toolbar-btn"
            title="Ordered List"
          >
            <ListOrdered size={19} />
          </button>
          <button
            onClick={() => injectSyntax("\n- [ ] ")}
            className="toolbar-btn"
            title="Task List"
          >
            <CheckSquare size={19} />
          </button>
        </div>

        <div className="flex items-center gap-3 px-5">
          <button
            onClick={() => injectSyntax("\n> ")}
            className="toolbar-btn"
            title="Quote"
          >
            <Quote size={19} />
          </button>
          <button
            onClick={() => injectSyntax("\n---\n")}
            className="toolbar-btn"
            title="Divider"
          >
            <Minus size={19} />
          </button>
          <button
            onClick={() => injectSyntax("\n```\n", "\n```")}
            className="toolbar-btn"
            title="Code Block"
          >
            <Code size={19} />
          </button>
          <button
            onClick={insertTable}
            className="toolbar-btn"
            title="Insert Table"
          >
            <Table size={19} />
          </button>
        </div>

        {hasH1 && (
          <div className="ml-auto flex items-center gap-2 text-red-300 text-xs font-bold px-4 bg-red-500/10 py-1.5 rounded-lg border border-red-500/20">
            <AlertCircle size={14} />
            H1 Reserved
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row flex-grow h-[650px] overflow-hidden">
        <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-700 bg-[#111418] flex flex-col">
          <div className="px-6 py-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] bg-[#1c2127] border-b border-gray-700">
            Editor
          </div>
          <textarea
            ref={textAreaRef}
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-full p-8 bg-transparent border-none resize-none focus:ring-0 font-mono text-sm leading-relaxed text-gray-300 outline-none"
            placeholder="Write your story..."
            spellCheck="false"
          />
        </div>

        <div className="flex-1 bg-[#1c2127] flex flex-col overflow-hidden">
          <div className="px-6 py-2 text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] bg-[#1c2127] border-b border-gray-700 flex justify-between items-center">
            <span>Live Preview</span>
            <CheckCircle2 size={14} className="text-brand-teal" />
          </div>

          <div className="w-full h-full p-10 overflow-y-auto prose prose-invert prose-brand max-w-none">
            <div className="border-b border-gray-800">
              <h1 className="text-4xl font-bold mb-4 text-white">
                {metadata.title || "Untitled Blog"}
              </h1>
              <p className="text-xl text-gray-400 font-medium leading-relaxed">
                {metadata.description || "No description provided yet."}
              </p>
            </div>

            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </div>
        </div>
      </div>

      <style jsx>{`
        .toolbar-btn {
          @apply p-2.5 rounded-lg hover:bg-white/10 text-gray-300 hover:text-white transition-all active:scale-95 flex items-center justify-center;
        }
      `}</style>
    </div>
  );
}
