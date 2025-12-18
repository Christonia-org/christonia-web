import Link from "next/link";

export default function JourneySection() {
  return (
    <section className="bg-background flex flex-col items-center justify-center gap-10 text-center text-white px-4 py-12 md:py-20">
      {/* Title */}
      <h1 className="text-4xl md:text-7xl font-bold leading-tight max-w-[95%] md:max-w-[75%] m-0 mt-4">
        Your <span className="text-brand-gold">Journey in Apologetics</span>{" "}
        Begins Here
      </h1>

      {/* Description */}
      <p className="text-base md:text-xl leading-relaxed text-[#c9cdd4] max-w-[600px] m-0">
        Get access to a free Christian theology curriculum supported by a
        passionate community
      </p>

      {/* Button Link */}
      <Link
        href="/tracks"
        className="inline-block px-6 py-3 md:px-8 md:py-4 border border-white rounded-lg no-underline text-white font-semibold transition-all duration-300 hover:bg-white/10"
      >
        View Full Curriculum
      </Link>
    </section>
  );
}
