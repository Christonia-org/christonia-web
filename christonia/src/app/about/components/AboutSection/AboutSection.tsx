import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
        <h1 className={styles.title}>About Christonia</h1>
        <b className={styles.boldDescription}>
            Christonia is one of those “I wish I had this when I was wrestling with 
            hard questions” resources.
        </b>
        <p className={styles.description}>
            Not everyone has the time, patience, or discernment to sift through the noise 
            and find trustworthy answers to the challenges raised against Christianity. 
            That's where Christonia comes in. Christonia offers an open-source, comprehensive 
            curriculum built to equip believers with solid knowledge, from early church history 
            to responses to some of the toughest objections. And because every Christian walks 
            within a particular tradition, Christonia gives you the freedom to focus on a track 
            that aligns with your church's teachings.
        </p>

        <h2 className={styles.whatYouCanExpect}>What you can expect at Christonia</h2>
        <ul className={styles.expectationsList}>
            <li className={styles.expectationItem}>
                <img src="/map-icon.svg" alt="Map Icon" className={styles.expectationImage}/>
                <div className={styles.expectationContent}>
                    <h3 className={styles.expectationTitle}>
                        A full roadmap to Christian apologetics
                    </h3>
                    <p className={styles.expectationDescription}>
                        Benefit from a roadmap set by the best Christian theologians to get 
                        you started with apologetics.
                    </p>
                </div>
            </li>
            <li className={styles.expectationItem}>
                <img src="/keyboard-icon.svg" alt="Keyboard Icon" className={styles.expectationImage}/>
                <div className={styles.expectationContent}>
                    <h3 className={styles.expectationTitle}>
                        Learn by reflecting
                    </h3>
                    <p className={styles.expectationDescription}>
                        Write blogs that reflect on what you learned to solidify your understanding 
                        and refine your points.
                    </p>
                </div>
            </li>
            <li className={styles.expectationItem}>
                <img src="/phone-icon.svg" alt="Phone Icon" className={styles.expectationImage}/>
                <div className={styles.expectationContent}>
                    <h3 className={styles.expectationTitle}>
                        Share with the community
                    </h3>
                    <p className={styles.expectationDescription}>
                        Get AI reviews before publishing your blogs and benefit from peer reviews 
                        by sharing your blogs with the community.
                    </p>
                </div>
            </li>
            <li className={styles.expectationItem}>
                <img src="/community-icon.svg" alt="Community Icon" className={styles.expectationImage}/>
                <div className={styles.expectationContent}>
                    <h3 className={styles.expectationTitle}>
                        Get connected with the community
                    </h3>
                    <p className={styles.expectationDescription}>
                        Join a community of likeminded learners and discuss your learning journey 
                        with members of the Christonia community.
                    </p>
                </div>
            </li>
        </ul>
    </section>
  );
}