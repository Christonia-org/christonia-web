import GlossaryContentClient from "./components/GlossaryContent/GlossaryContent";

const allGlossaryTerms: GlossaryTermData[] = [
  {
    id: "apologetics",
    name: "Apologetics",
    description:
      "A theological domain that deals with defending one's faith or belief. Christian apologetics, in particular, is a field of Christian theology which defends Christianity against criticism, often by using polemics.",
    similarTerms: [{ id: "polemics", name: "Polemics" }],
  },
  {
    id: "apocrypha",
    name: "Apocrypha",
    description:
      "A term which refers to a set of writings which were not included in the biblical canon often due to uncertain authorship or authenticity. Protestants refer to them as Apocrypha, while Catholics and Orthodox Christians use the term Deuterocanon.",
    similarTerms: [
      { id: "canon", name: "Canon" },
      { id: "deuterocanon", name: "Deuterocanon" },
    ],
  },
  {
    id: "dawah",
    name: "Dawah",
    description:
      'Dawah is an Arabic word meaning "invitation" or "call". In Islam, it refers to the act of inviting people to Islam.',
    similarTerms: [],
  },
  {
    id: "theosis",
    name: "Theosis",
    description:
      "Theosis, or deification, is a transformative process whose aim is likeness to or union with God, as taught by the Eastern Orthodox Church and some Eastern Catholic Churches.",
    similarTerms: [],
  },
  {
    id: "liturgy",
    name: "Liturgy",
    description:
      "Liturgy is the customary public worship performed by a religious group, according to its particular traditions. It is a form of ritualized worship.",
    similarTerms: [],
  },
  {
    id: "strawman",
    name: "Strawman",
    description:
      'A strawman fallacy is a common type of logical fallacy that occurs when someone misrepresents or distorts their opponent\'s argument to make it easier to attack. Instead of engaging with the actual argument, they create a "straw man" version of it.',
    similarTerms: [{ id: "fallacy", name: "Fallacy" }],
  },
  {
    id: "polemics",
    name: "Polemics",
    description:
      "Polemics is the art or practice of engaging in controversial debate or dispute. In theology, polemics often refers to the defense of one's own religious beliefs against the criticisms or doctrines of others.",
    similarTerms: [{ id: "apologetics", name: "Apologetics" }],
  },
  {
    id: "canon",
    name: "Canon",
    description:
      "In a religious context, a canon is a collection of sacred books accepted as genuine. The biblical canon refers to the collection of books considered authoritative by a religious community.",
    similarTerms: [{ id: "apocrypha", name: "Apocrypha" }],
  },
  {
    id: "deuterocanon",
    name: "Deuterocanon",
    description:
      "Deuterocanonical books are books and passages considered canonical in the Catholic Church and Eastern Orthodoxy but are considered apocryphal by Protestants.",
    similarTerms: [
      { id: "apocrypha", name: "Apocrypha" },
      { id: "canon", name: "Canon" },
    ],
  },
];

export default function GlossaryPage() {
  return (
    <div className="bg-background min-h-screen text-white px-4 py-12 md:px-8 flex flex-col items-center font-sans">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-center leading-tight">
        Glossary
      </h1>

      <div className="w-full max-w-5xl">
        <GlossaryContentClient terms={allGlossaryTerms} />
      </div>
    </div>
  );
}
