import { motion } from 'framer-motion';
import { Github, Star, Loader2, AlertCircle } from 'lucide-react';
import { SectionWrapper } from '@/components/SectionWrapper';
import { useGitHub } from '@/hooks/useGitHub';
import { GITHUB_USERNAME } from '@/data/config';

export function GitHubRepos() {
  const { repos, loading, error } = useGitHub();

  return (
    <SectionWrapper id="github">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-primary-700 dark:text-primary-400 uppercase tracking-wider">
            Open Source
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary dark:text-white mt-2 mb-4">
            GitHub Repositories
          </h2>
          <p className="text-text-secondary dark:text-gray-400 max-w-2xl mx-auto">
            Featured repositories from{' '}
            <span className="font-mono text-primary-700 dark:text-primary-400">@{GITHUB_USERNAME}</span>
          </p>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center py-16">
            <Loader2 className="w-6 h-6 text-primary-500 animate-spin" />
            <span className="ml-3 text-sm text-text-secondary dark:text-gray-400">Loading repositories...</span>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center gap-2 py-16 text-text-secondary dark:text-gray-400">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <span>{error}</span>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group block bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border rounded-2xl p-6 hover:shadow-lg dark:hover:shadow-primary-900/10 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <Github className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <div className="flex items-center gap-3 text-sm text-text-muted dark:text-gray-500">
                    {repo.stars > 0 && (
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" />
                        {repo.stars}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-text-primary dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">
                  {repo.name}
                </h3>
                <p className="text-sm text-text-secondary dark:text-gray-400 line-clamp-2 mb-4">
                  {repo.description || 'No description available'}
                </p>
                {repo.language && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400">
                    <span className="w-2 h-2 rounded-full bg-primary-500" />
                    {repo.language}
                  </span>
                )}
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
