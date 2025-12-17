"use client";

import React from "react";
import Image from "next/image";
import ProgressBar from "./ProgressBar/ProgressBar";

interface ProfileSummaryProps {
  username: string;
  title: string;
  level: number;
  currentXp: number;
  maxXp: number;
  nextTitle: string;
  aboutText: string;
}

export default function ProfileSummary({
  username,
  title,
  level,
  currentXp,
  maxXp,
  nextTitle,
  aboutText,
}: ProfileSummaryProps) {
  return (
    <div className="bg-[#2c3e50] text-[#ecf0f1] border border-[#34495e] rounded-lg p-6 md:p-8 w-full shadow-xl font-sans">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 pb-6 mb-6 border-b border-[#34495e]">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#bdc3c7] rounded-full w-[100px] h-[100px] flex items-center justify-center overflow-hidden mb-4 shrink-0 shadow-inner">
            <Image
              src="/profile-icon.svg"
              alt="Profile Picture"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-[2.25rem] font-bold text-white mt-3 leading-tight">
            {username}
          </h2>
          <p className="text-[#BCBCBC] text-lg mt-1">{title}</p>
        </div>

        <div className="flex flex-col w-full md:w-[45%] gap-4 my-auto">
          <h2 className="text-2xl font-bold text-white text-center md:text-left">
            Level {level}
          </h2>

          <div className="w-full">
            <ProgressBar currentValue={currentXp} maxValue={maxXp} />
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 text-[#BCBCBC] font-bold">
            <span className="whitespace-nowrap">Next Title:</span>

            <span className="text-[#f1c40f] whitespace-nowrap">
              {nextTitle}
            </span>
          </div>
        </div>
      </div>

      <div className="text-left">
        <h2 className="text-2xl md:text-[1.875rem] font-bold text-white text-center mb-5">
          About me
        </h2>
        <p className="text-[#bdc3c7] text-base md:text-xl leading-relaxed text-center md:text-left">
          {aboutText}
        </p>
      </div>
    </div>
  );
}
