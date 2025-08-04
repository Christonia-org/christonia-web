import styles from "./HowToContributeSection.module.css";
import Link from "next/link";
import ContributeCard from "../ContributeCard/ContributeCard";

export default function HowToContributeSection() {
    return (
        <section className={styles.howToContributeSection}>
            <h1 className={styles.howToContributeTitle}>How to Contribute</h1>
            <p className={styles.howToContributeDescription}>
                Christonia is a project built and maintained by <Link href="/team" className={styles.link}>volunteers</Link> who 
                dedicate their time and skills to making Christonia one of the best Christian educational 
                platforms. We are always working on features to improve Christonia and are always 
                looking for people who want to join our growing team of maintainers.
            </p>
            <i className={styles.howToContributeNote}>
                If you are interested in supporting us financially, you can learn about that 
                on <Link href="/support-us" className={styles.link}>our support page</Link>.
            </i>
            <h2 className={styles.howToContributeSubtitle}>There are two main ways you can contribute:</h2>
            <div className={styles.cardContainer}>
                <ContributeCard 
                    title="Contribute to the Curriculum"
                    description="The curriculum consists of lessons which are on this platform. 
                                We are constantly updating our curriculum to keep it up to date 
                                with the latest arguments used in theological debates. Our goal 
                                is to maintain an evolving comprehensive curriculum that equips 
                                Christians with the truth. You can contribute to the curriculum 
                                by reaching out via email with a lesson proposal."
                    linkTitle="Send Email"
                    linkDestination="mailto:michaelkolanjian.christonia@gmail.com"
                />
                <ContributeCard 
                    title="Contribute to the Main Site"
                    description="This website is a Next.js application. We are constantly working 
                                on new features that would enhance the student's learning experience. 
                                However, as any project, Christonia has many requirements and bugs to 
                                be addressed. If you feel you can help with maintaining the project, 
                                reach out to Michael through email."
                    linkTitle="Send Email"
                    linkDestination="mailto:michaelkolanjian.christonia@gmail.com"
                />
            </div>
        </section>
    );
}