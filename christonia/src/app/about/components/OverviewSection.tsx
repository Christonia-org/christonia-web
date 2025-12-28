import Link from "next/link";

export default function OverviewSection() {
  // Hardcoded stats for now until your backend is ready
  const userCount = 150;
  const contributorCount = 12;

  return (
    <section className="bg-background-cta text-white px-4 py-16 md:py-20 font-sans text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-10 md:mb-14 mt-0">
        Overview of Christonia
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        <div className="bg-[#2F4967] rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
          <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">{`${userCount}+`}</h3>
          <p className="text-lg md:text-2xl text-[#c9cdd4] m-0">Learners</p>
        </div>

        <div className="bg-[#2F4967] rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
          <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">{`${contributorCount}+`}</h3>
          <p className="text-lg md:text-2xl text-[#c9cdd4] m-0">Contributors</p>
        </div>

        <div className="bg-[#2F4967] rounded-lg p-8 shadow-lg transition-transform hover:scale-105">
          <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">
            2025
          </h3>
          <p className="text-lg md:text-2xl text-[#c9cdd4] m-0">Founded</p>
        </div>

        <div className="md:col-span-2 bg-[#2F4967] rounded-lg p-6 md:p-10 shadow-lg text-left">
          <h2 className="text-2xl font-semibold mb-4 mt-0">
            Origin of Christonia
          </h2>
          <div className="space-y-4 text-base leading-relaxed text-[#c9cdd4]">
            <p>
              Christonia is the Armenian word "Kristonya" for Christian. It is
              also a reference to an ideal world, a utopia, which is under
              Christ's rule.
            </p>
            <p>
              Christonia was founded in 2025 by Michael Kolanjian. Inspired by
              apologists by the likes of David Wood, Jay Dyer, and Godlogic,
              Michael grew eager to get into apologetics. However, the resources
              were scattered, varied, and difficult to understand.
            </p>
            <p>
              Michael made it his mission to make apologetics as accessible as
              possible to the biggest number of people, so he built a website to
              host a completely free Christian theology curriculum prepared by
              Christian theologians and apologists from all backgrounds.
            </p>
            <p>
              His mission would be fulfilled by a joint effort with eager
              contributors who would provide the learning material and fund the
              maintenance of the project.
            </p>
          </div>
        </div>

        <div className="bg-[#2F4967] rounded-lg p-6 md:p-10 shadow-lg text-left flex flex-col">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 mt-0 flex items-center gap-3">
            <img
              src="/github-logo.svg"
              alt="Open Source Icon"
              className="w-9 h-auto"
            />
            Collaborative Work
          </h3>
          <div className="space-y-4 text-base leading-relaxed text-[#c9cdd4] flex-grow">
            <p>
              This website and the curriculum it hosts are a team effort. That
              means anyone who wants to contribute to the code can do so by
              submitting a request.
            </p>
            <p>
              Christonia would not be possible without the hard work of
              contributors from all across the world. If you're interested in
              helping us make Christonia better, please{" "}
              <Link
                href="/contribute"
                className="text-white font-bold hover:underline"
              >
                find out how to contribute
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
