import { motion } from 'framer-motion';
import { BarChart3, Bot, Cloud, Code2, Wrench } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Wrench,
};

interface SkillCardProps {
  category: string;
  skills: string[];
  icon: string;
  index: number;
}

export function SkillCard({ category, skills, icon, index }: SkillCardProps) {
  const IconComponent = iconMap[icon] || Wrench;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-primary-900/10 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
          <IconComponent className="w-5 h-5 text-primary-700 dark:text-primary-400" />
        </div>
        <h3 className="text-lg font-semibold text-text-primary dark:text-white">
          {category}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-gray-300 border border-transparent hover:border-primary-300 dark:hover:border-primary-700 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
