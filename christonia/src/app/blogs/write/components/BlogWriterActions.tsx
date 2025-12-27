"use client";

import { useState, useEffect } from "react";
import { Send, Lightbulb, CheckCircle, Sparkles, Loader2 } from "lucide-react";

export default function BlogWriterActions({ markdown }: { markdown: string }) {
  const [status, setStatus] = useState<"draft" | "reviewing" | "approved">(
    "draft"
  );
  const [aiFeedback, setAiFeedback] = useState<string>("");

  // Reset approval if content changes
  useEffect(() => {
    if (status === "approved") {
      setStatus("draft");
    }
  }, [markdown]);

  const handleAIReview = () => {
    setStatus("reviewing");
    setAiFeedback(""); // Clear old feedback

    // Simulate LLM streaming/processing
    setTimeout(() => {
      setAiFeedback(
        "Overall, your analysis of the Cosmological Argument is quite robust. However, I noticed that the transition between your second and third paragraphs feels a bit abrupt—consider adding a sentence to bridge the gap. Additionally, while your tone is engaging, ensure you explicitly cite the translation for the biblical references in the conclusion to maintain academic rigor. Finally, breaking up the long paragraph under 'Historical Context' would significantly improve the reading experience for mobile users."
      );
      setStatus("approved");
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-8 mt-12 pb-20">
      {(status === "reviewing" || aiFeedback) && (
        <div
          className={`flex flex-col gap-5 rounded-2xl border p-6 transition-all animate-in fade-in slide-in-from-bottom-4 duration-500 ${
            status === "approved"
              ? "border-yellow-500/30 bg-yellow-500/5 shadow-lg shadow-yellow-500/5"
              : "border-gray-700 bg-gray-800/20"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/20 rounded-lg text-yellow-500">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-lg font-bold text-white">
                AI Editor Feedback
              </h3>
            </div>

            <div className="flex items-center gap-2">
              {status === "reviewing" ? (
                <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                  <Loader2 size={16} className="animate-spin" />
                  Analyzing content...
                </div>
              ) : (
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-teal text-xs font-bold uppercase tracking-widest">
                  <CheckCircle size={14} />
                  Review Complete
                </div>
              )}
            </div>
          </div>

          <div className="text-gray-300 leading-relaxed text-base">
            {status === "reviewing" ? (
              <span className="animate-pulse">
                The AI is currently reading your draft and preparing
                suggestions...
              </span>
            ) : (
              `${aiFeedback}`
            )}
          </div>
        </div>
      )}

      <div className="flex justify-end items-center gap-4 w-full md:w-auto">
        <button
          onClick={handleAIReview}
          disabled={status === "reviewing" || markdown.length < 10}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-gray-600 text-white font-bold hover:bg-gray-700 transition-all disabled:opacity-30 active:scale-95"
        >
          <Sparkles size={20} className="text-yellow-400" />
          {status === "reviewing" ? "Analyzing..." : "Review with AI"}
        </button>

        <button
          disabled={status !== "approved"}
          className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-10 py-3 rounded-xl font-bold shadow-xl transition-all ${
            status === "approved"
              ? "bg-brand-teal text-white hover:bg-brand-teal-dark active:scale-95"
              : "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50"
          }`}
        >
          Publish Blog
          <Send size={20} />
        </button>
      </div>
    </div>
  );
}
