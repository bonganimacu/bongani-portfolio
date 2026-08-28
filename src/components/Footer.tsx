import { Heart, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/config';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold text-text-primary dark:text-white mb-1">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-sm text-text-secondary dark:text-gray-400 mb-2">
              {PERSONAL_INFO.title}
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-text-muted dark:text-gray-500">
              <MapPin className="w-4 h-4" />
              {PERSONAL_INFO.location}
            </div>
          </div>

          <SocialLinks />

          <div className="text-center lg:text-right">
            <p className="text-sm text-text-muted dark:text-gray-500 flex items-center justify-center lg:justify-end gap-1">
              Built with <Heart className="w-3 h-3 text-primary-500 fill-primary-500" /> using React & Tailwind
            </p>
            <p className="text-xs text-text-muted dark:text-gray-600 mt-1">
              &copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
