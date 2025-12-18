import Link from "next/link";

export default function FaqSection() {
  const faqData = [
    {
      q: "Who is Christonia for?",
      a: [
        "Christonia is for anyone who'd like to dive into the world of Christian apologetics. Whether you're passionate about defending Christianity, or you have recurring doubts and need answers, Christonia is the platform for you.",
        "At Christonia, you get a complete curriculum that answers your questions and teaches you how to answer other people's questions.",
      ],
    },
    {
      q: "What is the goal of Christonia?",
      a: [
        "The goal of Christonia is to make it easier to get into Christian apologetics and to help Christians defend their faith and answer criticisms.",
      ],
    },
    {
      q: "How long does it take to complete the curriculum?",
      a: [
        "The curriculum is self-paced, so it depends entirely on you! We don't have a set timeline for you to follow. What matters is that you take the time to understand each topic thoroughly before moving on so that you don't blunder in your discussions with others.",
      ],
    },
    {
      q: "What can I expect to learn from Christonia?",
      a: [
        "You will learn how to defend your Christian faith against common objections, how to engage in respectful dialogue with people of different beliefs, and how to articulate your own faith more clearly.",
      ],
    },
    {
      q: "Is Christonia a replacement to Bible study?",
      a: [
        "Absolutely not! Christonia is designed to complement your Bible study, not replace it. While Bible study focuses on understanding Scripture, Christonia teaches you how to leverage this understanding when addressing criticism.",
      ],
    },
    {
      q: "How is Christonia different from other Christian websites?",
      a: [
        "While other Christian sites offer theology and apologetics resources, most of them share a single perspective. Christonia gives you the luxury of selecting which perspective you'd like to learn from, whether it's the Orthodox, Catholic, or the Protestant track, offered in a structured, user-friendly curriculum.",
        "Moreover, with Christonia you can write blogs to share your own insights on different apologetics and polemics topics with the community. You can benefit from feedback from others, as well as improve your writing with the built-in AI assistant.",
      ],
    },
    {
      q: "What does Christonia mean?",
      a: [
        'Christonia comes from the armenian word Քրիստոնյա, pronounced Kristonya, which means "Christian". It also refers to the word "utopia", which is an ideal world, just as a Christonia would be an ideal Christian world.',
      ],
    },
    {
      q: "Do I have to sign up?",
      a: [
        "Nope. You can browse the curriculum as freely as you want. However, if you want access to blogs, progress tracking, or our elements of gamification, we highly recommend you to sign up. It's completely free, and we collect no personal information from you.",
      ],
    },
    {
      q: "Is Christonia free?",
      a: [
        "Yes, in every sense of the word. You can access the entire curriculum, blogs, and all other features completely free. There is no catch, no hidden fees, no collecting and selling of your data. It just matters to us that every Christian in the world has the right tools to defend their faith in the face of criticism.",
      ],
    },
    {
      q: "Don't tracks lead to further separation among Christians?",
      a: [
        "Not at all. The tracks are there to offer you a more personalized learning experience. In fact, we think it is very important to offer apologetics from different perspectives, because it allows you to understand the different views within Christianity, and how to defend your own view against the others. This is a great way to harbor understanding within the Christian community, which leads to more unity by exposing divisions caused by misunderstandings.",
      ],
    },
    {
      q: "Do you have a code of conduct?",
      a: [
        <>
          Yes we do. We want to ensure that Christonia is a safe and respectful
          space for everyone. You can read our code of conduct by following this{" "}
          <Link
            href="/code-of-conduct"
            className="text-brand-teal font-bold underline hover:text-white transition-colors"
          >
            link
          </Link>
          .
        </>,
      ],
    },
    {
      q: "Can I use this curriculum to teach?",
      a: [
        "Absolutely! In fact, we encourage it. The curriculum is designed to be used as a teaching tool, and we believe that the more people who learn from it, the better.",
        "You can't, however, misrepresent our curriculum or its content to make us say something we didn't. Violation of this policy will result in legal action.",
      ],
    },
    {
      q: "How can I get in touch?",
      a: [
        <>
          You can reach out to us via{" "}
          <Link
            href="mailto:michaelkolanjian.christonia@gmail.com"
            className="text-brand-teal font-bold underline hover:text-white transition-colors"
          >
            email
          </Link>{" "}
          or through our{" "}
          <Link
            href="#"
            className="text-brand-teal font-bold underline hover:text-white transition-colors"
          >
            Discord
          </Link>
          .
        </>,
      ],
    },
  ];

  return (
    <section className="flex flex-col w-full max-w-full md:max-w-[80%] lg:max-w-[60%] px-6 font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col">
        {faqData.map((faq, index) => (
          <details
            key={index}
            className="group py-3 border-b border-[#4a5a75] last:border-b-0 open:pb-6"
          >
            <summary className="flex justify-between items-center text-lg md:text-xl font-semibold text-white cursor-pointer py-6 list-none outline-none">
              <span>{faq.q}</span>
              <svg
                className="w-6 h-6 text-[#DADADA] transition-transform duration-300 group-open:rotate-180"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </summary>

            <div className="flex flex-col gap-4">
              {faq.a.map((paragraph, pIndex) => (
                <p
                  key={pIndex}
                  className="text-base md:text-lg leading-relaxed text-[#DADADA]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
