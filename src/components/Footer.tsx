"use client";

import { navItems, socialLinks } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-3 border-black bg-black py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between">
        {/* Copyright */}
        <p className="font-mono text-xs font-bold text-white/60">
          &copy; {new Date().getFullYear()} THARUN DERANGULA
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-display text-xs font-bold uppercase text-white/60 transition-colors hover:text-yellow"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social + back to top */}
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-white/60 transition-colors hover:text-yellow"
            >
              <link.icon size={16} />
            </a>
          ))}
          <button
            onClick={scrollToTop}
            className="ml-2 neo-border-2 bg-white px-3 py-1.5 font-mono text-xs font-bold text-black transition-all hover:bg-yellow"
            aria-label="Back to top"
          >
            TOP
          </button>
        </div>
      </div>

      {/* Built with tag */}
      <div className="mx-auto mt-8 max-w-6xl px-6 text-center">
        <p className="font-mono text-[10px] text-white/30">
          Built with NeoBrutalism
        </p>
      </div>
    </footer>
  );
}
