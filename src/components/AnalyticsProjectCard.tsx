import { motion } from 'framer-motion';
import { Database, Sparkles, ArrowDown, Lightbulb } from 'lucide-react';
import type { AnalyticsProject } from '@/types';

interface AnalyticsProjectCardProps {
  project: AnalyticsProject;
  index: number;
}

export function AnalyticsProjectCard({ project, index }: AnalyticsProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 lg:p-8 hover:shadow-lg dark:hover:shadow-primary-900/10 transition-all duration-300"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
          <Database className="w-6 h-6 text-primary-700 dark:text-primary-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-text-primary dark:text-white">
            {project.name}
          </h3>
          <p className="text-sm text-text-secondary dark:text-gray-400 mt-1">
            {project.dataset}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-semibold text-text-primary dark:text-white">Business Question</span>
        </div>
        <p className="text-sm text-text-secondary dark:text-gray-400 pl-6">
          {project.businessQuestion}
        </p>
      </div>

      {/* Process Flow */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider mb-3 block">Process</span>
        <div className="flex flex-wrap items-center gap-2">
          {project.process.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 text-xs font-medium">
                {step}
              </span>
              {i < project.process.length - 1 && (
                <ArrowDown className="w-3 h-3 text-primary-400 hidden sm:block" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-text-muted dark:text-gray-500 uppercase tracking-wider mb-3 block">Tools</span>
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-2 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-gray-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Insights */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Lightbulb className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-semibold text-text-primary dark:text-white">Key Insights</span>
        </div>
        <ul className="space-y-2">
          {project.insights.map((insight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-text-secondary dark:text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0" />
              {insight}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
