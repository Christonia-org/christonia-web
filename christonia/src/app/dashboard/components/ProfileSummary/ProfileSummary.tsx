import React from 'react';
import styles from './ProfileSummary.module.css';
import Image from 'next/image';
import ProgressBar from '../ProgressBar/ProgressBar';

export default function ProfileSummary({
  username,
  title,
  level,
  currentXp,
  maxXp,
  nextTitle,
  aboutText
}: ProfileSummaryProps) {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.topSection}>
        <div className={styles.userInfo}>
          <div className={styles.avatarContainer}>
            <Image
              src="/profile-icon.svg"
              alt="Profile Picture"
              width={100}
              height={100}
              className={styles.avatar}
            />
          </div>
          <h2 className={styles.username}>{username}</h2>
          <p className={styles.title}>{title}</p>
        </div>
        <div className={styles.statsInfo}>
          <h2 className={styles.level}>Level {level}</h2>
          <div className={styles.progressBarWrapper}>
            <ProgressBar currentValue={currentXp} maxValue={maxXp} />
          </div>
          <div className={styles.nextTitleContainer}>
            <span className={styles.nextTitleLabel}>Next Title:</span>
            <Image
              src="/arrow.svg"
              alt="Arrow Icon"
              width={80}
              height={20}
              className={styles.arrow}
            />        
            <span className={styles.nextTitleValue}>{nextTitle}</span>
          </div>
        </div>
      </div>
      <div className={styles.aboutSection}>
        <h2 className={styles.aboutHeader}>About me</h2>
        <p className={styles.aboutText}>
          {aboutText}
        </p>
      </div>
    </div>
  );
}