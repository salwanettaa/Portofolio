export interface Project {
  id: string;
  name: string;
  category: string;
  purposeHook: string;
  bullets: string[];
  techStack: string[];
  cybersecurityNote?: string;
  securityImplementation?: string[];
  features?: string[];
  link?: string;
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  domains: ('web' | 'cybersecurity' | 'iot' | 'mobile')[];
  images?: string[];
  role?: string;
}

export interface EducationItem {
  id: string;
  source: string;
  duration: string;
  degree: string;
  gpa?: string;
  highlights: string[];
  themeColor: string; // e.g. pink, blue, yellow, teal
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  colorScheme: {
    bg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    accent: string;
  };
  skills: { name: string; level: number; info?: string }[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  duration: string;
  bullets: string[];
  images?: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  engagement: 'SOLO' | 'TEAM';
  teamName?: string; // e.g. "SKIBIDITOILET TEAM"
  category: string;
  timeline: string;
  context: string;
  steps: {
    title: string;
    description: string;
  }[];
}
