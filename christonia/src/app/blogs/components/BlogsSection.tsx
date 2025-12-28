import BlogCard from "./BlogCard";
import CreateBlogCard from "./CreateBlogCard";
import SearchBar from "./SearchBar";
import { useState, useMemo } from "react";

export default function BlogsSection({
  onReport,
}: {
  onReport: (id: number | string, title: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const blogData = [
    {
      id: 1,
      title: "The Cosmological Argument: A Modern Defense",
      author: "Dr. Thomas Aquinas",
      tags: ["Apologetics", "Philosophy", "God"],
      datePublished: "Dec 15, 2025",
      dateEdited: "Dec 18, 2025",
      likes: 342,
      isBookmarked: true,
      description:
        "An exploration of the Kalam cosmological argument and why the concept of a 'First Cause' remains scientifically and philosophically robust in the 21st century.",
    },
    {
      id: 2,
      title: "Sola Fide: Justification by Faith Alone",
      author: "Martin Luther",
      tags: ["Reformation", "Doctrine", "Salvation"],
      datePublished: "Oct 31, 2025",
      dateEdited: null,
      likes: 156,
      isBookmarked: false,
      description:
        "Revisiting the heart of the Reformation. This post examines the biblical basis for justification by faith and its implications for modern Christian living.",
    },
    {
      id: 3,
      title: "Understanding the Hypostatic Union",
      author: "St. Athanasius",
      tags: ["Christology", "Trinity", "Theology"],
      datePublished: "Nov 12, 2025",
      dateEdited: "Nov 14, 2025",
      likes: 89,
      isBookmarked: true,
      description:
        "How can Christ be fully God and fully man? A deep dive into the Chalcedonian Creed and the mysterious nature of the Incarnation.",
    },
    {
      id: 4,
      title: "The Role of Tradition in Biblical Interpretation",
      author: "Prof. Sarah Edwards",
      tags: ["Hermeneutics", "Scripture", "Church History"],
      datePublished: "Sept 22, 2025",
      dateEdited: null,
      likes: 112,
      isBookmarked: false,
      description:
        "Exploring the tension between 'Sola Scriptura' and the historical consensus of the Church Fathers. Can we truly interpret the Bible in a vacuum?",
    },
    {
      id: 5,
      title: "Divine Sovereignty and Human Responsibility",
      author: "John Calvin",
      tags: ["Sovereignty", "Grace", "Providence"],
      datePublished: "Aug 05, 2025",
      dateEdited: "Aug 06, 2025",
      likes: 275,
      isBookmarked: true,
      description:
        "Analyzing the paradoxical relationship between God's absolute control over history and the genuine moral choices made by human beings.",
    },
    {
      id: 6,
      title: "The Problem of Evil: Theodicies for Today",
      author: "C.S. Lewis",
      tags: ["Theodicy", "Apologetics", "Suffering"],
      datePublished: "July 19, 2025",
      dateEdited: null,
      likes: 520,
      isBookmarked: false,
      description:
        "If God is all-powerful and all-good, why does pain exist? This post compares the 'Free Will Defense' and 'Soul-Making' theodicies.",
    },
    {
      id: 7,
      title: "Eschatology: Hope for the New Heavens",
      author: "N.T. Wright",
      tags: ["End Times", "Hope", "Resurrection"],
      datePublished: "June 03, 2025",
      dateEdited: "June 05, 2025",
      likes: 198,
      isBookmarked: true,
      description:
        "Moving beyond 'left behind' theology to a biblical view of the bodily resurrection and the restoration of the physical cosmos.",
    },
    {
      id: 8,
      title: "The Holiness of God in the Old Testament",
      author: "R.C. Sproul",
      tags: ["Attributes of God", "OT", "Holiness"],
      datePublished: "May 14, 2025",
      dateEdited: null,
      likes: 310,
      isBookmarked: false,
      description:
        "A study of Isaiah 6 and the terrifying, beautiful 'otherness' of the Creator. Why understanding God's holiness changes our view of sin.",
    },
  ];

  const filteredBlogs = useMemo(() => {
    const lowQuery = searchQuery.toLowerCase().trim();
    if (!lowQuery) return blogData;

    const isBy = lowQuery.startsWith("by:");
    const isTitle = lowQuery.startsWith("title:");
    const isTag = lowQuery.startsWith("tag:");
    const isContains = lowQuery.startsWith("contains:");

    const searchTerm =
      isBy || isTitle || isTag || isContains
        ? lowQuery.split(":")[1].trim()
        : lowQuery;

    if (!searchTerm) return blogData;

    return blogData.filter((blog) => {
      if (isBy) return blog.author.toLowerCase().includes(searchTerm);
      if (isTitle) return blog.title.toLowerCase().includes(searchTerm);
      if (isTag)
        return blog.tags?.some((t) => t.toLowerCase().includes(searchTerm));
      if (isContains)
        return blog.description.toLowerCase().includes(searchTerm);

      return (
        blog.title.toLowerCase().includes(searchTerm) ||
        blog.author.toLowerCase().includes(searchTerm) ||
        blog.tags?.some((t) => t.toLowerCase().includes(searchTerm))
      );
    });
  }, [searchQuery, blogData]);

  return (
    <section className="flex flex-col items-center px-4 py-8 w-full text-white font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Blogs</h1>

      <SearchBar query={searchQuery} setQuery={setSearchQuery} />

      <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 w-full max-w-[1200px] mb-12 justify-items-center transition-all duration-500">
        {!searchQuery && <CreateBlogCard />}

        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
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
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-500 text-xl italic">
              No blogs found matching "{searchQuery}"
            </p>
          </div>
        )}
      </div>

      {filteredBlogs.length > 0 && (
        <button className="bg-brand-teal text-white text-xl font-medium px-8 py-3 rounded-md w-[90%] md:w-3/5 hover:bg-brand-teal-dark transition-all duration-200 shadow-lg active:scale-[0.98] mb-8">
          Load More
        </button>
      )}
    </section>
  );
}
