"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./ProfileInfoForm.module.css";

export default function ProfileInfoForm() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageUrl, setProfileImageUrl] = useState("/profile-icon.svg");

  const handlePictureClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImageUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className={styles.profileForm}>
      <h1 className={styles.formTitle}>Profile</h1>
      <p className={styles.formDescription}>
        Profile information will be displayed on your dashboard.
      </p>

      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="imgSelector">
          Profile Picture
        </label>
        <div className={styles.profilePictureContainer}>
          <div className={styles.profilePictureWrapper}>
            <Image
              src={profileImageUrl}
              alt="Profile Picture"
              width={80}
              height={80}
              className={styles.profilePicture}
            />
            <button
              type="button"
              className={styles.changePictureButton}
              onClick={handlePictureClick}
            >
              <Image
                src="/upload-icon.svg"
                alt="Upload Icon"
                width={24}
                height={24}
                className={styles.uploadIcon}
              />
            </button>
          </div>
          <input
            type="file"
            id="imgSelector"
            name="imgSelector"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="username" className={styles.formLabel}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.formLabel}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={styles.formInput}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="aboutMe" className={styles.formLabel}>
          About Me
        </label>
        <textarea id="aboutMe" name="aboutMe" className={styles.formTextarea} />
      </div>

      <button type="submit" className={styles.saveButton}>
        Save
      </button>
    </form>
  );
}
