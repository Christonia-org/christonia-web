import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";

export default function QuizResultCard({ question, correction, index }: any) {
  const labels = ["A", "B", "C", "D"];
  const skipped = !correction.userAnswer;

  return (
    <div className="bg-[#2f3f54] rounded-2xl border border-gray-600 overflow-hidden my-8 shadow-sm scroll-mt-24">
      <div className="px-6 border-b border-gray-600">
        <h3 className="text-lg font-bold text-white mt-5 pb-5">
          Question {index + 1}:
          <span className="font-medium text-gray-200 ml-2">
            {question.question}
          </span>
        </h3>
      </div>

      {skipped && (
        <div className="bg-orange-500/10 border-b border-orange-500/20 px-6 py-3 flex items-center gap-3 text-orange-400 text-sm font-semibold">
          <AlertTriangle size={18} /> Warning: Question was unanswered
        </div>
      )}

      <div className="p-6 flex flex-col gap-1">
        {question.options.map((option: string, i: number) => {
          const isCorrect = option === correction.correctAnswer;
          const isUserChoice = option === correction.userAnswer;

          let bgClass = "bg-transparent border-gray-700 text-gray-300";
          let circleClass = "border-gray-500 text-gray-400";
          let icon = null;

          if (isCorrect) {
            bgClass = "bg-emerald-500/10 border-emerald-500 text-emerald-400";
            circleClass = "bg-emerald-500 border-emerald-500 text-white";
            icon = <CheckCircle2 size={20} />;
          } else if (isUserChoice && !isCorrect) {
            bgClass = "bg-red-500/10 border-red-500 text-red-400";
            circleClass = "bg-red-500 border-red-500 text-white";
            icon = <XCircle size={20} />;
          }

          return (
            <div
              key={i}
              className={`flex items-center gap-4 px-4 py-2 rounded-xl border transition-all text-left ${bgClass}`}
            >
              <div
                className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center font-bold text-sm ${circleClass}`}
              >
                {labels[i]}
              </div>

              <span className="flex-grow text-base">{option}</span>

              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
