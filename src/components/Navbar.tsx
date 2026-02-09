"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-off-white/95 backdrop-blur-sm border-b-3 border-black"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold text-black hover-wiggle"
        >
          TD<span className="text-electric">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) =>
            item.label === "Contact" ? (
              <a
                key={item.label}
                href={item.href}
                className="ml-2 neo-border-2 bg-electric px-5 py-2 font-display text-sm font-bold text-white neo-shadow-sm transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#1A1A1A]"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 font-display text-sm font-medium text-black transition-colors hover:bg-yellow"
              >
                {item.label}
              </a>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="neo-border-2 bg-white p-2 text-black transition-colors hover:bg-yellow md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile panel */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween", duration: 0.2 }}
            className="fixed inset-0 top-0 z-40 flex flex-col items-center justify-center gap-2 bg-off-white md:hidden"
          >
            {/* Close button in top right */}
            <button
              className="absolute top-4 right-6 neo-border-2 bg-white p-2 text-black hover:bg-yellow"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <HiX size={22} />
            </button>

            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="w-64 neo-border-2 bg-white px-6 py-4 text-center font-display text-lg font-bold text-black neo-shadow-sm transition-all hover:bg-yellow hover:translate-x-[-2px] hover:translate-y-[-2px]"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
