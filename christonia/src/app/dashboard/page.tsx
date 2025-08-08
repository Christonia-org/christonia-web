import styles from './page.module.css';
import DashboardSection from './components/DashboardSection/DashboardSection';

export default function DashboardPage() {
    return (
        <div className={styles.page}>
            <DashboardSection />
        </div>
    );
}