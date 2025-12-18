"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface ProfileFormProps {
  name: string;
  email: string;
  aboutMe: string | null;
  pfpLink: string | null;
}

export default function ProfileInfoForm({
  name,
  email,
  aboutMe,
  pfpLink,
}: ProfileFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileImageUrl, setProfileImageUrl] = useState(
    pfpLink || "/profile-icon.svg"
  );

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
    <form className="border border-gray-600 bg-[#263343] rounded-xl p-6 md:px-16 md:py-10 text-white shadow-lg flex flex-col font-sans">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <p className="text-[#bfbfbf] text-base mt-1 mb-6">
        Profile information will be displayed on your dashboard.
      </p>

      <div className="flex flex-col gap-4 mt-2">
        <label
          className="text-gray-300 text-lg font-semibold"
          htmlFor="imgSelector"
        >
          Profile Picture
        </label>

        <div className="relative w-20 h-20 group">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-600 bg-[#1e293b]">
            <Image
              src={profileImageUrl}
              alt="Profile Picture"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Upload Button Overlay */}
          <button
            type="button"
            className="absolute bottom-0 right-0 p-1 bg-[#1e293b] border border-gray-600 rounded-full hover:bg-gray-700 transition-colors shadow-md"
            onClick={handlePictureClick}
          >
            <Image
              src="/upload-icon.svg"
              alt="Upload Icon"
              width={20}
              height={20}
            />
          </button>

          <input
            type="file"
            id="imgSelector"
            name="imgSelector"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="username" className="text-gray-300 font-semibold">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            defaultValue={name}
            className="w-full p-3 bg-[#1e293b] border border-gray-600 rounded-md text-white focus:outline-none focus:border-white transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-gray-300 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={email}
            className="w-full p-3 bg-[#1e293b] border border-gray-600 rounded-md text-white focus:outline-none focus:border-white transition-colors"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="aboutMe" className="text-gray-300 font-semibold">
            About Me
          </label>
          <textarea
            id="aboutMe"
            name="aboutMe"
            defaultValue={aboutMe || ""}
            className="w-full p-3 bg-[#1e293b] border border-gray-600 rounded-md text-white focus:outline-none focus:border-white transition-colors min-h-[120px] resize-y"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-8 self-end bg-brand-teal text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-teal-dark transition-all active:scale-95 shadow-md"
      >
        Save
      </button>
    </form>
  );
}
