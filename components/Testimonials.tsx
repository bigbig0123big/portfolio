"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function Testimonials() {
  const { content } = useLanguage();

  return (
    <section id="testimonials" className="bg-slate-50/80 py-24 dark:bg-white/[0.02] sm:py-28">
      <div className="container-padding">
        <SectionHeader
          eyebrow={content.testimonials.eyebrow}
          title={content.testimonials.title}
          description={content.testimonials.description}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {content.testimonialsList.map((testimonial) => (
            <motion.figure key={testimonial.name} variants={fadeUp} className="glass-card rounded-[2rem] p-6 transition duration-300 hover:-translate-y-2 hover:border-emerald-400/50">
              <Quote className="h-9 w-9 text-emerald-500" />
              <div className="mt-5 flex gap-1 text-amber-400" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200 pt-5 dark:border-white/10">
                <div className="font-black text-slate-950 dark:text-white">{testimonial.name}</div>
                <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
