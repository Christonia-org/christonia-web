import MeetTheTeamSection from "./components/MeetTheTeamSection";
import ToOurContributorsSection from "./components/ToOurContributorsSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function TeamPage() {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-background min-h-screen">
        <MeetTheTeamSection />
        <ToOurContributorsSection />
      </div>
      <SupportUsSection />
    </>
  );
}
