import React from "react";

interface ProgressBarProps {
  currentValue: number;
  maxValue: number;
}

export default function ProgressBar({
  currentValue,
  maxValue,
}: ProgressBarProps) {
  const percentage = Math.min((currentValue / maxValue) * 100, 100);

  const formatValue = (value: number): string => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`;
    }
    return value.toString();
  };

  return (
    <div className="w-full font-sans">
      <div className="text-white text-lg md:text-xl font-bold mb-2">
        XP: {formatValue(currentValue)} / {formatValue(maxValue)}
      </div>

      <div className="bg-[#BCBCBC] rounded-full h-5 w-full overflow-hidden shadow-inner">
        <div
          className="bg-brand-teal h-full transition-all duration-500 ease-in-out rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
