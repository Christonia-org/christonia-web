import fs from "fs";
import path from "path";
import BlogClientWrapper from "./components/BlogClientWrapper";

interface BlogPageProps {
  params: Promise<{ blogId: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { blogId } = await params;

  // TEMPORARY: Reading from local test-blog.md
  const filePath = path.join(process.cwd(), "content", "test-blog.md");
  const content = fs.readFileSync(filePath, "utf8");

  const blogData = {
    id: blogId,
    title: "The Historical Reliability of the New Testament",
    description: "An in-depth examination of the manuscript evidence...",
    author: {
      name: "Dr. James Smith",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    date: "July 24, 2025",
    likes: 1250,
    tags: ["Apologetics", "History"],
    isBookmarked: false,
  };

  return <BlogClientWrapper content={content} blogData={blogData} />;
}
