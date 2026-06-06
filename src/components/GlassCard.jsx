import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', delay = 0, hoverable = true, ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card rounded-3xl p-6 md:p-8 ${hoverable ? 'hover:-translate-y-1' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
