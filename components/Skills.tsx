"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Skills() {
  const { content } = useLanguage();

  return (
    <section id="skills" className="bg-slate-50/80 py-24 dark:bg-white/[0.02] sm:py-28">
      <div className="container-padding">
        <SectionHeader
          eyebrow={content.skills.eyebrow}
          title={content.skills.title}
          description={content.skills.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {content.skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <motion.div key={group.title} variants={fadeUp} className="glass-card group rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300 dark:bg-white dark:text-ink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    {group.skills.length} skills
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-bold text-slate-600 transition group-hover:border-emerald-300 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
