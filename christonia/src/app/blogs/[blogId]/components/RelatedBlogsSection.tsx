import BlogCard from "../../components/BlogCard";

export default function RelatedBlogsSection() {
  return (
    <section className="w-full pb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-white">Related Blogs</h2>
        <div className="h-1 flex-grow mx-8 bg-gray-800 rounded-full hidden md:block" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        <BlogCard
          id="resurrection-evidence"
          title="Evidence for the Resurrection"
          author="Dr. James Smith"
          datePublished="July 10, 2025"
          dateEdited={null}
          likes={850}
          isBookmarked={false}
          description="A look at the historical facts that even skeptical scholars admit regarding the end of Jesus' life."
          onReport={() => {}}
        />
        <BlogCard
          id="resurrection-evidence"
          title="Evidence for the Resurrection"
          author="Dr. James Smith"
          datePublished="July 10, 2025"
          dateEdited={null}
          likes={850}
          isBookmarked={false}
          description="A look at the historical facts that even skeptical scholars admit regarding the end of Jesus' life."
          onReport={() => {}}
        />
        <BlogCard
          id="resurrection-evidence"
          title="Evidence for the Resurrection"
          author="Dr. James Smith"
          datePublished="July 10, 2025"
          dateEdited={null}
          likes={850}
          isBookmarked={false}
          description="A look at the historical facts that even skeptical scholars admit regarding the end of Jesus' life."
          onReport={() => {}}
        />
      </div>

      <div className="mt-12 flex justify-center">
        <button
          className="bg-brand-teal text-white text-xl font-medium px-8 py-3 rounded-md 
                     w-[90%] md:w-3/5 hover:bg-brand-teal-dark transition-all duration-200 
                     shadow-lg active:scale-[0.98]"
        >
          Load More Related Blogs
        </button>
      </div>
    </section>
  );
}
