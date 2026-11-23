export type ProjectCategory = 'all' | 'residential' | 'commercial' | 'interior' | 'renovation';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  area: string;
  duration: string;
  client: string;
  description: string;
  challenge: string;
  solution: string;
  materials: string[];
  imageUrl: string;
  galleryImages: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  location: string;
  project: string;
  comment: string;
  rating: number;
  avatarUrl: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}
