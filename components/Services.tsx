"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/lib/data";
import { fadeUp, staggerContainer } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="bg-slate-950 py-24 text-white dark:bg-black sm:py-28">
      <div className="container-padding">
        <SectionHeader
          eyebrow="Services"
          title="Services designed to launch, automate, and scale."
          description="From premium landing pages to full dashboards and AI automation, each service is focused on real outcomes and clean delivery."
          inverted
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} variants={fadeUp} className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-emerald-300/50 hover:bg-white/[0.09]">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-950 transition group-hover:scale-105 group-hover:bg-emerald-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-black">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
