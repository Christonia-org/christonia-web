"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps {
  id: string;
  label: string;
}

export default function PasswordInput({ id, label }: PasswordInputProps) {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col gap-2 mt-5">
      <label htmlFor={id} className="text-gray-300 text-lg font-semibold">
        {label}
      </label>
      <div className="flex items-center w-full bg-[#1e293b] border border-gray-600 rounded-lg focus-within:border-white transition-colors overflow-hidden group">
        <input
          type={show ? "text" : "password"}
          id={id}
          name={id}
          className="w-full p-3 bg-transparent text-white outline-none 
            autofill:shadow-[inset_0_0_0px_1000px_#1e293b]
            autofill:text-white"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="px-4 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff size={24} /> : <Eye size={24} />}
        </button>
      </div>
    </div>
  );
}
