"use client";

import { useState, useEffect } from "react";
import BlogMetadataForm from "./components/BlogMetadataForm";
import BlogWriterCore from "./components/BlogWriterCore";
import BlogWriterActions from "./components/BlogWriterActions";

export default function BlogWriterPage() {
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    tags: ["Apologetics"],
  });

  const [markdown, setMarkdown] = useState("");

  // Persistent storage logic
  useEffect(() => {
    const savedMetadata = localStorage.getItem("christonia_draft_metadata");
    const savedMarkdown = localStorage.getItem("christonia_draft_content");
    if (savedMetadata) setMetadata(JSON.parse(savedMetadata));
    if (savedMarkdown) setMarkdown(savedMarkdown);
  }, []);

  useEffect(() => {
    localStorage.setItem("christonia_draft_metadata", JSON.stringify(metadata));
  }, [metadata]);

  useEffect(() => {
    localStorage.setItem("christonia_draft_content", markdown);
  }, [markdown]);

  return (
    <main className="min-h-screen text-white pb-32">
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col gap-12">
        <div className="flex flex-col gap-3 text-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center w-full leading-tight">
            Blog Studio
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 pl-1 border-l-4 border-brand-teal">
            <h2 className="text-2xl font-bold text-white ml-3">
              Blog Metadata
            </h2>
            <p className="text-gray-400 text-l ml-3">
              Set up your blog title and the description you want users to see
              from outside. Add tags to make your blog easier for others to
              find.
            </p>
          </div>
          <BlogMetadataForm metadata={metadata} setMetadata={setMetadata} />
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1 pl-1 border-l-4 border-yellow-500">
            <h2 className="text-2xl font-bold text-white ml-3">Blog Content</h2>
            <p className="text-gray-400 text-l ml-3">
              Here goes your actual blog. Write your blog in markdown and review
              it with AI before fully publishing to the world.
            </p>
          </div>
          <BlogWriterCore
            markdown={markdown}
            setMarkdown={setMarkdown}
            metadata={metadata}
          />
        </div>

        <BlogWriterActions markdown={markdown} />
      </div>
    </main>
  );
}
