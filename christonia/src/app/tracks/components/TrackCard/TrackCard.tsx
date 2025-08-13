import styles from "./TrackCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TrackCard({
  name,
  imageLink,
  description,
  link,
  courseCount,
  id,
  isSelected,
  onSelect,
}: TrackCardProps) {
  return (
    <div className={`${styles.trackCard} ${isSelected ? styles.selected : ""}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageLink || "/default-course-logo.svg"}
          alt={`${name} Track Logo`}
          width={90}
          height={90}
        />
        {isSelected && <span className={styles.selectedLabel}>Selected</span>}
      </div>
      <div className={styles.beneathImage}>
        <p className={styles.trackWord}>Track</p>
        <p className={styles.trackCourseCount}>
          {courseCount > 1 ? `${courseCount} Courses` : `${courseCount} Course`}
        </p>
      </div>
      <h2 className={styles.trackName}>{name}</h2>
      <p className={styles.trackDescription}>{description}</p>
      <div className={styles.buttonContainer}>
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
  );
}
