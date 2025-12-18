import Link from "next/link";

export default function FaqSection() {
  const faqs = [
    {
      q: "How will my money be used?",
      a: "Your money will be used to pay for the costs of running Christonia. This includes paying for the servers that host the website, the domain name, and any other costs associated with running the project. Your money does not go towards paying the maintainers.",
    },
    {
      q: "How can I donate?",
      a: "We have not decided on the donation methodologies yet. Stay tuned for any updates.",
    },
    {
      q: "What form of payments can I use?",
      a: "Once we decide what platform we'll use to accept donations, we'll update this page to inform you what forms of payments you can use.",
    },
    {
      q: "What happens if you receive more donations than needed?",
      a: "Any extra money that we receive will be used to improve Christonia, or will be saved for future needs. This includes paying for new features, paying for new servers, and paying for any other costs associated with running the project.",
    },
    {
      q: "What are the benefits of donating?",
      a: "Your donation helps us continue to provide a comprehensive and completely free apologetics curriculum for anyone and everyone eager to learn. We believe that this material should be available for free to anyone that needs it, and donations from those that have the means to contribute help keep it available for everyone!",
    },
    {
      q: "Does becoming a donor mean I get priority support in the community?",
      a: "No. We feel strongly that everyone should be treated equally in our community, regardless of whether or not they are a donor.",
    },
    {
      q: "I cannot afford to donate right now. What are some other ways I can help Christonia?",
      a: (
        <>
          You can also help us by spreading the word about Christonia. Tell your
          friends, family, and coworkers about us. Share our content on social
          media. The more people that know about us, the more people we can
          help.
          <span className="block mt-4">
            You can also help us by applying the information you're learning in
            your witness, so that others who may have had questions can get
            answers too.
          </span>
        </>
      ),
    },
    {
      q: "I still have questions. How can I contact you?",
      a: (
        <>
          You can contact us through modmail on our discord server, or through
          email. See our{" "}
          <Link
            href="/about#contact-us"
            className="text-brand-teal font-bold underline hover:text-white transition-colors"
          >
            contact us
          </Link>{" "}
          page for details.
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#263343] text-[#dadada] px-6 py-16 flex flex-col items-center font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-10 w-full max-w-full md:max-w-[80%] lg:max-w-[60%]">
        {faqs.map((faq, index) => (
          <div key={index} className="flex flex-col gap-3">
            <h3 className="text-lg md:text-xl font-semibold text-white">
              {faq.q}
            </h3>
            <p className="text-base leading-relaxed text-[#dadada]">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
