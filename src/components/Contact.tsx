"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function Contact() {
  const contactItems = [
    {
      label: "Email",
      value: "malithb072@gmail.com",
      href: "mailto:malithb072@gmail.com",
      icon: FiMail,
    },
    {
      label: "Phone",
      value: "+94 74 102 1815",
      href: "tel:+94741021815",
      icon: FiPhone,
    },
    {
      label: "Location",
      value: "Ratnapura, Sri Lanka",
      href: undefined,
      icon: FiMapPin,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/malith-bandara-8681aa301",
      href: "https://www.linkedin.com/in/malith-bandara-8681aa301",
      icon: FiLinkedin,
    },
    {
      label: "GitHub",
      value: "github.com/it22249166",
      href: "https://github.com/it22249166",
      icon: FiGithub,
    },
  ];

  return (
    <section id="contact" className="relative bg-gray-900">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500/25 via-pink-500/20 to-blue-500/25 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500/25 via-cyan-500/20 to-emerald-500/25 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Contact</h2>
          <p className="mt-2 text-white/70">
            Reach out for portfolio feedback, academic collaboration, or project discussion
          </p>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="mt-14 grid items-stretch gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
          >
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            <p className="mt-3 text-white/65 leading-relaxed">
              These are the main channels I use for sharing portfolio details,
              discussing academic work, and connecting around software engineering topics.
            </p>

            <ul className="mt-8 space-y-4 text-white/75">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-blue-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm text-white/50">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        className="font-medium text-white/85 transition hover:text-white"
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-medium text-white/85">{value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-10 shadow-2xl backdrop-blur"
          >
            <div aria-hidden className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative">
              <h3 className="text-2xl font-bold text-white">Let&apos;s Connect</h3>
              <p className="mt-3 text-white/70 leading-relaxed">
                I welcome conversations around academic projects, portfolio
                reviews, technical learning, and future collaboration in software engineering.
              </p>

              <div className="mt-10 rounded-2xl border border-white/10 bg-black/25 p-6">
                <h4 className="text-lg font-semibold text-white">Best reasons to reach out</h4>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Portfolio feedback",
                    "Academic project discussion",
                    "Peer learning and collaboration",
                    "Technical networking",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/80"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:malithb072@gmail.com?subject=Academic%20Portfolio%20Inquiry"
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 font-semibold text-white transition hover:brightness-110"
                >
                  Send Email
                </a>

                <a
                  href="https://www.linkedin.com/in/malith-bandara-8681aa301"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-white/90 transition hover:bg-white/10"
                >
                  Connect on LinkedIn
                </a>
              </div>

              <div className="pt-6 text-sm text-white/60">
                Typical reply time: within 24 hours
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
