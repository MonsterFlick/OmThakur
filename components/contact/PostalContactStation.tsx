"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, CheckCircle2, MapPin } from "lucide-react";

export function PostalContactStation() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formState.name.trim()) errs.name = "Name is required";
    if (!formState.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = "Invalid email format";
    }
    if (!formState.message.trim()) errs.message = "Message cannot be blank";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Dispatch failed");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send message";
      console.error("Contact form error:", err);
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#EDE4D9] bg-[#FAF6F1]">
      <div id="enquiry" className="absolute -top-12 left-0" />
      <div className="w-full max-w-7xl xl:max-w-[1360px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-5 border-b border-[#EDE4D9]">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#9E3D2B] font-mono font-medium mb-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Station</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1A1816] font-medium tracking-tight">
              Get in Touch
            </h2>
            <p className="text-sm text-[#4A4541] mt-1.5 max-w-xl leading-relaxed">
              Available for distributed systems engineering, technical advisory, high-concurrency consulting,
              and full-time backend roles.
            </p>
          </div>
        </div>

        {/* ── Main Layout ── */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Left Column: Direct Coordinates & Social Registry (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 sm:p-6 rounded-md bg-[#FDFCFA] border border-[#EDE4D9] shadow-paper">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#EDE4D9]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#5E5854]">
                  Direct Channels
                </span>
                <span className="font-mono text-xs text-[#566449] font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#566449] animate-pulse" />
                  Active
                </span>
              </div>

              <div className="space-y-3">
                <a
                  href="mailto:omthakur2366@gmail.com"
                  className="flex items-center gap-3 p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9] hover:border-[#9E3D2B] transition-colors group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded bg-[#9E3D2B]/10 text-[#9E3D2B] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs uppercase font-mono text-[#7A746D] block">
                      Email
                    </span>
                    <span className="font-mono text-sm text-[#1A1816] font-medium group-hover:text-[#9E3D2B] transition-colors truncate block mt-0.5">
                      omthakur2366@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded bg-[#FAF6F1] border border-[#EDE4D9]">
                  <div className="w-8 h-8 rounded bg-[#566449]/10 text-[#566449] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs uppercase font-mono text-[#7A746D] block">
                      Base Location
                    </span>
                    <span className="font-mono text-sm text-[#1A1816] font-medium truncate block mt-0.5">
                      Mumbai, India (IST · UTC+5:30)
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 mt-4 border-t border-[#EDE4D9]">
                <span className="text-xs uppercase tracking-wider font-mono text-[#7A746D] block mb-2.5">
                  Profiles &amp; Repositories:
                </span>
                <div className="flex items-center gap-3">
                  {[
                    { icon: Github, label: "GitHub", href: "https://github.com/MonsterFlick" },
                    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/omthakur2366" },
                    { icon: Twitter, label: "X / Twitter", href: "https://twitter.com/omthakur2366" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded bg-[#FAF6F1] text-[#383432] hover:text-[#1A1816] hover:bg-[#EDE4D9] border border-[#EDE4D9] transition-colors cursor-pointer"
                      title={s.label}
                      aria-label={s.label}
                    >
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Form & Normal Transitions (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-5 sm:p-7 rounded-md bg-[#FDFCFA] border border-[#EDE4D9] shadow-paper">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* ── Normal Clean Confirmation State ── */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#566449]/10 text-[#566449] flex items-center justify-center mb-1">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <div className="space-y-1.5 max-w-md">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#566449] font-medium">
                        Delivered to Om Thakur
                      </span>
                      <h3 className="font-serif text-2xl font-medium text-[#1A1816]">
                        Message Sent Successfully
                      </h3>
                      <p className="text-sm text-[#4A4541] leading-relaxed pt-1">
                        Thank you for reaching out. Your message has been delivered directly to my inbox. I will review and reply within 24 hours.
                      </p>
                    </div>

                    <div className="pt-3">
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-mono font-semibold bg-[#1A1816] hover:bg-[#9E3D2B] text-white transition-colors cursor-pointer active:scale-95 shadow-sm"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Normal Clean Contact Form ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#EDE4D9]">
                      <div>
                        <h3 className="font-serif text-lg font-medium text-[#1A1816]">
                          Send a Message
                        </h3>
                        <p className="font-mono text-xs text-[#7A746D] mt-0.5">
                          Direct inquiry to Om Thakur
                        </p>
                      </div>
                      <span className="font-mono text-xs text-[#566449] font-medium flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#566449] animate-pulse" />
                        Open to opportunities
                      </span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-mono font-medium text-[#4A4541] mb-1">
                            Your Name *
                          </label>
                          <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="e.g. Alex Morgan"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE4D9] bg-[#FAF6F1] text-sm text-[#1A1816] placeholder-[#7A746D] focus:outline-none focus:border-[#9E3D2B] transition-colors"
                          />
                          {errors.name && <p role="alert" className="text-xs text-[#9E3D2B] mt-1 font-mono">{errors.name}</p>}
                        </div>

                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-mono font-medium text-[#4A4541] mb-1">
                            Email Address *
                          </label>
                          <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="e.g. alex@example.com"
                            className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE4D9] bg-[#FAF6F1] text-sm text-[#1A1816] placeholder-[#7A746D] focus:outline-none focus:border-[#9E3D2B] transition-colors"
                          />
                          {errors.email && <p role="alert" className="text-xs text-[#9E3D2B] mt-1 font-mono">{errors.email}</p>}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-mono font-medium text-[#4A4541] mb-1">
                          Message *
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          rows={5}
                          required
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          placeholder="Outline system architecture requirements, appointment timeline, or consulting scope..."
                          className="w-full px-3.5 py-2.5 rounded-lg border border-[#EDE4D9] bg-[#FAF6F1] text-sm text-[#1A1816] placeholder-[#7A746D] focus:outline-none focus:border-[#9E3D2B] transition-colors leading-relaxed"
                        />
                        {errors.message && <p role="alert" className="text-xs text-[#9E3D2B] mt-1 font-mono">{errors.message}</p>}
                      </div>

                      {submitError && (
                        <p role="alert" className="text-xs text-[#9E3D2B] font-mono text-right">
                          {submitError}
                        </p>
                      )}

                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-xs font-mono text-[#7A746D] hidden sm:inline">
                          Direct to Discord &amp; inbox
                        </span>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#9E3D2B] text-white font-medium text-xs hover:bg-[#852C1B] transition-all disabled:opacity-50 cursor-pointer shadow-sm active:scale-95 ml-auto"
                        >
                          <span>{isSubmitting ? "Sending..." : "Send Message →"}</span>
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
