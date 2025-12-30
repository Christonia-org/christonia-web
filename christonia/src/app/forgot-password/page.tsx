import ForgotPasswordForm from "./components/ForgotPasswordForm";
import SupportUsSection from "@/components/SupportUsSection";

export default function ForgotPasswordPage() {
  return (
    <>
      <section className="bg-background flex flex-col items-center justify-center px-6 py-12 md:py-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
          Forgot your password?
        </h1>

        <div className="w-full max-w-[400px]">
          <ForgotPasswordForm />
        </div>
      </section>
      <SupportUsSection />
    </>
  );
}
