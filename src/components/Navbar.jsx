import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Achievements", path: "/achievements" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const getActiveSection = () => {
    const path = location.pathname;
    if (path === "/") return "hero";
    return path.replace("/", "");
  };

  const activeSection = getActiveSection();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Backdrop blur effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 via-slate-50/50 to-transparent dark:from-dark-950/80 dark:via-dark-950/50 dark:to-transparent backdrop-blur-md border-b border-slate-200/20 dark:border-white/5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Enhanced with gradient and hover effect */}
          <Link to="/" className="flex-shrink-0 group cursor-pointer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span className="text-3xl font-normal font-['Great_Vibes'] text-blue-600">
                Satyam
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300 rounded-full" />
            </motion.div>
          </Link>

          {/* Desktop Nav Items - Modern design */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive =
                activeSection ===
                (item.path === "/" ? "hero" : item.path.replace("/", ""));
              return (
                <Link key={item.path} to={item.path} className="relative group">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-accent dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10"
                        : "text-muted dark:text-slate-400 hover:text-accent dark:hover:text-blue-400"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 28,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}

            {/* Divider */}
            <div className="h-8 w-px bg-slate-200 dark:bg-white/10 mx-2" />

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/10 focus:outline-none transition-all"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer - Modern sliding animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden border-t border-slate-200/20 dark:border-white/5 bg-gradient-to-b from-slate-50/95 via-slate-50/90 to-slate-50/80 dark:from-dark-950/95 dark:via-dark-950/90 dark:to-dark-950/80 backdrop-blur-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-1">
              {navItems.map((item) => {
                const isActive =
                  activeSection ===
                  (item.path === "/" ? "hero" : item.path.replace("/", ""));
                return (
                  <motion.div
                    key={item.path}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block w-full text-left px-5 py-3 rounded-xl text-base font-semibold transition-all duration-150 ${
                        isActive
                          ? "bg-gradient-to-r from-blue-500/20 to-cyan-500/10 dark:from-blue-500/30 dark:to-cyan-500/20 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-400/30"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100/50 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
