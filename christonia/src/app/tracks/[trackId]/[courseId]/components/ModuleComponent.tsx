"use client";

import ModuleItem from "./ModuleItem";

interface ModuleItemData {
  id: string;
  title: string;
  link: string;
  type: string;
}

interface ModuleComponentProps {
  module: {
    id: string;
    name: string;
    items: ModuleItemData[];
  };
  trackId: string;
  courseId: string;
}

export default function ModuleComponent({
  module,
  trackId,
  courseId,
}: ModuleComponentProps) {
  return (
    <div className="flex flex-col bg-[#2f3f54] text-white w-full border border-gray-600 rounded-xl overflow-hidden my-4 shadow-sm">
      <div className="px-6 md:px-8 py-4 border-b border-gray-600 bg-[#2b3a4d]">
        <h3 className="text-xl font-bold m-0 tracking-tight">{module.name}</h3>
      </div>

      <div className="flex flex-col">
        {module.items.map((item, index) => {
          const isLast = index === module.items.length - 1;

          return (
            <div
              key={item.id}
              className={`${
                !isLast ? "border-b border-gray-700/50" : ""
              } transition-colors`}
            >
              <ModuleItem
                title={item.title}
                link={`/tracks/${trackId}/${courseId}/${item.type}/${item.link}`}
                type={item.type}
                isComplete={false} // Placeholder
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
