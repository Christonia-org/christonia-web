export default function WhyYouShouldContributeSection() {
  return (
    <section className="bg-[#2F3F54] text-[#DADADA] px-6 py-12 md:pb-24 flex flex-col items-center text-center w-full font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">
        Why you should contribute
      </h1>

      <div className="flex flex-col gap-12 md:gap-16 max-w-[800px] w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left group">
          <img
            src="/time-icon.svg"
            alt="Time Icon"
            className="w-20 h-20 shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Flexibility
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4]">
              You can work on your own time. It's not 9 to 5 so you can get
              involved when it's convenient for you.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left group">
          <img
            src="/meeting-icon.svg"
            alt="Meeting Icon"
            className="w-20 h-20 shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Experience
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4]">
              You'll get the chance to work within a team of experienced
              theologians and work on new arguments that expand your
              capabilities.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left group">
          <img
            src="/community-icon.svg"
            alt="Community Icon"
            className="w-20 h-20 shrink-0 transition-transform duration-300 group-hover:scale-110"
          />
          <div className="flex flex-col">
            <h3 className="text-2xl font-semibold text-white mb-2">Impact</h3>
            <p className="text-base md:text-lg leading-relaxed text-[#c9cdd4]">
              The features you work on or the lessons you create will transform
              thousands of students into critical learners with a deep
              understanding of Christian thought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
