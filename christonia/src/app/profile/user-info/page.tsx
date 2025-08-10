import styles from "./page.module.css";
import ProfileInfoForm from "./components/ProfileInfoForm/ProfileInfoForm";
import DangerZoneSection from "./components/DangerZoneSection/DangerZoneSection";

export default function UserProfilePage() {
  return (
    <div className={styles.page}>
      <ProfileInfoForm />
      <DangerZoneSection />
    </div>
  );
}
