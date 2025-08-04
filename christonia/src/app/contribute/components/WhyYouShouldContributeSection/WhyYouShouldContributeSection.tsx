import styles from './WhyYouShouldContributeSection.module.css'

export default function WhyYouShouldContributeSection() {
    return (
        <section className={styles.section}>
            <h1 className={styles.title}>Why you should contribute</h1>
            <div className={styles.contentContainer}>
                <div className={styles.card}>
                    <img src="/time-icon.svg" alt="Time Icon" className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Flexibility</h3>
                        <p className={styles.cardDescription}>
                            You can work on your own time. It's not 9 to 5 so you can get involved 
                            when it's convenient for you.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/meeting-icon.svg" alt="Meeting Icon" className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Experience</h3>
                        <p className={styles.cardDescription}>
                            You'll get the chance to work within a team of experienced theologians 
                            and work on new arguments that expand your capabilities.
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <img src="/community-icon.svg" alt="Community Icon" className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Impact</h3>
                        <p className={styles.cardDescription}>
                            The features you work on or the lessons you create will transform thousands
                             of students into critical learners with a deep understanding of Christian 
                             thought.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}