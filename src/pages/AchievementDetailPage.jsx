import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { achievementData } from "../data/achievementData";
import Navbar from "../components/Navbar";
import FloatingParticles from "../components/FloatingParticles";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../sections/Footer";
import { FiArrowLeft, FiCalendar, FiTag, FiTool } from "react-icons/fi";

export default function AchievementDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const achievement = achievementData.find((a) => a.id === parseInt(id));

  if (!achievement) {
    return (
      <div className="min-h-screen flex items-center justify-center dark:bg-slate-950 dark:text-white">
        <h1 className="text-2xl font-bold">Achievement not found</h1>
        <button
          onClick={() => navigate("/achievements")}
          className="ml-4 text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-dark-950 transition-colors duration-300">
      <FloatingParticles />
      <Navbar />

      <main className="relative z-10 pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate("/achievements")}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-500 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <FiArrowLeft className="text-xl" />
            <span className="font-semibold">Back to Achievements</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 dark:bg-slate-900/40 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/50 dark:border-white/10"
          >
            {/* Header section */}
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
                {achievement.title}
              </h1>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="flex items-center gap-1">
                  <FiCalendar /> {achievement.date}
                </span>
                <span className="flex items-center gap-1">
                  <FiTag /> {achievement.category}
                </span>
              </div>
            </div>

            {/* Main Image */}
            <div className="w-full rounded-2xl overflow-hidden shadow-lg mb-10 relative aspect-video">
              <img
                src={achievement.coverImage}
                alt={achievement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
            </div>

            {/* Description & Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                  Overview
                </h3>
                <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                  {achievement.description}
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                  Technologies / Skills
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {achievement.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-full text-sm font-semibold border border-blue-200 dark:border-blue-800/50"
                    >
                      <FiTool /> {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gallery Section */}
            {achievement.gallery && achievement.gallery.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2 mb-6">
                  Gallery
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {achievement.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      className="rounded-xl overflow-hidden shadow-md aspect-video border border-slate-200/50 dark:border-white/10"
                    >
                      <img
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
