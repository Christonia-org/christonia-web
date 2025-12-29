import BlogCard from "./BlogCard";

export default function BookmarkedBlogsSection({
  onReport,
}: {
  onReport: (id: number | string, title: string) => void;
}) {
  const blogData = [
    {
      id: 1,
      title: "The Five Ways: Revisiting Aquinas in a Secular Age",
      author: "Thomas d'Aquino",
      datePublished: "Dec 15, 2025",
      dateEdited: "Dec 18, 2025",
      likes: 342,
      isBookmarked: true,
      description:
        "A modern breakdown of the Quinque viae. We explore why the argument from contingency still poses a significant challenge to naturalistic worldviews.",
    },
    {
      id: 2,
      title: "Sola Fide: The Heart of the Reformation",
      author: "Martin Luther",
      datePublished: "Oct 31, 2025",
      dateEdited: null,
      likes: 289,
      isBookmarked: false,
      description:
        "Exploring the doctrine of justification by faith alone. How this 'articulus stantis et cadentis ecclesiae' transformed Western theology and personal devotion.",
    },
    {
      id: 3,
      title: "The Mystery of the Hypostatic Union",
      author: "St. Cyril of Alexandria",
      datePublished: "Nov 12, 2025",
      dateEdited: "Nov 14, 2025",
      likes: 156,
      isBookmarked: true,
      description:
        "How can one person be truly God and truly man? A deep dive into Christology and the definitions provided by the Council of Chalcedon.",
    },
    {
      id: 4,
      title: "Divine Sovereignty vs. Human Responsibility",
      author: "John Calvin",
      datePublished: "Sept 20, 2025",
      dateEdited: null,
      likes: 210,
      isBookmarked: true,
      description:
        "An analysis of the tension between God's providential control and the moral agency of man. Can these two biblical truths be reconciled logically?",
    },
    {
      id: 5,
      title: "The Didache: A Window into Early Church Life",
      author: "Prof. Clement Rome",
      datePublished: "Aug 10, 2025",
      dateEdited: "Aug 11, 2025",
      likes: 195,
      isBookmarked: false,
      description:
        "What did the first-century church actually look like? Examining the 'Teaching of the Twelve Apostles' for insight into early liturgy and ethics.",
    },
    {
      id: 6,
      title: "The Problem of Evil: The Soul-Making Theodicy",
      author: "Irenaeus of Lyons",
      datePublished: "July 5, 2025",
      dateEdited: null,
      likes: 420,
      isBookmarked: true,
      description:
        "If God is good, why is there suffering? This post examines the Irenaean perspective that the world is a 'vale of soul-making' designed for spiritual growth.",
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
