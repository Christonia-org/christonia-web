"use client";

import { useState, useMemo } from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import LessonNavigator from "@/components/LessonNavigator";
import ReportModal from "@/components/ReportModal";
import RelatedBlogsSection from "./RelatedBlogsSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function BlogClientWrapper({
  content,
  blogData,
}: {
  content: string;
  blogData: any;
}) {
  const [isReportOpen, setIsReportOpen] = useState(false);

  const sections = useMemo(() => {
    const headerRegex = /^##\s+(.*)$/gm;
    const matches = Array.from(content.matchAll(headerRegex));
    return matches.map((match) => {
      const label = match[1].trim();
      const id = label
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
      return { id, label };
    });
  }, [content]);

  return (
    <main className="min-h-screen bg-background text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <BlogHeader
          {...blogData}
          onReport={() => setIsReportOpen(true)}
          onShare={() => {
            navigator.clipboard.writeText(window.location.href);
            alert("Link copied!");
          }}
        />

        <div className="flex flex-col lg:flex-row gap-16">
          <BlogBody content={content} onReport={() => setIsReportOpen(true)} />

          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-28">
              <p className="text-xl text-gray-200 mb-4 font-bold tracking-tight">
                In this article
              </p>
              <LessonNavigator sections={sections} />
            </div>
          </aside>
        </div>

        <hr className="my-16 border-gray-800" />
        <RelatedBlogsSection />
      </div>

      <ReportModal
        isOpen={isReportOpen}
        onClose={() => setIsReportOpen(false)}
        blogTitle={blogData.title}
      />
      <SupportUsSection />
    </main>
  );
}
