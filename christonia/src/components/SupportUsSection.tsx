import Link from "next/link";

export default function SupportUsSection() {
  return (
    <section className="bg-background-cta text-white px-6 py-12 md:py-16 flex flex-col items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold m-0 mb-4">Support Us</h2>

      <p className="text-base md:text-xl leading-relaxed max-w-[90%] md:max-w-[60%] mx-auto mb-8 text-[#c9cdd4]">
        Christonia is funded by the community. Join us in empowering Christians
        around the globe by supporting Christonia!
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full sm:w-auto">
        <Link
          href="/learn-more"
          className="px-8 py-3 rounded-lg text-base font-semibold no-underline border border-white text-white transition-all duration-300 hover:bg-white/10 text-center"
        >
          Learn more
        </Link>
        <Link
          href="/support-us"
          className="px-8 py-3 rounded-lg text-base font-semibold no-underline bg-brand-teal border-2 border-brand-teal text-white transition-all duration-300 hover:bg-brand-teal-dark hover:border-brand-teal-dark text-center"
        >
          Donate now
        </Link>
      </div>
    </section>
  );
}
