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
        {/* Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            04 — SELECTED WORK
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group"
            >
              {/* Project Image */}
              <div className="overflow-hidden border border-black/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9]">
                  <img
                    src={project.image}
                    alt={`${project.name} project`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/5" />
                </div>
              </div>

              {/* Project Information */}
              <div className="mt-6 grid gap-6 sm:mt-8 sm:gap-8 lg:grid-cols-[80px_1fr_220px] xl:grid-cols-[100px_1fr_260px]">
                {/* Number */}
                <div>
                  <p className="text-sm font-medium tracking-[0.15em] text-black/35">
                    {project.number}
                  </p>
                </div>

                {/* Main Content */}
                <div>
                  {/* Category + Role */}
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-black/40">
                      {project.category}
                    </p>

                    <span className="h-1 w-1 rounded-full bg-black/25" />

                    <p className="text-xs text-black/40">
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
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                      Key Features
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="border border-black/10 bg-white px-3 py-1.5 text-xs text-black/55"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-6 sm:mt-7">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-black/35">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="text-xs font-medium text-black/45"
                        >
                          #{technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-start gap-3 lg:justify-end">
                  {/* Live Demo */}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-2 border border-black/15 bg-white px-4 py-2.5 text-sm text-black/70 transition-all hover:border-black/40 hover:text-black"
                    >
                      <span>Live Demo</span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {/* GitHub */}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="group/github flex items-center gap-2 border border-black/15 bg-white px-4 py-2.5 text-sm text-black/70 transition-all hover:border-black/40 hover:text-black"
                    >
                      <span>GitHub</span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </div>

              {/* Divider */}
              {index !== projects.length - 1 && (
                <div className="mt-14 h-px bg-black/10 sm:mt-20" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}