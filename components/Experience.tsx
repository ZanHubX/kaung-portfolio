"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            02 — EXPERIENCE
          </p>
        </div>

        {/* Experience */}
        <div className="divide-y divide-black/10 border-y border-black/10">

          {experiences.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="grid gap-6 py-8 sm:gap-8 sm:py-10 md:grid-cols-[96px_1fr_auto] md:py-12 lg:grid-cols-[170px_1fr_auto]"
            >

              {/* Logo */}
              <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm sm:h-28 sm:w-28 md:h-32 md:w-32">
                <img
                  src={item.logo}
                  alt={`${item.organization} logo`}
                  className="h-full w-full object-contain p-2"
                />
              </div>

              {/* Content */}
              <div>

                {/* Period */}
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-black/40 sm:text-xs">
                  {item.period}
                </p>

                {/* Employment Type */}
                {item.employmentType && (
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-black/40 sm:mt-3 sm:text-xs">
                    {item.employmentType}
                  </p>
                )}

                {/* Job Title */}
                <h2 className="mt-2 max-w-4xl text-xl font-medium leading-[1.2] tracking-[-0.025em] text-[#252525] sm:mt-3 sm:text-3xl lg:text-4xl">
                  {item.title}
                </h2>

                {/* Organization */}
                <p className="mt-2 text-base text-black/65 sm:mt-3 sm:text-lg">
                  {item.organization}
                </p>

                {/* Location */}
                {item.location && (
                  <p className="mt-1 text-sm text-black/45 sm:text-base">
                    {item.location}
                  </p>
                )}

                {/* Description */}
                <p className="mt-4 max-w-3xl text-sm leading-6 text-black/55 sm:mt-5 sm:text-base sm:leading-7">
                  {item.description}
                </p>

                {/* Skills */}
                {item.skills?.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="border border-black/10 bg-white px-3 py-1.5 text-xs text-black/55 sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

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