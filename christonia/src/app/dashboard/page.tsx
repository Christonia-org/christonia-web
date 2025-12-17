import DashboardSection from "./components/DashboardSection/DashboardSection";
import ProgressionSection from "./components/ProgressionSection/ProgressionSection";
import MyBlogsSection from "./components/MyBlogsSection/MyBlogsSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-col items-center bg-background min-h-screen w-full font-sans text-white px-4 py-12 md:px-8">
        <div className="w-full max-w-5xl flex flex-col gap-16 md:gap-24">
          <DashboardSection />
          <ProgressionSection />
          <MyBlogsSection />
        </div>
      </div>

      <SupportUsSection />
    </>
  );
}
