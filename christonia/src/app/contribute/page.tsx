import HowToContributeSection from "./components/HowToContributeSection/HowToContributeSection";
import WhyYouShouldContributeSection from "./components/WhyYouShouldContributeSection/WhyYouShouldContributeSection";
import SupportUsSection from "@/components/SupportUsSection";

export default function ContributePage() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen text-white bg-background pt-0">
        <HowToContributeSection />
        <WhyYouShouldContributeSection />
      </div>
      <SupportUsSection />
    </>
  );
}
