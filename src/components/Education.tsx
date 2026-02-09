"use client";

import { motion } from "framer-motion";
import { education, certifications } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="border-t-3 border-black bg-off-white py-24 md:py-32">
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
            EDUCATION
          </h2>
          <div className="mt-3 h-1 w-20 bg-electric" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Degrees */}
          <div className="space-y-6">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-gray-500">
              DEGREES
            </h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.university}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="neo-border-2 bg-white p-6 neo-shadow neo-hover"
              >
                <div className="mb-3 flex items-center justify-between">
                  <span className="neo-border-2 bg-yellow px-3 py-1 font-mono text-xs font-bold text-black">
                    {edu.period}
                  </span>
                  <span className="neo-border-2 bg-lime px-3 py-1 font-mono text-xs font-bold text-black">
                    GPA: {edu.gpa}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-black">
                  {edu.degree}
                </h3>
                <p className="mt-1 font-body text-sm text-gray-600">
                  {edu.university}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 font-display text-sm font-bold uppercase tracking-wider text-gray-500">
              CERTIFICATIONS
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className="neo-border-2 bg-white p-4 neo-shadow-sm neo-hover"
                >
                  <p className="font-display text-sm font-bold text-black">
                    {cert.name}
                  </p>
                  <p className="mt-1 font-mono text-xs text-gray-500">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
