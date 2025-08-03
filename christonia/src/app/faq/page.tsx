import FaqSection from "./components/FaqSection/FaqSection";
import styles from "./page.module.css";

export default function FaqPage() {
  return (
    <div className={styles.faqPage}>
      <FaqSection />
    </div>
  );
}
