"use client";

import { useState, KeyboardEvent, useMemo } from "react";
import { X, Tag as TagIcon, Lock } from "lucide-react";

interface Metadata {
  title: string;
  description: string;
  tags: string[];
}

interface BlogMetadataFormProps {
  metadata: Metadata;
  setMetadata: React.Dispatch<React.SetStateAction<Metadata>>;
  isReadOnly?: boolean;
}

export default function BlogMetadataForm({
  metadata,
  setMetadata,
  isReadOnly = false,
}: BlogMetadataFormProps) {
  const [tagInput, setTagInput] = useState("");

  const wordCount = useMemo(() => {
    const words = metadata.description.trim().split(/\s+/);
    return metadata.description.trim() === "" ? 0 : words.length;
  }, [metadata.description]);

  const addTag = () => {
    if (isReadOnly) return;
    if (tagInput.trim() && !metadata.tags.includes(tagInput.trim())) {
      setMetadata({ ...metadata, tags: [...metadata.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    if (isReadOnly) return;
    setMetadata({
      ...metadata,
      tags: metadata.tags.filter((t) => t !== tagToRemove),
    });
  };

  return (
    <section className="flex flex-col gap-6 mb-8 relative">
      {isReadOnly && (
        <div className="absolute -top-3 right-6 flex items-center gap-2 text-gray-400 text-[10px] font-black uppercase tracking-[0.15em] bg-[#111418] px-3 py-1 rounded-full border border-gray-700 z-10 shadow-sm">
          <Lock size={12} className="text-brand-teal" />
          Locked for Assignment
        </div>
      )}

      <div
        className={`flex flex-col gap-6 p-8 bg-[#1e2a4a] rounded-xl border transition-all duration-300 ${
          isReadOnly
            ? "border-gray-800 shadow-none bg-[#1e2a4a]/50"
            : "border-gray-700 shadow-xl"
        }`}
      >
        <label className="flex flex-col gap-2">
          <span
            className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
              isReadOnly ? "text-gray-500" : "text-gray-300"
            }`}
          >
            Blog Title
          </span>
          <input
            readOnly={isReadOnly}
            disabled={isReadOnly}
            className={`w-full rounded-lg border px-4 h-12 text-white outline-none transition-all shadow-inner ${
              isReadOnly
                ? "bg-[#1c253a] border-gray-700 text-gray-400 cursor-not-allowed select-none"
                : "bg-[#2F3F54] border-gray-600 focus:border-brand-teal focus:ring-1"
            }`}
            value={metadata.title}
            onChange={(e) =>
              !isReadOnly && setMetadata({ ...metadata, title: e.target.value })
            }
          />
        </label>

        <label className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span
              className={`text-sm font-semibold uppercase tracking-wider transition-colors ${
                isReadOnly ? "text-gray-500" : "text-gray-300"
              }`}
            >
              Short Description (SEO)
            </span>
            {!isReadOnly && (
              <span
                className={`text-xs font-bold ${
                  wordCount > 35 ? "text-red-400" : "text-gray-500"
                }`}
              >
                {wordCount} / 35 words
              </span>
            )}
          </div>
          <textarea
            readOnly={isReadOnly}
            disabled={isReadOnly}
            className={`w-full min-h-[100px] resize-none rounded-lg border p-4 text-white outline-none transition-all shadow-inner ${
              isReadOnly
                ? "bg-[#1c253a] border-gray-700 text-gray-400 cursor-not-allowed select-none"
                : wordCount > 35
                ? "border-red-500/50"
                : "border-gray-600 focus:border-brand-teal focus:ring-1 bg-[#2F3F54]"
            }`}
            value={metadata.description}
            onChange={(e) =>
              !isReadOnly &&
              setMetadata({ ...metadata, description: e.target.value })
            }
          />
        </label>

        <div className="flex flex-col gap-3">
          {!isReadOnly && (
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Add Tags
              </span>
              <div className="relative">
                <input
                  className="w-full rounded-lg border border-gray-600 bg-[#2F3F54] pl-11 pr-4 h-12 text-white outline-none"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTag()}
                />
                <TagIcon
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                  size={18}
                />
              </div>
            </label>
          )}

          <div className="flex flex-wrap gap-2 mt-1">
            {metadata.tags.map((tag) => (
              <div
                key={tag}
                className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full border transition-all ${
                  isReadOnly
                    ? "bg-gray-800/50 text-gray-500 border-gray-700"
                    : "bg-brand-teal/10 text-brand-teal border-brand-teal/30"
                }`}
              >
                <span>{tag}</span>
                {!isReadOnly && (
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:text-white transition-colors"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
