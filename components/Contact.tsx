"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Facebook, Github, LineChart, Mail, MessageCircle, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { profile } from "@/lib/data";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [showToast, setShowToast] = useState(false);
  const { content } = useLanguage();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setShowToast(true);
    setForm(initialForm);
    window.setTimeout(() => setShowToast(false), 3200);
  }

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-96 bg-[radial-gradient(circle_at_center,rgba(53,255,159,0.16),transparent_55%)]" />
      <div className="container-padding">
        <SectionHeader
          eyebrow={content.contact.eyebrow}
          title={content.contact.title}
          description={content.contact.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <h3 className="text-2xl font-black text-slate-950 dark:text-white">{content.contact.introTitle}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {content.contact.introDescription}
            </p>

            <div className="mt-8 space-y-4">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300 dark:bg-white dark:text-ink">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-black text-slate-950 dark:text-white">{content.contact.emailLabel}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{profile.email}</span>
                </span>
              </a>

              <a href="#" className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300 dark:bg-white dark:text-ink">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-black text-slate-950 dark:text-white">{content.contact.lineLabel}</span>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{profile.line}</span>
                </span>
              </a>

              <div className="grid gap-4 sm:grid-cols-2">
                <a href={profile.github} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5">
                  <Github className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">GitHub</span>
                </a>
                <a href={profile.facebook} className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5">
                  <Facebook className="h-5 w-5 text-emerald-500" />
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Facebook</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{content.contact.formName}</span>
                <input
                  required
                  value={form.name}
                  onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
                  placeholder={content.contact.formName}
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{content.contact.formEmail}</span>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">{content.contact.formMessage}</span>
              <textarea
                required
                rows={7}
                value={form.message}
                onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
                placeholder={content.contact.formMessage}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
            </label>

            <button type="submit" className="premium-button mt-6 w-full bg-slate-950 text-white hover:-translate-y-1 hover:bg-emerald-500 hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-emerald-300">
              {content.contact.formSubmit} <Send className="ml-2 h-4 w-4" />
            </button>

            <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
              <LineChart className="h-4 w-4" /> {content.contact.formNote}
            </p>
          </motion.form>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            className="fixed bottom-6 right-4 z-[60] flex items-center gap-3 rounded-2xl border border-emerald-400/30 bg-slate-950 px-5 py-4 text-sm font-bold text-white shadow-glow dark:bg-white dark:text-ink sm:right-6"
          >
            {content.contact.toast}
            <button type="button" aria-label="Close toast" onClick={() => setShowToast(false)}>
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
