"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CATEGORY_COLORS = [
  "bg-yellow",
  "bg-lime",
  "bg-cyan",
  "bg-hot-pink",
  "bg-cream",
  "bg-violet",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
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
            TECH_STACK
          </h2>
          <p className="mt-3 font-mono text-sm font-bold text-electric">
            $ ls --skills
          </p>
        </motion.div>

        {/* Skill categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category, i) => {
            const isDark = CATEGORY_COLORS[i] === "bg-violet";
            return (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className={`neo-border-2 ${CATEGORY_COLORS[i]} p-6 neo-shadow neo-hover`}
              >
                <h3 className={`mb-4 font-display text-sm font-bold uppercase tracking-wider ${isDark ? "text-white" : "text-black"}`}>
                  {category.title.replace(/ /g, "_")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="neo-border-2 bg-white px-3 py-1 font-mono text-sm text-black transition-all hover:bg-black hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
