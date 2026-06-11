"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  inverted?: boolean;
};

export default function SectionHeader({ eyebrow, title, description, inverted = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 dark:text-emerald-300">
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl",
          inverted ? "text-white" : "text-slate-950 dark:text-white",
        )}
      >
        {title}
      </h2>
      <p className={cn("mt-4 text-base leading-8 sm:text-lg", inverted ? "text-slate-300" : "text-slate-600 dark:text-slate-300")}>
        {description}
      </p>
    </motion.div>
  );
}
