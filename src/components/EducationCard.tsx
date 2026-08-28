import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

interface EducationCardProps {
  institution: string;
  degree: string;
  year: string;
  level: string;
  credits: string;
  areas: string[];
}

export function EducationCard({ institution, degree, year, level, credits, areas }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 lg:p-8 hover:shadow-lg dark:hover:shadow-primary-900/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
          <GraduationCap className="w-7 h-7 text-primary-700 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-primary dark:text-white mb-1">
            {institution}
          </h3>
          <p className="text-primary-700 dark:text-primary-400 font-medium mb-4">
            {degree}
          </p>

          <div className="grid sm:grid-cols-3 gap-3 mb-5">
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>Completed {year}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Award className="w-4 h-4 text-primary-500" />
              <span>{level}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <BookOpen className="w-4 h-4 text-primary-500" />
              <span>{credits}</span>
            </div>
          </div>

          <div>
            <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider mb-2 block">
              Relevant Areas
            </span>
            <div className="flex flex-wrap gap-2">
              {areas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-gray-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
