"use client";

import { useState } from "react";
import styles from "./ChangePasswordForm.module.css";
import Image from "next/image";

export default function ChangePasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev) => !prev);
  };

  return (
    <form className={styles.changePasswordForm}>
      <h1 className={styles.formTitle}>Change Your Password</h1>

      <div className={styles.formGroup}>
        <label htmlFor="currentPassword" className={styles.formLabel}>
          Current Password
        </label>
        <div className={styles.inputContainer}>
          <input
            type={showCurrentPassword ? "text" : "password"}
            id="currentPassword"
            name="currentPassword"
            className={styles.formInput}
          />
          <span
            className={styles.passwordToggle}
            onClick={() => togglePasswordVisibility(setShowCurrentPassword)}
          >
            <Image
              src={showCurrentPassword ? "/eye-open.svg" : "/eye-closed.svg"}
              alt="Toggle password visibility"
              width={35}
              height={35}
            />
          </span>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="newPassword" className={styles.formLabel}>
          New Password
        </label>
        <div className={styles.inputContainer}>
          <input
            type={showNewPassword ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            className={styles.formInput}
          />
          <span
            className={styles.passwordToggle}
            onClick={() => togglePasswordVisibility(setShowNewPassword)}
          >
            <Image
              src={showNewPassword ? "/eye-open.svg" : "/eye-closed.svg"}
              alt="Toggle password visibility"
              width={35}
              height={35}
            />
          </span>
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="confirmPassword" className={styles.formLabel}>
          Confirm Password
        </label>
        <div className={styles.inputContainer}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            className={styles.formInput}
          />
          <span
            className={styles.passwordToggle}
            onClick={() => togglePasswordVisibility(setShowConfirmPassword)}
          >
            <Image
              src={showConfirmPassword ? "/eye-open.svg" : "/eye-closed.svg"}
              alt="Toggle password visibility"
              width={35}
              height={35}
            />
          </span>
        </div>
      </div>

      <button type="submit" className={styles.saveButton}>
        Save
      </button>
    </form>
  );
}
