"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { stats } from "@/lib/data";

const COLORS = ["bg-yellow", "bg-lime", "bg-cyan", "bg-hot-pink"];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const duration = 2000;
    const start = performance.now();

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);
  }, [value]);

  useEffect(() => {
    if (inView) {
      animate();
    }
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [inView, animate]);

  return (
    <span className="font-display text-4xl font-bold text-black md:text-5xl">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="border-y-3 border-black bg-off-white py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`neo-border-2 ${COLORS[i]} p-5 neo-shadow-sm neo-hover`}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              inView={inView}
            />
            <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-black/60">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
