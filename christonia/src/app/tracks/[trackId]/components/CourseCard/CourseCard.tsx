import styles from "./CourseCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function CourseCard({
  name,
  imageLink,
  description,
  link,
  id,
  progress,
}: CourseCardProps) {
  return (
    <div className={styles.courseCard}>
      <div className={styles.cardHeader}>
        <div className={styles.left}>
          <Image
            src={imageLink || "/default-course-logo.svg"}
            alt={"Foundations Course Logo"}
            width={90}
            height={90}
          />
          <div className={styles.titleContainer}>
            <h2 className={styles.courseName}>{name}</h2>
          </div>
        </div>
        <div className={styles.right}>
          <Link href={link} className={styles.openButton}>
            Open Course
          </Link>
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}
