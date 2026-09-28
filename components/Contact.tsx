"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Send,
} from "lucide-react";

import { profile } from "@/data/profile";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] =
    useState<FormStatus>("idle");

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setStatus("sending");

    try {
      const response = await fetch(
        "/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to send message"
        );
      }

      setStatus("success");

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

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
      href: profile.social.github,
      external: true,
    },
    {
      label: "Instagram",
      short: "IG",
      href: "YOUR_INSTAGRAM_URL",
      external: true,
    },
    {
      label: "Facebook",
      short: "f",
      href: "YOUR_FACEBOOK_URL",
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="
        border-b
        border-black/10
        bg-[#f8f8f6]
        py-16
        sm:py-20
        lg:py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-10
        "
      >

        {/* HEADER */}
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
          className="
            mb-12
            flex
            items-center
            gap-4
            sm:mb-14
          "
        >
          <span
            className="
              h-px
              w-7
              bg-black/40
              sm:w-10
            "
          />

          <p
            className="
              text-[10px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-black/50
              sm:text-sm
            "
          >
            07 — CONTACT
          </p>
        </motion.div>

        {/* MAIN CONTACT */}
        <div
          className="
            grid
            gap-12
            md:gap-14
            lg:grid-cols-[0.8fr_1.2fr]
            lg:gap-16
          "
        >

          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              x: -25,
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
              duration: 0.7,
            }}
          >
            <h2
              className="
                max-w-xl
                text-4xl
                font-medium
                leading-[1.02]
                tracking-[-0.045em]
                text-[#252525]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Let&apos;s work together.
            </h2>

            <p
              className="
                mt-5
                max-w-lg
                text-sm
                leading-7
                text-black/55
                sm:mt-6
                sm:text-base
                sm:leading-7
              "
            >
              Have a project, collaboration,
              opportunity, or just want to say
              hello? Send me a message.
            </p>

            {/* Availability */}
            {profile.availableForWork && (
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-green-600
                  "
                />

                <span className="text-sm text-black/50">
                  Available for work
                </span>
              </div>
            )}

            {/* EMAIL */}
            <div
              className="
                mt-8
                border-t
                border-black/10
                pt-5
                sm:mt-10
              "
            >
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                "
              >
                Direct Email
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="
                  group
                  mt-2
                  inline-flex
                  max-w-full
                  items-center
                  gap-2
                  break-all
                  text-sm
                  text-black/65
                  transition-colors
                  hover:text-black
                  sm:text-base
                  sm:break-normal
                "
              >
                {profile.email}

                <ArrowUpRight
                  size={15}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.form
            onSubmit={handleSubmit}
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
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              border-t
              border-black/10
              pt-1
            "
          >

            {/* NAME */}
            <div
              className="
                border-b
                border-black/10
                py-4
                sm:py-5
              "
            >
              <label
                htmlFor="name"
                className="
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                  sm:text-xs
                "
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="
                  mt-2
                  w-full
                  bg-transparent
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/25
                  sm:text-base
                "
              />
            </div>

            {/* EMAIL */}
            <div
              className="
                border-b
                border-black/10
                py-4
                sm:py-5
              "
            >
              <label
                htmlFor="email"
                className="
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                  sm:text-xs
                "
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="
                  mt-2
                  w-full
                  bg-transparent
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/25
                  sm:text-base
                "
              />
            </div>

            {/* SUBJECT */}
            <div
              className="
                border-b
                border-black/10
                py-4
                sm:py-5
              "
            >
              <label
                htmlFor="subject"
                className="
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                  sm:text-xs
                "
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Project / Opportunity / Collaboration"
                className="
                  mt-2
                  w-full
                  bg-transparent
                  text-sm
                  text-black
                  outline-none
                  placeholder:text-black/25
                  sm:text-base
                "
              />
            </div>

            {/* MESSAGE */}
            <div
              className="
                border-b
                border-black/10
                py-4
                sm:py-5
              "
            >
              <label
                htmlFor="message"
                className="
                  block
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-black/35
                  sm:text-xs
                "
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                  mt-2
                  w-full
                  resize-none
                  bg-transparent
                  text-sm
                  leading-6
                  text-black
                  outline-none
                  placeholder:text-black/25
                  sm:text-base
                  sm:leading-7
                "
              />
            </div>

            {/* SUBMIT */}
            <div
              className="
                mt-5
                flex
                flex-col
                gap-4
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* STATUS */}
              <div className="min-h-5 text-sm">
                {status === "success" && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="text-green-700"
                  >
                    Message sent successfully.
                  </motion.span>
                )}

                {status === "error" && (
                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    className="text-red-600"
                  >
                    Something went wrong.
                    Please try again.
                  </motion.span>
                )}
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-3
                  bg-[#252525]
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                  hover:bg-black
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                "
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}

                <Send
                  size={15}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </motion.button>
            </div>
          </motion.form>
        </div>

        {/* SOCIAL BAR */}
        {/* <div
          className="
            mt-14
            border-y
            border-black/10
            sm:mt-20
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
              py-4
              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:py-5
            "
          >
            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.18em]
                text-black/35
                sm:text-xs
              "
            >
              Find me online
            </p>

            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={
                    social.external
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    social.external
                      ? "noreferrer"
                      : undefined
                  }
                  aria-label={social.label}
                  className="
                    group
                    flex
                    items-center
                    gap-1.5
                    border
                    border-black/10
                    bg-white
                    px-3
                    py-2.5
                    text-black/50
                    transition-all
                    duration-300
                    hover:border-black/30
                    hover:text-black
                    sm:px-4
                    sm:py-3
                  "
                >
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

                  <ArrowUpRight
                    size={12}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              ))}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}