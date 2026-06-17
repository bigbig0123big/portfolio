"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Cpu, Play, Sparkles } from "lucide-react";
import { profile } from "@/lib/data";
import { useState } from "react";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Hero() {
  const { content } = useLanguage();
  const [avatarError, setAvatarError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-32 sm:pt-36 lg:pt-40">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(53,255,159,0.20),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.18),transparent_30%),radial-gradient(circle_at_50%_80%,rgba(71,181,255,0.14),transparent_35%)]" />
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:44px_44px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container-padding grid items-center gap-12 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <motion.div variants={staggerContainer} initial="hidden" animate="show" className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur dark:bg-white/5 dark:text-emerald-300"
          >
            <Sparkles className="h-4 w-4" /> {content.hero.badge}
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl font-black tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block">{content.hero.greetingLine1}</span>
            <span className="block whitespace-nowrap py-3 text-[clamp(1.35rem,3vw,3.75rem)] leading-[1.1] gradient-text">
              {content.hero.greetingLine2}
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 text-xl font-bold text-slate-800 dark:text-slate-100 sm:text-2xl">
            {content.hero.role}
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300 sm:text-lg">
            {content.hero.headline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="premium-button bg-slate-950 text-white hover:-translate-y-1 hover:bg-emerald-500 hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-emerald-300">
              {content.hero.primaryCta} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#contact" className="premium-button border border-slate-300 bg-white/70 text-slate-900 hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-emerald-300">
              {content.hero.secondaryCta} <Play className="ml-2 h-4 w-4" />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-10 grid grid-cols-3 gap-3 sm:max-w-xl">
            {content.stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-3xl p-4 text-center">
                <div className="text-2xl font-black text-slate-950 dark:text-white">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute -left-10 top-16 h-32 w-32 rounded-full bg-emerald-400/30 blur-3xl" />
          <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-violet-500/25 blur-3xl" />

          <div className="glass-card relative rounded-[2rem] p-4 sm:p-6">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-4 shadow-2xl dark:border-white/10">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>

              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl bg-premium-gradient p-[1px]">
                  <div className="flex aspect-square flex-col items-center justify-center rounded-3xl bg-slate-950 p-6 text-center">
                    <div className="mb-5 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-4 border-white/90 bg-white text-3xl font-black text-ink shadow-glow md:h-36 md:w-36">
                      {profile.avatarUrl && !avatarError ? (
                        <Image
                          src={profile.avatarUrl}
                          alt={profile.name}
                          width={144}
                          height={144}
                          className="h-full w-full object-cover"
                          onError={() => setAvatarError(true)}
                          priority
                        />
                      ) : (
                        <span>{profile.initials}</span>
                      )}
                    </div>
                    <p className="mt-2 text-sm font-bold text-emerald-300">{content.hero.cardTitle}</p>
                    <p className="mt-2 max-w-[16rem] text-xs leading-5 text-slate-400">{content.hero.cardDescription}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="rounded-3xl bg-white/10 p-4">
                    <div className="flex items-center gap-3 text-emerald-300">
                      <Code2 className="h-5 w-5" />
                      <span className="text-sm font-bold">Production UI</span>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="h-2 rounded-full bg-white/15" />
                      <div className="h-2 w-3/4 rounded-full bg-white/15" />
                      <div className="h-2 w-1/2 rounded-full bg-emerald-300/70" />
                    </div>
                  </div>

                  <div className="rounded-3xl bg-white/10 p-4">
                    <div className="flex items-center gap-3 text-blue-300">
                      <Cpu className="h-5 w-5" />
                      <span className="text-sm font-bold">AI Automation</span>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-2">
                      {["API", "CRM", "LINE"].map((item) => (
                        <span key={item} className="rounded-full bg-white/10 px-3 py-2 text-center text-[11px] font-bold text-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -top-5 rounded-2xl border border-emerald-400/30 bg-white px-4 py-3 shadow-glow dark:bg-slate-950"
            >
              <p className="text-xs font-black text-slate-950 dark:text-white">{content.hero.floatingTitle}</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">{content.hero.floatingSubtitle}</p>
            </motion.div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {content.trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="glass-card flex items-center justify-center gap-2 rounded-2xl px-3 py-3 text-xs font-bold text-slate-700 dark:text-slate-200">
                  <Icon className="h-4 w-4 text-emerald-500" /> {badge.label}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
