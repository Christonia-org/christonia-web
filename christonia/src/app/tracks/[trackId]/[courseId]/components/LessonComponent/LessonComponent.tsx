"use client";

import styles from "./LessonComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LessonComponent({
  title,
  link,
  isComplete,
}: ModuleItemProps) {
  let [icon, setIcon] = useState(
    isComplete ? "/complete-lesson.svg" : "/incomplete-lesson.svg"
  );

  function toggleComplete() {
    isComplete = !isComplete;
    setIcon(isComplete ? "/complete-lesson.svg" : "/incomplete-lesson.svg");
  }

  return (
    <div className={styles.item}>
      <Image
        src="/lesson-icon.svg"
        width={30}
        height={30}
        alt="Lesson Icon"
        className={styles.icon}
      />
      <Link href={link} className={styles.link}>
        {title}
      </Link>
      <button onClick={toggleComplete} className={styles.button}>
        <Image src={icon} width={30} height={30} alt="Lesson Icon" />
      </button>
    </div>
  );
}
