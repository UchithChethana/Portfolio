"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FiBookOpen, FiCheckCircle } from "react-icons/fi";

type JournalEntry = {
  week: string;
  title: string;
  focus: string;
  learned: string[];
  evidence: string[];
  reflection: string;
  nextSteps: string[];
};

export default function ReflectiveJournal() {
  const [active, setActive] = useState(0);

  const entries: JournalEntry[] = useMemo(
  () => [
    {
      week: "Week 1",
      title: "Understanding PPW and my academic direction",
      focus:
        "Learning the purpose of PPW and identifying my strengths, weaknesses, and future academic goals.",
      learned: [
        "I learned that self-reflection is important for understanding my current level and planning future improvement.",
        "I understood that academic growth is not only about marks, but also about skills, discipline, and how I present my progress.",
        "I learned how a portfolio can be used to show both my technical work and my personal development.",
      ],
      evidence: [
        "Reviewed my previous coursework and projects to identify the areas I need to improve.",
        "Started thinking clearly about how to present my academic journey, skills, and progress in one portfolio.",
      ],
      reflection:
        "This week helped me understand myself better as an undergraduate student. I realized that having technical skills alone is not enough. It is also important to reflect on what I have done, what I have learned, and what I need to improve. PPW gave me a clearer direction for how to grow both academically and professionally.",
      nextSteps: [
        "Set clear academic and career goals for the semester.",
        "Continue writing weekly reflections to track my progress properly.",
      ],
    },
    {
      week: "Week 2",
      title: "Building my portfolio with clear evidence",
      focus:
        "Organizing my academic portfolio in a way that clearly shows my projects, learning, and personal growth.",
      learned: [
        "I learned how to structure a portfolio in a more meaningful and professional way.",
        "I understood that evidence is very important when presenting skills and achievements.",
        "I learned that design, layout, and content clarity can improve how others understand my work.",
      ],
      evidence: [
        "Worked on improving the structure of my portfolio by organizing sections such as projects, academic journey, and reflective journal.",
        "Focused on presenting my work in a cleaner and more professional style instead of only listing information.",
      ],
      reflection:
        "This week made me realize that a portfolio is more than a simple website. It represents who I am as a student and future professional. I understood that I should not only show what I have done, but also explain what I learned from those experiences. This helped me think more deeply about how to connect my evidence with reflection.",
      nextSteps: [
        "Improve the presentation of project details with clearer outcomes and learning points.",
        "Add more supporting evidence such as certificates, achievements, and career planning details.",
      ],
    },
    {
      week: "Week 3",
      title: "Career planning and skill development",
      focus:
        "Thinking seriously about my future career path and identifying the skills I need to develop further.",
      learned: [
        "I learned how to connect my academic work with my future career goals.",
        "I understood the importance of identifying skill gaps and working on them step by step.",
        "I learned that career planning becomes stronger when it is based on realistic goals and continuous improvement.",
      ],
      evidence: [
        "Prepared a career development direction based on my interest in software engineering and technical project work.",
        "Identified areas I need to improve further, such as testing, deployment, documentation, and practical development experience.",
      ],
      reflection:
        "Before this, I had general ideas about my future, but not a very clear plan. This week helped me think in a more organized way. I started understanding what kind of skills are expected in the industry and how I can prepare for them while still being an undergraduate. It gave me more confidence and motivation to improve myself with purpose.",
      nextSteps: [
        "Focus on improving one or two important technical skills each month.",
        "Continue updating my portfolio so it reflects my growth and career readiness.",
      ],
    },
    {
      week: "Week 4",
      title: "Professional communication and continuous improvement",
      focus:
        "Developing clearer communication, better presentation, and a mindset of continuous improvement.",
      learned: [
        "I learned that professional communication is an important part of academic and career success.",
        "I understood the value of writing clearly, documenting properly, and presenting ideas in an organized way.",
        "I learned that reflection should be continuous, because improvement happens step by step.",
      ],
      evidence: [
        "Improved the wording and structure of my portfolio content to make it clearer and easier to understand.",
        "Worked on presenting my academic progress in a more professional and reflective manner.",
      ],
      reflection:
        "This week showed me that growth is not only about technical improvement. It is also about how I communicate, how I present myself, and how I continue learning from each experience. PPW helped me become more aware of my progress and more serious about building myself for the future.",
      nextSteps: [
        "Keep maintaining my reflective journal even after PPW is completed.",
        "Regularly review my progress and update my portfolio based on new learning and achievements.",
      ],
    },
  ],
  []
);

  const current = entries[active];

  return (
    <section id="reflective" className="relative overflow-hidden bg-black py-24 px-6">
      {/* background glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-600/30 bg-blue-600/10 px-4 py-2 text-blue-200">
            <FiBookOpen />
            PPW Reflection
          </div>

          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-white">
            Reflective <span className="text-blue-500">Journal</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-blue-500" />
          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
            This journal summarizes what I learned during PPW, how I applied it to my portfolio and
            career thinking, and how I plan to continue improving as a software engineering undergraduate.
          </p>
        </motion.div>

        {/* layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* left: week selector */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4">
              <p className="text-white/70 text-sm mb-3">Select week</p>

              <div className="space-y-2">
                {entries.map((e, i) => {
                  const selected = i === active;
                  return (
                    <button
                      key={e.week}
                      onClick={() => setActive(i)}
                      className={[
                        "w-full text-left rounded-xl px-4 py-3 border transition",
                        selected
                          ? "border-blue-500/50 bg-blue-600/10 text-white"
                          : "border-white/10 bg-black/20 text-white/80 hover:border-blue-500/30",
                      ].join(" ")}
                      type="button"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold">{e.week}</div>
                          <div className="text-xs text-white/60 mt-0.5">{e.title}</div>
                        </div>
                        {selected ? <FiCheckCircle className="text-blue-400" /> : null}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* right: content */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-7 md:p-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div>
                  <p className="text-blue-300 text-sm font-semibold">{current.week}</p>
                  <h3 className="mt-1 text-2xl font-bold text-white">{current.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">{current.focus}</p>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/80 text-sm">
                  Section: <span className="text-blue-300 font-semibold">Reflective Evidence</span>
                </div>
              </div>

              {/* learned */}
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-white font-semibold mb-3">What I learned</h4>
                  <ul className="space-y-2 text-white/75">
                    {current.learned.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <h4 className="text-white font-semibold mb-3">Evidence / Application</h4>
                  <ul className="space-y-2 text-white/75">
                    {current.evidence.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* reflection */}
              <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-600/10 p-5">
                <h4 className="text-white font-semibold mb-2">Reflection</h4>
                <p className="text-white/80 leading-relaxed">{current.reflection}</p>
              </div>

              {/* next steps */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-5">
                <h4 className="text-white font-semibold mb-3">Next steps</h4>
                <ul className="space-y-2 text-white/75">
                  {current.nextSteps.map((x) => (
                    <li key={x} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                        <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-8 text-xs text-white/50">
                This section documents weekly PPW reflection and the practical
                evidence connected to each stage of growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
