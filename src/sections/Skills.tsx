import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { SkillCard } from '@/components/SkillCard';
import { skillCategories } from '@/data/projects';

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Technical Expertise
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning data analytics, automation, cloud computing, 
            programming and design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.name}
              category={category.name}
              skills={category.skills}
              icon={category.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
