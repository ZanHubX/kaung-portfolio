"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToHero = () => {
    const hero = document.getElementById("home");

    if (hero) {
      hero.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.button
          type="button"
          onClick={scrollToHero}
          aria-label="Back to top"
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.8,
          }}
          whileHover={{
            y: -4,
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-6
            right-6
            z-40
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-[#252525]
            text-white
            shadow-lg
            transition-colors
            hover:bg-black
            sm:bottom-8
            sm:right-8
          "
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}