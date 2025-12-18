import Link from "next/link";

export default function SignInForm() {
  return (
    <form className="bg-[#263343] p-8 md:p-10 rounded-xl w-full max-w-[400px] shadow-2xl flex flex-col gap-7 font-sans text-[#DADADA] mx-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base focus:outline-none focus:border-[#c4d7ed] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          className="bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base focus:outline-none focus:border-[#c4d7ed] transition-colors"
        />
      </div>

      <div className="flex justify-between items-center text-sm -mt-3">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            className="appearance-none w-[18px] h-[18px] border border-[#4a5a75] rounded bg-[#304156] cursor-pointer relative 
                       checked:bg-brand-teal checked:border-brand-teal
                       after:content-[''] after:absolute after:hidden after:checked:block
                       after:left-[5px] after:top-[1px] after:w-[6px] after:h-[10px] 
                       after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
          />
          <label htmlFor="rememberMe" className="text-[#c9cdd4] cursor-pointer">
            Remember me
          </label>
        </div>
        <Link
          href="/forgot-password"
          className="text-white font-bold hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="bg-brand-teal text-white text-base font-semibold rounded-md py-3 cursor-pointer transition-colors hover:bg-brand-teal-dark active:scale-[0.98]"
      >
        Sign in
      </button>

      <div className="flex items-center gap-4 my-2">
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
