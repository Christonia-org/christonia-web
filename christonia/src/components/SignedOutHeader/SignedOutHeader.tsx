import Link from "next/link";
import styles from "./SignedOutHeader.module.css";

export default function SignedOutHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src="/icon.png" alt="Christonia Logo" className={styles.logo} />
        <h1 className={styles.title}>Christonia</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href={"/tracks"} className={styles.navLink}>
              All Tracks
            </Link>
          </li>
          <li>
            <Link href={"/about"} className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href={"/glossary"} className={styles.navLink}>
              Glossary
            </Link>
          </li>
          <li>
            <Link href={"/support-us"} className={styles.navLink}>
              Support us
            </Link>
          </li>
          <li>
            <Link href={"/sign-in"} className={styles.navLink}>
              Sign in
            </Link>
          </li>
          <li>
            <Link href={"/sign-up"} className={styles.getStartedButton}>
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
