import Link from "next/link";
import styles from "./FoundationsCourseCard.module.css";
import Image from "next/image";

export default function FoundationsCourseCard() {
  return (
    <div className={styles.foundationsCourseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.left}>
          <Image
            src={"/default-course-logo.svg"}
            alt={"Foundations Course Logo"}
            width={90}
            height={90}
          />
          <h2 className={styles.courseName}>Foundations</h2>
        </div>
        <div className={styles.right}>
          <button className={styles.selectButton}>Select</button>
          <Link href={"/tracks/foundations"} className={styles.openButton}>
            View
          </Link>
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.description}>
        This is where your journey starts! Start with an introduction to
        Christianity, covering the core Christian doctrine, early Church
        history, common objections to Christianity, and different responses to
        these criticisms.
      </p>
    </div>
  );
}
