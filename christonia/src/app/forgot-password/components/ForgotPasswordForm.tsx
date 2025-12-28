export default function ForgotPasswordForm() {
  return (
    <form className="bg-background-alt p-10 rounded-xl w-full max-w-[400px] shadow-2xl flex flex-col gap-7 font-sans text-[#DADADA] mx-auto">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="text-sm md:text-base font-medium mb-1"
        >
          What's your email address?
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="something@example.com"
          className="bg-[#304156] border border-[#4a5a75] rounded-md px-4 py-3 text-white text-base placeholder-[#b5b5b5] focus:outline-none focus:border-[#c4d7ed] transition-colors"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-brand-teal text-white text-base font-semibold rounded-md py-3 w-full cursor-pointer transition-colors hover:bg-brand-teal-dark active:scale-[0.98]"
      >
        Send reset link
      </button>
    </form>
  );
}
