import styles from './page.module.css';
import MeetTheTeamSection from './components/MeetTheTeamSection/MeetTheTeamSection';
import SupportUsSection from '@/components/SupportUsSection/SupportUsSection';
import ToOurContributorsSection from './components/ToOurContributorsSection/ToOurContributorsSection';

export default function TeamPage() {
    return (
        <>
            <div className={styles.teamPage}>
                <MeetTheTeamSection />
                <ToOurContributorsSection />
            </div>
            <SupportUsSection />
        </>
    );
}