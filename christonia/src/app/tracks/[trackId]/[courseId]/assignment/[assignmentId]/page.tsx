import fs from "fs";
import path from "path";
import AssignmentContent from "./components/AssignmentContent";
import SupportUsSection from "@/components/SupportUsSection";

export default async function AssignmentPage({
  params,
}: {
  params: { assignmentId: string };
}) {
  const { assignmentId } = await params;

  const filePath = path.join(process.cwd(), "content", `${assignmentId}.md`);
  const fallbackPath = path.join(
    process.cwd(),
    "content",
    "test-assignment.md"
  );

  let markdown = "";
  try {
    markdown = fs.readFileSync(filePath, "utf8");
  } catch {
    markdown = fs.readFileSync(fallbackPath, "utf8");
  }

  return (
    <>
      <AssignmentContent initialMarkdown={markdown} />
      <SupportUsSection />
    </>
  );
}
