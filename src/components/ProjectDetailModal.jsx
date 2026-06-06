import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-dark-950 dark:via-slate-900 dark:to-dark-950 shadow-2xl border border-slate-200/50 dark:border-white/10">
              {/* Header */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-dark-950" />

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 text-white dark:text-slate-100 transition-all shadow-lg z-10"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12 space-y-8">
                {/* Title & Category */}
                <div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-4"
                  >
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-black text-white dark:text-white mb-4"
                  >
                    {project.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg text-slate-400 dark:text-slate-400 leading-relaxed"
                  >
                    {project.fullDetails}
                  </motion.p>
                </div>

                {/* Tabs */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-4 border-b border-slate-200 dark:border-white/10"
                >
                  {['overview', 'features', 'challenge'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 font-semibold transition-all relative capitalize ${
                        activeTab === tab
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-slate-400 dark:text-slate-400 hover:text-white dark:hover:text-slate-200'
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                          transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                        />
                      )}
                    </button>
                  ))}
                </motion.div>

                {/* Tab Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  {activeTab === 'overview' && (
                    <div className="space-y-4">
                      <p className="text-lg text-slate-200 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}

                  {activeTab === 'features' && (
                    <ul className="space-y-3">
                      {project.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                          className="flex items-center gap-3 text-slate-200 dark:text-slate-300"
                        >
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex-shrink-0" />
                          <span className="text-base font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  {activeTab === 'challenge' && (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-white mb-2">
                          Challenge
                        </h3>
                        <p className="text-slate-200 dark:text-slate-300 leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white dark:text-white mb-2">
                          Solution
                        </h3>
                        <p className="text-slate-200 dark:text-slate-300 leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>

                {/* Technologies */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="space-y-3"
                >
                  <h3 className="text-lg font-bold text-white dark:text-white">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20 dark:border-cyan-500/30"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-white/10"
                >
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 text-white font-semibold transition-all group"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>View Code</span>
                  </a>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition-all group"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
