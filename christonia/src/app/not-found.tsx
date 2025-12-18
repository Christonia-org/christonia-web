import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center text-white font-sans">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-teal/20 blur-3xl rounded-full" />
        <h1 className="relative text-9xl font-black text-white/10 tracking-tighter">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src="/icon.png"
            alt="Christonia Logo"
            width={120}
            height={120}
            className="opacity-80 grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost your way?</h2>
      <p className="text-gray-400 text-lg max-w-md mb-10 leading-relaxed">
        Even the most dedicated seekers take a wrong turn sometimes. Let's get
        you back on the right track.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link
          href="/"
          className="flex-1 bg-brand-teal hover:bg-brand-teal-dark text-white px-8 py-3 rounded-md font-semibold text-lg transition-all shadow-lg active:scale-95"
        >
          Go to Home
        </Link>
        <Link
          href="/tracks"
          className="flex-1 bg-transparent border border-gray-600 hover:bg-white/5 text-white px-8 py-3 rounded-md font-semibold text-lg transition-all"
        >
          View All Tracks
        </Link>
      </div>

      <div className="mt-16 text-gray-600 text-sm italic">
        "Seek and you shall find..."
      </div>
    </div>
  );
}
