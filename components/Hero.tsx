"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import PhotoFrame from "@/components/PhotoFrame";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden bg-[#f7f6f2]"
    >
      <div className="mx-auto flex min-h-[100svh] max-w-7xl items-center px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-32 lg:px-10 lg:pb-20 lg:pt-32">
        <div className="grid w-full items-center gap-12 md:gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mb-5 flex items-center gap-3 sm:mb-7"
            >
              <span className="h-px w-7 bg-black/40 sm:w-8" />
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/45 sm:text-xs">
                Portfolio · 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-4xl text-[2.8rem] font-medium leading-[0.96] tracking-[-0.055em] text-[#202020] sm:text-5xl md:text-6xl lg:text-[5.5rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-3 text-base text-black/45 sm:mt-4 sm:text-xl"
            >
              ({profile.nickname})
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-6 max-w-2xl sm:mt-8"
            >
              <p className="text-base font-medium leading-7 text-black/70 sm:text-xl sm:leading-8 lg:text-2xl">
                Backend Developer{" "}
                <span className="text-black/25">|</span>{" "}
                Product Researcher{" "}
                <span className="text-black/25">|</span>{" "}
                Business & Operations Strategist
              </p>

              <p className="mt-3 text-xs text-black/45 sm:mt-4 sm:text-base">
                Entrepreneurship Student · Bangkok University International
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="mt-6 max-w-2xl text-sm leading-6 text-black/55 sm:mt-8 sm:text-lg sm:leading-8"
            >
              {profile.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-7 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 bg-[#202020] px-4 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-black sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View Selected Work
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-black/15 bg-white px-4 py-3 text-xs font-medium text-black/65 transition-all duration-300 hover:border-black/35 hover:text-black sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Me
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>

            <motion.a
              href="#about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1 }}
              className="mt-9 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-black/35 transition-colors hover:text-black/60 sm:mt-14 sm:text-xs"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown size={14} />
              </motion.span>
              Scroll to explore
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto w-full max-w-[285px] sm:max-w-[340px] lg:max-w-[380px]"
          >
            <PhotoFrame
              src={profile.images.home}
              alt={profile.displayName}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-3 flex items-center justify-between border-t border-black/10 pt-2.5 sm:mt-4 sm:pt-3"
            >
              <span className="text-[10px] uppercase tracking-[0.16em] text-black/35 sm:text-xs">
                Kaung Zan Thaw
              </span>
              <span className="text-[10px] text-black/30 sm:text-xs">
                01 / 01
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-black/10"
      />
    </section>
  );
}
