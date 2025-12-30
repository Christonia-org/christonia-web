import ResetPasswordForm from "./components/ResetPasswordForm";
import SupportUsSection from "@/components/SupportUsSection";

export default function ResetPasswordPage() {
  return (
    <>
      <section className="bg-background flex flex-col items-center justify-center px-6 py-12 md:py-20">
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4 text-center">
          Set New Password
        </h1>
        <p className="text-[#c9cdd4] mb-8 text-center max-w-[400px]">
          Please enter your new password below to regain access to your account.
        </p>

        <div className="w-full max-w-[400px]">
          <ResetPasswordForm />
        </div>
      </section>
      <SupportUsSection />
    </>
  );
}
