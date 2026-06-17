"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Projects() {
  const { content, language } = useLanguage();

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="absolute right-0 top-32 -z-10 h-80 w-80 rounded-full bg-violet-400/10 blur-3xl" />
      <div className="container-padding">
        <SectionHeader
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          description={content.projects.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {content.projectsList.map((project) => (
            <motion.article key={project.title} variants={fadeUp} className="group glass-card overflow-hidden rounded-[2rem] transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
              <div className={cn("relative h-52 bg-gradient-to-br", project.gradient)}>
                <div className="absolute inset-0 bg-hero-grid bg-[length:28px_28px] opacity-30" />
                <div className="absolute inset-x-5 bottom-5 rounded-3xl border border-white/30 bg-white/20 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/70" />
                    <div className="h-2 w-2/3 rounded-full bg-white/50" />
                    <div className="h-8 rounded-2xl bg-white/35" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600 dark:bg-white/10 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={project.liveUrl} className="premium-button flex-1 bg-slate-950 px-4 py-2.5 text-white hover:bg-emerald-500 hover:text-ink dark:bg-white dark:text-ink dark:hover:bg-emerald-300">
                    {language === "th" ? "ดูเดโม" : "Live Demo"} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                  <a href={project.githubUrl} className="premium-button border border-slate-200 bg-white px-4 py-2.5 text-slate-900 hover:border-emerald-400 dark:border-white/10 dark:bg-white/5 dark:text-white">
                    <span className="sr-only">{language === "th" ? "ดูโค้ดบน GitHub" : "View GitHub repository"}</span>
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
