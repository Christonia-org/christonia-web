"use client";
import { useState } from "react";
import styles from "./page.module.css";
import SupportUsSection from "@/components/SupportUsSection";
import FoundationsCourseCard from "./components/FoundationsCourseCard/FoundationsCourseCard";
import TrackCard from "./components/TrackCard/TrackCard";
import { getTracks } from "@/lib/mock/tracks";

export default function TracksPage() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const handleSelect = (id: string) => {
    setSelectedItemId(id);
  };

  const tracks = getTracks();

  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.title}>All Tracks</h1>
        <FoundationsCourseCard
          name="Foundations"
          description="This is where your journey starts! Start with an introduction to Christianity, covering the core Christian doctrine, early Church history, common objections to Christianity, and different responses to these criticisms."
          link="/tracks/foundations"
          id="foundations"
          isSelected={selectedItemId === "foundations"}
          onSelect={handleSelect}
        />
        <p className={styles.divider}>Then choose a track</p>
        <div className={styles.trackContainer}>
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              id={track.id}
              name={track.name}
              description={track.description}
              link={track.link}
              courseCount={track.courseCount}
              isSelected={selectedItemId === track.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
      <SupportUsSection />
    </>
  );
}
