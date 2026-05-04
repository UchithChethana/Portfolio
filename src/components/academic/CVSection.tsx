"use client";

import { motion } from "framer-motion";
import { FiDownload, FiFileText, FiExternalLink } from "react-icons/fi";

export default function CVSection() {
  const cvPdf = "/Uchith_cv.pdf";

  return (
    <section id="cv" className="relative overflow-hidden bg-black px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-blue-200">
            <FiFileText />
            Supporting Evidence
          </div>

          <h2 className="mt-5 text-4xl font-extrabold text-white md:text-5xl">
            Curriculum <span className="text-blue-500">Vitae</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />

          <p className="mx-auto mt-6 max-w-3xl leading-relaxed text-white/70">
            My CV is included as part of this academic portfolio so that formal
            qualifications, education history, and supporting details are easy to review.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={cvPdf}
            download
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:brightness-110 active:brightness-95"
          >
            <FiDownload />
            Download CV
          </a>

          <a
            href={cvPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/10"
          >
            <FiExternalLink />
            Open in new tab
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <div className="font-semibold text-white">CV Preview</div>
            <div className="text-sm text-white/60">Embedded PDF preview</div>
          </div>

          <div className="h-[80vh] w-full bg-neutral-900">
            <object data={`${cvPdf}#view=FitH`} type="application/pdf"
              className="h-full w-full"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 p-6 text-center text-white">
                <p className="text-lg font-medium">Preview could not be loaded.</p>
                <p className="text-white/70">
                  Please open the CV in a new tab or download it.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={cvPdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700"
                  >
                    Open CV
                  </a>

                  <a
                    href={cvPdf}
                    download
                    className="rounded-lg border border-white/20 px-4 py-2 font-semibold text-white hover:bg-white/10"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </object>
          </div>
        </motion.div>
      </div>
    </section>
  );
}