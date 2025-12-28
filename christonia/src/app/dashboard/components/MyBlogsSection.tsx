"use client";

import BlogCard from "@/app/blogs/components/BlogCard";

export default function MyBlogsSection() {
  // Logic for deleting a blog (to be connected to your backend/state later)
  const handleDelete = (id: string | number) => {
    console.log(`Deleting blog with ID: ${id}`);
    // Here you would typically filter your state or call an API
  };

  return (
    <section className="flex flex-col items-center w-full gap-8 md:gap-12 font-sans mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white text-center">
        My Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] justify-items-center">
        <BlogCard
          id="1"
          isOwner={true}
          onDelete={handleDelete}
          title="The First Cause"
          author="John Doe"
          datePublished="2023-06-01"
          dateEdited="2023-06-05"
          likes={12}
          isBookmarked={false}
          description="An exploration into cosmological arguments for the existence of God."
        />

        <BlogCard
          id="2"
          isOwner={true}
          onDelete={handleDelete}
          title="Sola Fide"
          author="John Doe"
          datePublished="2023-07-12"
          dateEdited={null}
          likes={45}
          isBookmarked={false}
          description="Understanding the doctrine of justification by faith alone in the modern age."
        />

        <BlogCard
          id="3"
          isOwner={true}
          onDelete={handleDelete}
          title="Scripture & Tradition"
          author="John Doe"
          datePublished="2023-08-20"
          dateEdited="2023-08-21"
          likes={30}
          isBookmarked={false}
          description="How the early church fathers viewed the authority of the written word versus oral tradition."
        />

        <BlogCard
          id="4"
          isOwner={true}
          onDelete={handleDelete}
          title="The Great Commission"
          author="John Doe"
          datePublished="2023-09-05"
          dateEdited={null}
          likes={8}
          isBookmarked={false}
          description="A sample blog post focusing on the historical context of the mandate to go to all nations."
        />
      </div>
    </section>
  );
}
