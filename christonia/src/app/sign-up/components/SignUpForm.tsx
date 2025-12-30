"use client";

import { useActionState } from "react";
import { signUpAction } from "@/app/actions/auth";

export default function SignUpForm() {
  // state: the return value from the action ({ error?: string, success?: string })
  // formAction: the function to pass to the form's action prop
  // isPending: true while the server action is running
  const [state, formAction, isPending] = useActionState(signUpAction, null);

  const inputClasses =
    "bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base focus:outline-none focus:border-[#c4d7ed] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const labelClasses = "text-sm font-medium";

  return (
    <form
      action={formAction}
      className="bg-[#263343] p-8 md:p-10 rounded-xl w-full max-w-[400px] shadow-2xl flex flex-col gap-6 font-sans text-[#DADADA] mx-auto"
    >
      {/* Feedback Messages */}
      {state?.error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-md text-sm font-medium animate-in fade-in slide-in-from-top-1">
          {state.error}
        </div>
      )}

      {state?.success && (
        <div className="bg-green-500/10 border border-green-500/50 text-green-500 p-3 rounded-md text-sm font-medium animate-in fade-in slide-in-from-top-1">
          {state.success}
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="username" className={labelClasses}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          disabled={isPending}
          className={inputClasses}
          placeholder="e.g. EarlyChurchFan"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          disabled={isPending}
          className={inputClasses}
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className={labelClasses}>
          Password
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
        <label htmlFor="passwordConfirmation" className={labelClasses}>
          Password Confirmation
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

      <p className="text-sm text-[#c9cdd4] text-center my-2">
        By signing up, you agree to our terms of use.
      </p>

      <button
        type="submit"
        disabled={isPending}
        className="bg-brand-teal text-white text-base font-semibold rounded-md py-3 cursor-pointer transition-all hover:bg-brand-teal-dark active:scale-[0.98] disabled:bg-[#4a5a75] disabled:text-gray-400 disabled:cursor-not-allowed flex justify-center items-center"
      >
        {isPending ? (
          <div className="flex items-center gap-2">
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Creating Account...
          </div>
        ) : (
          "Sign Up"
        )}
      </button>

      <div className="flex items-center gap-4 my-1">
        <div className="flex-grow h-px bg-[#BFBFBF]/30"></div>
        <span className="text-sm text-[#c9cdd4] whitespace-nowrap">
          Or continue with
        </span>
        <div className="flex-grow h-px bg-[#BFBFBF]/30"></div>
      </div>

      <button
        type="button"
        disabled={isPending}
        className="bg-[#17223D] border border-[#4a5a75] rounded-md py-2 flex justify-center items-center transition-all hover:bg-white/5 active:scale-[0.98] disabled:opacity-50"
      >
        <img src="/google-logo.svg" alt="Google logo" className="w-10 h-auto" />
      </button>
    </form>
  );
}
