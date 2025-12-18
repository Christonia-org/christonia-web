export default function SignUpForm() {
  const inputClasses =
    "bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base focus:outline-none focus:border-[#c4d7ed] transition-colors";
  const labelClasses = "text-sm font-medium";

  return (
    <form className="bg-[#263343] p-8 md:p-10 rounded-xl w-full max-w-[400px] shadow-2xl flex flex-col gap-6 font-sans text-[#DADADA] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className={labelClasses}>
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          required
          className={inputClasses}
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
          className={inputClasses}
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
          className={inputClasses}
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
          className={inputClasses}
        />
      </div>

      <p className="text-sm text-[#c9cdd4] text-center my-2">
        By signing up, you agree to our terms of use.
      </p>

      <button
        type="submit"
        className="bg-brand-teal text-white text-base font-semibold rounded-md py-3 cursor-pointer transition-colors hover:bg-brand-teal-dark active:scale-[0.98]"
      >
        Sign Up
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
        className="bg-[#17223D] border border-[#4a5a75] rounded-md py-2 flex justify-center items-center transition-all hover:bg-white/5 active:scale-[0.98]"
      >
        <img src="/google-logo.svg" alt="Google logo" className="w-10 h-auto" />
      </button>
    </form>
  );
}
