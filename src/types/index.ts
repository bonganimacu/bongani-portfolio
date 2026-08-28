export interface Project {
  id: string;
  name: string;
  category: 'data-analytics' | 'software-development' | 'automation' | 'business-systems';
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

export interface AnalyticsProject {
  id: string;
  name: string;
  dataset: string;
  businessQuestion: string;
  process: string[];
  tools: string[];
  insights: string[];
  image?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stars: number;
  url: string;
}

export interface WeatherData {
  city: string;
  country: string;
  temp: number;
  feelsLike: number;
  condition: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  localTime: string;
}

export interface NavItem {
  label: string;
  href: string;
}
