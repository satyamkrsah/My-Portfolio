import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowDown, FiDownload, FiMessageSquare } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import profileImage from "../assets/image.png";

export default function Hero() {
  const { name, role, bio, github, linkedin, email } = portfolioData.personalInfo;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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
        stiffness: 100,
        damping: 16,
      },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glowing Blurs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/20 glow-orb animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 glow-orb animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/5 glow-orb animate-pulse-slow" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto px-4 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8 text-center lg:text-left"
          >

            {/* Greeting Tag */}
            <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-500/30 dark:border-blue-500/30 light:border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs md:text-sm font-semibold tracking-wider uppercase">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
              <span>Available for internships & projects</span>
            </motion.div>

            {/* Name & Role */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight">
                Hi, I'm <span className="text-accent">{name}</span>
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl font-bold text-slate-500 dark:text-slate-400 tracking-wide">
                {role}
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-400 dark:text-slate-400 leading-relaxed font-medium">
              {bio}
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/projects"
                className="relative px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-2 overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>View Projects</span>
                <FiArrowDown className="w-5 h-5" />
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <FiMessageSquare className="w-5 h-5 text-purple-500 dark:text-purple-400" />
                <span>Contact Me</span>
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="px-8 py-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <FiDownload className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />
                <span>Resume</span>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-6 pt-6">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-all hover:scale-110"
                aria-label="Send Email"
              >
                <FaEnvelope className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Picture - Right Side */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-first lg:order-last"
          >
            <div className="relative">
              {/* Backlight Glow */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 opacity-40 blur-lg animate-pulse-slow" />
              
              {/* Image Border Container */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-purple-500 to-cyan-400 shadow-glass hover:scale-105 transition-transform duration-300">
                <img
                  src= {profileImage }
                  alt={name}
                  className="w-full h-full object-cover rounded-full border-2 border-slate-100 dark:border-dark-950 bg-slate-800"
                />
      
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
