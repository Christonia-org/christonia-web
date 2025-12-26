"use client";

import { useEffect, useState } from "react";

export default function LessonNavigator({
  sections,
}: {
  sections: { id: string; label: string }[];
}) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-20% 0% -35% 0%" }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="flex flex-col border-l-2 border-gray-500">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`pl-4 py-2 text-m font-medium transition-all border-l-2 -ml-[2px] ${
            activeId === section.id
              ? "text-brand-teal border-brand-teal bg-brand-teal/5"
              : "text-gray-400 border-transparent hover:text-white hover:border-gray-600"
          }`}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
