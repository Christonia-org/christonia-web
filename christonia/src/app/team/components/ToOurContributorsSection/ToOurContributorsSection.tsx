import styles from './ToOurContributorsSection.module.css'
import Link from 'next/link';

export default function ToOurContributorsSection() {
    return (
        <section className={styles.toOurContributorsSection}>
            <h2 className={styles.title}>To all our contributors</h2>
            <p className={styles.description}>
                We thank you for your invaluable support in allowing Christonia to happen. Your help 
                and contribution meant others will stand firm in their journey for truth. 
            </p>
            <div className={styles.quoteContainer}>
                <p className={styles.quote}>
                    "Give, and it will be given to you. Good measure, pressed down, shaken together, 
                    running over, will be put into your lap. For with the measure you use it will be 
                    measured back to you."
                </p>
                <p className={styles.quoteAuthor}>
                    - The King of Kings
                </p>
            </div>
            <Link href="/contribute" className={styles.link}>Learn how to contribute</Link>
        </section>
    );
}