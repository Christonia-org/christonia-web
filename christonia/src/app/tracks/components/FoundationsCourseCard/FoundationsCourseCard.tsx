import Link from "next/link";
import styles from "./FoundationsCourseCard.module.css";
import Image from "next/image";

export default function FoundationsCourseCard({
  name,
  imageLink,
  description,
  link,
  id,
  isSelected,
  onSelect,
}: FoundationsCourseCardProps) {
  return (
    <div
      className={`${styles.foundationsCourseCard} ${
        isSelected ? styles.selected : ""
      }`}
    >
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
            {isSelected && (
              <span className={styles.selectedLabel}>Selected</span>
            )}
          </div>
        </div>
        <div className={styles.right}>
          {isSelected ? (
            <Link href={link} className={styles.selectButton}>
              Open
            </Link>
          ) : (
            <>
              <button
                className={styles.selectButton}
                onClick={() => onSelect(id)}
              >
                Select
              </button>
              <Link href={link} className={styles.openButton}>
                View
              </Link>
            </>
          )}
        </div>
      </div>
      <hr className={styles.divider} />
      <p className={styles.description}>{description}</p>
    </div>
  );
}
