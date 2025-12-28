"use client";

import Image from "next/image";
import Link from "next/link";

interface PersonCardProps {
  profilePicUrl: string;
  name: string;
  joinDate: string;
  country: string;
  githubUrl?: string;
  youtubeUrl?: string;
  xUrl?: string;
  linkedinUrl?: string;
}

export default function PersonCard({
  profilePicUrl,
  name,
  joinDate,
  country,
  githubUrl,
  youtubeUrl,
  xUrl,
  linkedinUrl,
}: PersonCardProps) {
  return (
    <div className="bg-[#2b3956] rounded-xl p-5 shadow-lg flex flex-col items-center text-center text-white h-[250px] w-[200px] shrink-0 font-sans border border-white/5 transition-transform hover:translate-y-[-4px]">
      <div className="w-20 h-20 rounded-full bg-[#c9cdd4] flex justify-center items-center overflow-hidden mb-4 shrink-0 shadow-inner">
        <Image
          src={profilePicUrl}
          alt={`${name}'s profile picture`}
          width={80}
          height={80}
          className="w-full h-full object-cover aspect-square rounded-full"
          onError={(e) => {
            e.currentTarget.src = "/profile-icon.svg";
          }}
        />
      </div>

      <h3 className="text-lg md:text-xl font-bold mb-1 leading-snug min-h-[3rem] flex items-center justify-center">
        {name}
      </h3>

      <p className="text-xs text-[#c9cdd4] mb-2">
        Joined {joinDate} &bull; {country}
      </p>

      <div className="flex justify-center gap-4 mt-auto pb-2">
        {xUrl && <SocialIcon href={xUrl} src="/x-logo.svg" alt="X" />}
        {githubUrl && (
          <SocialIcon href={githubUrl} src="/github-logo.svg" alt="GitHub" />
        )}
        {youtubeUrl && (
          <SocialIcon href={youtubeUrl} src="/youtube-logo.svg" alt="YouTube" />
        )}
        {linkedinUrl && (
          <SocialIcon
            href={linkedinUrl}
            src="/linkedin-logo.svg"
            alt="LinkedIn"
          />
        )}
      </div>
    </div>
  );
}

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="opacity-60 hover:opacity-100 transition-opacity transform hover:scale-110"
    >
      <Image
        src={src}
        alt={alt}
        width={20}
        height={20}
        className="w-5 h-5 brightness-0 invert"
      />
    </Link>
  );
}
