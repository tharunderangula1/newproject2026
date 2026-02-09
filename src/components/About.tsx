"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    emoji: "01",
    title: "FULL_STACK",
    description:
      "End-to-end ownership from database design to pixel-perfect UIs across React, Angular, and Spring Boot.",
    color: "bg-yellow",
  },
  {
    emoji: "02",
    title: "CLOUD_&_DEVOPS",
    description:
      "AWS & Azure certified. Kubernetes orchestration, CI/CD pipelines, and infrastructure as code.",
    color: "bg-lime",
  },
  {
    emoji: "03",
    title: "LEADERSHIP",
    description:
      "Mentoring engineers, leading code reviews, and driving architectural decisions across cross-functional teams.",
    color: "bg-cyan",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
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
            ABOUT_ME
          </h2>
          <div className="mt-3 h-1 w-20 bg-electric" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Pull quote */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="neo-border bg-yellow p-6 neo-shadow-lg">
              <p className="font-display text-2xl font-bold leading-snug text-black md:text-3xl">
                Engineering is the art of making complex things{" "}
                <span className="neo-underline">feel simple.</span>
              </p>
            </div>
          </motion.div>

          {/* Bio + cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-8 lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-gray-600 md:text-lg">
              With over five years of experience building production systems at
              scale, I specialize in designing distributed architectures that
              handle millions of daily requests with rock-solid reliability.
              From real-time data pipelines to enterprise SaaS platforms, I
              bring a passion for clean code, operational excellence, and
              measurable impact.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                  className={`neo-border-2 ${h.color} p-5 neo-shadow-sm neo-hover`}
                >
                  <span className="font-mono text-xs font-bold text-black/40">
                    {h.emoji}
                  </span>
                  <h3 className="mt-2 font-display text-sm font-bold text-black">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-black/70">
                    {h.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
