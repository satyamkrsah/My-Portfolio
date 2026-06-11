import Projects from '../sections/Projects';
import Navbar from '../components/Navbar';
import FloatingParticles from '../components/FloatingParticles';
import ScrollToTop from '../components/ScrollToTop';
// import MouseCursor from '../components/MouseCursor';
import Footer from '../sections/Footer';

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen text-slate-800 dark:text-slate-100 bg-slate-50 dark:bg-dark-950 transition-colors duration-300">
      {/* <MouseCursor /> */}
      <FloatingParticles />
      <Navbar />
      <main className="relative z-10 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Projects />
        </div>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
