import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';

export default function Projects() {
  const { projects } = portfolioData;
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 16,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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
            My <span className="text-accent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="group h-full">
              <GlassCard className="flex flex-col h-full overflow-hidden p-0 cursor-pointer" hoverable={true}>
                {/* Image Container with overlay */}
                <div 
                  className="relative overflow-hidden h-48 sm:h-52 w-full bg-slate-950/20 dark:bg-slate-950/40 group cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Backdrop Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 dark:from-dark-950/90 to-transparent pointer-events-none" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/50 backdrop-blur-md">
                    <span className="text-xs font-bold text-blue-300">{project.category}</span>
                  </div>

                  {/* View Details Badge - appears on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm"
                  >
                    <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/90 text-white font-semibold hover:bg-white transition-all">
                      View Details
                      <FiArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                </div>

                {/* Project Details */}
                <div 
                  className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-6 cursor-pointer"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white dark:text-slate-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-400 dark:text-slate-400 leading-relaxed font-medium line-clamp-2">
                      {project.shortDescription}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Technologies Tag List */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 4).map((t, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/30 hover:border-blue-500/40"
                        >
                          {t}
                        </motion.span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-500 dark:text-slate-400">
                          +{project.tech.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Source & Demo actions */}
                    <div className="flex items-center justify-between border-t border-slate-200/50 dark:border-white/5 pt-4">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-semibold text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-slate-100 transition-all hover:scale-105 active:scale-95"
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 hover:text-blue-700 dark:hover:text-cyan-300 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink className="w-4.5 h-4.5" />
                      </a>
                    </div>
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
