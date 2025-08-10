'use client';

import React from 'react';
import styles from './MyBlogCard.module.css'
import Link from 'next/link';

export default function MyBlogCard({
  title,
  author,
  datePublished,
  dateEdited,
  likes,
  description,
}: MyBlogCardProps) {

  return (
    <div className={styles.blogCard}>
      <div className={styles.actions}>
          <Link href={'#'} className={styles.editIcon} />
          <Link href={'#'} className={styles.deleteIcon} /> 
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.metaData}>
          <div>
            by <span className={styles.authorName}>{author}</span>
          </div>
          <div>
            <span className={styles.datePublished}>{datePublished}</span>
            {dateEdited && <span className={styles.dateEdited}> (Edited on {dateEdited})</span>}
          </div>
          <div>
            <span className={styles.likesCount}>{likes}</span> Likes
          </div>
        </div>

        <p className={styles.description}>
          {description}
        </p>
      </div>
      
      <button className={styles.readNowButton}>
        Read Now
      </button>
    </div>
  );
}
