import styles from "./page.module.css";
import HowToContributeSection from "./components/HowToContributeSection/HowToContributeSection";
import WhyYouShouldContributeSection from "./components/WhyYouShouldContributeSection/WhyYouShouldContributeSection";

export default function ContributePage() {
    return (
        <div className={styles.page}>
            <HowToContributeSection />
            <WhyYouShouldContributeSection />
        </div>
    );
}