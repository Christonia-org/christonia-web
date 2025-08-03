import Link from 'next/dist/client/link';
import styles from './SupportUsSection.module.css';

export default function SupportUsSection() {
  return (
    <section className={styles.supportUsSection}>
      <h2 className={styles.title}>Support Us</h2>
      <p className={styles.description}>
        Christonia is funded by the community. 
        Join us in empowering Christians around the globe by supporting Christonia!
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/learn-more" className={styles.learnMoreButton}>
            Learn more
        </Link>
        <Link href="/support-us" className={styles.donateButton}>
            Donate now
        </Link>
      </div>
    </section>
  );
}
