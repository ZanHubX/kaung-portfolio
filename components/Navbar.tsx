"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/90 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        <div className="flex h-[68px] items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="text-base font-semibold tracking-tight sm:text-lg"
          >
            Kaung Zan Thaw
            <span className="ml-1.5 text-sm font-normal text-black/45 sm:ml-2">
              (Eric Wang)
            </span>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-black/60 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* DESKTOP CV */}
          <a
            href="/Kaung-Zan-Thaw-CV.pdf"
            download
            className="hidden items-center gap-2 rounded-lg bg-[#151515] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-black md:flex"
          >
            Download CV
            <Download size={15} />
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 transition hover:border-black/25 hover:text-black md:hidden"
          >
            {isOpen ? (
              <X size={19} />
            ) : (
              <Menu size={19} />
            )}
          </button>

        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-black/10 py-4">

                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.04,
                    }}
                    className="block border-b border-black/[0.06] py-3.5 text-sm text-black/65 last:border-b-0"
                  >
                    {item.label}
                  </motion.a>
                ))}

                {/* Mobile CV */}
                <a
                  href="/Kaung-Zan-Thaw-CV.pdf"
                  download
                  onClick={() => setIsOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 bg-[#151515] px-4 py-3.5 text-sm font-medium text-white"
                >
                  Download CV
                  <Download size={15} />
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </nav>
    </header>
  );
}