"use client";
import { useState } from "react";
import styles from "./page.module.css";
import SupportUsSection from "@/components/SupportUsSection/SupportUsSection";
import FoundationsCourseCard from "./components/FoundationsCourseCard/FoundationsCourseCard";
import TrackCard from "./components/TrackCard/TrackCard";

export default function TracksPage() {
  const [selectedItemId, setSelectedItemId] = useState<string>("");

  const handleSelect = (id: string) => {
    setSelectedItemId(id);
  };

  const tracks = [
    {
      id: "orthodox",
      name: "Orthodox",
      description:
        "This track guides you through our complete Orthodoxy curriculum. The courses must be taken in order. You'll explore the ancient roots of the Orthodox Church, the Ecumenical Councils, the development of the Biblical canon, and the Great Schism. You'll examine the liturgical life of Orthodoxy, the theology of icons, the veneration of the saints, and the central role of Holy Tradition. You'll also study Orthodox apologetics, addressing theological and historical criticisms from an Orthodox perspective.",
      link: "/tracks/orthodox",
      courseCount: 8,
    },
    {
      id: "catholic",
      name: "Catholic",
      description:
        "This track guides you through our complete Catholicism curriculum. The courses must be taken in order. You'll explore the history of the Catholic Church, including its apostolic roots, the development of the papacy, the Ecumenical Councils, and the Eastern schism. You’ll study Catholic doctrine, the sacraments, the veneration of Mary and the saints, the role of tradition alongside Scripture, and dive into Catholic apologetics.",
      link: "/tracks/catholic",
      courseCount: 8,
    },
    {
      id: "protestant",
      name: "Protestant",
      description:
        "This track guides you through our complete Protestantism curriculum. The courses must be taken in order. You'll explore the origins of the Reformation, the teachings of Martin Luther and other reformers, and the rise of Protestant denominations. You'll study core doctrines like Sola Scriptura, Sola Fide, and the priesthood of all believers. You'll also examine Protestant approaches to Scripture, worship, and church life, and learn how to engage in inter-Christian conversations from a Protestant perspective.",
      link: "/tracks/protestant",
      courseCount: 8,
    },
  ];

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
