"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface SignedInHeaderProps {
  userProfilePicUrl?: string;
}

export default function SignedInHeader({
  userProfilePicUrl,
}: SignedInHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLLIElement>(null);
  // Close profile dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "All Tracks", href: "/tracks" },
    { name: "About", href: "/about" },
    { name: "Glossary", href: "/glossary" },
    { name: "Support us", href: "/support-us" },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <header className="bg-background flex justify-between items-center px-6 py-4 md:px-16 md:py-6 text-white relative z-50">
      <div className="flex items-center gap-2.5">
        <img
          src="/icon.png"
          alt="Christonia Logo"
          className="h-12 md:h-16 w-auto"
        />
        <Link
          href="/"
          className="text-xl md:text-2xl font-semibold no-underline text-white"
        >
          Christonia
        </Link>
      </div>

      <nav>
        <ul className="hidden lg:flex items-center gap-8 m-0 p-0 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-white no-underline text-base font-medium whitespace-nowrap hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="block shrink-0 focus:outline-none transition-transform active:scale-95"
            >
              <Image
                src={userProfilePicUrl || "/profile-icon.svg"}
                alt="Profile Image"
                width={45}
                height={45}
                className="rounded-full object-cover border border-gray-700 hover:border-brand-teal transition-colors"
              />
            </button>

            {isProfileOpen && (
              <div className="absolute right-0 mt-3 w-56 bg-[#1e2a4a] border border-gray-600 rounded-lg shadow-xl py-2 overflow-hidden animate-in fade-in zoom-in duration-200">
                <Link
                  href="/profile/user-info"
                  className="flex items-center px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-white transition-colors no-underline"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Edit Profile
                </Link>
                <Link
                  href="/profile/password"
                  className="flex items-center px-4 py-3 text-sm text-gray-200 hover:bg-white/10 hover:text-white transition-colors no-underline"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Change Password
                </Link>
                <hr className="border-gray-600 my-1" />
                <button
                  className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
                  onClick={() => {
                    /* Sign out logic */
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}
          </li>
        </ul>

        <button
          className="lg:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1e2a4a] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-8 gap-6 mt-16">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white text-lg font-medium no-underline"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-gray-600" />

          <div className="flex flex-col gap-4">
            <Link
              href="/profile/user-info"
              className="text-gray-300 no-underline text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Edit Profile
            </Link>
            <Link
              href="/profile/password"
              className="text-gray-300 no-underline text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Change Password
            </Link>
            <button
              className="text-left text-red-400 text-base"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
