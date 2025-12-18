import Link from "next/link";

export default function ToOurContributorsSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12 w-full text-[#DADADA] font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 max-w-[800px]">
        To all our contributors
      </h2>

      <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4] mb-10 max-w-[800px]">
        We thank you for your invaluable support in allowing Christonia to
        happen. Your help and contribution meant others will stand firm in their
        journey for truth.
      </p>

      <div className="w-full max-w-[700px] py-6 mb-10 border-y border-white/10">
        <p className="text-lg md:text-xl italic font-serif leading-relaxed text-[#c9cdd4]">
          "Give, and it will be given to you. Good measure, pressed down, shaken
          together, running over, will be put into your lap. For with the
          measure you use it will be measured back to you."
        </p>
        <p className="text-sm md:text-base text-[#c9cdd4] mt-4 text-right italic">
          — The King of Kings
        </p>
      </div>

      <Link
        href="/contribute"
        className="inline-block bg-brand-teal text-white text-base font-semibold px-8 py-3 rounded-md border-2 border-brand-teal transition-all duration-200 hover:bg-brand-teal-dark hover:border-brand-teal-dark active:scale-[0.98] mb-8 shadow-lg"
      >
        Learn how to contribute
      </Link>
    </section>
  );
}
