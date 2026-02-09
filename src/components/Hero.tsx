"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HiChevronDown, HiLocationMarker } from "react-icons/hi";
import profilePic from "@/images/profile-pic.png";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 dot-grid">

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16"
      >
        {/* Left — Profile pic: organic circle blob with curvy edges */}
        <motion.div
          variants={item}
          className="flex-shrink-0"
        >
          {/* Inline SVG for organic blob clipPath */}
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <clipPath id="blob-mask" clipPathUnits="objectBoundingBox">
                <path d="M0.50 0.02 C0.62 -0.01, 0.78 0.03, 0.88 0.12 C0.97 0.21, 1.02 0.35, 0.99 0.48 C0.96 0.61, 0.98 0.72, 0.92 0.82 C0.86 0.92, 0.74 1.00, 0.60 0.99 C0.46 0.98, 0.36 1.02, 0.24 0.95 C0.12 0.88, 0.02 0.78, 0.01 0.64 C-0.01 0.50, 0.03 0.38, 0.08 0.27 C0.13 0.16, 0.22 0.08, 0.34 0.04 C0.42 0.01, 0.44 0.04, 0.50 0.02Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="relative h-[310px] w-[310px] sm:h-[350px] sm:w-[350px]">
            {/* Decorative offset blob shadow */}
            <div
              className="absolute inset-0 translate-x-[8px] translate-y-[8px] bg-electric"
              style={{ clipPath: "url(#blob-mask)" }}
            />
            {/* Black border blob (slightly larger via negative inset) */}
            <div
              className="absolute inset-[-3px] bg-black"
              style={{ clipPath: "url(#blob-mask)" }}
            />
            {/* Blob-clipped image */}
            <div
              className="relative h-full w-full overflow-hidden"
              style={{ clipPath: "url(#blob-mask)" }}
            >
              <Image
                src={profilePic}
                alt="Tharun Derangula"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Right — Content */}
        <div className="flex flex-col items-start text-left">
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 neo-border-2 bg-lime px-4 py-2 neo-shadow-sm"
          >
            <span className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-black animate-pulse-dot" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-black">
                Available for Opportunities
              </span>
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] text-black sm:text-6xl lg:text-7xl"
          >
            THARUN
            <br />
            <span className="relative">
              DERANGULA
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="12"
                viewBox="0 0 400 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C50 2 100 10 150 6C200 2 250 10 300 4C350 8 398 3 398 3"
                  stroke="#4361EE"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subtitle + Location */}
          <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-3">
            <span className="neo-border-2 bg-yellow px-4 py-2 font-display text-base font-bold text-black neo-shadow-sm">
              Senior Full Stack Engineer
            </span>
            <span className="neo-border-2 bg-white px-4 py-2 font-mono text-sm text-black neo-shadow-sm">
              @ HubSpot
            </span>
          </motion.div>

          <motion.div variants={item} className="mt-3 flex items-center gap-1.5 text-gray-500">
            <HiLocationMarker className="text-electric" size={16} />
            <span className="font-mono text-sm">San Francisco Bay Area, California</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl font-body text-base leading-relaxed text-gray-600 md:text-lg"
          >
            I architect high-scale distributed systems and craft pixel-perfect
            interfaces — bridging backend resilience with frontend finesse to ship
            products that millions rely on daily.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#experience"
              className="neo-border bg-electric px-8 py-4 font-display text-base font-bold text-white neo-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
            >
              View My Work &darr;
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-border bg-white px-8 py-4 font-display text-base font-bold text-black neo-shadow transition-all hover:bg-yellow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A]"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="neo-border-2 bg-white p-2">
          <HiChevronDown className="text-xl text-black animate-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
