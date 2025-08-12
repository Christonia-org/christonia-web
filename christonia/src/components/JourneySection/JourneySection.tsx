import Link from "next/link";
import styles from "./JourneySection.module.css";

export default function JourneySection() {
  return (
    <section className={styles.journeySection}>
      <h1 className={styles.title}>
        Your <span className={styles.highlight}>Journey in Apologetics</span>{" "}
        Begins Here
      </h1>
      <p className={styles.description}>
        Get access to a free Christian theology curriculum supported by a
        passionate community
      </p>
      <Link href="/paths" className={styles.link}>
        View Full Curriculum
      </Link>
    </section>
  );
}
