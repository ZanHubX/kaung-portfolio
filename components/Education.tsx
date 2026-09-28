"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { education } from "@/data/education";

export default function Education() {
  return (
    <section
      id="education"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            03 — EDUCATION
          </p>
        </div>

        {/* Education */}
        <div className="divide-y divide-black/10 border-y border-black/10">

          {education.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-[96px_1fr_auto] md:items-start lg:grid-cols-[170px_1fr_auto]"
            >

              {/* Logo */}
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm sm:h-28 sm:w-28 md:h-32 md:w-32">
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* Content */}
              <div>

                {/* Period */}
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-black/40 sm:text-xs">
                  {item.period}
                </p>

                {/* Type */}
                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-black/40 sm:mt-3 sm:text-xs">
                  {item.type}
                </p>

                {/* Institution */}
                <h2 className="mt-2 text-xl font-medium leading-[1.2] tracking-[-0.02em] text-[#252525] sm:mt-3 sm:text-3xl">
                  {item.institution}
                </h2>

                {/* Degree */}
                <p className="mt-2 text-base text-black/65 sm:text-lg">
                  {item.degree}
                </p>

                {/* Field */}
                <p className="mt-1 text-sm text-black/45 sm:text-base">
                  {item.field}
                </p>

                {/* Description */}
                <p className="mt-4 max-w-2xl text-sm leading-6 text-black/55 sm:mt-5 sm:text-base sm:leading-7">
                  {item.description}
                </p>

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