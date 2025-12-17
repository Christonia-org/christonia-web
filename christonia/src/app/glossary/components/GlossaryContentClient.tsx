"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import GlossaryTerm from "./GlossaryTerm/GlossaryTerm";

export default function GlossaryContentClient({
  terms,
}: {
  terms: GlossaryTermData[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchTerm]);

  const filteredTerms = terms.filter((term) =>
    term.name.toLowerCase().startsWith(debouncedSearchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setDebouncedSearchTerm(searchTerm);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleSimilarTermClick = () => {
    setSearchTerm("");
    setDebouncedSearchTerm("");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="sticky top-4 z-50 flex items-center bg-[#304156] rounded-lg px-4 py-3 w-full max-w-full md:max-w-[600px] mt-6 mb-8 shadow-xl border border-[#4a5a75] focus-within:border-brand-teal transition-all">
        <button
          className="bg-transparent border-none cursor-pointer flex items-center justify-center mr-2 opacity-70 hover:opacity-100 transition-opacity"
          onClick={handleSearch}
        >
          <Image src="/search-icon.svg" alt="Search" width={24} height={24} />
        </button>
        <input
          type="text"
          placeholder="Search for the word you're looking for..."
          className="flex-grow bg-transparent border-none outline-none text-base text-white placeholder-[#c9cdd4]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>

      <div className="w-full flex flex-col gap-0 md:pl-24">
        {filteredTerms.length > 0 ? (
          filteredTerms.map((term, index) => (
            <div
              key={term.id}
              className={
                index === filteredTerms.length - 1
                  ? ""
                  : "border-b border-[#4a5a75]/30 mb-8"
              }
            >
              <GlossaryTerm
                id={term.id}
                name={term.name}
                description={term.description}
                similarTerms={term.similarTerms}
                onSimilarTermClick={handleSimilarTermClick}
              />
            </div>
          ))
        ) : (
          <p className="text-center text-[#c9cdd4] mt-10 italic">
            No terms found starting with "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
}
