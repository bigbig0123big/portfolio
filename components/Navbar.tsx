"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { content, language, toggleLanguage } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70">
      <nav className="container-padding flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="Go to home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/80 bg-white shadow-glow transition group-hover:scale-105 dark:border-white/10 dark:bg-slate-900">
            {profile.avatarUrl ? (
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                width={44}
                height={44}
                className="h-full w-full object-cover"
                priority
              />
            ) : (
              <span className="text-sm font-black text-slate-950 dark:text-white">{profile.initials}</span>
            )}
          </span>
          <span className="hidden text-sm font-black tracking-tight sm:block">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-white/70 p-1 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5 lg:flex">
          {content.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-950 hover:text-white dark:text-slate-300 dark:hover:bg-white dark:hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 md:inline-flex">
            <button
              type="button"
              aria-label="Switch to Thai"
              onClick={() => language !== "th" && toggleLanguage()}
              className={`rounded-full px-3 py-1.5 font-black transition ${
                language === "th"
                  ? "bg-slate-950 text-base text-white shadow-md dark:bg-white dark:text-ink"
                  : "text-sm text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              TH
            </button>
            <button
              type="button"
              aria-label="Switch to English"
              onClick={() => language !== "en" && toggleLanguage()}
              className={`rounded-full px-3 py-1.5 font-black transition ${
                language === "en"
                  ? "bg-slate-950 text-base text-white shadow-md dark:bg-white dark:text-ink"
                  : "text-sm text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              }`}
            >
              ENG
            </button>
          </div>
          <button
            type="button"
            aria-label="Toggle mobile menu"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="container-padding pb-5 lg:hidden"
          >
            <div className="glass-card rounded-3xl p-3">
              {content.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl bg-slate-950 p-2 dark:bg-white">
                <button
                  type="button"
                  onClick={() => {
                    if (language !== "th") toggleLanguage();
                    setOpen(false);
                  }}
                  className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                    language === "th"
                      ? "bg-white text-base text-slate-950 dark:bg-slate-950 dark:text-white"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  TH
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (language !== "en") toggleLanguage();
                    setOpen(false);
                  }}
                  className={`rounded-xl px-4 py-3 text-sm font-black transition ${
                    language === "en"
                      ? "bg-white text-base text-slate-950 dark:bg-slate-950 dark:text-white"
                      : "text-slate-400 dark:text-slate-500"
                  }`}
                >
                  ENG
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
