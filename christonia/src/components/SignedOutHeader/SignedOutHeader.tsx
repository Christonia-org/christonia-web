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
            <li><Link href={"#"} className={styles.navLink}>All Paths</Link></li> 
            <li><Link href={"#"} className={styles.navLink}>About</Link></li>
            <li><Link href={"#"} className={styles.navLink}>Glossary</Link></li>
            <li><Link href={"#"} className={styles.navLink}>Support us</Link></li>
            <li><Link href={"#"} className={styles.navLink}>Sign in</Link></li>
            <li><img src="./moon.svg" alt="Change theme button" className={styles.themeIcon} /></li> 
            <li><Link href={"#"} className={styles.getStartedButton}>Get Started</Link></li>
        </ul>
      </nav>
    </header>
  );
}