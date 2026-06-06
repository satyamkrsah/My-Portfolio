import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import FloatingParticles from '../components/FloatingParticles';
import ScrollToTop from '../components/ScrollToTop';
import MouseCursor from '../components/MouseCursor';
import Footer from '../sections/Footer';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = portfolioData.projects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return (
      <div className="relative min-h-screen text-white dark:text-slate-100 bg-slate-50 dark:bg-dark-950 transition-colors duration-300 cursor-none">
        <MouseCursor />
        <FloatingParticles />
        <Navbar />
        <main className="relative z-10 pt-40 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
            >
              Back to Projects
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-white dark:text-slate-100 bg-slate-50 dark:bg-dark-950 transition-colors duration-300 cursor-none">
      <MouseCursor />
      <FloatingParticles />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/projects')}
          className="fixed left-6 top-24 z-30 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 dark:bg-slate-800/90 text-white dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-lg"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back</span>
        </motion.button>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section with Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="relative mb-12 rounded-2xl overflow-hidden h-96 md:h-[500px]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50 dark:to-dark-950" />

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 left-8 px-5 py-2 rounded-full bg-blue-500/20 border border-blue-400/50 backdrop-blur-md"
            >
              <span className="text-sm font-bold text-blue-300">{project.category}</span>
            </motion.div>
          </motion.div>

          {/* Title & Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 text-sm text-slate-400 dark:text-slate-400 mb-4">
              <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" onClick={() => navigate('/')}>
                Home
              </span>
              <span>/</span>
              <span className="hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer" onClick={() => navigate('/projects')}>
                Projects
              </span>
              <span>/</span>
              <span className="text-white dark:text-slate-100">{project.title}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-white dark:text-white mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-slate-200 dark:text-slate-300 leading-relaxed">
              {project.fullDetails}
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* About Section */}
              <section className="bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-white/5">
                <h2 className="text-3xl font-bold text-white dark:text-white mb-6">
                  About This Project
                </h2>
                <p className="text-lg text-slate-200 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </section>

              {/* Features Section */}
              <section className="bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-200/50 dark:border-white/5">
                <h2 className="text-3xl font-bold text-white dark:text-white mb-8">
                  Key Features
                </h2>
                <ul className="space-y-4">
                  {project.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-4"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                          <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white dark:text-white">
                          {feature}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </section>

              {/* Challenge & Solution Section */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-br from-red-500/10 to-pink-500/10 dark:from-red-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-red-200/50 dark:border-red-800/30"
                >
                  <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
                    🎯 Challenge
                  </h3>
                  <p className="text-slate-200 dark:text-slate-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 border border-green-200/50 dark:border-green-800/30"
                >
                  <h3 className="text-2xl font-bold text-white dark:text-white mb-4">
                    ✨ Solution
                  </h3>
                  <p className="text-slate-200 dark:text-slate-300 leading-relaxed">
                    {project.solution}
                  </p>
                </motion.div>
              </section>
            </motion.div>

            {/* Right Column - Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6"
            >
              {/* Technologies Stack */}
              <section className="bg-gradient-to-br from-white/50 to-slate-100/50 dark:from-slate-800/50 dark:to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-slate-200/50 dark:border-white/5 sticky top-32">
                <h3 className="text-2xl font-bold text-white dark:text-white mb-6">
                  Tech Stack
                </h3>
                <div className="space-y-3">
                  {project.tech.map((tech, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + idx * 0.05 }}
                      className="px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 dark:border-cyan-500/30 hover:border-blue-500/40 transition-all group cursor-pointer"
                    >
                      <span className="text-sm font-semibold text-blue-600 dark:text-cyan-400 group-hover:text-blue-700 dark:group-hover:text-cyan-300">
                        {tech}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-slate-900 dark:bg-white/10 hover:bg-slate-800 dark:hover:bg-white/20 text-white dark:text-slate-100 font-semibold transition-all transform hover:scale-105 active:scale-95"
                >
                  <FaGithub className="w-5 h-5" />
                  View Code
                </a>

                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition-all transform hover:scale-105 active:scale-95"
                >
                  <FiExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </motion.div>

              {/* Project Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200/50 dark:border-purple-800/30"
              >
                <h3 className="text-lg font-bold text-white dark:text-white mb-4">
                  📊 Project Stats
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400 dark:text-slate-400">Technologies</span>
                    <span className="font-bold text-white dark:text-white">{project.tech.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400 dark:text-slate-400">Features</span>
                    <span className="font-bold text-white dark:text-white">{project.features.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-400 dark:text-slate-400">Category</span>
                    <span className="font-bold text-blue-600 dark:text-blue-400">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Related Projects Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-20 pt-12 border-t border-slate-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold text-white dark:text-white mb-8">
              Other Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {portfolioData.projects
                .filter(p => p.id !== project.id)
                .map((p) => (
                  <motion.button
                    key={p.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => navigate(`/project/${p.id}`)}
                    className="text-left p-6 rounded-xl bg-white/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/50 dark:border-white/5 hover:border-blue-500/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white dark:text-white">
                        {p.title}
                      </h4>
                      <span className="text-2xl">→</span>
                    </div>
                    <p className="text-sm text-slate-400 dark:text-slate-400 line-clamp-2">
                      {p.shortDescription}
                    </p>
                  </motion.button>
                ))}
            </div>
          </motion.div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
