import styles from "./DangerZoneSection.module.css";

export default function DangerZoneSection() {
  return (
    <section className={styles.dangerZoneSection}>
      <h1 className={styles.title}>Danger Zone</h1>
      <p className={styles.description}>
        Careful, these actions cannot be undone.
      </p>
      <button className={styles.actionButton}>
        <img
          src="/repeat-icon.svg"
          alt="Reset Progress Icon"
          width={25}
          height={25}
        />
        <p>Reset Progress</p>
      </button>
      <button className={styles.actionButton}>
        <img
          src="/trash-icon.svg"
          alt="Delete Account Icon"
          width={25}
          height={25}
        />
        <p>Delete Account</p>
      </button>
    </section>
  );
}
