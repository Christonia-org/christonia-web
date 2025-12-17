import Link from "next/link";
import ContributeCard from "./ContributeCard";

export default function HowToContributeSection() {
  return (
    <section className="flex flex-col items-center text-center px-6 py-12 md:pb-16 w-full bg-background text-[#DADADA] font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 max-w-[800px] leading-tight">
        How to Contribute
      </h1>

      <p className="text-base md:text-[1.1rem] leading-relaxed text-[#c9cdd4] mb-6 max-w-[800px]">
        Christonia is a project built and maintained by{" "}
        <Link
          href="/team"
          className="text-white font-bold hover:underline underline-offset-4"
        >
          volunteers
        </Link>{" "}
        who dedicate their time and skills to making Christonia one of the best
        Christian educational platforms. We are always working on features to
        improve Christonia and are always looking for people who want to join
        our growing team of maintainers.
      </p>

      <i className="text-sm md:text-base text-[#c9cdd4] italic mb-6 max-w-[800px] block">
        If you are interested in supporting us financially, you can learn about
        that on{" "}
        <Link
          href="/support-us"
          className="text-white font-bold hover:underline underline-offset-4"
        >
          our support page
        </Link>
        .
      </i>

      <h2 className="text-2xl md:text-3xl font-semibold text-white mt-8 mb-10 max-w-[800px]">
        There are two main ways you can contribute:
      </h2>

      <div className="flex flex-col md:flex-row gap-8 w-full max-w-[1000px] justify-center">
        <div className="flex-1">
          <ContributeCard
            title="Contribute to the Curriculum"
            description="The curriculum consists of lessons which are on this platform. 
                        We are constantly updating our curriculum to keep it up to date 
                        with the latest arguments used in theological debates. Our goal 
                        is to maintain an evolving comprehensive curriculum that equips 
                        Christians with the truth. You can contribute to the curriculum 
                        by reaching out via email with a lesson proposal."
            linkTitle="Send Email"
            linkDestination="mailto:michaelkolanjian.christonia@gmail.com"
          />
        </div>
        <div className="flex-1">
          <ContributeCard
            title="Contribute to the Main Site"
            description="This website is a Next.js application. We are constantly working 
                        on new features that would enhance the student's learning experience. 
                        However, as any project, Christonia has many requirements and bugs to 
                        be addressed. If you feel you can help with maintaining the project, 
                        reach out to Michael through email."
            linkTitle="Send Email"
            linkDestination="mailto:michaelkolanjian.christonia@gmail.com"
          />
        </div>
      </div>
    </section>
  );
}
