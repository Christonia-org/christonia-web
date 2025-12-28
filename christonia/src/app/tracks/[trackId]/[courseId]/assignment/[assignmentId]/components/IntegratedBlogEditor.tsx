"use client";

import { useState, useEffect } from "react";
import BlogMetadataForm from "@/app/blogs/write/components/BlogMetadataForm";
import BlogWriterCore from "@/app/blogs/write/components/BlogWriterCore";
import BlogWriterActions from "@/app/blogs/write/components/BlogWriterActions";

export default function IntegratedBlogEditor() {
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    tags: ["Assignment"],
  });
  const [markdown, setMarkdown] = useState("");

  // Sync with Local Storage
  useEffect(() => {
    const savedMeta = localStorage.getItem("assignment_draft_metadata");
    const savedCont = localStorage.getItem("assignment_draft_content");
    if (savedMeta) setMetadata(JSON.parse(savedMeta));
    if (savedCont) setMarkdown(savedCont);
  }, []);

  useEffect(() => {
    localStorage.setItem("assignment_draft_metadata", JSON.stringify(metadata));
    localStorage.setItem("assignment_draft_content", markdown);
  }, [metadata, markdown]);

  return (
    <div className="flex flex-col gap-12 mt-12 pt-12 border-t border-gray-800">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black italic uppercase text-white">
          Submission Studio
        </h2>
        <p className="text-gray-400">
          Complete your response to the prompt above. Your progress is saved
          automatically.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <BlogMetadataForm metadata={metadata} setMetadata={setMetadata} />
        <BlogWriterCore
          markdown={markdown}
          setMarkdown={setMarkdown}
          metadata={metadata}
        />
        <BlogWriterActions markdown={markdown} />
      </div>
    </div>
  );
}
