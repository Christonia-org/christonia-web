import styles from './ForgotPasswordForm.module.css';

export default function ForgotPasswordForm() {
  return (
    <form className={styles.forgotPasswordForm}>
        <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>What's your email address?</label>
            <input type="email" id="email" name="email" placeholder="something@example.com" className={styles.input} required />
        </div>
        <button type="submit" className={styles.button}>Send reset link</button>
    </form>
  );
}