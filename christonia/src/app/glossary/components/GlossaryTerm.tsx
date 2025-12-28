import Link from "next/link";

export default function GlossaryTerm({
  name,
  description,
  id,
  similarTerms,
  onSimilarTermClick,
}: GlossaryTermProps) {
  return (
    <div
      id={id}
      className="w-full max-w-full md:max-w-[90%] text-left py-10 md:py-16 scroll-mt-24"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mt-0 mb-4 tracking-tight">
        {name}
      </h2>

      <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4] mb-6">
        {description}
      </p>

      {similarTerms && similarTerms.length > 0 && (
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-1 mt-6">
          <p className="text-sm font-semibold text-[#c9cdd4] m-0 shrink-0">
            See also:
          </p>
          <div className="flex flex-wrap gap-x-1 items-baseline">
            {similarTerms.map((term, index) => (
              <span key={term.id} className="inline-flex items-baseline">
                <Link
                  href={`/glossary#${term.id}`}
                  className="text-brand-teal font-medium hover:underline transition-all"
                  onClick={onSimilarTermClick}
                >
                  {term.name}
                </Link>
                {index < similarTerms.length - 1 && (
                  <span className="text-[#c9cdd4] ml-1">,</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
