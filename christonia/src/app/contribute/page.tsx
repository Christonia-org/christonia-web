import ContributeCard from "./components/ContributeCard/ContributeCard";
import styles from "./page.module.css";

export default function ContributePage() {
    return (
        <div className={styles.page}>
            <h1>Contribute to Christonia</h1>
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
        </div>
    );
}