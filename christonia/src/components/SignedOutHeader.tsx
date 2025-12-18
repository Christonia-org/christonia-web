"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignedOutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "All Tracks", href: "/tracks" },
    { name: "About", href: "/about" },
    { name: "Glossary", href: "/glossary" },
    { name: "Support us", href: "/support-us" },
    { name: "Sign in", href: "/sign-in" },
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
          <li>
            <Link
              href="/sign-up"
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-medium no-underline px-[18px] py-[12px] rounded-[5px] transition-colors duration-300"
            >
              Get Started
            </Link>
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
          <Link
            href="/sign-up"
            className="bg-brand-teal hover:bg-brand-teal-dark text-white font-medium no-underline px-4 py-3 rounded-md text-center transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
