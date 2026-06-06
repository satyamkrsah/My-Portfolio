import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import { FiBookOpen, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            Education & <span className="text-accent">Timeline</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Timeline Line */}
        <div className="relative pl-6 sm:pl-8 border-l-2 timeline-line ml-4 md:ml-6 space-y-12">
          {/* Bullet Dot */}
          <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-blue-500 border-4 border-slate-950 light:border-slate-50 animate-pulse" />

          {/* Education timeline item card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 85 }}
          >
            <GlassCard className="space-y-6" hoverable={false}>
              {/* Header block */}
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/25">
                    <FiBookOpen className="w-3.5 h-3.5" />
                    <span>Degree Program</span>
                  </span>
                  <h3 className="text-2xl font-extrabold text-white dark:text-slate-100">
                    {education.degree}
                  </h3>
                  <p className="text-lg font-bold text-slate-500 dark:text-slate-400">
                    {education.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end text-sm text-slate-500 dark:text-slate-400 font-semibold space-y-1">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                    <span>{education.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                    <span>Bihar, India</span>
                  </span>
                </div>
              </div>

              {/* Description bio */}
              <p className="text-slate-400 dark:text-slate-400 leading-relaxed font-medium">
                {education.description}
              </p>

              {/* Coursework mapping */}
              <div className="space-y-4 pt-4 border-t border-slate-200/50 dark:border-white/5">
                <h4 className="font-bold text-white dark:text-slate-200">
                  Key Subjects Mastered:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {education.subjects.map((subject, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-white/5 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-200"
                    >
                      <span className="flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                      <span className="text-sm font-semibold text-slate-200 dark:text-slate-300">{subject}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
