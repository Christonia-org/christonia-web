import Link from "next/link";
import SupportUsSection from "@/components/SupportUsSection";
import SignUpForm from "./components/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <section className="bg-background flex flex-col items-center justify-center px-6 py-12 md:py-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center">
          Sign up for free
        </h1>
        <p className="text-base md:text-lg font-bold text-[#DADADA] mb-10 text-center">
          Or{" "}
          <Link
            href="/sign-in"
            className="text-[#DADADA] font-bold underline hover:text-white transition-colors"
          >
            sign in to your existing account
          </Link>
        </p>

        <div className="w-full max-w-[400px]">
          <SignUpForm />
        </div>
      </section>
      <SupportUsSection />
    </>
  );
}
