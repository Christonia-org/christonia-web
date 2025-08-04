import styles from "./page.module.css";
import HowToContributeSection from "./components/HowToContributeSection/HowToContributeSection";
import WhyYouShouldContributeSection from "./components/WhyYouShouldContributeSection/WhyYouShouldContributeSection";
import SupportUsSection from "@/components/SupportUsSection/SupportUsSection";

export default function ContributePage() {
    return (
        <>
            <div className={styles.page}>
                <HowToContributeSection />
                <WhyYouShouldContributeSection />
            </div>
            <SupportUsSection />
        </>
    );
}