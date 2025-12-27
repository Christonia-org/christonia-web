"use client";

import { useState } from "react";
import BookmarkedBlogsSection from "./components/BookmarkedBlogsSection";
import BlogsSection from "./components/BlogsSection";
import ReportModal from "../../components/ReportModal";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function BlogsPage() {
  const [reportingBlog, setReportingBlog] = useState<{
    id: number | string;
    title: string;
  } | null>(null);

  const handleReportRequest = (id: number | string, title: string) => {
    setReportingBlog({ id, title });
  };

  return (
    <>
      <div className="bg-background min-h-screen text-white px-4 py-12 md:px-8 flex flex-col items-center w-full">
        <div className="w-full max-w-5xl">
          <BookmarkedBlogsSection onReport={handleReportRequest} />

          <hr className="my-12 border-0 border-t border-white/10" />

          <BlogsSection onReport={handleReportRequest} />
        </div>
      </div>

      <ReportModal
        isOpen={!!reportingBlog}
        onClose={() => setReportingBlog(null)}
        blogTitle={reportingBlog?.title || ""}
      />
      <Link
        href="/blogs/write"
        className="fixed bottom-8 right-8 z-50 lg:hidden p-4 bg-brand-teal text-white rounded-full shadow-2xl active:scale-90 transition-transform"
      >
        <Plus size={32} />
      </Link>
    </>
  );
}
