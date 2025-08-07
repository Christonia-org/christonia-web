'use client';

import React, { useState } from 'react';
import styles from './BlogCard.module.css';

interface BlogCardProps {
  title: string;
  author: string;
  datePublished: string;
  dateEdited: string | null;
  likes: number;
  isBookmarked: boolean;
  description: string;
}

export default function BlogCard({
  title,
  author,
  datePublished,
  dateEdited,
  likes,
  isBookmarked,
  description,
}: BlogCardProps) {
  const [bookmarkedStatus, setBookmarkedStatus] = useState(isBookmarked);

  const handleBookmarkClick = () => {
    setBookmarkedStatus(prevStatus => !prevStatus);
    console.log(`Bookmark status for "${title}" toggled to: ${!bookmarkedStatus}`);
  };

  const BookmarkCheckedSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
      <path d="M9 10l2 2l4-4"></path>
    </svg>
  );

  const BookmarkSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
    </svg>
  );

  return (
    <div className={styles.blogCard}>
      <div 
        className={`${styles.bookmarkIcon} ${bookmarkedStatus ? styles.bookmarkChecked : ''}`}
        onClick={handleBookmarkClick}
      >
        {bookmarkedStatus ? (
          BookmarkCheckedSVG
        ) : (
          BookmarkSVG
        )}
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
