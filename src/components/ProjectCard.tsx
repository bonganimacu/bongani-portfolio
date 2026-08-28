import { motion } from 'framer-motion';
import { ExternalLink, Github, Layers } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    'data-analytics': 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400',
    'software-development': 'bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400',
    'automation': 'bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400',
    'business-systems': 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  };

  const categoryLabels: Record<string, string> = {
    'data-analytics': 'Data Analytics',
    'software-development': 'Software Development',
    'automation': 'Automation',
    'business-systems': 'Business Systems',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-primary-900/10 transition-all duration-300"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/10 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary-400 rounded-full" />
          <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-primary-400 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-primary-400 rounded-lg rotate-12" />
        </div>
        <Layers className="w-12 h-12 text-primary-300 dark:text-primary-700" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category]}`}>
            {categoryLabels[project.category]}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-text-primary dark:text-white mb-2">
          {project.name}
        </h3>
        <p className="text-text-secondary dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="space-y-3 mb-5">
          <div>
            <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider">Problem</span>
            <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{project.problem}</p>
          </div>
          <div>
            <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider">Solution</span>
            <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">{project.solution}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-md text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-white/5 text-text-primary dark:text-white text-sm font-medium hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            >
              <Github className="w-4 h-4" />
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-800 text-white text-sm font-medium hover:bg-primary-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
