import { motion } from 'framer-motion';
import { Building2, Calendar } from 'lucide-react';
import type { ExperienceItem } from '@/types';

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
}

export function TimelineItem({ experience, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 lg:pl-0"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-primary-200 dark:bg-primary-800 lg:left-1/2 lg:-translate-x-px" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-primary-500 border-4 border-light-bg dark:border-dark-bg lg:left-1/2 lg:-translate-x-1.5" />

      <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'lg:text-right'}`}>
        <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
          <div className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-primary-900/10 transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-700 dark:text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-text-primary dark:text-white">
                  {experience.company}
                </h3>
                <p className="text-sm text-primary-700 dark:text-primary-400 font-medium">
                  {experience.role}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 text-text-muted dark:text-gray-500">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{experience.duration}</span>
            </div>

            <ul className="space-y-2">
              {experience.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-text-secondary dark:text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
