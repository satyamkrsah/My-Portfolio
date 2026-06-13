import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { achievementData } from '../data/achievementData';

export default function Achievements() {
  const navigate = useNavigate();

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
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 14,
      },
    },
  };

  return (
    <section id="achievements" className="py-20 relative overflow-hidden dark:bg-slate-950/10">
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
            Engineering <span className="text-accent">Achievements</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Achievements Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievementData.map((achievement) => (
            <motion.div 
              key={achievement.id} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              onClick={() => navigate(`/achievement/${achievement.id}`)}
              className="cursor-pointer h-full group"
            >
              <div className="h-full flex flex-col overflow-hidden rounded-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-md border border-slate-200/50 dark:border-white/10 shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/10 transition-all duration-300">
                <div className="w-full h-48 sm:h-56 relative overflow-hidden">
                  <img 
                    src={achievement.coverImage} 
                    alt={achievement.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none opacity-80" />
                </div>
                <div className="p-5 flex-grow flex flex-col justify-center items-center">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 text-center line-clamp-2">
                    {achievement.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
