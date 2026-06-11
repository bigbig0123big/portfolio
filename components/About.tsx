"use client";

import { motion } from "framer-motion";
import { highlights } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";
import SectionHeader from "@/components/SectionHeader";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="absolute inset-x-0 top-20 -z-10 mx-auto h-64 max-w-4xl rounded-full bg-emerald-300/10 blur-3xl" />
      <div className="container-padding">
        <SectionHeader
          eyebrow="About"
          title="Developer mindset with business execution."
          description="I combine clean engineering, thoughtful UI, and practical automation to create systems that help teams save time, increase sales, and operate with confidence."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card rounded-[2rem] p-6 sm:p-8"
          >
            <p className="text-lg leading-9 text-slate-700 dark:text-slate-300">
              I specialize in building modern web applications, dashboards, AI automation, LINE OA integrations, CRM systems, and backend operations tools. My goal is not only to make software look beautiful, but to make it solve real business problems with clear UX, reliable architecture, and scalable code.
            </p>
            <p className="mt-5 text-lg leading-9 text-slate-700 dark:text-slate-300">
              Whether you need a landing page, admin panel, AI chatbot, automation workflow, or full web application, I can help turn your idea into a professional digital product ready for users and clients.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp} className="group glass-card rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-emerald-300 shadow-glow dark:bg-white dark:text-ink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
