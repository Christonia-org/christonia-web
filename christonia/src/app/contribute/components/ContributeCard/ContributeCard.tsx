import styles from './ContributeCard.module.css';
import Link from 'next/link';

interface ContributeCardProps {
  title: string;
  description: string;
  linkTitle: string;
  linkDestination: string;
}

export default function ContributeCard({ title, description, linkTitle, linkDestination }: ContributeCardProps) {
  return (
    <div className={styles.contributeCard}>
      <div className={styles.headerIndicator}></div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Link href={linkDestination} className={styles.link}>
        {linkTitle}
      </Link>
    </div>
  );
}
