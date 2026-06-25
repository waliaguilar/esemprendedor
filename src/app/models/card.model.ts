export interface Card {
  id: number;
  sectionId: number;
  icon: string;
  chip: string;
  name: string;
  service: string;
  contact: string;
  featured: boolean;
  backgroundImage?: string;
  keywords?: string;
}

export interface CreateCard {
  sectionId: number;
  icon: string;
  chip: string;
  name: string;
  service: string;
  contact: string;
  featured: boolean;
  backgroundImage?: string;
  keywords?: string;
}

export interface UpdateCard {
  sectionId: number;
  icon: string;
  chip: string;
  name: string;
  service: string;
  contact: string;
  featured: boolean;
  backgroundImage?: string;
  keywords?: string;
}