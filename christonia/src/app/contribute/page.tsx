import styles from "./page.module.css";
import HowToContributeSection from "./components/HowToContributeSection/HowToContributeSection";

export default function ContributePage() {
    return (
        <div className={styles.page}>
            <HowToContributeSection />
        </div>
    );
}