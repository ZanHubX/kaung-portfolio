"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { skills } from "@/data/skills";

const skillGroups = [
  {
    number: "01",
    title: "Technical",
    items: skills.technical,
  },
  {
    number: "02",
    title: "Product & Research",
    items: skills.productResearch,
  },
  {
    number: "03",
    title: "Business & Operations",
    items: skills.businessOperations,
  },
  {
    number: "04",
    title: "Tools",
    items: skills.tools,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            05 — SKILLS
          </p>
        </div>

        {/* Skills */}
        <div className="divide-y divide-black/10 border-y border-black/10">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              className="grid gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-[96px_1fr_auto] md:items-start lg:grid-cols-[170px_1fr_auto]"
            >
              {/* Number */}
              <div>
                <p className="text-sm font-medium tracking-[0.15em] text-black/35">
                  {group.number}
                </p>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#252525] sm:text-4xl">
                  {group.title}
                </h2>

                <div className="mt-5 flex max-w-4xl flex-wrap gap-2 sm:mt-7 sm:gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="border border-black/10 bg-white px-3 py-2 text-xs text-black/60 transition-colors hover:border-black/25 hover:text-black sm:px-4 sm:py-2.5 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <ArrowUpRight
                size={20}
                className="hidden text-black/25 md:block"
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}