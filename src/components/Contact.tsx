"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { socialLinks, personal } from "@/lib/data";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [toast, setToast] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("loading");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: name, from_email: email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full neo-border-2 bg-white px-4 py-3 font-body text-sm text-black placeholder:text-gray-400 transition-all focus:shadow-[4px_4px_0px_0px_#4361EE] focus:outline-none";

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl font-bold text-black neo-heading md:text-5xl">
            LET&apos;S_CONNECT
          </h2>
          <div className="mt-3 h-1 w-20 bg-electric" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 lg:col-span-2"
          >
            <div className="neo-border bg-yellow p-6 neo-shadow">
              <p className="font-body text-sm leading-relaxed text-black">
                Whether you have a project in mind, want to discuss engineering
                challenges, or just want to connect — I&apos;d love to hear from
                you.
              </p>
            </div>

            {/* Copy email */}
            <div className="relative">
              <button
                onClick={copyEmail}
                className="neo-border-2 bg-white px-4 py-3 font-mono text-sm font-bold text-black transition-all hover:bg-lime neo-shadow-sm"
              >
                {personal.email} [COPY]
              </button>
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute -top-10 left-0 neo-border-2 bg-lime px-3 py-1 font-mono text-xs font-bold text-black"
                  >
                    COPIED!
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="neo-border-2 bg-white p-3 text-black transition-all hover:bg-electric hover:text-white neo-shadow-sm neo-hover"
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 lg:col-span-3"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                placeholder="YOUR NAME"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="YOUR EMAIL"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
            </div>
            <textarea
              placeholder="YOUR MESSAGE"
              required
              rows={6}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="neo-border bg-electric px-8 py-4 font-display text-sm font-bold text-white neo-shadow transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#1A1A1A] disabled:opacity-50"
            >
              {status === "loading" && (
                <svg
                  className="mr-2 inline h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
              )}
              {status === "loading"
                ? "SENDING..."
                : status === "success"
                  ? "SENT!"
                  : status === "error"
                    ? "FAILED — TRY AGAIN"
                    : "SEND MESSAGE ->"}
            </button>

            {status === "success" && (
              <div className="neo-border-2 bg-lime p-3">
                <p className="font-mono text-xs font-bold text-black">
                  Thanks for reaching out! I&apos;ll get back to you soon.
                </p>
              </div>
            )}
            {status === "error" && (
              <div className="neo-border-2 bg-hot-pink p-3">
                <p className="font-mono text-xs font-bold text-white">
                  Something went wrong. Please try again or email me directly.
                </p>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
