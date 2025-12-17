export default function HowItWorksSection() {
  const steps = [
    {
      img: "/bible-icon.svg",
      title: "Learn",
      desc: "Learn from a curriculum set by expert theologians designed to help you grow.",
    },
    {
      img: "/keyboard-icon.svg",
      title: "Write",
      desc: "Write blogs that reflect your learning progress based on the material you covered so far.",
    },
    {
      img: "/phone-icon.svg",
      title: "Publish",
      desc: "Publish blogs, review them with AI and upload them for others to read.",
    },
    {
      img: "/community-icon.svg",
      title: "Discuss",
      desc: "Discuss and share your questions with a supportive community of likeminded learners.",
    },
  ];

  return (
    <section className="bg-background-alt text-white flex flex-col items-center justify-center text-center gap-8 py-16 px-6 md:py-24 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight m-0">
        How it works
      </h1>

      <p className="text-base md:text-xl leading-relaxed text-[#c9cdd4] max-w-[90%] md:max-w-[60%] mb-10 md:mb-14">
        This is the platform that connects you to the greatest Christian minds.
        Here you'll have free access to comprehensive material written by the
        world's most experienced theologians and apologists.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-[1200px] w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 text-center group"
          >
            <img
              src={step.img}
              alt={`${step.title} Icon`}
              className="w-[60px] h-[60px] md:w-[100px] md:h-[100px] mb-4 transition-transform duration-300 group-hover:scale-110"
            />
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              {step.title}
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-[#c9cdd4]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
