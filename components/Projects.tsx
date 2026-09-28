"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="work"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-center gap-4 sm:mb-20 sm:gap-5"
        >
          <span className="h-px w-8 bg-black/40 sm:w-10" />

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/50 sm:text-sm sm:tracking-[0.2em]">
            04 — SELECTED WORK
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              {/* Project Image */}
              <div className="overflow-hidden border border-black/10 bg-white">
                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-[#eef0ec]">
                  <img
                    src={project.image}
                    alt={`${project.name} project showcase`}
                    className="
                      h-full
                      w-full
                      object-contain
                      p-2
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.015]
                      sm:p-4
                      lg:p-6
                    "
                  />

                  {/* Subtle overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.02]" />
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-7 grid gap-8 sm:mt-8 lg:grid-cols-[90px_1fr_250px] lg:gap-8">
                {/* Number */}
                <div>
                  <p className="text-xs font-medium tracking-[0.15em] text-black/35 sm:text-sm">
                    {project.number}
                  </p>
                </div>

                {/* Main Content */}
                <div>
                  {/* Category + Role */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/40 sm:text-xs sm:tracking-[0.18em]">
                      {project.category}
                    </p>

                    <span className="h-1 w-1 rounded-full bg-black/25" />

                    <p className="text-[10px] text-black/40 sm:text-xs">
                      {project.role}
                    </p>
                  </div>

                  {/* Project Name */}
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.04em] text-[#252525] sm:mt-4 sm:text-5xl">
                    {project.name}
                  </h2>

                  {/* Description */}
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-black/60 sm:mt-5 sm:text-lg sm:leading-8">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-6 sm:mt-8">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-black/35 sm:text-xs sm:tracking-[0.18em]">
                      Key Features
                    </p>

                    <div className="flex max-w-4xl flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="
                            border
                            border-black/10
                            bg-white
                            px-3
                            py-1.5
                            text-[11px]
                            text-black/55
                            transition-colors
                            hover:border-black/25
                            hover:text-black
                            sm:px-3
                            sm:py-2
                            sm:text-xs
                          "
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 sm:mt-7">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.16em] text-black/35 sm:text-xs sm:tracking-[0.18em]">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-[11px] font-medium text-black/45 sm:text-xs"
                        >
                          #{technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap items-start gap-2.5 lg:justify-end">
                  {/* Live Demo */}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/link
                        flex
                        items-center
                        gap-2
                        border
                        border-black/15
                        bg-white
                        px-3.5
                        py-2.5
                        text-xs
                        text-black/70
                        transition-all
                        duration-300
                        hover:border-black/40
                        hover:text-black
                        sm:px-4
                        sm:text-sm
                      "
                    >
                      <span>Live Demo</span>

                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover/link:-translate-y-0.5
                          group-hover/link:translate-x-0.5
                        "
                      />
                    </a>
                  )}

                  {/* GitHub */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/github
                        flex
                        items-center
                        gap-2
                        border
                        border-black/15
                        bg-white
                        px-3.5
                        py-2.5
                        text-xs
                        text-black/70
                        transition-all
                        duration-300
                        hover:border-black/40
                        hover:text-black
                        sm:px-4
                        sm:text-sm
                      "
                    >
                      <span>GitHub</span>

                      <ArrowUpRight
                        size={14}
                        className="
                          transition-transform
                          duration-300
                          group-hover/github:-translate-y-0.5
                          group-hover/github:translate-x-0.5
                        "
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <div className="mt-16 h-px bg-black/10 sm:mt-20" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}