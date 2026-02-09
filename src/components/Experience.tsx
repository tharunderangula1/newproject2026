"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

const CARD_COLORS = ["bg-cream", "bg-white", "bg-gray-100"];
const ACCENT_COLORS = ["bg-electric", "bg-hot-pink", "bg-violet"];

export default function Experience() {
  return (
    <section id="experience" className="border-t-3 border-black bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-black neo-heading md:text-5xl">
            WORK_EXPERIENCE
          </h2>
          <div className="mt-3 h-1 w-20 bg-electric" />
        </motion.div>

        {/* Cards */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`neo-border ${CARD_COLORS[i]} neo-shadow-lg overflow-hidden`}
            >
              {/* Top accent bar */}
              <div className={`h-2 ${ACCENT_COLORS[i]}`} />

              <div className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-black md:text-2xl">
                      {exp.role}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="neo-border-2 bg-white px-3 py-1 font-mono text-sm font-bold text-black">
                        {exp.company}
                      </span>
                      <span className="font-mono text-sm text-gray-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <span className="neo-border-2 bg-yellow px-4 py-1.5 font-mono text-xs font-bold text-black neo-shadow-sm">
                    {exp.period}
                  </span>
                </div>

                {/* Achievements */}
                <ul className="mt-6 space-y-2">
                  {exp.achievements.map((a, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm leading-relaxed text-gray-700"
                    >
                      <span className="mt-1.5 h-2 w-2 flex-shrink-0 rotate-45 bg-black" />
                      {a}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="neo-border-2 bg-white px-3 py-1 font-mono text-[11px] font-bold text-black transition-colors hover:bg-yellow"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
