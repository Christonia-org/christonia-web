import styles from './HowItWorksSection.module.css';

export default function HowItWorksSection() {
  return (
    <section className="how-it-works-section">
      <h1 className={styles.title}>How it works</h1>
      <p className={styles.description}>
        This is the platform that connects you to the greatest Christian minds. 
        Here you'll have free access to comprehensive material written by the 
        world's most experienced theologians and apologists.
      </p>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
            <img src="/bible-icon.svg" alt="Bible Icon" className={styles.image} />
            <h2 className={styles.subtitle}>Learn</h2>
            <p className={styles.subtitleDescription}>
              Learn from a curriculum set by expert theologians designed to help you grow. 
            </p>
        </div>
        <div className={styles.card}>
            <img src="/keyboard-icon.svg" alt="Keyboard Icon" className={styles.image} />
            <h2 className={styles.subtitle}>Write</h2>
            <p className={styles.subtitleDescription}>
              Write blogs that reflect your learning progress based on the material you covered so far.
            </p>
        </div>
        <div className={styles.card}>
            <img src="/phone-icon.svg" alt="Phone Icon" className={styles.image} />
            <h2 className={styles.subtitle}>Publish</h2>
            <p className={styles.subtitleDescription}>
              Publish blogs, review them with AI and upload them for others to read.
            </p>
        </div>
        <div className={styles.card}>
            <img src="/community-icon.svg" alt="Community Icon" className={styles.image} />
            <h2 className={styles.subtitle}>Discuss</h2>
            <p className={styles.subtitleDescription}>
              Discuss and share your questions with a supportive community of likeminded learners.
            </p>
        </div>
      </div>
    </section>
  );
}