"use client";

import { motion } from "framer-motion";

const valueProps = [
  {
    number: "01",
    title: "PROVEN_SCALE",
    headline: "2B+ Events/Day",
    description:
      "Built event-driven CRM data pipelines with Kafka, Lambda, and Elasticsearch that run at massive scale with 99.9% uptime.",
    color: "bg-electric",
    textColor: "text-white",
  },
  {
    number: "02",
    title: "SYSTEM_IMPACT",
    headline: "200M+ Profiles Managed",
    description:
      "Designed and delivered Java microservices powering Smart CRM contact workflows with lower latency and stronger reliability.",
    color: "bg-yellow",
    textColor: "text-black",
  },
  {
    number: "03",
    title: "DELIVERY_VELOCITY",
    headline: "3x Deploy Frequency",
    description:
      "Modernized release pipelines with GitHub Actions, Docker, and Kubernetes, reducing deployment time and rollback risk.",
    color: "bg-lime",
    textColor: "text-black",
  },
  {
    number: "04",
    title: "AI_AUTOMATION",
    headline: "50% Tier-1 Workflow Automation",
    description:
      "Integrated LLM-powered agents using OpenAI APIs to automate support workflows while keeping engineering quality high.",
    color: "bg-hot-pink",
    textColor: "text-white",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function WhyHireMe() {
  return (
    <section className="border-y-3 border-black bg-off-white py-24 md:py-32">
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
            WHAT_YOU_GET
          </h2>
          <p className="mt-3 font-mono text-sm font-bold text-electric">
            {"// what I bring to the table"}
          </p>
        </motion.div>

        {/* Value prop cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.number}
              variants={itemVariants}
              className={`neo-border ${prop.color} p-6 neo-shadow-lg neo-hover md:p-8`}
            >
              <div className="flex items-start justify-between">
                <span className={`font-mono text-xs font-bold ${prop.textColor} opacity-50`}>
                  {prop.number}
                </span>
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${prop.textColor} opacity-60`}>
                  {prop.title}
                </span>
              </div>
              <h3 className={`mt-4 font-display text-2xl font-bold ${prop.textColor} md:text-3xl`}>
                {prop.headline}
              </h3>
              <p className={`mt-3 font-body text-sm leading-relaxed ${prop.textColor} opacity-80`}>
                {prop.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 neo-border bg-black p-6 neo-shadow-lg md:p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                Ready to build something great?
              </h3>
              <p className="mt-1 font-body text-sm text-white/60">
                5+ years of shipping production systems across full stack, cloud, and AI workflows.
              </p>
            </div>
            <a
              href="#contact"
              className="neo-border-2 flex-shrink-0 border-white bg-yellow px-8 py-3 font-display text-sm font-bold text-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#FFFFFF]"
            >
              Let&apos;s Talk &rarr;
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
