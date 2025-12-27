"use client";

import { useState, KeyboardEvent, useMemo } from "react";
import { X, Tag as TagIcon } from "lucide-react";

interface Metadata {
  title: string;
  description: string;
  tags: string[];
}

interface BlogMetadataFormProps {
  metadata: Metadata;
  setMetadata: React.Dispatch<React.SetStateAction<Metadata>>;
}

export default function BlogMetadataForm({
  metadata,
  setMetadata,
}: BlogMetadataFormProps) {
  const [tagInput, setTagInput] = useState("");

  const wordCount = useMemo(() => {
    const words = metadata.description.trim().split(/\s+/);
    return metadata.description.trim() === "" ? 0 : words.length;
  }, [metadata.description]);

  const addTag = () => {
    if (tagInput.trim() && !metadata.tags.includes(tagInput.trim())) {
      setMetadata({ ...metadata, tags: [...metadata.tags, tagInput.trim()] });
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setMetadata({
      ...metadata,
      tags: metadata.tags.filter((t) => t !== tagToRemove),
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <section className="flex flex-col gap-6 mb-8">
      <div className="flex flex-col gap-6 p-8 bg-[#1e2a4a] rounded-xl border border-gray-700 shadow-xl">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
            Blog Title
          </span>
          <input
            className="w-full rounded-lg border border-gray-600 bg-[#2F3F54] px-4 h-12 text-white placeholder:text-gray-400 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all shadow-inner"
            placeholder="Enter an engaging title..."
            value={metadata.title}
            onChange={(e) =>
              setMetadata({ ...metadata, title: e.target.value })
            }
          />
        </label>

        <label className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Short Description (SEO)
            </span>
            <span
              className={`text-xs font-bold ${
                wordCount > 35 ? "text-red-400" : "text-gray-500"
              }`}
            >
              {wordCount} / 35 words
            </span>
          </div>
          <textarea
            className={`w-full min-h-[100px] resize-none rounded-lg border bg-[#2F3F54] p-4 text-white placeholder:text-gray-400 focus:ring-1 outline-none transition-all shadow-inner ${
              wordCount > 35
                ? "border-red-500/50 focus:border-red-500"
                : "border-gray-600 focus:border-brand-teal"
            }`}
            placeholder="Brief summary for search results..."
            value={metadata.description}
            onChange={(e) =>
              setMetadata({ ...metadata, description: e.target.value })
            }
          />
        </label>

        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Add Tags
            </span>
            <div className="relative">
              <input
                className="w-full rounded-lg border border-gray-600 bg-[#2F3F54] pl-11 pr-4 h-12 text-white placeholder:text-gray-400 focus:border-brand-teal focus:ring-1 focus:ring-brand-teal outline-none transition-all shadow-inner"
                placeholder="Type and press Enter..."
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <TagIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                size={18}
              />
            </div>
          </label>

          <div className="flex flex-wrap gap-2 mt-1">
            {metadata.tags.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-2 bg-brand-teal/10 text-brand-teal text-xs font-bold px-3 py-1.5 rounded-full border border-brand-teal/30"
              >
                <span>{tag}</span>
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:text-white transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
