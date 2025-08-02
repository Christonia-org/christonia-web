import Link from 'next/link';
import styles from './ContactUsSection.module.css';

export default function ContactUsSection() {
  return (
    <section className={styles.contactUsSection}>
      <h3 className={styles.title}>Want to contact us?</h3>
      <p>
        Connect with our friendly community on discord, a chat and networking 
        platform or <Link href="mailto:michaelkolanjian.christonia@gmail.com" className={styles.emailLink}>send us an email.</Link>.
      </p>
      <Link href="#" className={styles.discordLink}>Chat on Discord</Link>
      <p>
        If you want to give back to our community, you can do so by contributing to our curriculum, 
        or by supporting us financially.
      </p>
      <div>
        <Link href="/contribute" className={styles.contributeLink}>Contribute</Link>
        <Link href="/support-us" className={styles.donateLink}>Donate</Link>
      </div>
    </section>
  );
}