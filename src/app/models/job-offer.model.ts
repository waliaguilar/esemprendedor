export interface JobOffer {
  id: number;
  title: string;
  company: string;
  category: string;
  location: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  description: string;
  contact: string;
  featured: boolean;
  publishedAt: string;
}

export interface CreateJobOffer {
  title: string;
  company: string;
  category: string;
  location: string;
  type: 'full-time' | 'part-time' | 'freelance' | 'internship';
  description: string;
  contact: string;
  featured: boolean;
}

export interface UpdateJobOffer extends CreateJobOffer {}
