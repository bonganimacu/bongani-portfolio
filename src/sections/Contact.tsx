import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ContactForm } from '@/components/ContactForm';
import { PERSONAL_INFO } from '@/data/config';

export function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Let&apos;s Build Something That Makes an Impact.
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Open to opportunities in Data Analytics, Business Intelligence, RPA,
            Automation and Technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6 mb-8">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-500">Email</p>
                  <p className="text-text-primary dark:text-white font-medium">{PERSONAL_INFO.email}</p>
                </div>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-500">Phone</p>
                  <p className="text-text-primary dark:text-white font-medium">{PERSONAL_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border">
                <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-700 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-text-muted dark:text-gray-500">Location</p>
                  <p className="text-text-primary dark:text-white font-medium">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors text-text-primary dark:text-white font-medium"
                >
                  <Linkedin className="w-5 h-5 text-[#0A66C2]" />
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border hover:border-primary-300 dark:hover:border-primary-700 transition-colors text-text-primary dark:text-white font-medium"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>

              <a
                href={PERSONAL_INFO.cvPath}
                download
                className="flex items-center justify-center gap-2 w-full p-4 rounded-xl bg-primary-800 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                Download My CV
              </a>
            </div>
          </motion.div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
