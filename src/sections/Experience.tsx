import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { TimelineItem } from '@/components/TimelineItem';
import { experienceItems } from '@/data/projects';

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Experience
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Professional Journey
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Hands-on experience in a technology-focused environment with exposure to data 
            analytics, cloud computing, RPA and project management.
          </p>
        </motion.div>

        <div className="space-y-8 lg:space-y-0">
          {experienceItems.map((item, index) => (
            <TimelineItem key={item.company} experience={item} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
