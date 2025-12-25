"use client";

import { useState } from "react";
import { X } from "lucide-react";

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  blogTitle: string;
}

export default function ReportModal({
  isOpen,
  onClose,
  blogTitle,
}: ReportModalProps) {
  const [reason, setReason] = useState("");
  const options = [
    "Inappropriate content",
    "Misleading information",
    "Spam",
    "Hate speech",
    "Other",
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#2F3F54] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#2b3a4d]">
          <h3 className="text-xl font-bold text-white">Report Blog</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-6 text-sm">
            Reporting:{" "}
            <span className="text-white font-semibold">"{blogTitle}".</span>
            {"\n"}We'll check for all guidelines, so don't worry about making
            the perfect choice.
          </p>

          <div className="space-y-4">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="radio"
                  name="report-reason"
                  value={option}
                  onChange={(e) => setReason(e.target.value)}
                  className="w-5 h-5 accent-brand-teal bg-transparent border-gray-500"
                />
                <span className="text-gray-200 group-hover:text-white transition-colors">
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="p-6 flex gap-4 bg-[#2b3a4d]/50">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            disabled={!reason}
            className="flex-1 px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:hover:bg-red-500 text-white font-semibold transition-all"
            onClick={() => {
              console.log("Reported for:", reason);
              onClose();
            }}
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
