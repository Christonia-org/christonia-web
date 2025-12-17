import MyBlogCard from "./MyBlogCard";

export default function MyBlogsSection() {
  return (
    <section className="flex flex-col items-center w-full gap-8 md:gap-12 font-sans mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white text-center">
        My Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] justify-items-center">
        <MyBlogCard
          title="Blog 1"
          author="John Doe"
          datePublished="2023-06-01"
          dateEdited="2023-06-05"
          likes={10}
          description="This is a sample blog post."
        />
        <MyBlogCard
          title="Blog 2"
          author="John Doe"
          datePublished="2023-06-01"
          dateEdited="2023-06-05"
          likes={10}
          description="This is a sample blog post."
        />
        <MyBlogCard
          title="Blog 3"
          author="John Doe"
          datePublished="2023-06-01"
          dateEdited="2023-06-05"
          likes={10}
          description="This is a sample blog post. This is a sample blog post. This is a sample blog post. This is a sample blog post."
        />
        <MyBlogCard
          title="Blog 4"
          author="John Doe"
          datePublished="2023-06-01"
          dateEdited="2023-06-05"
          likes={10}
          description="This is a sample blog post."
        />
      </div>
    </section>
  );
}
