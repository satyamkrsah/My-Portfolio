// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { FiArrowUp } from 'react-icons/fi';
// import { portfolioData } from '../data/portfolioData';
// import { useNavigate } from 'react-router-dom';

// export default function Footer() {
//   const navigate = useNavigate();
//   const { name, github, linkedin, email } = portfolioData.personalInfo;

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   };

//   const handleNavClick = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       const offset = 80;
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = element.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset;
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <footer className="border-t border-slate-200/50 dark:border-white/5 py-12 relative overflow-hidden bg-slate-100/30 dark:bg-slate-950/20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Brand Credit */}
//         <div className="text-center md:text-left space-y-2">
//           <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
//             Satyam.dev
//           </span>
//           <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
//             Designing & engineering world-class web experiences.
//           </p>
//         </div>

//         {/* Quick Navigation and Social icons */}
//         <div className="flex flex-col items-center gap-4">
//           <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
//             <button onClick={() => handleNavClick('hero')} className="hover:text-blue-500 transition-colors">Home</button>
//             <button onClick={() => handleNavClick('about')} className="hover:text-blue-500 transition-colors">About</button>
//             <button onClick={() => handleNavClick('projects')} className="hover:text-blue-500 transition-colors">Projects</button>
//             <button onClick={() => handleNavClick('contact')} className="hover:text-blue-500 transition-colors">Contact</button>
//           </div>

//           <div className="flex items-center space-x-4">
//             <a
//               href={github}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               aria-label="GitHub Profile Link"
//             >
//               <FaGithub className="w-5 h-5" />
//             </a>
//             <a
//               href={linkedin}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               aria-label="LinkedIn Profile Link"
//             >
//               <FaLinkedin className="w-5 h-5" />
//             </a>
//             <a
//               href={`mailto:${email}`}
//               className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
//               aria-label="Email Link"
//             >
//               <FaEnvelope className="w-5 h-5" />
//             </a>
//           </div>
//         </div>

//         {/* Copywrite and top scrolls */}
//         <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
//           <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
//           <button
//             onClick={scrollToTop}
//             className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-500 dark:text-slate-400 hover:text-white dark:hover:text-slate-100 transition-colors"
//             aria-label="Scroll back to top of the page"
//           >
//             <span>Back to top</span>
//             <FiArrowUp className="w-3.5 h-3.5" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name, github, linkedin, email } = portfolioData.personalInfo;
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // ✅ React Router navigation
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 py-12 relative overflow-hidden bg-slate-100/30 dark:bg-slate-950/20">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Brand */}
        <div className="text-center md:text-left space-y-2">
          <span className="text-xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            {name}
          </span>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
            Designing & engineering world-class web experiences.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-4">
          
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-slate-500 dark:text-slate-400">
            <button onClick={() => handleNavClick('/')} className="hover:text-blue-500 transition-colors">
              Home
            </button>

            <button onClick={() => handleNavClick('/about')} className="hover:text-blue-500 transition-colors">
              About
            </button>

            <button onClick={() => handleNavClick('/projects')} className="hover:text-blue-500 transition-colors">
              Projects
            </button>

            <button onClick={() => handleNavClick('/contact')} className="hover:text-blue-500 transition-colors">
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>

            <a
              href={`mailto:${email}`}
              className="text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="w-5 h-5" />
            </a>
          </div>

        </div>

        {/* Copyright + Top button */}
        <div className="flex flex-col items-center md:items-end gap-2 text-xs text-slate-500 dark:text-slate-400 font-semibold">
          
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 transition-colors"
          >
            <span>Back to top</span>
            <FiArrowUp className="w-3.5 h-3.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}