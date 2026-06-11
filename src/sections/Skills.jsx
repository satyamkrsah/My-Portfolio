import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 14,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden  dark:bg-slate-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl font-extrabold tracking-tight"
          >
            My <span className="text-accent">Skills</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((category, catIdx) => (
            <motion.div key={catIdx} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col justify-between" hoverable={true}>
                <div>
                  <h3 className="text-xl font-bold mb-6 pb-2 border-b border-slate-200/20 dark:border-white/5 text-white dark:text-slate-200">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.items.map((skill, skillIdx) => (
                      <div key={skillIdx} className="space-y-2">
                        <div className="flex justify-between items-center text-sm font-semibold">
                          <span className="text-slate-200 dark:text-slate-300">{skill.name}</span>
                          <span className="text-blue-600 dark:text-cyan-400">{skill.percentage}%</span>
                        </div>
                        
                        {/* Progress Bar Container */}
                        <div className="h-2 w-full bg-slate-200 dark:bg-slate-800/80 rounded-full overflow-hidden">
                          {/* Animated Fill */}
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.percentage}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut", delay: skillIdx * 0.08 }}
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
