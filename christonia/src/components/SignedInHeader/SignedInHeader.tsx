"use client";

import Link from "next/link";
import styles from "./SignedInHeader.module.css";
import Image from "next/image";

export default function SignedInHeader({
  userProfilePicUrl,
}: SignedInHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src="/icon.png" alt="Christonia Logo" className={styles.logo} />
        <h1 className={styles.title}>Christonia</h1>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href={"/dashboard"} className={styles.navLink}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link href={"/paths"} className={styles.navLink}>
              All Paths
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
            <Link href={"/blogs"} className={styles.navLink}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href={"/profile/user-info"} className={styles.profilePhoto}>
              <Image
                src={userProfilePicUrl || "/profile-icon.svg"}
                alt="Profile Image"
                width={50}
                height={50}
                className={styles.profileImage}
                onError={(e) => {
                  e.currentTarget.src = "/profile-icon.svg";
                }}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
