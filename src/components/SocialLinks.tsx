import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/config';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export function SocialLinks({ className = '', iconSize = 20 }: SocialLinksProps) {
  const links = [
    {
      icon: Github,
      href: PERSONAL_INFO.github,
      label: 'GitHub',
      color: 'hover:text-gray-900 dark:hover:text-white',
    },
    {
      icon: Linkedin,
      href: PERSONAL_INFO.linkedin,
      label: 'LinkedIn',
      color: 'hover:text-[#0A66C2]',
    },
    {
      icon: Mail,
      href: `mailto:${PERSONAL_INFO.email}`,
      label: 'Email',
      color: 'hover:text-primary-600',
    },
    {
      icon: Phone,
      href: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
      label: 'Phone',
      color: 'hover:text-primary-600',
    },
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`p-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-text-secondary dark:text-gray-400 ${link.color} transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-white/10`}
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
