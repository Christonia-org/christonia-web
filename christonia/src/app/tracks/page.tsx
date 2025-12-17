"use client";
import { useState } from "react";
import SupportUsSection from "@/components/SupportUsSection";
import FoundationsCourseCard from "./components/FoundationsCourseCard";
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
      <div className="flex flex-col items-center min-h-screen text-white p-8 pb-16 gap-16 font-sans">
        <h1 className="text-4xl md:text-5xl font-bold text-center m-0">
          All Tracks
        </h1>

        <FoundationsCourseCard
          name="Foundations"
          description="This is where your journey starts! Start with an introduction to Christianity, covering the core Christian doctrine, early Church history, common objections to Christianity, and different responses to these criticisms."
          link="/tracks/foundations"
          id="foundations"
          isSelected={selectedItemId === "foundations"}
          onSelect={handleSelect}
        />

        <p
          className="flex items-center w-full max-w-[1200px] text-2xl md:text-3xl font-bold text-gray-400 m-0 
          before:content-[''] before:flex-grow before:h-[2px] before:bg-gray-600 before:mr-5
          after:content-[''] after:flex-grow after:h-[2px] after:bg-gray-600 after:ml-5"
        >
          Then choose a track
        </p>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 w-full max-w-[1200px]">
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
