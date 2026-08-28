import { motion } from 'framer-motion';
import { Award, Calendar, Hash, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  url?: string;
}

export function CertificationCard({ title, issuer, date, credentialId, url }: CertificationCardProps) {
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
          <Award className="w-7 h-7 text-primary-700 dark:text-primary-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-text-primary dark:text-white mb-1">
            {title}
          </h3>
          <p className="text-primary-700 dark:text-primary-400 font-medium mb-4">
            {issuer}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>Earned: {date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-text-secondary dark:text-gray-400">
              <Hash className="w-4 h-4 text-primary-500" />
              <span>ID: {credentialId}</span>
            </div>
          </div>

          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary-700 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Verify Credential
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
