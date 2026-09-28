"use client";

import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
} from "lucide-react";

import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: "Email",
      short: "✉",
      href: `mailto:${profile.email}`,
      external: false,
    },
    {
      label: "LinkedIn",
      short: "in",
      href: profile.social.linkedin,
      external: true,
    },
    {
      label: "GitHub",
      short: "GH",
      href: "https://github.com/ZanHubX",
      external: true,
    },
    {
      label: "Behance",
      short: "Be",
      href: "https://www.behance.net/kaungthaw6",
      external: true,
    },
    {
      label: "Facebook",
      short: "f",
      href: "https://www.facebook.com/ericfvkinw4ng/",
      external: true,
    },
    {
      label: "Instagram",
      short: "IG",
      href: "https://www.instagram.com/ericfvkinw4ng",
      external: true,
    },
    {
      label: "X",
      short: "X",
      href: "https://x.com/KaungZanThaw2",
      external: true,
    },
    {
      label: "Snapchat",
      short: "SC",
      href: "https://www.snapchat.com/add/ericfvkinw4ng",
      external: true,
    },
  ];

  const scrollToTop = () => {
    document
      .getElementById("home")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <footer className="border-t border-black/10 bg-[#f7f6f2]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">

        {/* ================================
            IDENTITY
        ================================= */}
        <div
          className="
            flex
            flex-col
            gap-8
            py-10
            sm:py-14
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          {/* Name + Role */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
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
            }}
          >
            <a
              href="#home"
              className="
                text-xl
                font-semibold
                tracking-tight
                text-[#202020]
                sm:text-2xl
              "
            >
              Kaung Zan Thaw

              <span
                className="
                  ml-2
                  text-sm
                  font-normal
                  text-black/40
                  sm:text-base
                "
              >
                (Eric Wang)
              </span>
            </a>

            <p
              className="
                mt-3
                max-w-lg
                text-sm
                leading-6
                text-black/45
              "
            >
              Backend Developer · Product Researcher ·
              Business & Operations Strategist
            </p>
          </motion.div>

          {/* Back To Top */}
          <motion.button
            type="button"
            onClick={scrollToTop}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-xs
              font-medium
              uppercase
              tracking-[0.16em]
              text-black/45
              transition-colors
              hover:text-black
            "
          >
            Back to top

            <span
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-black/15
                transition-colors
                duration-300
                group-hover:border-black/40
              "
            >
              <ArrowUp
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                "
              />
            </span>
          </motion.button>
        </div>

        {/* ================================
            SOCIAL MEDIA
        ================================= */}
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.1,
          }}
          className="
            border-y
            border-black/10
            py-5
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            {/* Label */}
            <p
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.18em]
                text-black/35
                sm:text-xs
              "
            >
              Find Me Online
            </p>

            {/* Social Links */}
            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={
                    social.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    border
                    border-black/10
                    bg-white
                    px-3
                    py-2.5
                    text-black/50
                    transition-colors
                    duration-300
                    hover:border-black/30
                    hover:text-black
                    sm:px-4
                    sm:py-3
                  "
                >
                  {/* Social Mark */}
                  <span
                    className="
                      flex
                      h-5
                      min-w-5
                      items-center
                      justify-center
                      text-[11px]
                      font-semibold
                    "
                  >
                    {social.short}
                  </span>

                  {/* Label */}
                  <span
                    className="
                      text-[10px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      sm:text-xs
                    "
                  >
                    {social.label}
                  </span>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================================
            COPYRIGHT
        ================================= */}
        <div
          className="
            flex
            flex-col
            gap-2
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-xs
              text-black/35
            "
          >
            © {currentYear} Kaung Zan Thaw.
            All rights reserved.
          </p>

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-black/25
            "
          >
            Personal Portfolio
          </p>
        </div>

      </div>
    </footer>
  );
}