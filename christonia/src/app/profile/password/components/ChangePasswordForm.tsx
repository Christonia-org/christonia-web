"use client";

import { useState } from "react";
import Image from "next/image";

export default function ChangePasswordForm() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const PasswordInput = ({
    id,
    label,
    show,
    toggle,
  }: {
    id: string;
    label: string;
    show: boolean;
    toggle: () => void;
  }) => (
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
            /* THE AUTOFILL FIX: Forces the background to stay dark in Firefox/Chrome */
            autofill:shadow-[inset_0_0_0px_1000px_#1e293b]
            autofill:text-white"
        />
        <button
          type="button"
          onClick={toggle}
          className="px-4 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity"
        >
          <Image
            src={show ? "/eye-open.svg" : "/eye-closed.svg"}
            alt="Toggle password visibility"
            width={28}
            height={28}
          />
        </button>
      </div>
    </div>
  );

  return (
    <form className="border border-gray-600 bg-[#263343] rounded-xl p-6 md:px-16 md:py-10 text-white shadow-lg flex flex-col font-sans">
      <h1 className="text-2xl font-semibold">Change Your Password</h1>
      <p className="text-[#bfbfbf] text-base mt-1 mb-2">
        Ensure your account is using a long, random password to stay secure.
      </p>

      <PasswordInput
        id="currentPassword"
        label="Current Password"
        show={showCurrentPassword}
        toggle={() => setShowCurrentPassword(!showCurrentPassword)}
      />

      <PasswordInput
        id="newPassword"
        label="New Password"
        show={showNewPassword}
        toggle={() => setShowNewPassword(!showNewPassword)}
      />

      <PasswordInput
        id="confirmPassword"
        label="Confirm Password"
        show={showConfirmPassword}
        toggle={() => setShowConfirmPassword(!showConfirmPassword)}
      />

      <button
        type="submit"
        className="mt-10 self-end bg-brand-teal text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-teal-dark transition-all active:scale-95 shadow-md"
      >
        Save
      </button>
    </form>
  );
}
