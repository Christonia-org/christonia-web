import Link from "next/link";
import FaqSection from "./components/FaqSection";

export default function SupportUsPage() {
  return (
    <div className="flex flex-col items-center w-full bg-background">
      <section className="flex flex-col items-center justify-center px-6 py-12 md:py-20 text-center">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          Support Us
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-[#dadada] mb-8 max-w-full md:max-w-[550px] lg:max-w-[700px]">
          From the start, Christonia has been committed to providing a
          comprehensive and completely free apologetics curriculum for anyone
          and everyone eager to learn. With your generous donations, we can
          continue to empower Christians, regardless of their background or
          financial status.
        </p>

        <Link
          href="#"
          className="bg-brand-teal text-white font-medium no-underline px-6 py-3 rounded-md transition-colors duration-300 hover:bg-brand-teal-dark active:scale-[0.98]"
        >
          Donate now!
        </Link>
      </section>

      <div className="w-full">
        <FaqSection />
      </div>
    </div>
  );
}
