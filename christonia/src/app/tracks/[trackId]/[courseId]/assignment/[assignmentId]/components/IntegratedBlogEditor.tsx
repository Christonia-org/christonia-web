"use client";

import { useState, useEffect } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import BlogMetadataForm from "@/app/blogs/write/components/BlogMetadataForm";
import BlogWriterCore from "@/app/blogs/write/components/BlogWriterCore";
import BlogWriterActions from "@/app/blogs/write/components/BlogWriterActions";
import { ChevronLeft } from "lucide-react";

interface IntegratedBlogEditorProps {
  fixedMetadata: {
    title: string;
    description: string;
    tags: string[];
  };
}

export default function IntegratedBlogEditor({
  fixedMetadata,
}: IntegratedBlogEditorProps) {
  const params = useParams();
  const assignmentId = params.assignmentId as string;

  const META_KEY = `draft_meta_${assignmentId}`;
  const CONTENT_KEY = `draft_content_${assignmentId}`;

  const [metadata, setMetadata] = useState(fixedMetadata);
  const [markdown, setMarkdown] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  const handleViewCourse = () => {
    const coursePath = pathname.split("/").slice(0, -2).join("/");
    router.push(coursePath);
  };

  useEffect(() => {
    setMetadata(fixedMetadata);

    const savedCont = localStorage.getItem(CONTENT_KEY);
    if (savedCont) {
      setMarkdown(savedCont);
    } else {
      setMarkdown("");
    }
  }, [CONTENT_KEY, fixedMetadata]);

  useEffect(() => {
    localStorage.setItem(CONTENT_KEY, markdown);
  }, [markdown, CONTENT_KEY]);

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
        <p className="text-gray-400">
          Complete your response to the fixed prompt below.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        <BlogMetadataForm
          metadata={metadata}
          setMetadata={setMetadata}
          isReadOnly={true}
        />

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
