"use client";

import { motion } from "framer-motion";
import { FiTarget, FiTrendingUp, FiClock } from "react-icons/fi";

export default function CareerPlan() {
  return (
    <section id="career-plan" className="relative bg-black py-24 px-6 overflow-hidden">
      {/* background glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Academic & Career <span className="text-blue-500">Plan</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 bg-blue-500 rounded-full" />
          <p className="mt-6 text-white/70 max-w-3xl mx-auto leading-relaxed">
            This plan shows how I aim to grow as an Information Technology undergraduate by
            improving my academic performance, building practical technical skills, and preparing
            step by step for a successful professional career in the software industry.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Short Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-blue-400 mb-4">
              <FiClock />
              <h3 className="font-semibold text-lg">Short-Term Goals</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Maintain good academic performance and improve subject knowledge</li>
              <li>✔ Successfully complete my final year research project and portfolio</li>
              <li>✔ Strengthen my skills in Python, Java, React, Next.js, and database development</li>
              <li>✔ Improve my understanding of machine learning and computer vision concepts</li>
              <li>✔ Build more practical projects that solve real-world problems</li>
            </ul>
          </div>

          {/* Mid Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-indigo-400 mb-4">
              <FiTrendingUp />
              <h3 className="font-semibold text-lg">Mid-Term Goals</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Gain industry experience through internships or entry-level opportunities</li>
              <li>✔ Become more confident in full-stack application development</li>
              <li>✔ Improve problem-solving, debugging, and software design skills</li>
              <li>✔ Learn how to deploy, test, and maintain complete software solutions</li>
              <li>✔ Build a strong professional profile with projects, certificates, and practical experience</li>
            </ul>
          </div>

          {/* Long Term */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <FiTarget />
              <h3 className="font-semibold text-lg">Long-Term Goals</h3>
            </div>

            <ul className="space-y-3 text-white/75">
              <li>✔ Grow into a skilled software engineer with strong technical and professional abilities</li>
              <li>✔ Work on advanced software systems and intelligent technology solutions</li>
              <li>✔ Contribute to meaningful projects in software engineering, AI, or automation fields</li>
              <li>✔ Continue learning new technologies to stay updated in the industry</li>
              <li>✔ Build a successful and stable career with continuous personal and professional growth</li>
            </ul>
          </div>
        </div>

        {/* Skill Gap Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur p-10">
          <h3 className="text-2xl font-bold text-white mb-6">
            Skill Gap Analysis & Action Plan
          </h3>

          <div className="grid md:grid-cols-2 gap-8 text-white/75">
            <div>
              <h4 className="font-semibold text-white mb-3">
                Areas I Need to Improve
              </h4>
              <ul className="space-y-2">
                <li>• Advanced programming and software design practices</li>
                <li>• Testing, debugging, and deployment knowledge</li>
                <li>• Machine learning and computer vision implementation skills</li>
                <li>• Communication, documentation, and professional presentation</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">
                My Action Plan
              </h4>
              <ul className="space-y-2">
                <li>• Practice regularly through academic and personal projects</li>
                <li>• Follow online courses and certifications to improve technical knowledge</li>
                <li>• Build complete applications and research-based solutions step by step</li>
                <li>• Continuously update my portfolio with new learning and achievements</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/60 leading-relaxed">
            This plan helps me stay focused on both academic success and career preparation.
            It gives me a clear direction for improving my skills, gaining practical experience,
            and becoming ready for the professional software industry.
          </p>
        </div>
      </div>
    </section>
  );
}