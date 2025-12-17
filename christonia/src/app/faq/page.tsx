import FaqSection from "./components/FaqSection/FaqSection";
import styles from "./page.module.css";
import Link from "next/link";
import SupportUsSection from "@/components/SupportUsSection";

export default function FaqPage() {
  return (
    <>
      <div className={styles.faqPage}>
        <FaqSection />
        <section className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Have a question?</h2>
          <p className={styles.contactDescription}>
            Chat with our Christonia community in our Discord server!
          </p>
          <Link href="#" className={styles.contactLink}>
            Open Discord
          </Link>
        </section>
      </div>
      <SupportUsSection />
    </>
  );
}
