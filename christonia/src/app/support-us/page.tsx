import styles from './page.module.css';
import Link from 'next/link';
import FaqSection from './components/FaqSection/FaqSection';

export default function SupportUsPage() {
  return (
    <div className={styles.supportUsPage}>
        <section className={styles.supportUsSection}>
        <h1 className={styles.title}>Support Us</h1>
        <p className={styles.description}>
            From the start, Christonia has been committed to providing a comprehensive and completely 
            free apologetics curriculum for anyone and everyone eager to learn. With your generous 
            donations, we can continue to empower Christians, regardless of their background or 
            financial status.
        </p>
        <Link href="#" className={styles.button}>Donate now!</Link>
        </section>
        <FaqSection />
    </div>
  );
}
