import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import GlassCard from '../components/GlassCard';
import { FiGlobe, FiLayout, FiServer, FiSmartphone, FiSliders } from 'react-icons/fi';

const serviceIcons = [
  <FiGlobe className="w-8 h-8 text-blue-500" />,
  <FiLayout className="w-8 h-8 text-purple-500" />,
  <FiServer className="w-8 h-8 text-cyan-500" />,
  <FiSmartphone className="w-8 h-8 text-indigo-500" />,
  <FiSliders className="w-8 h-8 text-pink-500" />,
];

export default function Services() {
  const { services } = portfolioData;

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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 14,
      },
    },
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-slate-900/5 dark:bg-slate-950/5">
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
            My <span className="text-accent">Services</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col items-start space-y-4" hoverable={true}>
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200/50 dark:border-white/5">
                  {serviceIcons[idx % serviceIcons.length]}
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white dark:text-slate-100">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
