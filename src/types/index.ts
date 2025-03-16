// Common interfaces and types for the portfolio

// Social media links interface
export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin';
  url: string;
}

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Skill interface
export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

// Project interface
export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

// Experience interface
export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

// Education interface
export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

// Service interface
export interface Service {
  icon: string;
  title: string;
  description: string;
}

// Theme mode type
export type ThemeMode = 'light' | 'dark';

// Navigation item interface
export interface NavItem {
  text: string;
  path: string;
}