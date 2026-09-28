"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { certificates } from "@/data/certificates";

export default function Certificates() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const animationFrame = useRef<number | null>(null);

  const [isDraggingState, setIsDraggingState] = useState(false);

  /*
   * ==========================================
   * MOUSE DOWN
   * ==========================================
   */

  const handleMouseDown = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const slider = sliderRef.current;

    if (!slider) return;

    isDragging.current = true;
    setIsDraggingState(true);

    startX.current = event.clientX;
    startScrollLeft.current = slider.scrollLeft;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  };

  /*
   * ==========================================
   * MOUSE MOVE
   * ==========================================
   */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    const slider = sliderRef.current;

    if (!slider || !isDragging.current) return;

    const currentX = event.clientX;
    const distance = currentX - startX.current;

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }

    animationFrame.current = requestAnimationFrame(() => {
      slider.scrollLeft =
        startScrollLeft.current - distance;
    });
  };

  /*
   * ==========================================
   * STOP DRAGGING
   * ==========================================
   */

  const stopDragging = () => {
    isDragging.current = false;
    setIsDraggingState(false);

    if (animationFrame.current) {
      cancelAnimationFrame(animationFrame.current);
    }
  };

  /*
   * ==========================================
   * CLEANUP
   * ==========================================
   */

  useEffect(() => {
    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <section
      id="certificates"
      className="border-b border-black/10 bg-[#f8f8f6] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ======================================
            HEADER
        ====================================== */}

        <div className="mb-10 flex items-center gap-4 sm:mb-14">
          <span className="h-px w-7 bg-black/40 sm:w-10" />

          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/50 sm:text-sm">
            06 — CERTIFICATES
          </p>
        </div>

        {/* ======================================
            SCROLL / DRAG INDICATOR
        ====================================== */}

        <div className="mb-5 flex justify-end sm:mb-7">
          <div className="flex items-center gap-3 text-black/35">

            {/* Mouse Icon */}
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-black/25 p-1">
              <motion.span
                animate={{
                  y: [0, 7, 0],
                }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-1.5 w-1 rounded-full bg-black/45"
              />
            </div>

            {/* Arrow */}
            <motion.span
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-lg"
            >
              →
            </motion.span>

            <span className="text-xs uppercase tracking-[0.18em]">
              Drag to explore
            </span>
          </div>
        </div>

        {/* ======================================
            CERTIFICATE HORIZONTAL GALLERY
        ====================================== */}

        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          className={`
            flex
            gap-6
            overflow-x-auto
            pb-7
            select-none
            ${
              isDraggingState
                ? "cursor-grabbing"
                : "cursor-grab"
            }
          `}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >

          {certificates.map(
            (certificate, index) => (
              <motion.article
                key={certificate.id}
                initial={{
                  opacity: 0,
                  x: 25,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                className="
                  w-[320px]
                  shrink-0
                  sm:w-[380px]
                "
              >

                {/* ==================================
                    CERTIFICATE IMAGE
                ================================== */}

                <div className="group overflow-hidden border border-black/10 bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden">

                    <img
                      src={certificate.image}
                      alt={certificate.name}
                      draggable={false}
                      className="
                        pointer-events-none
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-[1.02]
                      "
                    />

                    {/* Subtle hover overlay */}
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-black/0
                        transition-colors
                        duration-500
                        group-hover:bg-black/[0.03]
                      "
                    />

                  </div>
                </div>

                {/* ==================================
                    CERTIFICATE INFORMATION
                ================================== */}

                <div className="mt-4 sm:mt-5">

                  {/* Date */}
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                    {certificate.date}
                  </p>

                  {/* Certificate Name */}
                  <h2 className="mt-2 max-w-[360px] text-lg font-medium leading-[1.25] tracking-[-0.025em] text-[#252525] sm:text-2xl">
                    {certificate.name}
                  </h2>

                  {/* Organization */}
                  <p className="mt-2 text-sm leading-6 text-black/50">
                    {certificate.organization}
                  </p>

                </div>

              </motion.article>
            )
          )}

        </div>

        {/* ======================================
            BOTTOM INDICATOR
        ====================================== */}

        <div className="mt-6 flex items-center gap-3 sm:mt-8 sm:gap-4">

          <div className="h-px flex-1 bg-black/10" />

          <div className="flex items-center gap-3">

            <motion.span
              animate={{
                x: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-black/30"
            >
              ← →
            </motion.span>

            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-black/30">
              Drag / Swipe
            </span>

          </div>

          <div className="h-px flex-1 bg-black/10" />

        </div>

      </div>
    </section>
  );
}