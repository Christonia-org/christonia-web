import styles from "./page.module.css";
import SupportUsSection from "@/components/SupportUsSection/SupportUsSection";
import FoundationsCourseCard from "./components/FoundationsCourseCard/FoundationsCourseCard";
import TrackCard from "./components/TrackCard/TrackCard";

export default function PathsPage() {
  return (
    <>
      <div className={styles.page}>
        <h1>All Paths</h1>
        <FoundationsCourseCard />
        <p>Then choose a track</p>
        <div></div>
      </div>
      <SupportUsSection />
    </>
  );
}
