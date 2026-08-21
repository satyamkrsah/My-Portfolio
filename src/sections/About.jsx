import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimatedCounter } from "../hooks/useAnimatedCounter";
import { portfolioData } from "../data/portfolioData";
import GlassCard from "../components/GlassCard";

function StatCard({ label, value, suffix, trigger }) {
  const count = useAnimatedCounter(value, 1200, trigger);
  return (
    <GlassCard
      className="text-center py-6 px-4 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20"
      hoverable={true}
    >
      <h3 className="text-3xl sm:text-4xl font-black text-blue-600 dark:text-blue-400">
        {count}
        {suffix}
      </h3>
      <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest">
        {label}
      </p>
    </GlassCard>
  );
}

export default function About() {
  const { personalInfo, stats, education } = portfolioData;
  const [statsTriggered, setStatsTriggered] = useState(false);

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white dark:text-white"
          >
            About <span className="text-accent">Me</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed summary and objective */}
          <div className="lg:col-span-7 space-y-6">
            <GlassCard hoverable={false}>
              <h3 className="font-days text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Professional Journey
              </h3>
              <p className="font-days text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                What started as an interest in coding has evolved into a passion
                for building digital products that make a difference. By
                combining technical knowledge, practical experience, and
                continuous learning, I focus on developing applications that are
                both functional and user-centric.
              </p>
              <h3 className="font-days3 text-2xl font-bold mb-4 text-slate-800 dark:text-slate-200">
                Career Objective
              </h3>
              <p className="font-days text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                Aspiring Software Engineer with a strong foundation in Computer
                Science and modern web technologies. Passionate about building
                scalable applications, solving complex problems, and
                contributing to impactful software solutions.
              </p>
            </GlassCard>

            {/* Stats list with scroll triggers */}
            <motion.div
              onViewportEnter={() => setStatsTriggered(true)}
              className="font-days5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 sm:px-0"
            >
              {stats.map((stat, idx) => (
                <StatCard
                  key={idx}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  trigger={statsTriggered}
                />
              ))}
            </motion.div>
          </div>

          {/* Education profile */}
          <div className="lg:col-span-5">
            <GlassCard
              hoverable={false}
              className="border-l-4 border-l-purple-500 h-full"
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 mb-4">
                {education.period}
              </span>
              <h3 className="text-2xl font-extrabold text-white dark:text-white mb-2">
                {education.degree}
              </h3>
              <h4 className="text-lg font-bold text-slate-400 dark:text-slate-400 mb-4">
                {education.institution}
              </h4>
              <p className="font-days text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                Building a strong foundation in computer science principles, software engineering, and modern development technologies through academic learning and hands-on projects.
              </p>
              <div className="space-y-3">
                <h5 className="font-bold text-slate-800 dark:text-slate-200">
                  Relevant Coursework Focus:
                </h5>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-600 dark:text-slate-400">
                  {education.subjects.slice(0, 4).map((subject, idx) => (
                    <li
                      key={idx}
                      className=" flex items-center space-x-2 font-medium"
                    >
                      <span className=" w-1.5 h-1.5 rounded-full bg-purple-500" />
                      <span>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
