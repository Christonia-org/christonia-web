import styles from "./BlogsSection.module.css";
import Image from "next/image";
import BlogCard from "../BlogCard";

export default function BlogsSection() {
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
    <section className={styles.blogsSection}>
      <h1 className={styles.sectionTitle}>Blogs</h1>
      <div className={styles.searchContainer}>
        <button className={styles.searchButton}>
          <Image
            src="/search-icon.svg"
            alt="Search"
            width={30}
            height={30}
            className={styles.searchIcon}
          />
        </button>
        <input
          type="text"
          placeholder="Search for the blog you're looking for..."
          className={styles.searchInput}
        />
      </div>
      <div className={styles.blogsContainer}>
        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            author={blog.author}
            datePublished={blog.datePublished}
            dateEdited={blog.dateEdited}
            likes={blog.likes}
            isBookmarked={blog.isBookmarked}
            description={blog.description}
          />
        ))}
      </div>
      <button className={styles.loadMoreButton}>Load More</button>
    </section>
  );
}
