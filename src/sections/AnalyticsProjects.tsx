import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { AnalyticsProjectCard } from '@/components/AnalyticsProjectCard';
import { analyticsProjects } from '@/data/projects';

export function AnalyticsProjects() {
  return (
    <SectionWrapper id="analytics" className="bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Case Studies
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Data Analytics Projects
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end analytics workflows from raw data to business decision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {analyticsProjects.map((project, index) => (
            <AnalyticsProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
