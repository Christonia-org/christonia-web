import styles from "./page.module.css";
import ChangePasswordForm from "./components/ChangePasswordForm/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className={styles.page}>
      <ChangePasswordForm />
    </div>
  );
}
