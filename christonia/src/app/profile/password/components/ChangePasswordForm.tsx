"use client";

import PasswordInput from "./PasswordInput";

export default function ChangePasswordForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle password change logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-gray-600 bg-[#263343] rounded-xl p-6 md:px-16 md:py-10 text-white shadow-lg flex flex-col font-sans"
    >
      <h1 className="text-2xl font-semibold">Change Your Password</h1>
      <p className="text-[#bfbfbf] text-base mt-1 mb-2">
        Ensure your account is using a long, random password to stay secure.
      </p>

      <PasswordInput id="currentPassword" label="Current Password" />
      <PasswordInput id="newPassword" label="New Password" />
      <PasswordInput id="confirmPassword" label="Confirm Password" />

      <button
        type="submit"
        className="mt-10 self-end bg-brand-teal text-white font-semibold py-2 px-6 rounded-lg hover:bg-brand-teal-dark transition-all active:scale-95 shadow-md"
      >
        Save
      </button>
    </form>
  );
}
