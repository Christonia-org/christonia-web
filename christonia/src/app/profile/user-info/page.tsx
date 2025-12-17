import ProfileInfoForm from "./components/ProfileInfoForm/ProfileInfoForm";
import DangerZoneSection from "./components/DangerZoneSection/DangerZoneSection";

export default function UserProfilePage() {
  return (
    <div className="flex flex-col gap-8 mb-8 font-sans">
      <ProfileInfoForm
        name="John Doe"
        email="jdoe@me.com"
        aboutMe={null}
        pfpLink={null}
      />

      <DangerZoneSection />
    </div>
  );
}
