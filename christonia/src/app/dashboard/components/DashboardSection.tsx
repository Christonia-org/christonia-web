import ProfileSummary from "./ProfileSummary/ProfileSummary";

export default function DashboardSection() {
  return (
    <section className="flex flex-col items-center w-full gap-8 md:gap-12 font-sans">
      <h1 className="text-4xl md:text-5xl lg:text-[3rem] font-bold text-white text-center">
        Dashboard
      </h1>

      <ProfileSummary
        username="Apostate Prostate"
        title="Cathuman"
        level={1}
        currentXp={26}
        maxXp={100}
        nextTitle="Bishop of Rome"
        aboutText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                           irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                           deserunt mollit anim id est laborum."
      />
    </section>
  );
}
