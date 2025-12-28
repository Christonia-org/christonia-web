import Link from "next/link";
import PersonCard from "./PersonCard";

interface Member {
  id: string;
  profilePicUrl: string;
  name: string;
  joinDate: string;
  country: string;
  githubUrl?: string;
  youtubeUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
}

const coreMembers: Member[] = [
  {
    id: "core-1",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "John Doe 1",
    joinDate: "2025",
    country: "USA",
    xUrl: "#",
    githubUrl: "#",
  },
  {
    id: "core-2",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "John Doe 2",
    joinDate: "2025",
    country: "Canada",
    youtubeUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: "core-3",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "John Doe 3",
    joinDate: "2025",
    country: "UK",
    githubUrl: "#",
    youtubeUrl: "#",
  },
  {
    id: "core-4",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "John Doe 4",
    joinDate: "2025",
    country: "Australia",
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    id: "core-5",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "John Doe 5",
    joinDate: "2025",
    country: "Germany",
    githubUrl: "#",
    xUrl: "#",
  },
];

const maintainerMembers: Member[] = [
  {
    id: "maintainer-1",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Jane Doe 1",
    joinDate: "2024",
    country: "France",
    githubUrl: "#",
  },
  {
    id: "maintainer-2",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Jane Doe 2",
    joinDate: "2024",
    country: "Spain",
    youtubeUrl: "#",
  },
  {
    id: "maintainer-3",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Jane Doe 3",
    joinDate: "2024",
    country: "Italy",
    linkedinUrl: "#",
  },
];

const moderatorMembers: Member[] = [
  {
    id: "moderator-1",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Mike Smith 1",
    joinDate: "2023",
    country: "Japan",
    xUrl: "#",
  },
  {
    id: "moderator-2",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Mike Smith 2",
    joinDate: "2023",
    country: "China",
    githubUrl: "#",
  },
];

const alumniMembers: Member[] = [
  {
    id: "alumni-1",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Alice Brown 1",
    joinDate: "2022",
    country: "India",
    linkedinUrl: "#",
  },
  {
    id: "alumni-2",
    profilePicUrl: "/placeholder-avatar.svg",
    name: "Alice Brown 2",
    joinDate: "2022",
    country: "Mexico",
    youtubeUrl: "#",
  },
];

export default function MeetTheTeamSection() {
  return (
    <section className="flex flex-col items-center px-6 py-12 md:py-16 text-[#DADADA] w-full font-sans">
      <div className="text-center max-w-[800px] mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Meet the Team
        </h1>
        <p className="text-lg leading-relaxed text-[#c9cdd4] mb-8">
          Christonia is run by a group of dedicated volunteers from around the
          world.
        </p>
        <nav>
          <ul className="list-none p-0 m-0 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-8 text-lg font-semibold text-white">
            <li>
              <Link
                href="#core"
                className="px-4 py-2 hover:text-brand-teal transition-colors"
              >
                Core
              </Link>
            </li>
            <li>
              <Link
                href="#maintainers"
                className="px-4 py-2 hover:text-brand-teal transition-colors"
              >
                Maintainers
              </Link>
            </li>
            <li>
              <Link
                href="#moderators"
                className="px-4 py-2 hover:text-brand-teal transition-colors"
              >
                Moderators
              </Link>
            </li>
            <li>
              <Link
                href="#alumni"
                className="px-4 py-2 hover:text-brand-teal transition-colors"
              >
                Alumni
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-16">
        {[
          {
            id: "core",
            title: "Core",
            desc: "The Core team are long-serving members who have made significant contributions to Christonia. They serve as the leadership, responsible for shaping and guiding the direction of the platform.",
            data: coreMembers,
          },
          {
            id: "maintainers",
            title: "Maintainers",
            desc: "Maintainers look after Christonia. Some ensure any issues with the code are fixed, while others oversee the curriculum and its material.",
            data: maintainerMembers,
          },
          {
            id: "moderators",
            title: "Moderators",
            desc: "Moderators are responsible for looking after the Christonia community by monitoring any violations to its guidelines in the blogs and the Discord.",
            data: moderatorMembers,
          },
          {
            id: "alumni",
            title: "Alumni",
            desc: "We extend our gratitude to all our former team members. Their dedication and contributions have played an invaluable role in the growth of Christonia.",
            data: alumniMembers,
          },
        ].map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24 w-full">
            <h2 className="text-3xl font-bold text-white mb-4 text-center md:text-left">
              {section.title}
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4] mb-10 w-full max-w-full text-center md:text-left mx-auto md:mx-0">
              {section.desc}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,200px)] gap-x-8 gap-y-12 justify-center justify-items-center md:justify-start md:justify-items-start">
              {section.data.map((member) => (
                <PersonCard
                  key={member.id}
                  profilePicUrl={member.profilePicUrl}
                  name={member.name}
                  joinDate={member.joinDate}
                  country={member.country}
                  githubUrl={member.githubUrl}
                  youtubeUrl={member.youtubeUrl}
                  xUrl={member.xUrl}
                  linkedinUrl={member.linkedinUrl}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
