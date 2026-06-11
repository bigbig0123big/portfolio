"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { experiences } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="container-padding">
        <SectionHeader
          eyebrow="Experience"
          title="Experience across web apps, AI, and automation."
          description="A practical timeline of roles and work areas focused on building usable systems, integrating AI, and shipping client-ready products."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto max-w-4xl"
        >
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-400 via-blue-400 to-violet-500 sm:block" />
          <div className="space-y-6">
            {experiences.map((item) => (
              <motion.div key={item.role} variants={fadeUp} className="relative sm:pl-12">
                <div className="absolute left-[9px] top-8 hidden h-3 w-3 rounded-full bg-emerald-300 shadow-glow ring-8 ring-emerald-300/10 sm:block" />
                <div className="glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/50 sm:p-7">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                    <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.role}</h3>
                    <span className="w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
