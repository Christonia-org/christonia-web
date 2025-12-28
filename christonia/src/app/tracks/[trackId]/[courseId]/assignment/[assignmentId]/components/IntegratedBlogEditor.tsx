"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import BlogMetadataForm from "@/app/blogs/write/components/BlogMetadataForm";
import BlogWriterCore from "@/app/blogs/write/components/BlogWriterCore";
import BlogWriterActions from "@/app/blogs/write/components/BlogWriterActions";
import { ChevronLeft } from "lucide-react";

export default function IntegratedBlogEditor() {
  const [metadata, setMetadata] = useState({
    title: "",
    description: "",
    tags: ["Assignment"],
  });
  const [markdown, setMarkdown] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const handleViewCourse = () => {
    const coursePath = pathname.split("/").slice(0, -2).join("/");
    router.push(coursePath);
  };

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
    <div className="flex flex-col gap-8 mt-12 pt-12 border-t border-gray-800">
      <button
        onClick={handleViewCourse}
        className="flex items-center gap-2 text-gray-500 hover:text-brand-teal transition-colors w-fit group"
      >
        <ChevronLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span className="text-sm font-bold uppercase tracking-widest">
          Back to Course
        </span>
      </button>

      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold text-white">Blog Studio</h2>
        <p className="text-gray-400 text-l">
          Complete your response to the prompt above. Progress is saved
          automatically.
        </p>
      </div>

      <div className="flex flex-col gap-12">
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
