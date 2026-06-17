"use client";

import { ArrowUp, Facebook, Github, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { content } = useLanguage();

  return (
    <footer className="border-t border-slate-200 bg-white py-10 dark:border-white/10 dark:bg-ink">
      <div className="container-padding">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white dark:bg-white dark:text-ink">
                {profile.initials}
              </span>
              <span className="font-black text-slate-950 dark:text-white">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-md text-sm leading-7 text-slate-500 dark:text-slate-400">
              {content.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {content.navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/10 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-5 border-t border-slate-200 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {year} {profile.name}. {content.footer.copyright}</p>
          <div className="flex items-center gap-3">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-emerald-300">
              <Mail className="h-4 w-4" />
            </a>
            <a href={profile.github} aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-emerald-300">
              <Github className="h-4 w-4" />
            </a>
            <a href={profile.facebook} aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:text-slate-300 dark:hover:text-emerald-300">
              <Facebook className="h-4 w-4" />
            </a>
            <button
              type="button"
              aria-label="Back to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-white transition hover:-translate-y-1 hover:bg-emerald-500 hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-emerald-300"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
