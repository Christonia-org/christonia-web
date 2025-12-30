"use client";

import { useActionState } from "react";
import { updatePasswordAction } from "@/app/actions/auth";

export default function ResetPasswordForm() {
  const [state, formAction, isPending] = useActionState(
    updatePasswordAction,
    null
  );

  const inputClasses =
    "bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base focus:outline-none focus:border-[#c4d7ed] transition-colors disabled:opacity-50";

  return (
    <form
      action={formAction}
      className="bg-[#263343] p-10 rounded-xl w-full max-w-[400px] shadow-2xl flex flex-col gap-7 font-sans text-[#DADADA] mx-auto"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="password" className="text-sm font-medium">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            disabled={isPending}
            className={inputClasses}
            placeholder="••••••••"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="passwordConfirmation" className="text-sm font-medium">
            Confirm New Password
          </label>
          <input
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            required
            disabled={isPending}
            className={inputClasses}
            placeholder="••••••••"
          />
        </div>
      </div>

      {state?.error && (
        <p className="text-red-400 text-sm font-medium">{state.error}</p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-brand-teal text-white text-base font-semibold rounded-md py-3 w-full cursor-pointer transition-all hover:bg-brand-teal-dark active:scale-[0.98] disabled:bg-gray-600"
      >
        {isPending ? "Updating..." : "Update Password"}
      </button>
    </form>
  );
}
