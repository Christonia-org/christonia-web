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
  const [otherText, setOtherText] = useState("");

  const options = [
    "Inappropriate content",
    "Misleading information",
    "Spam",
    "Hate speech",
    "Other",
  ];

  if (!isOpen) return null;

  // Validation Logic:
  // 1. If reason is NOT "Other", button is enabled if a reason is selected.
  // 2. If reason IS "Other", button is enabled only if otherText is not just whitespace.
  const isFormValid =
    reason !== "" && (reason !== "Other" || otherText.trim().length > 0);

  const handleSubmit = () => {
    const finalReason =
      reason === "Other" ? `Other: ${otherText.trim()}` : reason;
    console.log("Reported:", { blogTitle, finalReason });

    setReason("");
    setOtherText("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#2F3F54] w-full max-w-md rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-[#2b3a4d]">
          <h3 className="text-xl font-bold text-white">Report Blog</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-gray-300 mb-6 text-sm leading-relaxed">
            Reporting:{" "}
            <span className="text-white font-semibold">"{blogTitle}"</span>
            <br />
            We review reports against our guidelines. Please select the most
            relevant reason.
          </p>

          <div className="space-y-4">
            {options.map((option) => (
              <div key={option} className="flex flex-col gap-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="report-reason"
                    value={option}
                    checked={reason === option}
                    onChange={(e) => setReason(e.target.value)}
                    className="w-5 h-5 accent-brand-teal bg-transparent border-gray-500 cursor-pointer"
                  />
                  <span className="text-gray-200 group-hover:text-white transition-colors">
                    {option}
                  </span>
                </label>

                {option === "Other" && reason === "Other" && (
                  <textarea
                    autoFocus
                    placeholder="Please specify the reason..."
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                    className=" p-3 bg-[#1e2a4a] border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-brand-teal transition-all resize-none h-24"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-[#2b3a4d]/50">
          <button
            disabled={!isFormValid}
            onClick={handleSubmit}
            className="w-full px-4 py-3 rounded-lg bg-red-500 hover:bg-red-600 disabled:opacity-30 disabled:hover:bg-red-500 text-white font-bold transition-all shadow-lg active:scale-[0.98]"
          >
            Submit Report
          </button>
        </div>
      </div>
    </div>
  );
}
