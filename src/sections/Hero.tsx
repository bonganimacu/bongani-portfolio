import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Download, ArrowDown, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/config';
import { SocialLinks } from '@/components/SocialLinks';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300/20 dark:bg-primary-800/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/10 dark:bg-primary-900/5 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-400 text-sm font-medium mb-8"
          >
            <Briefcase className="w-4 h-4" />
            Open to Opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary dark:text-white mb-4 tracking-tight"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-primary-700 dark:text-primary-400 font-medium mb-4"
          >
            {PERSONAL_INFO.title}
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mb-6 max-w-4xl mx-auto"
          >
            Turning Data Into Insights. Technology Into Solutions.
          </motion.h2>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-base sm:text-lg text-text-secondary dark:text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Junior Data Analyst and technology professional specialising in data analytics, 
            business intelligence, automation and digital solutions.
          </motion.p>

          {/* Location & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-sm text-text-secondary dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-500" />
              {PERSONAL_INFO.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary-500" />
              {PERSONAL_INFO.email}
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary-500" />
              {PERSONAL_INFO.phone}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-3.5 rounded-xl bg-primary-800 text-white font-medium hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            >
              View My Work
            </button>
            <a
              href={PERSONAL_INFO.cvPath}
              download
              className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-text-primary dark:text-white font-medium hover:border-primary-400 dark:hover:border-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-3.5 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border text-text-primary dark:text-white font-medium hover:border-primary-400 dark:hover:border-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection('#about')}
            className="flex flex-col items-center gap-2 text-text-muted dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            aria-label="Scroll to about section"
          >
            <span className="text-xs font-medium">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
