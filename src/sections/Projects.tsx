import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '@/components/SectionWrapper';
import { ProjectCard } from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'data-analytics', label: 'Data Analytics' },
  { key: 'software-development', label: 'Software Development' },
  { key: 'automation', label: 'Automation' },
  { key: 'business-systems', label: 'Business Systems' },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Projects
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            Featured Work
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            A selection of projects demonstrating expertise in data analytics,
            software development, automation and business systems.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.key
                  ? 'bg-primary-800 text-white'
                  : 'bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
