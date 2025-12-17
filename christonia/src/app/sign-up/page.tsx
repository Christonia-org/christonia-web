import SignUpForm from "./components/SignUpForm/SignUpForm";
import SupportUsSection from "@/components/SupportUsSection";
import Link from "next/link";
import styles from "./page.module.css";

export default function SignUpPage() {
  return (
    <>
      <section className={styles.signUpPage}>
        <h1 className={styles.title}>Sign up for free</h1>
        <p className={styles.description}>
          Or{" "}
          <Link href="/sign-in" className={styles.link}>
            sign in to your existing account
          </Link>
        </p>
        <SignUpForm />
      </section>
      <SupportUsSection />
    </>
  );
}
