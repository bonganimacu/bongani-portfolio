export const PERSONAL_INFO = {
  name: 'Bongani Xolani Macu',
  title: 'Junior Data Analyst | Business Intelligence | Automation',
  location: 'Midrand, Gauteng, South Africa',
  email: 'bonganimacu11@gmail.com',
  phone: '063 396 3117',
  github: 'https://github.com/bonganimacu',
  linkedin: 'https://linkedin.com/in/bongani-macu',
  cvPath: '/Bongani-Xolani-Macu-CV.pdf',
} as const;

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certification', href: '#certification' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'bonganimacu';
