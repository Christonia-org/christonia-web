'use client'

import styles from './CourseCard.module.css';
import Image from 'next/image';

interface CourseCardProps {
  courseName: string;
  courseTrack?: string | null;
  courseImageLink: string;
  lessonsCompleted: number;
  totalLessons: number;
  blogsPublished: number;
  totalBlogs: number;
  quizScore: number;
  totalQuizScore: number;
}

export default function CourseCard({
  courseName,
  courseTrack,
  courseImageLink,
  lessonsCompleted,
  totalLessons,
  blogsPublished,
  totalBlogs,
  quizScore,
  totalQuizScore,
}: CourseCardProps) {
  const completionPercentage = ((lessonsCompleted / totalLessons) * 0.6 + (blogsPublished / totalBlogs) * 0.4) * 100;

  const borderRadiusStyle = completionPercentage >= 99.99 ? '9999px' : '0px';

  return (
    <div className={styles.cardContainer}>
      <div className={styles.topBorder}></div>

      <div className={styles.header}>
        <div className={styles.courseImage}>
          <Image
            src={courseImageLink || '#'}
            alt={courseName}
            width={70} height={70} />
        </div>
        <div className={styles.courseInfo}>
          <h2 className={styles.courseName}>{courseName}</h2>
          <p className={styles.courseTrack}>Track: {courseTrack || 'None'}</p>
        </div>
      </div>

      <div className={styles.progressBarWrapper}>
        <div
          className={styles.progressBarFill}
          style={{
            width: `${completionPercentage}%`,
            borderTopRightRadius: borderRadiusStyle,
            borderBottomRightRadius: borderRadiusStyle,
          }}
        >
        </div>
        <p className={styles.completionPercentage}>{completionPercentage.toFixed(0)}% Complete</p>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.leftSide}>
            <div className={styles.leftSideTop}>
                <p className={styles.statValue}>{lessonsCompleted} / {totalLessons}</p>
                <p className={styles.statLabel}>Lessons Completed</p>
            </div>
            <div className={styles.dividerHorizontal}></div>
            <div className={styles.leftSideBottom}>
                <p className={styles.statValue}>{blogsPublished} / {totalBlogs}</p>
                <p className={styles.statLabel}>Blogs Published</p>
            </div>
        </div>
        <div className={styles.dividerVertical}></div>
        <div className={styles.rightSide}>
            <p className={styles.statLabel}>Total Quiz Score:</p>
            <p className={`${styles.statValue} ${styles.quizScore}`}>{quizScore} / {totalQuizScore}</p>
        </div>
      </div>
    </div>
  );
};
