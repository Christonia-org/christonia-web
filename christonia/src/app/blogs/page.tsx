import BookmarkedBlogsSection from "./components/BookmarkedBlogsSection";
import BlogsSection from "./components/BlogsSection/BlogsSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function BlogsPage() {
  return (
    <>
      <div className="bg-background min-h-screen text-white px-4 py-12 md:px-8 flex flex-col items-center font-sans w-full">
        <div className="w-full max-w-5xl">
          <BookmarkedBlogsSection />

          <hr className="my-12 border-0 border-t border-white/10" />

          <BlogsSection />
        </div>
      </div>
      <SupportUsSection />
    </>
  );
}
