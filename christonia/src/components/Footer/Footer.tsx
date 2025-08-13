import Link from "next/dist/client/link";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <div className={styles.logoContainer}>
            <img
              src="/icon.png"
              alt="Christonia Logo"
              className={styles.logo}
            />
            <Link href="/" className={styles.title}>
              Christonia
            </Link>
          </div>
          <p className={styles.description}>
            High quality Christian theology education maintained by top
            Christian theologians.
          </p>
          <div className={styles.socialIcons}>
            <Link
              href="https://github.com/your-christonia-repo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/github-logo.svg"
                alt="Christonia's GitHub"
                className={styles.icon}
              />
            </Link>
            <Link
              href="https://youtube.com/your-christonia-channel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/youtube-logo.svg"
                alt="Christonia's YouTube"
                className={styles.icon}
              />
            </Link>
            <Link
              href="https://discord.gg/your-invite-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/discord-logo.svg"
                alt="Christonia's Discord"
                className={styles.icon}
              />
            </Link>
            <Link
              href="https://x.com/your-christonia-account"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/x-logo.svg"
                alt="Christonia's X"
                className={styles.icon}
              />
            </Link>
          </div>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>About us</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
              <li>
                <Link href="/#">Community</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Support</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/contribute">Contribute</Link>
              </li>
              <li>
                <Link href="/contact-us">Contact us</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Legal</h2>
            <ul className={styles.links}>
              <li>
                <Link href="/terms">Terms</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className={styles.hr} />
      <p>© {currentYear} Christonia. All rights reserved.</p>
    </footer>
  );
}
