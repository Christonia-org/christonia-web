import styles from './page.module.css';
import DashboardSection from './components/DashboardSection/DashboardSection';
import ProgressionSection from './components/ProgressionSection/ProgressionSection';
import MyBlogsSection from './components/MyBlogsSection/MyBlogsSection';
import SupportUsSection from '@/components/SupportUsSection/SupportUsSection';

export default function DashboardPage() {
    return (
        <>
            <div className={styles.page}>
                <DashboardSection />
                <ProgressionSection />
                <MyBlogsSection />
            </div>
            <SupportUsSection />
        </>
    );
}