import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-white px-6 py-8 md:px-16 md:py-12 font-sans">
      <div className="flex flex-col md:flex-row flex-wrap justify-between mb-8 gap-8 md:gap-0">
        <div className="flex flex-col gap-4 flex-1 max-w-[400px] items-start">
          <div className="flex items-center gap-4">
            <img
              src="/icon.png"
              alt="Christonia Logo"
              className="w-12 md:w-16 h-auto"
            />
            <Link
              href="/"
              className="text-2xl md:text-[1.75rem] font-bold no-underline text-white"
            >
              Christonia
            </Link>
          </div>
          <p className="text-base leading-relaxed text-left text-white">
            High quality Christian theology education maintained by top
            Christian theologians.
          </p>
          <div className="flex gap-7 mb-2">
            {[
              {
                src: "/github-logo.svg",
                alt: "GitHub",
                href: "https://github.com/...",
              },
              {
                src: "/youtube-logo.svg",
                alt: "YouTube",
                href: "https://youtube.com/...",
              },
              {
                src: "/discord-logo.svg",
                alt: "Discord",
                href: "https://discord.gg/...",
              },
              { src: "/x-logo.svg", alt: "X", href: "https://x.com/..." },
            ].map((social) => (
              <Link
                key={social.alt}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={social.src}
                  alt={social.alt}
                  className="w-[30px] h-[30px] cursor-pointer transition-transform duration-200 hover:scale-110"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">About us</h2>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link
                  href="/about"
                  className="no-underline text-white hover:underline"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="no-underline text-white hover:underline"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/#"
                  className="no-underline text-white hover:underline"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link
                  href="/faq"
                  className="no-underline text-white hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contribute"
                  className="no-underline text-white hover:underline"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="no-underline text-white hover:underline"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Legal</h2>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li>
                <Link
                  href="/terms"
                  className="no-underline text-white hover:underline"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="no-underline text-white hover:underline"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-0 border-t border-[#c9cdd4] my-8" />
      <p className="text-base text-left text-[#c9cdd4]">
        © {currentYear} Christonia. All rights reserved.
      </p>
    </footer>
  );
}
