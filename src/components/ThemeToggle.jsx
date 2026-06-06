import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      root.style.colorScheme = 'dark';
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-slate-200 bg-white/5 dark:bg-white/5 light:bg-slate-100/80 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200/80 transition-colors flex items-center justify-center text-slate-400 hover:text-slate-100 dark:hover:text-slate-100 light:text-slate-600 light:hover:text-slate-900 overflow-hidden"
      aria-label="Toggle Theme"
      id="theme-toggle"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: 20, opacity: 0, rotate: 45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -20, opacity: 0, rotate: -45 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? (
            <FiSun className="w-5 h-5 text-yellow-400" />
          ) : (
            <FiMoon className="w-5 h-5 text-indigo-600" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
