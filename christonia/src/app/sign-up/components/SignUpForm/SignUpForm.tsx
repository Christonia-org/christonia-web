import styles from './SignUpForm.module.css';

export default function SignUpForm() {
  return (
    <form className={styles.signUpForm}>
      <div className={styles.formGroup}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="passwordConfirmation">Password Confirmation</label>
        <input type="password" id="passwordConfirmation" name="passwordConfirmation" required />
      </div>
      <p className={styles.terms}>
        By signing up, you agree to our terms of use.
      </p>
      <button type="submit">Sign Up</button>
      <div className={styles.divider}>
        <span>Or continue with</span>
      </div>
      <button type="button" className={styles.googleButton}>
        <img src="/google-logo.svg" alt="Google logo" />
      </button>
    </form>
  );
}