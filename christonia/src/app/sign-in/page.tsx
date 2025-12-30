import Link from "next/link";
import SupportUsSection from "@/components/SupportUsSection";
import SignInForm from "./components/SignInForm";

export default function SignInPage() {
  return (
    <>
      <section className="flex flex-col items-center justify-center px-6 py-12 md:py-20 bg-background">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-2 text-center">
          Sign in to your account
        </h1>
        <p className="text-base md:text-lg font-bold text-[#DADADA] mb-10 text-center">
          Or{" "}
          <Link
            href="/sign-up"
            className="text-[#DADADA] font-bold underline hover:text-white transition-colors"
          >
            sign up for a new account
          </Link>
        </p>

        <div className="w-full max-w-md">
          <SignInForm />
        </div>
      </section>
      <SupportUsSection />
    </>
  );
}
