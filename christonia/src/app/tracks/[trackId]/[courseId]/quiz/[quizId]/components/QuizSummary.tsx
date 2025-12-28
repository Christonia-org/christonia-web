import { BookOpen, RotateCcw } from "lucide-react";

export default function QuizSummary({
  score,
  correctCount,
  totalQuestions,
  onRestart,
  onViewCourse,
}: any) {
  const getFeedback = () => {
    if (score === 100)
      return {
        msg: "Perfect! You've mastered this material.",
        color: "text-green-500",
      };
    if (score >= 80)
      return {
        msg: "Good job! You may proceed to the next lesson.",
        color: "text-yellow-500",
      };
    if (score >= 60)
      return {
        msg: "Reviewing the relevant module material before retaking is suggested.",
        color: "text-orange-500",
      };
    return {
      msg: "We recommend you review the material and redo the quiz before continuing.",
      color: "text-red-500",
    };
  };

  const feedback = getFeedback();

  return (
    <div className="bg-[#1e2a4a] border border-gray-700 rounded-3xl p-12 text-center my-12 shadow-2xl">
      <h2 className="text-4xl font-bold text-white mb-4">You Scored</h2>
      <div
        className={`text-6xl md:text-8xl font-black mb-8 whitespace-nowrap ${feedback.color}`}
      >
        {correctCount} / {totalQuestions}
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
        {feedback.msg}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={onViewCourse}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-gray-600 rounded-xl hover:bg-gray-800 text-white font-bold transition-all"
        >
          <BookOpen size={22} /> View Course
        </button>
        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-teal rounded-xl hover:scale-105 text-white font-bold transition-all"
        >
          <RotateCcw size={22} /> Restart Quiz
        </button>
      </div>
    </div>
  );
}
