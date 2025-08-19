import styles from "./QuizComponent.module.css";
import Image from "next/image";
import Link from "next/link";

export default function QuizComponent({
  title,
  link,
  isComplete,
}: ModuleItemProps) {
  let icon = isComplete ? "/complete-lesson.svg" : "/incomplete-lesson.svg";

  return (
    <div className={styles.item}>
      <Image
        src="/quiz-icon.svg"
        width={30}
        height={30}
        alt="Lesson Icon"
        className={styles.icon}
      />
      <Link href={link} className={styles.link}>
        {title}
      </Link>
      <button className={styles.button}>
        <Image src={icon} width={30} height={30} alt="Lesson Icon" />
      </button>
    </div>
  );
}
