const quiz = {
  id: "theology-basics-1",
  title: "Foundations of Christian Doctrine",
  questions: [
    {
      id: "question1",
      question:
        "Which church council in 325 AD primarily addressed the Arian controversy and affirmed the deity of Christ?",
      options: [
        "Council of Chalcedon",
        "Council of Nicaea",
        "Council of Ephesus",
        "Council of Trent",
      ],
      answer: "Council of Nicaea",
    },
    {
      id: "question2",
      question: "The 'Hypostatic Union' refers to which theological concept?",
      options: [
        "The relationship between the Father and the Son",
        "The union of faith and works in salvation",
        "The union of divine and human natures in the one person of Jesus",
        "The connection between the Old and New Testaments",
      ],
      answer:
        "The union of divine and human natures in the one person of Jesus",
    },
    {
      id: "question3",
      question:
        "Which Reformation 'Sola' emphasizes that Scripture alone is the final authority for the believer?",
      options: ["Sola Fide", "Sola Gratia", "Sola Scriptura", "Solus Christus"],
      answer: "Sola Scriptura",
    },
    {
      id: "question4",
      question:
        "What is the term for the study of the 'end times' or the final destiny of humanity?",
      options: ["Soteriology", "Ecclesiology", "Eschatology", "Pneumatology"],
      answer: "Eschatology",
    },
    {
      id: "question5",
      question:
        "In the context of theodicy, what is the primary question being addressed?",
      options: [
        "How the Bible was canonized",
        "The nature of the Holy Spirit",
        "The existence of evil in the presence of an all-powerful, good God",
        "The proper mode of baptism",
      ],
      answer:
        "The existence of evil in the presence of an all-powerful, good God",
    },
  ],
};

export default function getQuiz() {
  return quiz;
}
