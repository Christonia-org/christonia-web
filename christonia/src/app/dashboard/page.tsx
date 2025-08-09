import styles from './page.module.css';
import DashboardSection from './components/DashboardSection/DashboardSection';
import ProgressionSection from './components/ProgressionSection/ProgressionSection';

export default function DashboardPage() {
    return (
        <div className={styles.page}>
            <DashboardSection />
            <ProgressionSection />
        </div>
    );
}