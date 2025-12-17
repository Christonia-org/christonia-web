import MeetTheTeamSection from "./components/MeetTheTeamSection";
import ToOurContributorsSection from "./components/ToOurContributorsSection/ToOurContributorsSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col items-center gap-16 md:gap-24 bg-background min-h-screen w-full">
        <MeetTheTeamSection />
        <ToOurContributorsSection />
      </div>
      <SupportUsSection />
    </>
  );
}
