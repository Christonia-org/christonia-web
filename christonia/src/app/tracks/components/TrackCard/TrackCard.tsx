import styles from "./TrackCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function TrackCard({
  trackName,
  trackImageLink,
  trackDescription,
  trackLink,
  trackCourseCount,
  isTrackSelected,
  isTrackCompleted,
}: TrackCardProps) {
  return (
    <div className={styles.trackCard}>
      <Image
        src={trackImageLink || "default-course-logo.svg"}
        alt={`${trackName} Track Logo`}
        width={90}
        height={90}
      />
      <div className={styles.beneathImage}>
        <p className={styles.trackWord}>Track</p>
        <p className={styles.trackCourseCount}>
          {trackCourseCount > 1
            ? `${trackCourseCount} Courses`
            : `${trackCourseCount} Course`}
        </p>
      </div>
      <h2 className={styles.trackName}>{trackName}</h2>
      <p className={styles.trackDescription}>{trackDescription}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.selectButton}>Select</button>
        <Link href={trackLink} className={styles.openButton}>
          View
        </Link>
      </div>
    </div>
  );
}
