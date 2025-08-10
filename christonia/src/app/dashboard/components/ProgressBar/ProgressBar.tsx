import React from 'react';
import styles from './ProgressBar.module.css';

export default function ProgressBar({ currentValue, maxValue }: ProgressBarProps) {
  const percentage = (currentValue / maxValue) * 100;

  const formatValue = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBarValue}>
        XP: {formatValue(currentValue)} / {formatValue(maxValue)}
      </div>
      <div className={styles.progressBarFill}>
        <div
          className={styles.progressBarFillInner}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};