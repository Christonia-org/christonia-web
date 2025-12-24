"use client";

interface QuestionProps {
  id: string;
  index: number;
  question: string;
  options: string[];
  selectedOption: string | null;
  onSelect: (option: string) => void;
}

export default function QuizQuestion({
  id,
  index,
  question,
  options,
  selectedOption,
  onSelect,
}: QuestionProps) {
  const labels = ["A", "B", "C", "D"];

  return (
    <div
      id={id}
      className="bg-[#2f3f54] rounded-2xl border border-gray-600 overflow-hidden my-8 shadow-sm scroll-mt-24"
    >
      <div className="px-6 border-b border-gray-600">
        <h3 className="text-lg font-bold text-white mt-5">
          Question {index + 1}:
          <span className="font-medium text-gray-200 ml-2">{question}</span>
        </h3>
      </div>

      <div className="p-6 flex flex-col gap-1">
        {options.map((option, i) => {
          const isSelected = selectedOption === option;
          return (
            <button
              key={i}
              onClick={() => onSelect(option)}
              className={`flex items-center gap-4 px-4 py-2 rounded-xl border transition-all text-left ${
                isSelected
                  ? "bg-brand-teal/10 border-brand-teal text-brand-teal"
                  : "bg-transparent border-gray-700 text-gray-300 hover:bg-gray-700/50"
              }`}
            >
              <div
                className={`w-8 h-8 shrink-0 rounded-full border flex items-center justify-center font-bold text-sm ${
                  isSelected
                    ? "bg-brand-teal text-white border-brand-teal"
                    : "border-gray-500 text-gray-400"
                }`}
              >
                {labels[i]}
              </div>
              <span className="text-base">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
