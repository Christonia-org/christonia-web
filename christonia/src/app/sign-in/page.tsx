import Link from "next/link";
import SupportUsSection from "@/components/SupportUsSection";
import styles from "./page.module.css";
import SignInForm from "./components/SignInForm/SignInForm";

export default function SignInPage() {
  return (
    <>
      <section className={styles.signInPage}>
        <h1 className={styles.title}>Sign in to your account</h1>
        <p className={styles.description}>
          Or{" "}
          <Link href="/sign-up" className={styles.link}>
            sign up for a new account
          </Link>
        </p>
        <SignInForm />
      </section>
      <SupportUsSection />
    </>
  );
}
