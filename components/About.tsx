"use client";

import { motion } from "framer-motion";

import PhotoFrame from "./PhotoFrame";
import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-12 flex items-center gap-4 sm:mb-16 lg:mb-20">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            {about.label}
          </p>
        </div>

        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full max-w-[285px] sm:max-w-sm"
          >
            <PhotoFrame
              src={about.image}
              alt="Kaung Zan Thaw"
            />

            <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-black/40 sm:mt-5 sm:text-xs">
              Kaung Zan Thaw / Eric Wang
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-3xl text-3xl font-medium leading-[1.08] tracking-[-0.035em] text-[#252525] sm:text-5xl lg:text-6xl">
              {about.title}
            </h2>

            <div className="mt-7 max-w-2xl space-y-5 sm:mt-10 sm:space-y-6">
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-black/60 sm:text-lg sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Interests */}
            <div className="mt-9 sm:mt-12">
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.2em] text-black/40 sm:mb-5 sm:text-xs">
                Areas of Interest
              </p>

              <div className="flex flex-wrap gap-2">
                {about.interests.map((interest) => (
                  <span
                    key={interest}
                    className="border border-black/15 px-3 py-2 text-xs text-black/65 sm:px-4 sm:text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Approach */}
            <div className="mt-9 border-t border-black/10 pt-6 sm:mt-12 sm:pt-8">
              <p className="text-sm font-medium text-black/80">
                {about.approach.title}
              </p>

              <p className="mt-3 max-w-xl text-sm leading-7 text-black/55">
                {about.approach.description}
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}