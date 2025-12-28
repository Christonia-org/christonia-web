import fs from "fs";
import path from "path";
import BlogClientWrapper from "./components/BlogClientWrapper";

export default async function BlogPage({
  params,
}: {
  params: { blogId: string };
}) {
  const { blogId } = await params;

  // COMMENT: Logic to query S3 would go here.
  // const blogContent = await fetchFromS3(`blogs/${blogId}.md`);

  // TEMPORARY: Reading from local test-blog.md
  const filePath = path.join(process.cwd(), "content", "test-blog.md");
  const content = fs.readFileSync(filePath, "utf8");

  // MOCK DATA: In production, you'd parse "frontmatter" from the .md file for this
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
