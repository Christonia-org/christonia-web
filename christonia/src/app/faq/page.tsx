import FaqSection from "./components/FaqSection";
import Link from "next/link";
import SupportUsSection from "@/components/SupportUsSection";

export default function FaqPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-background min-h-screen">
        <div className="w-full flex justify-center">
          <FaqSection />
        </div>

        <section className="flex flex-col justify-center items-center text-center py-16 px-6 gap-6 bg-background-cta w-full mt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white m-0">
            Have a question?
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4] m-0 max-w-[600px]">
            Chat with our Christonia community in our Discord server!
          </p>
          <Link
            href="#"
            className="bg-background text-white text-base font-medium px-8 py-3 border border-[#4a5a75] rounded-md no-underline transition-all duration-200 shadow-lg hover:bg-background-alt hover:border-[#c4d7ed] active:scale-[0.98]"
          >
            Open Discord
          </Link>
        </section>
      </div>
      <SupportUsSection />
    </>
  );
}
