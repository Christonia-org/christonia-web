import Image from "next/image";

export default function AboutSection() {
  const expectations = [
    {
      img: "/map-icon.svg",
      title: "A full roadmap to Christian apologetics",
      desc: "Benefit from a roadmap set by the best Christian theologians to get you started with apologetics.",
    },
    {
      img: "/keyboard-icon.svg",
      title: "Learn by reflecting",
      desc: "Write blogs that reflect on what you learned to solidify your understanding and refine your points.",
    },
    {
      img: "/phone-icon.svg",
      title: "Share with the community",
      desc: "Get AI reviews before publishing your blogs and benefit from peer reviews by sharing your blogs with the community.",
    },
    {
      img: "/community-icon.svg",
      title: "Get connected with the community",
      desc: "Join a community of likeminded learners and discuss your learning journey with members of the Christonia community.",
    },
  ];

  return (
    <section className="bg-background text-white flex flex-col items-center px-6 py-12 md:pb-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center max-w-[900px] w-full leading-tight">
        About Christonia
      </h1>

      <div className="max-w-[900px] w-full space-y-4 mb-12">
        <p className="text-xl md:text-2xl font-bold leading-relaxed text-left">
          Christonia is one of those “I wish I had this when I was wrestling
          with hard questions” resources.
        </p>
        <p className="text-base md:text-[1.1rem] leading-relaxed text-[#c9cdd4] text-left">
          Not everyone has the time, patience, or discernment to sift through
          the noise and find trustworthy answers to the challenges raised
          against Christianity. That's where Christonia comes in. Christonia
          offers an open-source, comprehensive curriculum built to equip
          believers with solid knowledge, from early church history to responses
          to some of the toughest objections. And because every Christian walks
          within a particular tradition, Christonia gives you the freedom to
          focus on a track that aligns with your church's teachings.
        </p>
      </div>

      <h2 className="text-3xl md:text-[2.5rem] font-bold mt-8 mb-12 text-center max-w-[900px] w-full leading-tight">
        What you can expect at Christonia
      </h2>

      <ul className="list-none p-0 m-0 flex flex-col gap-9 md:gap-[2.3rem] max-w-[900px] w-full">
        {expectations.map((item, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 text-center md:text-left max-w-full md:max-w-[85%]"
          >
            <Image
              src={item.img}
              alt={`${item.title} Icon`}
              className="w-12 h-12 md:w-[90px] md:h-auto shrink-0"
            />
            <div className="flex-grow">
              <h3 className="text-lg md:text-[1.35rem] font-semibold mb-2 text-white">
                {item.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-[#c9cdd4]">
                {item.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
