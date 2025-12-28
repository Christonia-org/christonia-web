import Link from "next/link";

export default function ContactUsSection() {
  return (
    <section
      className="bg-background flex flex-col items-center justify-center text-center text-white px-4 py-12 md:py-16 font-sans"
      id="contact-us"
    >
      <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
        Want to contact us?
      </h3>

      <p className="text-lg md:text-xl leading-relaxed max-w-full md:max-w-[50%] text-[#c9cdd4] mb-6">
        Connect with our friendly community on Discord, a chat and networking
        platform or{" "}
        <Link
          href="mailto:michaelkolanjian.christonia@gmail.com"
          className="text-[#c9cdd4] underline transition-colors duration-200 hover:text-white"
        >
          send us an email.
        </Link>
      </p>

      <Link
        href="#"
        className="inline-block px-8 py-4 border border-white rounded-lg no-underline text-white text-lg mb-6 transition-all duration-300 hover:bg-white/10"
      >
        Chat on Discord
      </Link>

      <p className="text-lg md:text-xl leading-relaxed max-w-full md:max-w-[50%] text-[#c9cdd4] mb-6">
        If you want to give back to our community, you can do so by contributing
        to our curriculum, or by supporting us financially.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-8 mt-4 w-full sm:w-auto">
        <Link
          href="/contribute"
          className="px-8 py-3 rounded-lg text-lg no-underline text-white font-semibold transition-all duration-300 bg-brand-teal hover:bg-brand-teal-dark text-center w-full sm:w-auto min-w-[200px]"
        >
          Contribute
        </Link>
        <Link
          href="/support-us"
          className="px-8 py-3 rounded-lg text-lg no-underline text-white font-semibold transition-all duration-300 bg-brand-teal hover:bg-brand-teal-dark text-center w-full sm:w-auto min-w-[200px]"
        >
          Donate
        </Link>
      </div>
    </section>
  );
}
