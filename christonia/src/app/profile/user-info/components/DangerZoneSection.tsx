"use client";

import { RefreshCw, Trash2 } from "lucide-react";

export default function DangerZoneSection() {
  return (
    <section className="border border-gray-600 bg-[#263343] rounded-xl p-6 md:px-16 md:py-10 text-white shadow-lg flex flex-col font-sans">
      <h1 className="text-2xl font-semibold">Danger Zone</h1>
      <p className="text-[#bfbfbf] text-base mt-1 mb-8">
        Careful, these actions cannot be undone.
      </p>

      <div className="flex flex-col gap-4">
        <button className="group flex items-center gap-4 w-full sm:w-[220px] p-3 border border-gray-600 rounded-lg bg-transparent transition-all duration-200 hover:bg-[oklch(37.3%_0.034_259.733)] hover:border-gray-400 active:scale-95">
          <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
            <RefreshCw size={25} />
          </div>
          <span className="text-base font-medium text-left">
            Reset Progress
          </span>
        </button>

        <button className="group flex items-center gap-4 w-full sm:w-[220px] p-3 border border-gray-600 rounded-lg bg-transparent transition-all duration-200 hover:bg-red-950/30 hover:border-red-500/50 active:scale-95">
          <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity text-red-500">
            <Trash2 size={25} />
          </div>
          <span className="text-base font-medium text-left text-red-500 group-hover:text-red-400 transition-colors">
            Delete Account
          </span>
        </button>
      </div>
    </section>
  );
}
