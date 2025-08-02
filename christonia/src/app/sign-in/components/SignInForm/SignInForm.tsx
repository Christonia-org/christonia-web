import Link from 'next/link';
import styles from './SignInForm.module.css';

export default function SignInForm() {
  return (
    <form className={styles.signInForm}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className={styles.forgotPasswordGroup}>
        <div className={styles.rememberMe}>
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <Link href="/forgot-password" className={styles.forgotPasswordLink}>Forgot your password?</Link>
      </div>
      <button type="submit">Sign in</button>
      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>
      <button type="button" className={styles.googleButton}>
        <img src="/google-logo.svg" alt="Google logo" />
      </button>
    </form>
  );
}
