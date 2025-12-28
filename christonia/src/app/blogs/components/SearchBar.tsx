"use client";

import { useState } from "react";
import { Search, X, User, Tag, FileText, Hash } from "lucide-react";

interface SearchBarProps {
  query: string;
  setQuery: (val: string) => void;
}

export default function SearchBar({ query, setQuery }: SearchBarProps) {
  const [isFocused, setIsFocused] = useState(false);

  const filters = [
    { label: "by:", desc: "author name", icon: <User size={14} /> },
    { label: "title:", desc: "blog title", icon: <FileText size={14} /> },
    { label: "tag:", desc: "specific tag", icon: <Tag size={14} /> },
    { label: "contains:", desc: "text in content", icon: <Hash size={14} /> },
  ];

  const handleFilterClick = (filter: string) => {
    setQuery(filter);
  };

  return (
    <div className="sticky top-8 z-50 w-full max-w-[600px] mb-24 mt-2">
      <div
        className={`flex items-center bg-[#304156] rounded-lg px-4 py-3 w-full shadow-2xl border transition-all duration-200 ${
          isFocused
            ? "border-brand-teal ring-1 ring-brand-teal/20"
            : "border-white/5"
        }`}
      >
        <Search
          size={22}
          className={`mr-3 transition-colors ${
            isFocused ? "text-brand-teal" : "text-[#c9cdd4]"
          }`}
        />

        <input
          type="text"
          value={query}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search blogs..."
          className="flex-grow bg-transparent border-none outline-none text-base text-white placeholder-[#c9cdd4]"
        />

        {query && (
          <button
            onClick={() => setQuery("")}
            className="ml-2 p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={18} className="text-[#c9cdd4]" />
          </button>
        )}
      </div>

      {isFocused && !query && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-[#1e293b] border border-gray-700 rounded-xl shadow-2xl p-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
            Advanced Search Options
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
            {filters.map((f) => (
              <button
                key={f.label}
                type="button"
                onClick={() => handleFilterClick(f.label)}
                className="flex items-center justify-between px-3 py-2 hover:bg-brand-teal/10 rounded-lg group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-brand-teal">{f.icon}</span>
                  <span className="text-sm font-bold text-gray-200">
                    {f.label}
                  </span>
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-400 italic">
                  {f.desc}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
