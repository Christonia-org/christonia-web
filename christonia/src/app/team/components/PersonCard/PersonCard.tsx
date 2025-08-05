'use client';

import styles from './PersonCard.module.css';
import Image from 'next/image'; 
import Link from 'next/link';

interface PersonCardProps {
  profilePicUrl: string;
  name: string;
  joinDate: string; 
  country: string; 
  githubUrl?: string; 
  youtubeUrl?: string; 
  xUrl?: string;
  linkedinUrl?: string;
}

export default function PersonCard({ 
  profilePicUrl, 
  name, 
  joinDate, 
  country, 
  githubUrl, 
  youtubeUrl, 
  xUrl, 
  linkedinUrl 
}: PersonCardProps) {
  return (
    <div className={styles.personCard}>
      <div className={styles.profilePicContainer}>
        <Image 
          src={profilePicUrl} 
          alt={`${name}'s profile picture`} 
          width={80} 
          height={80} 
          className={styles.profilePic} 
          onError={(e) => { e.currentTarget.src = '/profile-icon.svg'; }} 
        />
      </div>


      <h3 className={styles.name}>{name}</h3>
      <p className={styles.details}>
        Joined {joinDate} &bull; {country}
      </p>
      <div className={styles.socialLinks}>
        {xUrl && (
          <Link href={xUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
            <Image 
              src="/x-logo.svg" 
              alt="X (Twitter) logo" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
          </Link>
        )}
        {githubUrl && (
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
            <Image 
              src="/github-logo.svg" 
              alt="GitHub logo" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
          </Link>
        )}
        {youtubeUrl && (
          <Link href={youtubeUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
            <Image 
              src="/youtube-logo.svg" 
              alt="YouTube logo" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
          </Link>
        )}
        {linkedinUrl && (
          <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconLink}>
            <Image 
              src="/linkedin-logo.svg" 
              alt="LinkedIn logo" 
              width={24} 
              height={24} 
              className={styles.socialIcon} 
            />
          </Link>
        )}
      </div>
    </div>
  );
}
