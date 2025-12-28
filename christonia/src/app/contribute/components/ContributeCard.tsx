import Link from "next/link";

interface ContributeCardProps {
  title: string;
  description: string;
  linkTitle: string;
  linkDestination: string;
}

export default function ContributeCard({
  title,
  description,
  linkTitle,
  linkDestination,
}: ContributeCardProps) {
  return (
    <div className="bg-[#2F3F54] rounded-lg shadow-lg overflow-hidden flex flex-col p-6 pt-0 text-[#DADADA] w-full max-w-[400px] mx-auto h-full transition-transform hover:scale-[1.02]">
      <div className="bg-[#bf8932] h-2 w-[calc(100%+3rem)] -mx-6 mb-8" />

      <h3 className="text-2xl font-bold text-white mt-0 mb-4 text-left">
        {title}
      </h3>

      <p className="text-base leading-relaxed text-[#c9cdd4] text-left flex-grow">
        {description}
      </p>

      <Link
        href={linkDestination}
        className="inline-block bg-brand-teal text-white text-base font-medium px-6 py-3 rounded-md no-underline cursor-pointer transition-colors duration-200 hover:bg-brand-teal-dark text-center mt-8 active:scale-[0.98]"
      >
        {linkTitle}
      </Link>
    </div>
  );
}
