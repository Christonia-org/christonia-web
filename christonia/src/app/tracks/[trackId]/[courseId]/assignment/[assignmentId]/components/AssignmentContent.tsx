"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import IntegratedBlogEditor from "./IntegratedBlogEditor";
import DefaultLogo from "../../../../../../../../public/default-course-logo.svg";
import Image from "next/image";

export default function AssignmentContent({
  initialMarkdown,
}: {
  initialMarkdown: string;
}) {
  const contentBlocks = initialMarkdown.split(/:::/);

  const metadataBlock = contentBlocks.find((block) =>
    block.trim().startsWith("metadata")
  );

  const parsedMetadata = {
    title: "Untitled Assignment",
    description: "",
    tags: ["Assignment"],
  };

  if (metadataBlock) {
    const lines = metadataBlock.replace("metadata", "").trim().split("\n");
    lines.forEach((line) => {
      const [key, ...valueParts] = line.split(":");
      const value = valueParts.join(":").trim();

      if (key.trim() === "title") parsedMetadata.title = value;
      if (key.trim() === "description") parsedMetadata.description = value;
      if (key.trim() === "tags") {
        parsedMetadata.tags = value.split(",").map((t) => t.trim());
      }
    });
  }

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12">
      <div className="flex items-center gap-6 mb-12">
        <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 overflow-hidden">
          <Image
            src={DefaultLogo}
            alt="Course Logo"
            fill
            className="object-contain p-2"
          />
        </div>
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            {parsedMetadata.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-tight">
            Course Name
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-10">
        <article className="prose prose-invert prose-lg max-w-none">
          {contentBlocks.map((block, index) => {
            const trimmed = block.trim();
            if (trimmed.startsWith("metadata")) return null;

            const isAssignment = trimmed.startsWith("assignment");
            const cleanBlock = isAssignment
              ? block.replace("assignment", "").trim()
              : block;

            return (
              <div
                key={index}
                className={
                  isAssignment
                    ? "bg-[#1e2a4a] p-5 rounded-2xl border border-gray-700  [&_h2]:mt-0 [&_h2]:border-none"
                    : ""
                }
              >
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {cleanBlock}
                </ReactMarkdown>
              </div>
            );
          })}
        </article>

        <IntegratedBlogEditor fixedMetadata={parsedMetadata} />
      </div>
    </div>
  );
}
