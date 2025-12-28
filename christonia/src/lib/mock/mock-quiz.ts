const quiz = {
  id: "quiz1",
  title: "Quiz 1",
  questions: [
    {
      id: "question1",
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris",
    },
    {
      id: "question2",
      question: "What is the capital of Germany?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Berlin",
    },
    {
      id: "question3",
      question: "What is the capital of Italy?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Rome",
    },
    {
      id: "question4",
      question: "What is the capital of Spain?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Rome",
    },
    {
      id: "question5",
      question: "What is the capital of Portugal?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Rome",
    },
  ],
};

export default function getQuiz() {
  return quiz;
}
