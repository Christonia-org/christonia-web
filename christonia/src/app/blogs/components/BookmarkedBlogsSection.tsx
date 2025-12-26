import BlogCard from "./BlogCard";

export default function BookmarkedBlogsSection({
  onReport,
}: {
  onReport: (id: number | string, title: string) => void;
}) {
  const blogData = [
    {
      id: 1,
      title: "How to Master React Hooks in 2025",
      author: "Jane Doe",
      datePublished: "Aug 6, 2025",
      dateEdited: "Aug 7, 2025",
      likes: 128,
      isBookmarked: true,
      description:
        "A comprehensive guide to understanding and using the most important React hooks, from useState and useEffect to custom hooks and advanced patterns.",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Modern JavaScript",
      author: "John Smith",
      datePublished: "Jul 15, 2025",
      dateEdited: null,
      likes: 74,
      isBookmarked: true,
      description:
        "Dive into ES2025 and beyond. Learn about new features, best practices, and tools that will supercharge your JavaScript development.",
    },
    {
      id: 3,
      title: "Understanding Asynchronous JavaScript",
      author: "Alice Brown",
      datePublished: "Jun 1, 2025",
      dateEdited: "Jun 2, 2025",
      likes: 210,
      isBookmarked: true,
      description:
        "A deep dive into Promises, async/await, and event loops to help you write more efficient and readable asynchronous code.",
    },
    {
      id: 4,
      title: "CSS Grid vs. Flexbox: When to Use Which",
      author: "Bob Johnson",
      datePublished: "May 20, 2025",
      dateEdited: null,
      likes: 95,
      isBookmarked: true,
      description:
        "Explore the strengths and weaknesses of CSS Grid and Flexbox to make informed decisions about your layout strategies.",
    },
    {
      id: 5,
      title: "Building Scalable APIs with Node.js",
      author: "Charlie Davis",
      datePublished: "Apr 10, 2025",
      dateEdited: "Apr 11, 2025",
      likes: 150,
      isBookmarked: true,
      description:
        "Learn how to design and implement robust, scalable RESTful APIs using Node.js, Express, and best practices.",
    },
    {
      id: 6,
      title: "Introduction to TypeScript for React Developers",
      author: "Diana Prince",
      datePublished: "Mar 5, 2025",
      dateEdited: null,
      likes: 180,
      isBookmarked: true,
      description:
        "Get started with TypeScript in your React projects. Understand types, interfaces, and how to improve your code's reliability.",
    },
  ];

  return (
    <section className="flex flex-col items-center text-center px-4 md:px-8 py-8 w-full text-white font-sans">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-24">
        Bookmarked Blogs
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] mb-12 justify-items-center">
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            author={blog.author}
            datePublished={blog.datePublished}
            dateEdited={blog.dateEdited}
            likes={blog.likes}
            isBookmarked={blog.isBookmarked}
            description={blog.description}
            onReport={onReport}
          />
        ))}
      </div>

      <button className="bg-brand-teal text-white text-xl font-medium px-8 py-3 rounded-md w-[90%] md:w-3/5 hover:bg-brand-teal-dark transition-all duration-200 shadow-md active:scale-[0.98]">
        View All
      </button>
    </section>
  );
}
