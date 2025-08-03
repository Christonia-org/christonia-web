import styles from './page.module.css';
import ForgotPasswordForm from './components/ForgotPasswordForm/ForgotPasswordForm';
import SupportUsSection from '@/components/SupportUsSection/SupportUsSection';

export default function ForgotPasswordPage() {
  return (
    <>
        <section className={styles.forgotPasswordSection}>
            <h1 className={styles.title}>Forgot your password?</h1>
            <ForgotPasswordForm />
        </section>
        <SupportUsSection />
    </>
  );
}
